/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Documents } from "./operations";
import { SearchClientContext } from "./searchClientContext";
import { SearchClientOptionalParams, ApiVersion20200630 } from "./models";

/** @internal */
export class SearchClient extends SearchClientContext {
  /**
   * Initializes a new instance of the SearchClient class.
   * @param endpoint The endpoint URL of the search service.
   * @param indexName The name of the index.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    indexName: string,
    apiVersion: ApiVersion20200630,
    options?: SearchClientOptionalParams
  ) {
    super(endpoint, indexName, apiVersion, options);
    this.documents = new Documents(this);
  }

  documents: Documents;
}
