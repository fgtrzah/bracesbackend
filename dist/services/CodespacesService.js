"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodespacesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CodespacesService {
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
    static codespacesListInOrganization(org, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesSetCodespacesAccess(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesSetCodespacesAccessUsers(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesDeleteCodespacesAccessUsers(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesListOrgSecrets(org, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesGetOrgPublicKey(org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesGetOrgSecret(org, secretName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesCreateOrUpdateOrgSecret(org, secretName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesDeleteOrgSecret(org, secretName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesListSelectedReposForOrgSecret(org, secretName, page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesSetSelectedReposForOrgSecret(org, secretName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesAddSelectedRepoToOrgSecret(org, secretName, repositoryId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesRemoveSelectedRepoFromOrgSecret(org, secretName, repositoryId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesGetCodespacesForUserInOrg(org, username, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesDeleteFromOrganization(org, username, codespaceName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesStopInOrganization(org, username, codespaceName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesListInRepositoryForAuthenticatedUser(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesCreateWithRepoForAuthenticatedUser(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesListDevcontainersInRepositoryForAuthenticatedUser(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesRepoMachinesForAuthenticatedUser(owner, repo, location, clientIp, ref) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesPreFlightWithRepoForAuthenticatedUser(owner, repo, ref, clientIp) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesListRepoSecrets(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesGetRepoPublicKey(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesGetRepoSecret(owner, repo, secretName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesCreateOrUpdateRepoSecret(owner, repo, secretName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesDeleteRepoSecret(owner, repo, secretName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesCreateWithPrForAuthenticatedUser(owner, repo, pullNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesListForAuthenticatedUser(perPage = 30, page = 1, repositoryId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesCreateForAuthenticatedUser(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesListSecretsForAuthenticatedUser(perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesGetPublicKeyForAuthenticatedUser() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesGetSecretForAuthenticatedUser(secretName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesCreateOrUpdateSecretForAuthenticatedUser(secretName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesDeleteSecretForAuthenticatedUser(secretName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesListRepositoriesForSecretForAuthenticatedUser(secretName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesSetRepositoriesForSecretForAuthenticatedUser(secretName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesAddRepositoryForSecretForAuthenticatedUser(secretName, repositoryId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesRemoveRepositoryForSecretForAuthenticatedUser(secretName, repositoryId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesGetForAuthenticatedUser(codespaceName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesUpdateForAuthenticatedUser(codespaceName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesDeleteForAuthenticatedUser(codespaceName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesExportForAuthenticatedUser(codespaceName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesGetExportDetailsForAuthenticatedUser(codespaceName, exportId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesCodespaceMachinesForAuthenticatedUser(codespaceName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesPublishForAuthenticatedUser(codespaceName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesStartForAuthenticatedUser(codespaceName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static codespacesStopForAuthenticatedUser(codespaceName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.CodespacesService = CodespacesService;
//# sourceMappingURL=CodespacesService.js.map