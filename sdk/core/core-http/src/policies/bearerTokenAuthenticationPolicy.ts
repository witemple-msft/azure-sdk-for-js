// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, GetTokenOptions, AccessToken } from "@azure/core-auth";
import {
  BaseRequestPolicy,
  RequestPolicy,
  RequestPolicyOptions,
  RequestPolicyFactory
} from "../policies/requestPolicy";
import { Constants } from "../util/constants";
import { HttpOperationResponse } from "../httpOperationResponse";
import { HttpHeaders } from "../httpHeaders";
import { WebResourceLike } from "../webResource";
import { AccessTokenCache, ExpiringAccessTokenCache } from "../credentials/accessTokenCache";
import { AccessTokenRefresher } from "../credentials/accessTokenRefresher";

/**
 * If the token is within this many milliseconds of expiring, a refresh will be
 * considered mandatory because the token is at risk of expiring before the
 * request is sent (this can only happen if the refresh has failed for over
 * REFRESH_WINDOW - MANDATORY_REFRESH_WINDOW millis!!).
 */
const MANDATORY_REFRESH_WINDOW: number = 2000;

/**
 * The automated token refresh will only start to happen at the
 * expiration date minus the value of timeBetweenRefreshAttemptsInMs,
 * which is by default 30 seconds.
 */
const REFRESH_WINDOW = 30000;

/**
 * Creates a new BearerTokenAuthenticationPolicy factory.
 *
 * @param credential - The TokenCredential implementation that can supply the bearer token.
 * @param scopes - The scopes for which the bearer token applies.
 */
export function bearerTokenAuthenticationPolicy(
  credential: TokenCredential,
  scopes: string | string[]
): RequestPolicyFactory {
  const tokenCache: AccessTokenCache = new ExpiringAccessTokenCache(MANDATORY_REFRESH_WINDOW);
  const tokenRefresher = new AccessTokenRefresher(credential, scopes, REFRESH_WINDOW);

  return {
    create: (nextPolicy: RequestPolicy, options: RequestPolicyOptions) => {
      return new BearerTokenAuthenticationPolicy(nextPolicy, options, tokenCache, tokenRefresher);
    }
  };
}

/**
 *
 * Provides a RequestPolicy that can request a token from a TokenCredential
 * implementation and then apply it to the Authorization header of a request
 * as a Bearer token.
 *
 */
export class BearerTokenAuthenticationPolicy extends BaseRequestPolicy {
  /**
   * Creates a new BearerTokenAuthenticationPolicy object.
   *
   * @param nextPolicy - The next RequestPolicy in the request pipeline.
   * @param options - Options for this RequestPolicy.
   * @param credential - The TokenCredential implementation that can supply the bearer token.
   * @param scopes - The scopes for which the bearer token applies.
   * @param tokenCache - The cache for the most recent AccessToken returned from the TokenCredential.
   */
  constructor(
    nextPolicy: RequestPolicy,
    options: RequestPolicyOptions,
    private tokenCache: AccessTokenCache,
    private tokenRefresher: AccessTokenRefresher
  ) {
    super(nextPolicy, options);
  }

  /**
   * Applies the Bearer token to the request through the Authorization header.
   */
  public async sendRequest(webResource: WebResourceLike): Promise<HttpOperationResponse> {
    if (!webResource.headers) webResource.headers = new HttpHeaders();
    const token = await this.getToken({
      abortSignal: webResource.abortSignal,
      tracingOptions: {
        spanOptions: webResource.spanOptions
      }
    });
    webResource.headers.set(Constants.HeaderConstants.AUTHORIZATION, `Bearer ${token}`);
    return this._nextPolicy.sendRequest(webResource);
  }

  /**
   * Triggers a refresh of the underlying token and inserts it into the token cache.
   */
  private async refreshAndCacheToken(options: GetTokenOptions): Promise<AccessToken | undefined> {
    const token = await this.tokenRefresher.refresh(options);
    this.tokenCache.setCachedToken(token);
    return token;
  }

  private async getToken(options: GetTokenOptions): Promise<string | undefined> {
    // The cached token expires just before the actual token's expiration date,
    // so if the token cache produces undefined for any reason, we MUST wait for
    // a new token.
    const token = this.tokenCache.getCachedToken() ?? (await this.refreshAndCacheToken(options));

    if (this.tokenRefresher.isReady()) {
      // We do _NOT_ await this here, only queue it to refresh the token later.
      this.refreshAndCacheToken(options);
    }

    return token?.token;
  }
}
