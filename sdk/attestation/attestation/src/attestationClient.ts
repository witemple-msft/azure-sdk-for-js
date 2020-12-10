/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  Policy,
  PolicyCertificates,
  Attestation,
  SigningCertificates,
  MetadataConfiguration
} from "./operations";
import { AttestationClientContext } from "./attestationClientContext";
import { AttestationClientOptionalParams } from "./models";

export class AttestationClient extends AttestationClientContext {
  /**
   * Initializes a new instance of the AttestationClient class.
   * @param instanceUrl The attestation instance base URI, for example https://mytenant.attest.azure.net.
   * @param options The parameter options
   */
  constructor(instanceUrl: string, options?: AttestationClientOptionalParams) {
    super(instanceUrl, options);
    this.policy = new Policy(this);
    this.policyCertificates = new PolicyCertificates(this);
    this.attestation = new Attestation(this);
    this.signingCertificates = new SigningCertificates(this);
    this.metadataConfiguration = new MetadataConfiguration(this);
  }

  policy: Policy;
  policyCertificates: PolicyCertificates;
  attestation: Attestation;
  signingCertificates: SigningCertificates;
  metadataConfiguration: MetadataConfiguration;
}