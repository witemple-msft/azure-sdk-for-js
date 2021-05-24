// Copyright (c) Microsoft Corporation
// Licensed under the MIT license

/**
 * Parameters that enable token cache persistence in the Identity credentials.
 */
export interface TokenCachePersistenceOptions {
  /**
   * Unique identifier for the persistent token cache.
   *
   * Based on this identifier, the persistence file will be located in any of the following places:
   * - Darwin: '/Users/user/.IdentityService/<name>'
   * - Windows 8: 'C:\Users\user\AppData\Local\.IdentityService\<name>'
   * - Windows XP: 'C:\Documents and Settings\user\Application Data\Local\.IdentityService\<name>'
   * - Linux: '/home/user/.IdentityService/<name>'
   */
  name?: string;
  /**
   * If set to true, the cache will be stored without encryption if no OS level user encryption is available.
   * When set to false, the PersistentTokenCache will throw an error if no OS level user encryption is available.
   */
  allowUnencryptedStorage?: boolean;
}
