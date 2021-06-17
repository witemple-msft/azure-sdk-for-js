// Copyright (c) Microsoft Corporation
// Licensed under the MIT license.

/**
 * In this sample, we use the extension API to provide an implementation of
 * `VisualStudioCodeCredential` to the `@azure/identity` package, and we use it
 * through the `DefaultAzureCredential` class.  Without the extension, the
 * credential will simply throw a `CredentialNotFoundError`, and the
 * `DefaultAzureCredential` will use a different credential, if one is
 * available.
 *
 * @summary loads the `VisualStudioCodeCredential` extension and uses it through
 * `DefaultAzureCredential`
 */

import { useIdentityExtension, DefaultAzureCredential } from "@azure/identity";

// The extension is the package's default export, so you may import and use it
// as any name you like, and simply pass it to `useIdentityExtension`.
import vsCodeExtension from "@azure/identity-vscode";
useIdentityExtension(vsCodeExtension);

export async function main() {
  const credential = new DefaultAzureCredential();

  // This is the scope we will use to get a token from the AAD token endpoint.
  // By default, we'll use the Microsoft Graph scope as an example, but when
  // you use the credential with an Azure SDK package, it will configure the
  // scope for you automatically.
  const scope = process.env.AAD_TEST_SCOPE ?? "https://graph.microsoft.com/.default";

  console.log(await credential.getToken(scope));
}

main().catch((error) => {
  console.error("The sample encountered an error:", error);
  process.exit(1);
});