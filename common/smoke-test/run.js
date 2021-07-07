// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require("fs");
const path = require("path");

const { promisify } = require("util");

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

/**
 * Walks a directory and its children recursively to enumerate all the descendent
 * files of a single directory.
 *
 * @param {string} root the directory to enumerate the descendents of
 * @returns {string[]} a flat array of all file descendents of the directory
 */
async function walk(root) {
  const children = await readdir(root);

  const descendents = children.map((name) => path.resolve(name)).map(async (name) => {
    const stats = await stat(name);
    return stats.isDirectory() ? walk(name) : [name];
  });

  return (await Promise.all(descendents)).reduce((cur, next) => [...cur, ...next]);
}

// Runs smoke tests from manifest
async function main() {
  // Read manifest
  const manifest = require("./run-manifest.json");

  let exitCode = 0;
  let samplesToExecute = [];
  let failures = [];

  // Bring all samples and includes into memory
  for (let entry of manifest) {
    console.log(`Importing samples for ${entry.Name}...`);

    // Read configuration from package.json's //sampleConfiguration field
    const packageJson = require(`${entry.PackageDirectory}/package.json`);
    const smokeTestConfig = packageJson["//sampleConfiguration"] || {};

    if (smokeTestConfig.skipFolder) {
      continue;
    }

    const skipFiles = smokeTestConfig.skip || [];
    const jsFiles = (await walk(entry.SamplesDirectory))
      .filter((name) => name.endsWith(".js"))
      .filter((name) => !skipFiles.some((entry) => name.endsWith(entry)));

    for (let targetSample of jsFiles) {
      const sampleModule = require(`${entry.SamplesDirectory}/${targetSample}`);
      samplesToExecute.push({
        entrypoint: sampleModule.main,
        name: entry.Name,
        sampleFile: targetSample,
        directory: entry.SamplesDirectory
      });
    }
  }

  // Run all samples
  for (let sample of samplesToExecute) {
    let result = await executeSample(sample);

    if (!result.success) {
      exitCode = 1;
      failures.push({
        sample,
        result
      });
    }
  }

  if (failures.length > 0) {
    console.log("SMOKE TEST FAILURES");
    for (let failure of failures) {
      console.error(
        `Test Failed - Package: ${failure.sample.name} - Sample File:${failure.sample.sampleFile}`
      );
      console.log(`Exception: ${failure.result.exception}`);
      console.log(failure);
    }
  }

  // TODO: Don't do it this way if possible?
  process.exit(exitCode);
}

async function executeSample(sample) {
  console.log("============== SMOKE TESTS ==============");
  console.log(`Sample Name: ${sample.name}`);
  console.log(`Sample File: ${sample.sampleFile}`);

  let result = {
    success: true
  };

  let currentDir = process.cwd();

  try {
    // Set the process directory to the sample's directory because some samples
    // use file paths relative to the sample's directory.
    process.chdir(sample.directory);

    await sample.entrypoint();
  } catch (exception) {
    console.log("FAILURE");
    result = {
      success: false,
      exception
    };
  } finally {
    // Reset the working directory to the root directory after execution
    process.chdir(currentDir);
  }

  console.log("=========================================");

  return result;
}

// If command line parameter `--devops-logging` is set, then have console.error
// logs error messages.
if (process.argv[2] == "--devops-logging") {
  const oldConsoleError = console.error;
  console.error = function() {
    // Mutate arguments to use new warning format
    arguments[0] = `##vso[task.logissue type=error]${arguments[0]}`;
    oldConsoleError.call(this, ...arguments);
  };
}

main().catch((err) => {
  console.log("[smoke-tests] Error:", err);
  process.exit(1);
});
