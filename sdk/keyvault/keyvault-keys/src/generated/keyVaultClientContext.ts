/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { ApiVersion73Preview, KeyVaultClientOptionalParams } from "./models";

const packageName = "@azure/keyvault-keys";
export const packageVersion = "4.3.0-beta.1";

export class KeyVaultClientContext extends coreHttp.ServiceClient {
  apiVersion: ApiVersion73Preview;

  /**
   * Initializes a new instance of the KeyVaultClientContext class.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(apiVersion: ApiVersion73Preview, options?: KeyVaultClientOptionalParams) {
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    const defaultUserAgent = `azsdk-js-${packageName.replace(
      "@azure/",
      ""
    )}/${packageVersion} ${coreHttp.getDefaultUserAgentValue()}`;

    super(undefined, {
      ...options,
      userAgent: options.userAgent
        ? `${options.userAgent} ${defaultUserAgent}`
        : `${defaultUserAgent}`
    });

    this.requestContentType = "application/json; charset=utf-8";
    this.baseUri = options.endpoint || "{vaultBaseUrl}";
    // Parameter assignments
    this.apiVersion = apiVersion;
  }
}
