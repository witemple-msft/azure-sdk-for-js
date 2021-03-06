/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { Jobs, Providers, Storage, Quotas } from "./operations";
import { QuantumJobClientContext } from "./quantumJobClientContext";
import { QuantumJobClientOptionalParams } from "./models";

export class QuantumJobClient extends QuantumJobClientContext {
  /**
   * Initializes a new instance of the QuantumJobClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g.
   *                       00000000-0000-0000-0000-000000000000)
   * @param resourceGroupName Name of an Azure resource group.
   * @param workspaceName Name of the workspace.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    resourceGroupName: string,
    workspaceName: string,
    options?: QuantumJobClientOptionalParams
  ) {
    super(credentials, subscriptionId, resourceGroupName, workspaceName, options);
    this.jobs = new Jobs(this);
    this.providers = new Providers(this);
    this.storage = new Storage(this);
    this.quotas = new Quotas(this);
  }

  jobs: Jobs;
  providers: Providers;
  storage: Storage;
  quotas: Quotas;
}
