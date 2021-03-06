/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { HealthbotClientContext } from "./healthbotClientContext";


class HealthbotClient extends HealthbotClientContext {
  // Operation groups
  bots: operations.Bots;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the HealthbotClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId Azure Subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.HealthbotClientOptions) {
    super(credentials, subscriptionId, options);
    this.bots = new operations.Bots(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  HealthbotClient,
  HealthbotClientContext,
  Models as HealthbotModels,
  Mappers as HealthbotMappers
};
export * from "./operations";
