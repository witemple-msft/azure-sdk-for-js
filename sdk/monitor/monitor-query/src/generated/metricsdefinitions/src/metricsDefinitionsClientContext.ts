/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  ApiVersion20170501Preview,
  MetricsDefinitionsClientOptionalParams
} from "./models";

const packageName = "monitor-metrics-definitions";
const packageVersion = "1.0.0-beta.2";

/** @hidden */
export class MetricsDefinitionsClientContext extends coreHttp.ServiceClient {
  $host: string;
  apiVersion: ApiVersion20170501Preview;

  /**
   * Initializes a new instance of the MetricsDefinitionsClientContext class.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    apiVersion: ApiVersion20170501Preview,
    options?: MetricsDefinitionsClientOptionalParams
  ) {
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "https://management.azure.com";

    // Parameter assignments
    this.apiVersion = apiVersion;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
  }
}
