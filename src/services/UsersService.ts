/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { email } from '../models/email';
import type { gpg_key } from '../models/gpg_key';
import type { hovercard } from '../models/hovercard';
import type { key } from '../models/key';
import type { key_simple } from '../models/key_simple';
import type { private_user } from '../models/private_user';
import type { public_user } from '../models/public_user';
import type { simple_user } from '../models/simple_user';
import type { social_account } from '../models/social_account';
import type { ssh_signing_key } from '../models/ssh_signing_key';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Get the authenticated user
     * If the authenticated user is authenticated with an OAuth token with the `user` scope, then the response lists public and private profile information.
     *
     * If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.
     * @returns any Response
     * @throws ApiError
     */
    public static usersGetAuthenticated(): CancelablePromise<(private_user | public_user)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * Update the authenticated user
     * **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.
     * @param requestBody
     * @returns private_user Response
     * @throws ApiError
     */
    public static usersUpdateAuthenticated(
        requestBody?: {
            /**
             * The new name of the user.
             */
            name?: string;
            /**
             * The publicly visible email address of the user.
             */
            email?: string;
            /**
             * The new blog URL of the user.
             */
            blog?: string;
            /**
             * The new Twitter username of the user.
             */
            twitter_username?: string | null;
            /**
             * The new company of the user.
             */
            company?: string;
            /**
             * The new location of the user.
             */
            location?: string;
            /**
             * The new hiring availability of the user.
             */
            hireable?: boolean;
            /**
             * The new short biography of the user.
             */
            bio?: string;
        },
    ): CancelablePromise<private_user> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List users blocked by the authenticated user
     * List the users you've blocked on your personal account.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    public static usersListBlockedByAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/blocks',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Check if a user is blocked by the authenticated user
     * Returns a 204 if the given user is blocked by the authenticated user. Returns a 404 if the given user is not blocked by the authenticated user, or if the given user account has been identified as spam by GitHub.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static usersCheckBlocked(
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/blocks/{username}',
            path: {
                'username': username,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `If the user is not blocked`,
            },
        });
    }

    /**
     * Block a user
     * Blocks the given user and returns a 204. If the authenticated user cannot block the given user a 422 is returned.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static usersBlock(
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/blocks/{username}',
            path: {
                'username': username,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Unblock a user
     * Unblocks the given user and returns a 204.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static usersUnblock(
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/blocks/{username}',
            path: {
                'username': username,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Set primary email visibility for the authenticated user
     * Sets the visibility for your primary email addresses.
     * @param requestBody
     * @returns email Response
     * @throws ApiError
     */
    public static usersSetPrimaryEmailVisibilityForAuthenticatedUser(
        requestBody: {
            /**
             * Denotes whether an email is publicly visible.
             */
            visibility: 'public' | 'private';
        },
    ): CancelablePromise<Array<email>> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/email/visibility',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List email addresses for the authenticated user
     * Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns email Response
     * @throws ApiError
     */
    public static usersListEmailsForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<email>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/emails',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Add an email address for the authenticated user
     * This endpoint is accessible with the `user` scope.
     * @param requestBody
     * @returns email Response
     * @throws ApiError
     */
    public static usersAddEmailForAuthenticatedUser(
        requestBody?: ({
            /**
             * Adds one or more email addresses to your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.
             */
            emails: Array<string>;
        } | Array<string> | string),
    ): CancelablePromise<Array<email>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/emails',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Delete an email address for the authenticated user
     * This endpoint is accessible with the `user` scope.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static usersDeleteEmailForAuthenticatedUser(
        requestBody?: ({
            /**
             * Email addresses associated with the GitHub user account.
             */
            emails: Array<string>;
        } | Array<string> | string),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/emails',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List followers of the authenticated user
     * Lists the people following the authenticated user.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    public static usersListFollowersForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/followers',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * List the people the authenticated user follows
     * Lists the people who the authenticated user follows.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    public static usersListFollowedByAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/following',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * Check if a person is followed by the authenticated user
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static usersCheckPersonIsFollowedByAuthenticated(
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/following/{username}',
            path: {
                'username': username,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `if the person is not followed by the authenticated user`,
            },
        });
    }

    /**
     * Follow a user
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static usersFollow(
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/following/{username}',
            path: {
                'username': username,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Unfollow a user
     * Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static usersUnfollow(
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/following/{username}',
            path: {
                'username': username,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List GPG keys for the authenticated user
     * Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns gpg_key Response
     * @throws ApiError
     */
    public static usersListGpgKeysForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<gpg_key>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/gpg_keys',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create a GPG key for the authenticated user
     * Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param requestBody
     * @returns gpg_key Response
     * @throws ApiError
     */
    public static usersCreateGpgKeyForAuthenticatedUser(
        requestBody: {
            /**
             * A descriptive name for the new key.
             */
            name?: string;
            /**
             * A GPG key in ASCII-armored format.
             */
            armored_public_key: string;
        },
    ): CancelablePromise<gpg_key> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/gpg_keys',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get a GPG key for the authenticated user
     * View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param gpgKeyId The unique identifier of the GPG key.
     * @returns gpg_key Response
     * @throws ApiError
     */
    public static usersGetGpgKeyForAuthenticatedUser(
        gpgKeyId: number,
    ): CancelablePromise<gpg_key> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/gpg_keys/{gpg_key_id}',
            path: {
                'gpg_key_id': gpgKeyId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Delete a GPG key for the authenticated user
     * Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param gpgKeyId The unique identifier of the GPG key.
     * @returns void
     * @throws ApiError
     */
    public static usersDeleteGpgKeyForAuthenticatedUser(
        gpgKeyId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/gpg_keys/{gpg_key_id}',
            path: {
                'gpg_key_id': gpgKeyId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List public SSH keys for the authenticated user
     * Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns key Response
     * @throws ApiError
     */
    public static usersListPublicSshKeysForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<key>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/keys',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create a public SSH key for the authenticated user
     * Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param requestBody
     * @returns key Response
     * @throws ApiError
     */
    public static usersCreatePublicSshKeyForAuthenticatedUser(
        requestBody: {
            /**
             * A descriptive name for the new key.
             */
            title?: string;
            /**
             * The public SSH key to add to your GitHub account.
             */
            key: string;
        },
    ): CancelablePromise<key> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/keys',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get a public SSH key for the authenticated user
     * View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param keyId The unique identifier of the key.
     * @returns key Response
     * @throws ApiError
     */
    public static usersGetPublicSshKeyForAuthenticatedUser(
        keyId: number,
    ): CancelablePromise<key> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/keys/{key_id}',
            path: {
                'key_id': keyId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Delete a public SSH key for the authenticated user
     * Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param keyId The unique identifier of the key.
     * @returns void
     * @throws ApiError
     */
    public static usersDeletePublicSshKeyForAuthenticatedUser(
        keyId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/keys/{key_id}',
            path: {
                'key_id': keyId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List public email addresses for the authenticated user
     * Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/rest/users/emails#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns email Response
     * @throws ApiError
     */
    public static usersListPublicEmailsForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<email>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/public_emails',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List social accounts for the authenticated user
     * Lists all of your social accounts.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns social_account Response
     * @throws ApiError
     */
    public static usersListSocialAccountsForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<social_account>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/social_accounts',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Add social accounts for the authenticated user
     * Add one or more social accounts to the authenticated user's profile. This endpoint is accessible with the `user` scope.
     * @param requestBody
     * @returns social_account Response
     * @throws ApiError
     */
    public static usersAddSocialAccountForAuthenticatedUser(
        requestBody: {
            /**
             * Full URLs for the social media profiles to add.
             */
            account_urls: Array<string>;
        },
    ): CancelablePromise<Array<social_account>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/social_accounts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Delete social accounts for the authenticated user
     * Deletes one or more social accounts from the authenticated user's profile. This endpoint is accessible with the `user` scope.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static usersDeleteSocialAccountForAuthenticatedUser(
        requestBody: {
            /**
             * Full URLs for the social media profiles to delete.
             */
            account_urls: Array<string>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/social_accounts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List SSH signing keys for the authenticated user
     * Lists the SSH signing keys for the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `read:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns ssh_signing_key Response
     * @throws ApiError
     */
    public static usersListSshSigningKeysForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<ssh_signing_key>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/ssh_signing_keys',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create a SSH signing key for the authenticated user
     * Creates an SSH signing key for the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `write:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
     * @param requestBody
     * @returns ssh_signing_key Response
     * @throws ApiError
     */
    public static usersCreateSshSigningKeyForAuthenticatedUser(
        requestBody: {
            /**
             * A descriptive name for the new key.
             */
            title?: string;
            /**
             * The public SSH key to add to your GitHub account. For more information, see "[Checking for existing SSH keys](https://docs.github.com/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)."
             */
            key: string;
        },
    ): CancelablePromise<ssh_signing_key> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/ssh_signing_keys',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get an SSH signing key for the authenticated user
     * Gets extended details for an SSH signing key. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `read:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
     * @param sshSigningKeyId The unique identifier of the SSH signing key.
     * @returns ssh_signing_key Response
     * @throws ApiError
     */
    public static usersGetSshSigningKeyForAuthenticatedUser(
        sshSigningKeyId: number,
    ): CancelablePromise<ssh_signing_key> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/ssh_signing_keys/{ssh_signing_key_id}',
            path: {
                'ssh_signing_key_id': sshSigningKeyId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Delete an SSH signing key for the authenticated user
     * Deletes an SSH signing key from the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `admin:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
     * @param sshSigningKeyId The unique identifier of the SSH signing key.
     * @returns void
     * @throws ApiError
     */
    public static usersDeleteSshSigningKeyForAuthenticatedUser(
        sshSigningKeyId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/ssh_signing_keys/{ssh_signing_key_id}',
            path: {
                'ssh_signing_key_id': sshSigningKeyId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List users
     * Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.
     *
     * Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers) to get the URL for the next page of users.
     * @param since A user ID. Only return users with an ID greater than this ID.
     * @param perPage The number of results per page (max 100).
     * @returns simple_user Response
     * @throws ApiError
     */
    public static usersList(
        since?: number,
        perPage: number = 30,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'since': since,
                'per_page': perPage,
            },
            errors: {
                304: `Not modified`,
            },
        });
    }

    /**
     * Get a user
     * Provides publicly available information about someone with a GitHub account.
     *
     * GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub plan information' below"
     *
     * The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://docs.github.com/rest/overview/resources-in-the-rest-api#authentication).
     *
     * The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/rest/users/emails)".
     * @param username The handle for the GitHub user account.
     * @returns any Response
     * @throws ApiError
     */
    public static usersGetByUsername(
        username: string,
    ): CancelablePromise<(private_user | public_user)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}',
            path: {
                'username': username,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * List followers of a user
     * Lists the people following the specified user.
     * @param username The handle for the GitHub user account.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    public static usersListFollowersForUser(
        username: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/followers',
            path: {
                'username': username,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * List the people a user follows
     * Lists the people who the specified user follows.
     * @param username The handle for the GitHub user account.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    public static usersListFollowingForUser(
        username: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/following',
            path: {
                'username': username,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Check if a user follows another user
     * @param username The handle for the GitHub user account.
     * @param targetUser
     * @returns void
     * @throws ApiError
     */
    public static usersCheckFollowingForUser(
        username: string,
        targetUser: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/following/{target_user}',
            path: {
                'username': username,
                'target_user': targetUser,
            },
            errors: {
                404: `if the user does not follow the target user`,
            },
        });
    }

    /**
     * List GPG keys for a user
     * Lists the GPG keys for a user. This information is accessible by anyone.
     * @param username The handle for the GitHub user account.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns gpg_key Response
     * @throws ApiError
     */
    public static usersListGpgKeysForUser(
        username: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<gpg_key>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/gpg_keys',
            path: {
                'username': username,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Get contextual information for a user
     * Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.
     *
     * The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:
     *
     * ```shell
     * curl -u username:token
     * https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
     * ```
     * @param username The handle for the GitHub user account.
     * @param subjectType Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.
     * @param subjectId Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.
     * @returns hovercard Response
     * @throws ApiError
     */
    public static usersGetContextForUser(
        username: string,
        subjectType?: 'organization' | 'repository' | 'issue' | 'pull_request',
        subjectId?: string,
    ): CancelablePromise<hovercard> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/hovercard',
            path: {
                'username': username,
            },
            query: {
                'subject_type': subjectType,
                'subject_id': subjectId,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List public keys for a user
     * Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
     * @param username The handle for the GitHub user account.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns key_simple Response
     * @throws ApiError
     */
    public static usersListPublicKeysForUser(
        username: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<key_simple>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/keys',
            path: {
                'username': username,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * List social accounts for a user
     * Lists social media accounts for a user. This endpoint is accessible by anyone.
     * @param username The handle for the GitHub user account.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns social_account Response
     * @throws ApiError
     */
    public static usersListSocialAccountsForUser(
        username: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<social_account>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/social_accounts',
            path: {
                'username': username,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * List SSH signing keys for a user
     * Lists the SSH signing keys for a user. This operation is accessible by anyone.
     * @param username The handle for the GitHub user account.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns ssh_signing_key Response
     * @throws ApiError
     */
    public static usersListSshSigningKeysForUser(
        username: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<ssh_signing_key>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/ssh_signing_keys',
            path: {
                'username': username,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

}
