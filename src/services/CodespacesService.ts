/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { codespace } from '../models/codespace';
import type { codespace_export_details } from '../models/codespace_export_details';
import type { codespace_machine } from '../models/codespace_machine';
import type { codespace_with_full_repository } from '../models/codespace_with_full_repository';
import type { codespaces_org_secret } from '../models/codespaces_org_secret';
import type { codespaces_public_key } from '../models/codespaces_public_key';
import type { codespaces_secret } from '../models/codespaces_secret';
import type { codespaces_user_public_key } from '../models/codespaces_user_public_key';
import type { empty_object } from '../models/empty_object';
import type { minimal_repository } from '../models/minimal_repository';
import type { repo_codespaces_secret } from '../models/repo_codespaces_secret';
import type { simple_user } from '../models/simple_user';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CodespacesService {

    /**
     * List codespaces for the organization
     * Lists the codespaces associated to a specified organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesListInOrganization(
        org: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        codespaces: Array<codespace>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/codespaces',
            path: {
                'org': org,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * @deprecated
     * Manage access control for organization codespaces
     * Sets which users can access codespaces in an organization. This is synonymous with granting or revoking codespaces access permissions for users according to the visibility.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static codespacesSetCodespacesAccess(
        org: string,
        requestBody: {
            /**
             * Which users can access codespaces in the organization. `disabled` means that no users can access codespaces in the organization.
             */
            visibility: 'disabled' | 'selected_members' | 'all_members' | 'all_members_and_outside_collaborators';
            /**
             * The usernames of the organization members who should have access to codespaces in the organization. Required when `visibility` is `selected_members`. The provided list of usernames will replace any existing value.
             */
            selected_usernames?: Array<string>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/codespaces/access',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                400: `Users are neither members nor collaborators of this organization.`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * @deprecated
     * Add users to Codespaces access for an organization
     * Codespaces for the specified users will be billed to the organization.
     *
     * To use this endpoint, the access settings for the organization must be set to `selected_members`.
     * For information on how to change this setting, see "[Manage access control for organization codespaces](https://docs.github.com/rest/codespaces/organizations#manage-access-control-for-organization-codespaces)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static codespacesSetCodespacesAccessUsers(
        org: string,
        requestBody: {
            /**
             * The usernames of the organization members whose codespaces be billed to the organization.
             */
            selected_usernames: Array<string>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/codespaces/access/selected_users',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                400: `Users are neither members nor collaborators of this organization.`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * @deprecated
     * Remove users from Codespaces access for an organization
     * Codespaces for the specified users will no longer be billed to the organization.
     *
     * To use this endpoint, the access settings for the organization must be set to `selected_members`.
     * For information on how to change this setting, see "[Manage access control for organization codespaces](https://docs.github.com/rest/codespaces/organizations#manage-access-control-for-organization-codespaces)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static codespacesDeleteCodespacesAccessUsers(
        org: string,
        requestBody: {
            /**
             * The usernames of the organization members whose codespaces should not be billed to the organization.
             */
            selected_usernames: Array<string>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/codespaces/access/selected_users',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                400: `Users are neither members nor collaborators of this organization.`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * List organization secrets
     * Lists all Codespaces secrets available at the organization-level without revealing their encrypted values.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesListOrgSecrets(
        org: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        secrets: Array<codespaces_org_secret>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/codespaces/secrets',
            path: {
                'org': org,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Get an organization public key
     * Gets a public key for an organization, which is required in order to encrypt secrets. You need to encrypt the value of a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @returns codespaces_public_key Response
     * @throws ApiError
     */
    public static codespacesGetOrgPublicKey(
        org: string,
    ): CancelablePromise<codespaces_public_key> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/codespaces/secrets/public-key',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Get an organization secret
     * Gets an organization secret without revealing its encrypted value.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns codespaces_org_secret Response
     * @throws ApiError
     */
    public static codespacesGetOrgSecret(
        org: string,
        secretName: string,
    ): CancelablePromise<codespaces_org_secret> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/codespaces/secrets/{secret_name}',
            path: {
                'org': org,
                'secret_name': secretName,
            },
        });
    }

    /**
     * Create or update an organization secret
     * Creates or updates an organization secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."
     *
     * You must authenticate using an access
     * token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns empty_object Response when creating a secret
     * @throws ApiError
     */
    public static codespacesCreateOrUpdateOrgSecret(
        org: string,
        secretName: string,
        requestBody: {
            /**
             * The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/codespaces/organization-secrets#get-an-organization-public-key) endpoint.
             */
            encrypted_value?: string;
            /**
             * The ID of the key you used to encrypt the secret.
             */
            key_id?: string;
            /**
             * Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.
             */
            visibility: 'all' | 'private' | 'selected';
            /**
             * An array of repository IDs that can access the organization secret. You can only provide a list of repository IDs when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#remove-selected-repository-from-an-organization-secret) endpoints.
             */
            selected_repository_ids?: Array<number>;
        },
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/codespaces/secrets/{secret_name}',
            path: {
                'org': org,
                'secret_name': secretName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Delete an organization secret
     * Deletes an organization secret using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns void
     * @throws ApiError
     */
    public static codespacesDeleteOrgSecret(
        org: string,
        secretName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/codespaces/secrets/{secret_name}',
            path: {
                'org': org,
                'secret_name': secretName,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * List selected repositories for an organization secret
     * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesListSelectedReposForOrgSecret(
        org: string,
        secretName: string,
        page: number = 1,
        perPage: number = 30,
    ): CancelablePromise<{
        total_count: number;
        repositories: Array<minimal_repository>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/codespaces/secrets/{secret_name}/repositories',
            path: {
                'org': org,
                'secret_name': secretName,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Set selected repositories for an organization secret
     * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static codespacesSetSelectedReposForOrgSecret(
        org: string,
        secretName: string,
        requestBody: {
            /**
             * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#remove-selected-repository-from-an-organization-secret) endpoints.
             */
            selected_repository_ids: Array<number>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/codespaces/secrets/{secret_name}/repositories',
            path: {
                'org': org,
                'secret_name': secretName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                409: `Conflict when visibility type not set to selected`,
            },
        });
    }

    /**
     * Add selected repository to an organization secret
     * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param repositoryId
     * @returns void
     * @throws ApiError
     */
    public static codespacesAddSelectedRepoToOrgSecret(
        org: string,
        secretName: string,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}',
            path: {
                'org': org,
                'secret_name': secretName,
                'repository_id': repositoryId,
            },
            errors: {
                404: `Resource not found`,
                409: `Conflict when visibility type is not set to selected`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Remove selected repository from an organization secret
     * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param repositoryId
     * @returns void
     * @throws ApiError
     */
    public static codespacesRemoveSelectedRepoFromOrgSecret(
        org: string,
        secretName: string,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}',
            path: {
                'org': org,
                'secret_name': secretName,
                'repository_id': repositoryId,
            },
            errors: {
                404: `Resource not found`,
                409: `Conflict when visibility type not set to selected`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List codespaces for a user in organization
     * Lists the codespaces that a member of an organization has for repositories in that organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesGetCodespacesForUserInOrg(
        org: string,
        username: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        codespaces: Array<codespace>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/members/{username}/codespaces',
            path: {
                'org': org,
                'username': username,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Delete a codespace from the organization
     * Deletes a user's codespace.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @param codespaceName The name of the codespace.
     * @returns any Accepted
     * @throws ApiError
     */
    public static codespacesDeleteFromOrganization(
        org: string,
        username: string,
        codespaceName: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/members/{username}/codespaces/{codespace_name}',
            path: {
                'org': org,
                'username': username,
                'codespace_name': codespaceName,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Stop a codespace for an organization user
     * Stops a user's codespace.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @param codespaceName The name of the codespace.
     * @returns codespace Response
     * @throws ApiError
     */
    public static codespacesStopInOrganization(
        org: string,
        username: string,
        codespaceName: string,
    ): CancelablePromise<codespace> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop',
            path: {
                'org': org,
                'username': username,
                'codespace_name': codespaceName,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * List codespaces in a repository for the authenticated user
     * Lists the codespaces associated to a specified repository and the authenticated user.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesListInRepositoryForAuthenticatedUser(
        owner: string,
        repo: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        codespaces: Array<codespace>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/codespaces',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Create a codespace in a repository
     * Creates a codespace owned by the authenticated user in the specified repository.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns codespace Response when the codespace was successfully created
     * @throws ApiError
     */
    public static codespacesCreateWithRepoForAuthenticatedUser(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * Git ref (typically a branch name) for this codespace
             */
            ref?: string;
            /**
             * The requested location for a new codespace. Best efforts are made to respect this upon creation. Assigned by IP if not provided.
             */
            location?: string;
            /**
             * The geographic area for this codespace. If not specified, the value is assigned by IP. This property replaces `location`, which is being deprecated.
             */
            geo?: 'EuropeWest' | 'SoutheastAsia' | 'UsEast' | 'UsWest';
            /**
             * IP for location auto-detection when proxying a request
             */
            client_ip?: string;
            /**
             * Machine type to use for this codespace
             */
            machine?: string;
            /**
             * Path to devcontainer.json config to use for this codespace
             */
            devcontainer_path?: string;
            /**
             * Whether to authorize requested permissions from devcontainer.json
             */
            multi_repo_permissions_opt_out?: boolean;
            /**
             * Working directory for this codespace
             */
            working_directory?: string;
            /**
             * Time in minutes before codespace stops from inactivity
             */
            idle_timeout_minutes?: number;
            /**
             * Display name for this codespace
             */
            display_name?: string;
            /**
             * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
             */
            retention_period_minutes?: number;
        } | null,
    ): CancelablePromise<codespace> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/codespaces',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }

    /**
     * List devcontainer configurations in a repository for the authenticated user
     * Lists the devcontainer.json files associated with a specified repository and the authenticated user. These files
     * specify launchpoint configurations for codespaces created within the repository.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesListDevcontainersInRepositoryForAuthenticatedUser(
        owner: string,
        repo: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        devcontainers: Array<{
            path: string;
            name?: string;
            display_name?: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/codespaces/devcontainers',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                400: `Bad Request`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * List available machine types for a repository
     * List the machine types available for a given repository based on its configuration.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_metadata` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param location The location to check for available machines. Assigned by IP if not provided.
     * @param clientIp IP for location auto-detection when proxying a request
     * @param ref The branch or commit to check for prebuild availability and devcontainer restrictions.
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesRepoMachinesForAuthenticatedUser(
        owner: string,
        repo: string,
        location?: string,
        clientIp?: string,
        ref?: string,
    ): CancelablePromise<{
        total_count: number;
        machines: Array<codespace_machine>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/codespaces/machines',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'location': location,
                'client_ip': clientIp,
                'ref': ref,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Get default attributes for a codespace
     * Gets the default attributes for codespaces created by the user with the repository.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref The branch or commit to check for a default devcontainer path. If not specified, the default branch will be checked.
     * @param clientIp An alternative IP for default location auto-detection, such as when proxying a request.
     * @returns any Response when a user is able to create codespaces from the repository.
     * @throws ApiError
     */
    public static codespacesPreFlightWithRepoForAuthenticatedUser(
        owner: string,
        repo: string,
        ref?: string,
        clientIp?: string,
    ): CancelablePromise<{
        billable_owner?: simple_user;
        defaults?: {
            location: string;
            devcontainer_path: string | null;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/codespaces/new',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'ref': ref,
                'client_ip': clientIp,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List repository secrets
     * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesListRepoSecrets(
        owner: string,
        repo: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        secrets: Array<repo_codespaces_secret>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/codespaces/secrets',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Get a repository public key
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns codespaces_public_key Response
     * @throws ApiError
     */
    public static codespacesGetRepoPublicKey(
        owner: string,
        repo: string,
    ): CancelablePromise<codespaces_public_key> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/codespaces/secrets/public-key',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Get a repository secret
     * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns repo_codespaces_secret Response
     * @throws ApiError
     */
    public static codespacesGetRepoSecret(
        owner: string,
        repo: string,
        secretName: string,
    ): CancelablePromise<repo_codespaces_secret> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/codespaces/secrets/{secret_name}',
            path: {
                'owner': owner,
                'repo': repo,
                'secret_name': secretName,
            },
        });
    }

    /**
     * Create or update a repository secret
     * Creates or updates a repository secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."
     *
     * You must authenticate using an access
     * token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets`
     * repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns empty_object Response when creating a secret
     * @throws ApiError
     */
    public static codespacesCreateOrUpdateRepoSecret(
        owner: string,
        repo: string,
        secretName: string,
        requestBody: {
            /**
             * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/codespaces/repository-secrets#get-a-repository-public-key) endpoint.
             */
            encrypted_value?: string;
            /**
             * ID of the key you used to encrypt the secret.
             */
            key_id?: string;
        },
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/codespaces/secrets/{secret_name}',
            path: {
                'owner': owner,
                'repo': repo,
                'secret_name': secretName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a repository secret
     * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns void
     * @throws ApiError
     */
    public static codespacesDeleteRepoSecret(
        owner: string,
        repo: string,
        secretName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/codespaces/secrets/{secret_name}',
            path: {
                'owner': owner,
                'repo': repo,
                'secret_name': secretName,
            },
        });
    }

    /**
     * Create a codespace from a pull request
     * Creates a codespace owned by the authenticated user for the specified pull request.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param requestBody
     * @returns codespace Response when the codespace was successfully created
     * @throws ApiError
     */
    public static codespacesCreateWithPrForAuthenticatedUser(
        owner: string,
        repo: string,
        pullNumber: number,
        requestBody: {
            /**
             * The requested location for a new codespace. Best efforts are made to respect this upon creation. Assigned by IP if not provided.
             */
            location?: string;
            /**
             * The geographic area for this codespace. If not specified, the value is assigned by IP. This property replaces `location`, which is being deprecated.
             */
            geo?: 'EuropeWest' | 'SoutheastAsia' | 'UsEast' | 'UsWest';
            /**
             * IP for location auto-detection when proxying a request
             */
            client_ip?: string;
            /**
             * Machine type to use for this codespace
             */
            machine?: string;
            /**
             * Path to devcontainer.json config to use for this codespace
             */
            devcontainer_path?: string;
            /**
             * Whether to authorize requested permissions from devcontainer.json
             */
            multi_repo_permissions_opt_out?: boolean;
            /**
             * Working directory for this codespace
             */
            working_directory?: string;
            /**
             * Time in minutes before codespace stops from inactivity
             */
            idle_timeout_minutes?: number;
            /**
             * Display name for this codespace
             */
            display_name?: string;
            /**
             * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
             */
            retention_period_minutes?: number;
        } | null,
    ): CancelablePromise<codespace> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/codespaces',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }

    /**
     * List codespaces for the authenticated user
     * Lists the authenticated user's codespaces.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param repositoryId ID of the Repository to filter on
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesListForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
        repositoryId?: number,
    ): CancelablePromise<{
        total_count: number;
        codespaces: Array<codespace>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/codespaces',
            query: {
                'per_page': perPage,
                'page': page,
                'repository_id': repositoryId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Create a codespace for the authenticated user
     * Creates a new codespace, owned by the authenticated user.
     *
     * This endpoint requires either a `repository_id` OR a `pull_request` but not both.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     * @param requestBody
     * @returns codespace Response when the codespace was successfully created
     * @throws ApiError
     */
    public static codespacesCreateForAuthenticatedUser(
        requestBody: ({
            /**
             * Repository id for this codespace
             */
            repository_id: number;
            /**
             * Git ref (typically a branch name) for this codespace
             */
            ref?: string;
            /**
             * The requested location for a new codespace. Best efforts are made to respect this upon creation. Assigned by IP if not provided.
             */
            location?: string;
            /**
             * The geographic area for this codespace. If not specified, the value is assigned by IP. This property replaces `location`, which is being deprecated.
             */
            geo?: 'EuropeWest' | 'SoutheastAsia' | 'UsEast' | 'UsWest';
            /**
             * IP for location auto-detection when proxying a request
             */
            client_ip?: string;
            /**
             * Machine type to use for this codespace
             */
            machine?: string;
            /**
             * Path to devcontainer.json config to use for this codespace
             */
            devcontainer_path?: string;
            /**
             * Whether to authorize requested permissions from devcontainer.json
             */
            multi_repo_permissions_opt_out?: boolean;
            /**
             * Working directory for this codespace
             */
            working_directory?: string;
            /**
             * Time in minutes before codespace stops from inactivity
             */
            idle_timeout_minutes?: number;
            /**
             * Display name for this codespace
             */
            display_name?: string;
            /**
             * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
             */
            retention_period_minutes?: number;
        } | {
            /**
             * Pull request number for this codespace
             */
            pull_request: {
                /**
                 * Pull request number
                 */
                pull_request_number: number;
                /**
                 * Repository id for this codespace
                 */
                repository_id: number;
            };
            /**
             * The requested location for a new codespace. Best efforts are made to respect this upon creation. Assigned by IP if not provided.
             */
            location?: string;
            /**
             * The geographic area for this codespace. If not specified, the value is assigned by IP. This property replaces `location`, which is being deprecated.
             */
            geo?: 'EuropeWest' | 'SoutheastAsia' | 'UsEast' | 'UsWest';
            /**
             * Machine type to use for this codespace
             */
            machine?: string;
            /**
             * Path to devcontainer.json config to use for this codespace
             */
            devcontainer_path?: string;
            /**
             * Working directory for this codespace
             */
            working_directory?: string;
            /**
             * Time in minutes before codespace stops from inactivity
             */
            idle_timeout_minutes?: number;
        }),
    ): CancelablePromise<codespace> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/codespaces',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }

    /**
     * List secrets for the authenticated user
     * Lists all secrets available for a user's Codespaces without revealing their
     * encrypted values.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesListSecretsForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        secrets: Array<codespaces_secret>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/codespaces/secrets',
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Get public key for the authenticated user
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.
     * @returns codespaces_user_public_key Response
     * @throws ApiError
     */
    public static codespacesGetPublicKeyForAuthenticatedUser(): CancelablePromise<codespaces_user_public_key> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/codespaces/secrets/public-key',
        });
    }

    /**
     * Get a secret for the authenticated user
     * Gets a secret available to a user's codespaces without revealing its encrypted value.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.
     * @param secretName The name of the secret.
     * @returns codespaces_secret Response
     * @throws ApiError
     */
    public static codespacesGetSecretForAuthenticatedUser(
        secretName: string,
    ): CancelablePromise<codespaces_secret> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/codespaces/secrets/{secret_name}',
            path: {
                'secret_name': secretName,
            },
        });
    }

    /**
     * Create or update a secret for the authenticated user
     * Creates or updates a secret for a user's codespace with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must also have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_user_secrets` user permission and `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns empty_object Response after successfully creating a secret
     * @throws ApiError
     */
    public static codespacesCreateOrUpdateSecretForAuthenticatedUser(
        secretName: string,
        requestBody: {
            /**
             * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get the public key for the authenticated user](https://docs.github.com/rest/codespaces/secrets#get-public-key-for-the-authenticated-user) endpoint.
             */
            encrypted_value?: string;
            /**
             * ID of the key you used to encrypt the secret.
             */
            key_id: string;
            /**
             * An array of repository ids that can access the user secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#list-selected-repositories-for-a-user-secret), [Set selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#set-selected-repositories-for-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/codespaces/secrets#remove-a-selected-repository-from-a-user-secret) endpoints.
             */
            selected_repository_ids?: Array<(number | string)>;
        },
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/codespaces/secrets/{secret_name}',
            path: {
                'secret_name': secretName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Delete a secret for the authenticated user
     * Deletes a secret from a user's codespaces using the secret name. Deleting the secret will remove access from all codespaces that were allowed to access the secret.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.
     * @param secretName The name of the secret.
     * @returns void
     * @throws ApiError
     */
    public static codespacesDeleteSecretForAuthenticatedUser(
        secretName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/codespaces/secrets/{secret_name}',
            path: {
                'secret_name': secretName,
            },
        });
    }

    /**
     * List selected repositories for a user secret
     * List the repositories that have been granted the ability to use a user's codespace secret.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
     * @param secretName The name of the secret.
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesListRepositoriesForSecretForAuthenticatedUser(
        secretName: string,
    ): CancelablePromise<{
        total_count: number;
        repositories: Array<minimal_repository>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/codespaces/secrets/{secret_name}/repositories',
            path: {
                'secret_name': secretName,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Set selected repositories for a user secret
     * Select the repositories that will use a user's codespace secret.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static codespacesSetRepositoriesForSecretForAuthenticatedUser(
        secretName: string,
        requestBody: {
            /**
             * An array of repository ids for which a codespace can access the secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#list-selected-repositories-for-a-user-secret), [Add a selected repository to a user secret](https://docs.github.com/rest/codespaces/secrets#add-a-selected-repository-to-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/codespaces/secrets#remove-a-selected-repository-from-a-user-secret) endpoints.
             */
            selected_repository_ids: Array<number>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/codespaces/secrets/{secret_name}/repositories',
            path: {
                'secret_name': secretName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Add a selected repository to a user secret
     * Adds a repository to the selected repositories for a user's codespace secret.
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     * GitHub Apps must have write access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on the referenced repository to use this endpoint.
     * @param secretName The name of the secret.
     * @param repositoryId
     * @returns void
     * @throws ApiError
     */
    public static codespacesAddRepositoryForSecretForAuthenticatedUser(
        secretName: string,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/codespaces/secrets/{secret_name}/repositories/{repository_id}',
            path: {
                'secret_name': secretName,
                'repository_id': repositoryId,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Remove a selected repository from a user secret
     * Removes a repository from the selected repositories for a user's codespace secret.
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     * GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.
     * @param secretName The name of the secret.
     * @param repositoryId
     * @returns void
     * @throws ApiError
     */
    public static codespacesRemoveRepositoryForSecretForAuthenticatedUser(
        secretName: string,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/codespaces/secrets/{secret_name}/repositories/{repository_id}',
            path: {
                'secret_name': secretName,
                'repository_id': repositoryId,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Get a codespace for the authenticated user
     * Gets information about a user's codespace.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
     * @param codespaceName The name of the codespace.
     * @returns codespace Response
     * @throws ApiError
     */
    public static codespacesGetForAuthenticatedUser(
        codespaceName: string,
    ): CancelablePromise<codespace> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/codespaces/{codespace_name}',
            path: {
                'codespace_name': codespaceName,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Update a codespace for the authenticated user
     * Updates a codespace owned by the authenticated user. Currently only the codespace's machine type and recent folders can be modified using this endpoint.
     *
     * If you specify a new machine type it will be applied the next time your codespace is started.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     * @param codespaceName The name of the codespace.
     * @param requestBody
     * @returns codespace Response
     * @throws ApiError
     */
    public static codespacesUpdateForAuthenticatedUser(
        codespaceName: string,
        requestBody?: {
            /**
             * A valid machine to transition this codespace to.
             */
            machine?: string;
            /**
             * Display name for this codespace
             */
            display_name?: string;
            /**
             * Recently opened folders inside the codespace. It is currently used by the clients to determine the folder path to load the codespace in.
             */
            recent_folders?: Array<string>;
        },
    ): CancelablePromise<codespace> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/codespaces/{codespace_name}',
            path: {
                'codespace_name': codespaceName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Delete a codespace for the authenticated user
     * Deletes a user's codespace.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     * @param codespaceName The name of the codespace.
     * @returns any Accepted
     * @throws ApiError
     */
    public static codespacesDeleteForAuthenticatedUser(
        codespaceName: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/codespaces/{codespace_name}',
            path: {
                'codespace_name': codespaceName,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Export a codespace for the authenticated user
     * Triggers an export of the specified codespace and returns a URL and ID where the status of the export can be monitored.
     *
     * If changes cannot be pushed to the codespace's repository, they will be pushed to a new or previously-existing fork instead.
     *
     * You must authenticate using a personal access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
     * @param codespaceName The name of the codespace.
     * @returns codespace_export_details Response
     * @throws ApiError
     */
    public static codespacesExportForAuthenticatedUser(
        codespaceName: string,
    ): CancelablePromise<codespace_export_details> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/codespaces/{codespace_name}/exports',
            path: {
                'codespace_name': codespaceName,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Get details about a codespace export
     * Gets information about an export of a codespace.
     *
     * You must authenticate using a personal access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
     * @param codespaceName The name of the codespace.
     * @param exportId The ID of the export operation, or `latest`. Currently only `latest` is currently supported.
     * @returns codespace_export_details Response
     * @throws ApiError
     */
    public static codespacesGetExportDetailsForAuthenticatedUser(
        codespaceName: string,
        exportId: string,
    ): CancelablePromise<codespace_export_details> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/codespaces/{codespace_name}/exports/{export_id}',
            path: {
                'codespace_name': codespaceName,
                'export_id': exportId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * List machine types for a codespace
     * List the machine types a codespace can transition to use.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.
     * @param codespaceName The name of the codespace.
     * @returns any Response
     * @throws ApiError
     */
    public static codespacesCodespaceMachinesForAuthenticatedUser(
        codespaceName: string,
    ): CancelablePromise<{
        total_count: number;
        machines: Array<codespace_machine>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/codespaces/{codespace_name}/machines',
            path: {
                'codespace_name': codespaceName,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Create a repository from an unpublished codespace
     * Publishes an unpublished codespace, creating a new repository and assigning it to the codespace.
     *
     * The codespace's token is granted write permissions to the repository, allowing the user to push their changes.
     *
     * This will fail for a codespace that is already published, meaning it has an associated repository.
     *
     * You must authenticate using a personal access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     * @param codespaceName The name of the codespace.
     * @param requestBody
     * @returns codespace_with_full_repository Response
     * @throws ApiError
     */
    public static codespacesPublishForAuthenticatedUser(
        codespaceName: string,
        requestBody: {
            /**
             * A name for the new repository.
             */
            name?: string;
            /**
             * Whether the new repository should be private.
             */
            private?: boolean;
        },
    ): CancelablePromise<codespace_with_full_repository> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/codespaces/{codespace_name}/publish',
            path: {
                'codespace_name': codespaceName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Start a codespace for the authenticated user
     * Starts a user's codespace.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
     * @param codespaceName The name of the codespace.
     * @returns codespace Response
     * @throws ApiError
     */
    public static codespacesStartForAuthenticatedUser(
        codespaceName: string,
    ): CancelablePromise<codespace> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/codespaces/{codespace_name}/start',
            path: {
                'codespace_name': codespaceName,
            },
            errors: {
                304: `Not modified`,
                400: `Bad Request`,
                401: `Requires authentication`,
                402: `Payment required`,
                403: `Forbidden`,
                404: `Resource not found`,
                409: `Conflict`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Stop a codespace for the authenticated user
     * Stops a user's codespace.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
     * @param codespaceName The name of the codespace.
     * @returns codespace Response
     * @throws ApiError
     */
    public static codespacesStopForAuthenticatedUser(
        codespaceName: string,
    ): CancelablePromise<codespace> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/codespaces/{codespace_name}/stop',
            path: {
                'codespace_name': codespaceName,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

}
