"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependabotService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class DependabotService {
    /**
     * List Dependabot alerts for an enterprise
     * Lists Dependabot alerts for repositories that are owned by the specified enterprise.
     * To use this endpoint, you must be a member of the enterprise, and you must use an
     * access token with the `repo` scope or `security_events` scope.
     * Alerts are only returned for organizations in the enterprise for which you are an organization owner or a security manager. For more information about security managers, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
     * @param enterprise The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     * @param state A comma-separated list of states. If specified, only alerts with these states will be returned.
     *
     * Can be: `auto_dismissed`, `dismissed`, `fixed`, `open`
     * @param severity A comma-separated list of severities. If specified, only alerts with these severities will be returned.
     *
     * Can be: `low`, `medium`, `high`, `critical`
     * @param ecosystem A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.
     *
     * Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`
     * @param _package A comma-separated list of package names. If specified, only alerts for these packages will be returned.
     * @param scope The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.
     * @param sort The property by which to sort the results.
     * `created` means when the alert was created.
     * `updated` means when the alert's state last changed.
     * @param direction The direction to sort the results by.
     * @param before A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.
     * @param after A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.
     * @param first **Deprecated**. The number of results per page (max 100), starting from the first matching result.
     * This parameter must not be used in combination with `last`.
     * Instead, use `per_page` in combination with `after` to fetch the first page of results.
     * @param last **Deprecated**. The number of results per page (max 100), starting from the last matching result.
     * This parameter must not be used in combination with `first`.
     * Instead, use `per_page` in combination with `before` to fetch the last page of results.
     * @param perPage The number of results per page (max 100).
     * @returns dependabot_alert_with_repository Response
     * @throws ApiError
     */
    static dependabotListAlertsForEnterprise(enterprise, state, severity, ecosystem, _package, scope, sort = 'created', direction = 'desc', before, after, first = 30, last, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/enterprises/{enterprise}/dependabot/alerts',
            path: {
                'enterprise': enterprise,
            },
            query: {
                'state': state,
                'severity': severity,
                'ecosystem': ecosystem,
                'package': _package,
                'scope': scope,
                'sort': sort,
                'direction': direction,
                'before': before,
                'after': after,
                'first': first,
                'last': last,
                'per_page': perPage,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List Dependabot alerts for an organization
     * Lists Dependabot alerts for an organization.
     *
     * To use this endpoint, you must be an owner or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param state A comma-separated list of states. If specified, only alerts with these states will be returned.
     *
     * Can be: `auto_dismissed`, `dismissed`, `fixed`, `open`
     * @param severity A comma-separated list of severities. If specified, only alerts with these severities will be returned.
     *
     * Can be: `low`, `medium`, `high`, `critical`
     * @param ecosystem A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.
     *
     * Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`
     * @param _package A comma-separated list of package names. If specified, only alerts for these packages will be returned.
     * @param scope The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.
     * @param sort The property by which to sort the results.
     * `created` means when the alert was created.
     * `updated` means when the alert's state last changed.
     * @param direction The direction to sort the results by.
     * @param before A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.
     * @param after A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.
     * @param first **Deprecated**. The number of results per page (max 100), starting from the first matching result.
     * This parameter must not be used in combination with `last`.
     * Instead, use `per_page` in combination with `after` to fetch the first page of results.
     * @param last **Deprecated**. The number of results per page (max 100), starting from the last matching result.
     * This parameter must not be used in combination with `first`.
     * Instead, use `per_page` in combination with `before` to fetch the last page of results.
     * @param perPage The number of results per page (max 100).
     * @returns dependabot_alert_with_repository Response
     * @throws ApiError
     */
    static dependabotListAlertsForOrg(org, state, severity, ecosystem, _package, scope, sort = 'created', direction = 'desc', before, after, first = 30, last, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/dependabot/alerts',
            path: {
                'org': org,
            },
            query: {
                'state': state,
                'severity': severity,
                'ecosystem': ecosystem,
                'package': _package,
                'scope': scope,
                'sort': sort,
                'direction': direction,
                'before': before,
                'after': after,
                'first': first,
                'last': last,
                'per_page': perPage,
            },
            errors: {
                304: `Not modified`,
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List organization secrets
     * Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    static dependabotListOrgSecrets(org, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/dependabot/secrets',
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
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @returns dependabot_public_key Response
     * @throws ApiError
     */
    static dependabotGetOrgPublicKey(org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/dependabot/secrets/public-key',
            path: {
                'org': org,
            },
        });
    }
    /**
     * Get an organization secret
     * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns organization_dependabot_secret Response
     * @throws ApiError
     */
    static dependabotGetOrgSecret(org, secretName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/dependabot/secrets/{secret_name}',
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
     * token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization
     * permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns empty_object Response when creating a secret
     * @throws ApiError
     */
    static dependabotCreateOrUpdateOrgSecret(org, secretName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/dependabot/secrets/{secret_name}',
            path: {
                'org': org,
                'secret_name': secretName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete an organization secret
     * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns void
     * @throws ApiError
     */
    static dependabotDeleteOrgSecret(org, secretName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/dependabot/secrets/{secret_name}',
            path: {
                'org': org,
                'secret_name': secretName,
            },
        });
    }
    /**
     * List selected repositories for an organization secret
     * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns any Response
     * @throws ApiError
     */
    static dependabotListSelectedReposForOrgSecret(org, secretName, page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/dependabot/secrets/{secret_name}/repositories',
            path: {
                'org': org,
                'secret_name': secretName,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Set selected repositories for an organization secret
     * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/dependabot/secrets#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static dependabotSetSelectedReposForOrgSecret(org, secretName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/dependabot/secrets/{secret_name}/repositories',
            path: {
                'org': org,
                'secret_name': secretName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Add selected repository to an organization secret
     * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/dependabot/secrets#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param repositoryId
     * @returns void
     * @throws ApiError
     */
    static dependabotAddSelectedRepoToOrgSecret(org, secretName, repositoryId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}',
            path: {
                'org': org,
                'secret_name': secretName,
                'repository_id': repositoryId,
            },
            errors: {
                409: `Conflict when visibility type is not set to selected`,
            },
        });
    }
    /**
     * Remove selected repository from an organization secret
     * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/dependabot/secrets#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param repositoryId
     * @returns void
     * @throws ApiError
     */
    static dependabotRemoveSelectedRepoFromOrgSecret(org, secretName, repositoryId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}',
            path: {
                'org': org,
                'secret_name': secretName,
                'repository_id': repositoryId,
            },
            errors: {
                409: `Conflict when visibility type not set to selected`,
            },
        });
    }
    /**
     * List Dependabot alerts for a repository
     * You must use an access token with the `security_events` scope to use this endpoint with private repositories.
     * You can also use tokens with the `public_repo` scope for public repositories only.
     * GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param state A comma-separated list of states. If specified, only alerts with these states will be returned.
     *
     * Can be: `auto_dismissed`, `dismissed`, `fixed`, `open`
     * @param severity A comma-separated list of severities. If specified, only alerts with these severities will be returned.
     *
     * Can be: `low`, `medium`, `high`, `critical`
     * @param ecosystem A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.
     *
     * Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`
     * @param _package A comma-separated list of package names. If specified, only alerts for these packages will be returned.
     * @param manifest A comma-separated list of full manifest paths. If specified, only alerts for these manifests will be returned.
     * @param scope The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.
     * @param sort The property by which to sort the results.
     * `created` means when the alert was created.
     * `updated` means when the alert's state last changed.
     * @param direction The direction to sort the results by.
     * @param page **Deprecated**. Page number of the results to fetch. Use cursor-based pagination with `before` or `after` instead.
     * @param perPage The number of results per page (max 100).
     * @param before A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.
     * @param after A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.
     * @param first **Deprecated**. The number of results per page (max 100), starting from the first matching result.
     * This parameter must not be used in combination with `last`.
     * Instead, use `per_page` in combination with `after` to fetch the first page of results.
     * @param last **Deprecated**. The number of results per page (max 100), starting from the last matching result.
     * This parameter must not be used in combination with `first`.
     * Instead, use `per_page` in combination with `before` to fetch the last page of results.
     * @returns dependabot_alert Response
     * @throws ApiError
     */
    static dependabotListAlertsForRepo(owner, repo, state, severity, ecosystem, _package, manifest, scope, sort = 'created', direction = 'desc', page = 1, perPage = 30, before, after, first = 30, last) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/dependabot/alerts',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'state': state,
                'severity': severity,
                'ecosystem': ecosystem,
                'package': _package,
                'manifest': manifest,
                'scope': scope,
                'sort': sort,
                'direction': direction,
                'page': page,
                'per_page': perPage,
                'before': before,
                'after': after,
                'first': first,
                'last': last,
            },
            errors: {
                304: `Not modified`,
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a Dependabot alert
     * You must use an access token with the `security_events` scope to use this endpoint with private repositories.
     * You can also use tokens with the `public_repo` scope for public repositories only.
     * GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param alertNumber The number that identifies a Dependabot alert in its repository.
     * You can find this at the end of the URL for a Dependabot alert within GitHub,
     * or in `number` fields in the response from the
     * `GET /repos/{owner}/{repo}/dependabot/alerts` operation.
     * @returns dependabot_alert Response
     * @throws ApiError
     */
    static dependabotGetAlert(owner, repo, alertNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/dependabot/alerts/{alert_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'alert_number': alertNumber,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a Dependabot alert
     * You must use an access token with the `security_events` scope to use this endpoint with private repositories.
     * You can also use tokens with the `public_repo` scope for public repositories only.
     * GitHub Apps must have **Dependabot alerts** write permission to use this endpoint.
     *
     * To use this endpoint, you must have access to security alerts for the repository. For more information, see "[Granting access to security alerts](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param alertNumber The number that identifies a Dependabot alert in its repository.
     * You can find this at the end of the URL for a Dependabot alert within GitHub,
     * or in `number` fields in the response from the
     * `GET /repos/{owner}/{repo}/dependabot/alerts` operation.
     * @param requestBody
     * @returns dependabot_alert Response
     * @throws ApiError
     */
    static dependabotUpdateAlert(owner, repo, alertNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/dependabot/alerts/{alert_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'alert_number': alertNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Resource not found`,
                409: `Conflict`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List repository secrets
     * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    static dependabotListRepoSecrets(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/dependabot/secrets',
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
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns dependabot_public_key Response
     * @throws ApiError
     */
    static dependabotGetRepoPublicKey(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/dependabot/secrets/public-key',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Get a repository secret
     * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns dependabot_secret Response
     * @throws ApiError
     */
    static dependabotGetRepoSecret(owner, repo, secretName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/dependabot/secrets/{secret_name}',
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
     * token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository
     * permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns empty_object Response when creating a secret
     * @throws ApiError
     */
    static dependabotCreateOrUpdateRepoSecret(owner, repo, secretName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/dependabot/secrets/{secret_name}',
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
     * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns void
     * @throws ApiError
     */
    static dependabotDeleteRepoSecret(owner, repo, secretName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/dependabot/secrets/{secret_name}',
            path: {
                'owner': owner,
                'repo': repo,
                'secret_name': secretName,
            },
        });
    }
}
exports.DependabotService = DependabotService;
//# sourceMappingURL=DependabotService.js.map