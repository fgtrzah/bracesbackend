"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityAdvisoriesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SecurityAdvisoriesService {
    /**
     * List global security advisories
     * Lists all global security advisories that match the specified parameters. If no other parameters are defined, the request will return only GitHub-reviewed advisories that are not malware.
     *
     * By default, all responses will exclude advisories for malware, because malware are not standard vulnerabilities. To list advisories for malware, you must include the `type` parameter in your request, with the value `malware`. For more information about the different types of security advisories, see "[About the GitHub Advisory database](https://docs.github.com/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database#about-types-of-security-advisories)."
     * @param ghsaId If specified, only advisories with this GHSA (GitHub Security Advisory) identifier will be returned.
     * @param type If specified, only advisories of this type will be returned. By default, a request with no other parameters defined will only return reviewed advisories that are not malware.
     * @param cveId If specified, only advisories with this CVE (Common Vulnerabilities and Exposures) identifier will be returned.
     * @param ecosystem If specified, only advisories for these ecosystems will be returned.
     * @param severity If specified, only advisories with these severities will be returned.
     * @param cwes If specified, only advisories with these Common Weakness Enumerations (CWEs) will be returned.
     *
     * Example: `cwes=79,284,22` or `cwes[]=79&cwes[]=284&cwes[]=22`
     * @param isWithdrawn Whether to only return advisories that have been withdrawn.
     * @param affects If specified, only return advisories that affect any of `package` or `package@version`. A maximum of 1000 packages can be specified.
     * If the query parameter causes the URL to exceed the maximum URL length supported by your client, you must specify fewer packages.
     *
     * Example: `affects=package1,package2@1.0.0,package3@^2.0.0` or `affects[]=package1&affects[]=package2@1.0.0`
     * @param published If specified, only return advisories that were published on a date or date range.
     *
     * For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
     * @param updated If specified, only return advisories that were updated on a date or date range.
     *
     * For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
     * @param modified If specified, only show advisories that were updated or published on a date or date range.
     *
     * For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
     * @param before A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.
     * @param after A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.
     * @param direction The direction to sort the results by.
     * @param perPage The number of results per page (max 100).
     * @param sort The property to sort the results by.
     * @returns global_advisory Response
     * @throws ApiError
     */
    static securityAdvisoriesListGlobalAdvisories(ghsaId, type = 'reviewed', cveId, ecosystem, severity, cwes, isWithdrawn, affects, published, updated, modified, before, after, direction = 'desc', perPage = 30, sort = 'published') {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/advisories',
            query: {
                'ghsa_id': ghsaId,
                'type': type,
                'cve_id': cveId,
                'ecosystem': ecosystem,
                'severity': severity,
                'cwes': cwes,
                'is_withdrawn': isWithdrawn,
                'affects': affects,
                'published': published,
                'updated': updated,
                'modified': modified,
                'before': before,
                'after': after,
                'direction': direction,
                'per_page': perPage,
                'sort': sort,
            },
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
                429: `Too many requests`,
            },
        });
    }
    /**
     * Get a global security advisory
     * Gets a global security advisory using its GitHub Security Advisory (GHSA) identifier.
     * @param ghsaId The GHSA (GitHub Security Advisory) identifier of the advisory.
     * @returns global_advisory Response
     * @throws ApiError
     */
    static securityAdvisoriesGetGlobalAdvisory(ghsaId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/advisories/{ghsa_id}',
            path: {
                'ghsa_id': ghsaId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * List repository security advisories for an organization
     * Lists repository security advisories for an organization.
     *
     * To use this endpoint, you must be an owner or security manager for the organization, and you must use an access token with the `repo` scope or `repository_advisories:write` permission.
     * @param org The organization name. The name is not case sensitive.
     * @param direction The direction to sort the results by.
     * @param sort The property to sort the results by.
     * @param before A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.
     * @param after A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.
     * @param perPage The number of advisories to return per page.
     * @param state Filter by the state of the repository advisories. Only advisories of this state will be returned.
     * @returns repository_advisory Response
     * @throws ApiError
     */
    static securityAdvisoriesListOrgRepositoryAdvisories(org, direction = 'desc', sort = 'created', before, after, perPage = 30, state) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/security-advisories',
            path: {
                'org': org,
            },
            query: {
                'direction': direction,
                'sort': sort,
                'before': before,
                'after': after,
                'per_page': perPage,
                'state': state,
            },
            errors: {
                400: `Bad Request`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * List repository security advisories
     * Lists security advisories in a repository.
     * You must authenticate using an access token with the `repo` scope or `repository_advisories:read` permission
     * in order to get published security advisories in a private repository, or any unpublished security advisories that you have access to.
     *
     * You can access unpublished security advisories from a repository if you are a security manager or administrator of that repository, or if you are a collaborator on any security advisory.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param direction The direction to sort the results by.
     * @param sort The property to sort the results by.
     * @param before A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.
     * @param after A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.
     * @param perPage Number of advisories to return per page.
     * @param state Filter by state of the repository advisories. Only advisories of this state will be returned.
     * @returns repository_advisory Response
     * @throws ApiError
     */
    static securityAdvisoriesListRepositoryAdvisories(owner, repo, direction = 'desc', sort = 'created', before, after, perPage = 30, state) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/security-advisories',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'direction': direction,
                'sort': sort,
                'before': before,
                'after': after,
                'per_page': perPage,
                'state': state,
            },
            errors: {
                400: `Bad Request`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Create a repository security advisory
     * Creates a new repository security advisory.
     * You must authenticate using an access token with the `repo` scope or `repository_advisories:write` permission to use this endpoint.
     *
     * In order to create a draft repository security advisory, you must be a security manager or administrator of that repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns repository_advisory Response
     * @throws ApiError
     */
    static securityAdvisoriesCreateRepositoryAdvisory(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/security-advisories',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Privately report a security vulnerability
     * Report a security vulnerability to the maintainers of the repository.
     * See "[Privately reporting a security vulnerability](https://docs.github.com/code-security/security-advisories/guidance-on-reporting-and-writing/privately-reporting-a-security-vulnerability)" for more information about private vulnerability reporting.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns repository_advisory Response
     * @throws ApiError
     */
    static securityAdvisoriesCreatePrivateVulnerabilityReport(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/security-advisories/reports',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a repository security advisory
     * Get a repository security advisory using its GitHub Security Advisory (GHSA) identifier.
     * You can access any published security advisory on a public repository.
     * You must authenticate using an access token with the `repo` scope or `repository_advisories:read` permission
     * in order to get a published security advisory in a private repository, or any unpublished security advisory that you have access to.
     *
     * You can access an unpublished security advisory from a repository if you are a security manager or administrator of that repository, or if you are a
     * collaborator on the security advisory.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ghsaId The GHSA (GitHub Security Advisory) identifier of the advisory.
     * @returns repository_advisory Response
     * @throws ApiError
     */
    static securityAdvisoriesGetRepositoryAdvisory(owner, repo, ghsaId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/security-advisories/{ghsa_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'ghsa_id': ghsaId,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a repository security advisory
     * Update a repository security advisory using its GitHub Security Advisory (GHSA) identifier.
     * You must authenticate using an access token with the `repo` scope or `repository_advisories:write` permission to use this endpoint.
     *
     * In order to update any security advisory, you must be a security manager or administrator of that repository,
     * or a collaborator on the repository security advisory.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ghsaId The GHSA (GitHub Security Advisory) identifier of the advisory.
     * @param requestBody
     * @returns repository_advisory Response
     * @throws ApiError
     */
    static securityAdvisoriesUpdateRepositoryAdvisory(owner, repo, ghsaId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/security-advisories/{ghsa_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'ghsa_id': ghsaId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Request a CVE for a repository security advisory
     * If you want a CVE identification number for the security vulnerability in your project, and don't already have one, you can request a CVE identification number from GitHub. For more information see "[Requesting a CVE identification number](https://docs.github.com/code-security/security-advisories/repository-security-advisories/publishing-a-repository-security-advisory#requesting-a-cve-identification-number-optional)."
     *
     * You may request a CVE for public repositories, but cannot do so for private repositories.
     *
     * You must authenticate using an access token with the `repo` scope or `repository_advisories:write` permission to use this endpoint.
     *
     * In order to request a CVE for a repository security advisory, you must be a security manager or administrator of that repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ghsaId The GHSA (GitHub Security Advisory) identifier of the advisory.
     * @returns any Accepted
     * @throws ApiError
     */
    static securityAdvisoriesCreateRepositoryAdvisoryCveRequest(owner, repo, ghsaId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve',
            path: {
                'owner': owner,
                'repo': repo,
                'ghsa_id': ghsaId,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
}
exports.SecurityAdvisoriesService = SecurityAdvisoriesService;
//# sourceMappingURL=SecurityAdvisoriesService.js.map