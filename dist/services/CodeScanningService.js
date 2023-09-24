"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeScanningService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CodeScanningService {
    /**
     * List code scanning alerts for an organization
     * Lists code scanning alerts for the default branch for all eligible repositories in an organization. Eligible repositories are repositories that are owned by organizations that you own or for which you are a security manager. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
     *
     * To use this endpoint, you must be an owner or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have the `security_events` read permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param toolName The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
     * @param toolGuid The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
     * @param before A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.
     * @param after A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @param direction The direction to sort the results by.
     * @param state If specified, only code scanning alerts with this state will be returned.
     * @param sort The property by which to sort the results.
     * @param severity If specified, only code scanning alerts with this severity will be returned.
     * @returns code_scanning_organization_alert_items Response
     * @throws ApiError
     */
    static codeScanningListAlertsForOrg(org, toolName, toolGuid, before, after, page = 1, perPage = 30, direction = 'desc', state, sort = 'created', severity) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/code-scanning/alerts',
            path: {
                'org': org,
            },
            query: {
                'tool_name': toolName,
                'tool_guid': toolGuid,
                'before': before,
                'after': after,
                'page': page,
                'per_page': perPage,
                'direction': direction,
                'state': state,
                'sort': sort,
                'severity': severity,
            },
            errors: {
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * List code scanning alerts for a repository
     * Lists code scanning alerts.
     *
     * To use this endpoint, you must use an access token with the `security_events` scope or, for alerts from public repositories only, an access token with the `public_repo` scope.
     *
     * GitHub Apps must have the `security_events` read
     * permission to use this endpoint.
     *
     * The response includes a `most_recent_instance` object.
     * This provides details of the most recent instance of this alert
     * for the default branch (or for the specified Git reference if you used `ref` in the request).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param toolName The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
     * @param toolGuid The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @param ref The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
     * @param direction The direction to sort the results by.
     * @param sort The property by which to sort the results.
     * @param state If specified, only code scanning alerts with this state will be returned.
     * @param severity If specified, only code scanning alerts with this severity will be returned.
     * @returns code_scanning_alert_items Response
     * @throws ApiError
     */
    static codeScanningListAlertsForRepo(owner, repo, toolName, toolGuid, page = 1, perPage = 30, ref, direction = 'desc', sort = 'created', state, severity) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/code-scanning/alerts',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'tool_name': toolName,
                'tool_guid': toolGuid,
                'page': page,
                'per_page': perPage,
                'ref': ref,
                'direction': direction,
                'sort': sort,
                'state': state,
                'severity': severity,
            },
            errors: {
                304: `Not modified`,
                403: `Response if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Get a code scanning alert
     * Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint with private repos, the `public_repo` scope also grants permission to read security events on public repos only. GitHub Apps must have the `security_events` read permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param alertNumber The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
     * @returns code_scanning_alert Response
     * @throws ApiError
     */
    static codeScanningGetAlert(owner, repo, alertNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'alert_number': alertNumber,
            },
            errors: {
                304: `Not modified`,
                403: `Response if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Update a code scanning alert
     * Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint with private repositories. You can also use tokens with the `public_repo` scope for public repositories only. GitHub Apps must have the `security_events` write permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param alertNumber The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
     * @param requestBody
     * @returns code_scanning_alert Response
     * @throws ApiError
     */
    static codeScanningUpdateAlert(owner, repo, alertNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'alert_number': alertNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Response if the repository is archived or if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * List instances of a code scanning alert
     * Lists all instances of the specified code scanning alert.
     * You must use an access token with the `security_events` scope to use this endpoint with private repos,
     * the `public_repo` scope also grants permission to read security events on public repos only.
     * GitHub Apps must have the `security_events` read permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param alertNumber The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @param ref The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
     * @returns code_scanning_alert_instance Response
     * @throws ApiError
     */
    static codeScanningListAlertInstances(owner, repo, alertNumber, page = 1, perPage = 30, ref) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
            path: {
                'owner': owner,
                'repo': repo,
                'alert_number': alertNumber,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'ref': ref,
            },
            errors: {
                403: `Response if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * List code scanning analyses for a repository
     * Lists the details of all code scanning analyses for a repository,
     * starting with the most recent.
     * The response is paginated and you can use the `page` and `per_page` parameters
     * to list the analyses you're interested in.
     * By default 30 analyses are listed per page.
     *
     * The `rules_count` field in the response give the number of rules
     * that were run in the analysis.
     * For very old analyses this data is not available,
     * and `0` is returned in this field.
     *
     * You must use an access token with the `security_events` scope to use this endpoint with private repos,
     * the `public_repo` scope also grants permission to read security events on public repos only.
     * GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * **Deprecation notice**:
     * The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param toolName The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
     * @param toolGuid The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @param ref The Git reference for the analyses you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
     * @param sarifId Filter analyses belonging to the same SARIF upload.
     * @param direction The direction to sort the results by.
     * @param sort The property by which to sort the results.
     * @returns code_scanning_analysis Response
     * @throws ApiError
     */
    static codeScanningListRecentAnalyses(owner, repo, toolName, toolGuid, page = 1, perPage = 30, ref, sarifId, direction = 'desc', sort = 'created') {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/code-scanning/analyses',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'tool_name': toolName,
                'tool_guid': toolGuid,
                'page': page,
                'per_page': perPage,
                'ref': ref,
                'sarif_id': sarifId,
                'direction': direction,
                'sort': sort,
            },
            errors: {
                403: `Response if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Get a code scanning analysis for a repository
     * Gets a specified code scanning analysis for a repository.
     * You must use an access token with the `security_events` scope to use this endpoint with private repos,
     * the `public_repo` scope also grants permission to read security events on public repos only.
     * GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * The default JSON response contains fields that describe the analysis.
     * This includes the Git reference and commit SHA to which the analysis relates,
     * the datetime of the analysis, the name of the code scanning tool,
     * and the number of alerts.
     *
     * The `rules_count` field in the default response give the number of rules
     * that were run in the analysis.
     * For very old analyses this data is not available,
     * and `0` is returned in this field.
     *
     * If you use the Accept header `application/sarif+json`,
     * the response contains the analysis data that was uploaded.
     * This is formatted as
     * [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param analysisId The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.
     * @returns code_scanning_analysis Response
     * @throws ApiError
     */
    static codeScanningGetAnalysis(owner, repo, analysisId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'analysis_id': analysisId,
            },
            errors: {
                403: `Response if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Delete a code scanning analysis from a repository
     * Deletes a specified code scanning analysis from a repository. For
     * private repositories, you must use an access token with the `repo` scope. For public repositories,
     * you must use an access token with `public_repo` scope.
     * GitHub Apps must have the `security_events` write permission to use this endpoint.
     *
     * You can delete one analysis at a time.
     * To delete a series of analyses, start with the most recent analysis and work backwards.
     * Conceptually, the process is similar to the undo function in a text editor.
     *
     * When you list the analyses for a repository,
     * one or more will be identified as deletable in the response:
     *
     * ```
     * "deletable": true
     * ```
     *
     * An analysis is deletable when it's the most recent in a set of analyses.
     * Typically, a repository will have multiple sets of analyses
     * for each enabled code scanning tool,
     * where a set is determined by a unique combination of analysis values:
     *
     * * `ref`
     * * `tool`
     * * `category`
     *
     * If you attempt to delete an analysis that is not the most recent in a set,
     * you'll get a 400 response with the message:
     *
     * ```
     * Analysis specified is not deletable.
     * ```
     *
     * The response from a successful `DELETE` operation provides you with
     * two alternative URLs for deleting the next analysis in the set:
     * `next_analysis_url` and `confirm_delete_url`.
     * Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis
     * in a set. This is a useful option if you want to preserve at least one analysis
     * for the specified tool in your repository.
     * Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool.
     * When you delete the last analysis in a set, the value of `next_analysis_url` and `confirm_delete_url`
     * in the 200 response is `null`.
     *
     * As an example of the deletion process,
     * let's imagine that you added a workflow that configured a particular code scanning tool
     * to analyze the code in a repository. This tool has added 15 analyses:
     * 10 on the default branch, and another 5 on a topic branch.
     * You therefore have two separate sets of analyses for this tool.
     * You've now decided that you want to remove all of the analyses for the tool.
     * To do this you must make 15 separate deletion requests.
     * To start, you must find an analysis that's identified as deletable.
     * Each set of analyses always has one that's identified as deletable.
     * Having found the deletable analysis for one of the two sets,
     * delete this analysis and then continue deleting the next analysis in the set until they're all deleted.
     * Then repeat the process for the second set.
     * The procedure therefore consists of a nested loop:
     *
     * **Outer loop**:
     * * List the analyses for the repository, filtered by tool.
     * * Parse this list to find a deletable analysis. If found:
     *
     * **Inner loop**:
     * * Delete the identified analysis.
     * * Parse the response for the value of `confirm_delete_url` and, if found, use this in the next iteration.
     *
     * The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `confirm_delete_url` value. Alternatively, you could use the `next_analysis_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param analysisId The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.
     * @param confirmDelete Allow deletion if the specified analysis is the last in a set. If you attempt to delete the final analysis in a set without setting this parameter to `true`, you'll get a 400 response with the message: `Analysis is last of its type and deletion may result in the loss of historical alert data. Please specify confirm_delete.`
     * @returns code_scanning_analysis_deletion Response
     * @throws ApiError
     */
    static codeScanningDeleteAnalysis(owner, repo, analysisId, confirmDelete) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'analysis_id': analysisId,
            },
            query: {
                'confirm_delete': confirmDelete,
            },
            errors: {
                400: `Bad Request`,
                403: `Response if the repository is archived or if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * List CodeQL databases for a repository
     * Lists the CodeQL databases that are available in a repository.
     *
     * For private repositories, you must use an access token with the `security_events` scope.
     * For public repositories, you can use tokens with the `security_events` or `public_repo` scope.
     * GitHub Apps must have the `contents` read permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns code_scanning_codeql_database Response
     * @throws ApiError
     */
    static codeScanningListCodeqlDatabases(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/code-scanning/codeql/databases',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `Response if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Get a CodeQL database for a repository
     * Gets a CodeQL database for a language in a repository.
     *
     * By default this endpoint returns JSON metadata about the CodeQL database. To
     * download the CodeQL database binary content, set the `Accept` header of the request
     * to [`application/zip`](https://docs.github.com/rest/overview/media-types), and make sure
     * your HTTP client is configured to follow redirects or use the `Location` header
     * to make a second request to get the redirect URL.
     *
     * For private repositories, you must use an access token with the `security_events` scope.
     * For public repositories, you can use tokens with the `security_events` or `public_repo` scope.
     * GitHub Apps must have the `contents` read permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param language The language of the CodeQL database.
     * @returns code_scanning_codeql_database Response
     * @throws ApiError
     */
    static codeScanningGetCodeqlDatabase(owner, repo, language) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}',
            path: {
                'owner': owner,
                'repo': repo,
                'language': language,
            },
            errors: {
                302: `Found`,
                403: `Response if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Get a code scanning default setup configuration
     * Gets a code scanning default setup configuration.
     * You must use an access token with the `repo` scope to use this endpoint with private repos or the `public_repo`
     * scope for public repos. GitHub Apps must have the `repo` write permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns code_scanning_default_setup Response
     * @throws ApiError
     */
    static codeScanningGetDefaultSetup(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/code-scanning/default-setup',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `Response if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Update a code scanning default setup configuration
     * Updates a code scanning default setup configuration.
     * You must use an access token with the `repo` scope to use this endpoint with private repos or the `public_repo`
     * scope for public repos. GitHub Apps must have the `repo` write permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns empty_object Response
     * @returns code_scanning_default_setup_update_response Response
     * @throws ApiError
     */
    static codeScanningUpdateDefaultSetup(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/code-scanning/default-setup',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Response if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                409: `Response if there is already a validation run in progress with a different default setup configuration`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Upload an analysis as SARIF data
     * Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint for private repositories. You can also use tokens with the `public_repo` scope for public repositories only. GitHub Apps must have the `security_events` write permission to use this endpoint. For troubleshooting information, see "[Troubleshooting SARIF uploads](https://docs.github.com/code-security/code-scanning/troubleshooting-sarif)."
     *
     * There are two places where you can upload code scanning results.
     * - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."
     * - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."
     *
     * You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:
     *
     * ```
     * gzip -c analysis-data.sarif | base64 -w0
     * ```
     * <br>
     * SARIF upload supports a maximum number of entries per the following data objects, and an analysis will be rejected if any of these objects is above its maximum value. For some objects, there are additional values over which the entries will be ignored while keeping the most important entries whenever applicable.
     * To get the most out of your analysis when it includes data above the supported limits, try to optimize the analysis configuration. For example, for the CodeQL tool, identify and remove the most noisy queries. For more information, see "[SARIF results exceed one or more limits](https://docs.github.com/code-security/code-scanning/troubleshooting-sarif/results-exceed-limit)."
     *
     *
     * | **SARIF data**                   | **Maximum values** | **Additional limits**                                                            |
     * |----------------------------------|:------------------:|----------------------------------------------------------------------------------|
     * | Runs per file                    |         20         |                                                                                  |
     * | Results per run                  |       25,000       | Only the top 5,000 results will be included, prioritized by severity.            |
     * | Rules per run                    |       25,000       |                                                                                  |
     * | Tool extensions per run          |        100         |                                                                                  |
     * | Thread Flow Locations per result |       10,000       | Only the top 1,000 Thread Flow Locations will be included, using prioritization. |
     * | Location per result                 |       1,000        | Only 100 locations will be included.                                             |
     * | Tags per rule                       |         20         | Only 10 tags will be included.                                                   |
     *
     *
     * The `202 Accepted` response includes an `id` value.
     * You can use this ID to check the status of the upload by using it in the `/sarifs/{sarif_id}` endpoint.
     * For more information, see "[Get information about a SARIF upload](/rest/code-scanning/code-scanning#get-information-about-a-sarif-upload)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns code_scanning_sarifs_receipt Response
     * @throws ApiError
     */
    static codeScanningUploadSarif(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/code-scanning/sarifs',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request if the sarif field is invalid`,
                403: `Response if the repository is archived or if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
                413: `Payload Too Large if the sarif field is too large`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Get information about a SARIF upload
     * Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/code-scanning/code-scanning#get-a-code-scanning-analysis-for-a-repository)." You must use an access token with the `security_events` scope to use this endpoint with private repos, the `public_repo` scope also grants permission to read security events on public repos only. GitHub Apps must have the `security_events` read permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param sarifId The SARIF ID obtained after uploading.
     * @returns code_scanning_sarifs_status Response
     * @throws ApiError
     */
    static codeScanningGetSarif(owner, repo, sarifId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'sarif_id': sarifId,
            },
            errors: {
                403: `Response if GitHub Advanced Security is not enabled for this repository`,
                404: `Not Found if the sarif id does not match any upload`,
                503: `Service unavailable`,
            },
        });
    }
}
exports.CodeScanningService = CodeScanningService;
//# sourceMappingURL=CodeScanningService.js.map