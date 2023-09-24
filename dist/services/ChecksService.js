"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecksService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ChecksService {
    /**
     * Create a check run
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.
     *
     * In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns check_run Response
     * @throws ApiError
     */
    static checksCreate(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/check-runs',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a check run
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param checkRunId The unique identifier of the check run.
     * @returns check_run Response
     * @throws ApiError
     */
    static checksGet(owner, repo, checkRunId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/check-runs/{check_run_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'check_run_id': checkRunId,
            },
        });
    }
    /**
     * Update a check run
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param checkRunId The unique identifier of the check run.
     * @param requestBody
     * @returns check_run Response
     * @throws ApiError
     */
    static checksUpdate(owner, repo, checkRunId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/check-runs/{check_run_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'check_run_id': checkRunId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List check run annotations
     * Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param checkRunId The unique identifier of the check run.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns check_annotation Response
     * @throws ApiError
     */
    static checksListAnnotations(owner, repo, checkRunId, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations',
            path: {
                'owner': owner,
                'repo': repo,
                'check_run_id': checkRunId,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Rerequest a check run
     * Triggers GitHub to rerequest an existing check run, without pushing new code to a repository. This endpoint will trigger the [`check_run` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) event with the action `rerequested`. When a check run is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
     *
     * To rerequest a check run, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
     *
     * For more information about how to re-run GitHub Actions jobs, see "[Re-run a job from a workflow run](https://docs.github.com/rest/actions/workflow-runs#re-run-a-job-from-a-workflow-run)".
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param checkRunId The unique identifier of the check run.
     * @returns empty_object Response
     * @throws ApiError
     */
    static checksRerequestRun(owner, repo, checkRunId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest',
            path: {
                'owner': owner,
                'repo': repo,
                'check_run_id': checkRunId,
            },
            errors: {
                403: `Forbidden if the check run is not rerequestable or doesn't belong to the authenticated GitHub App`,
                404: `Resource not found`,
                422: `Validation error if the check run is not rerequestable`,
            },
        });
    }
    /**
     * Create a check suite
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * By default, check suites are automatically created when you create a [check run](https://docs.github.com/rest/checks/runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/rest/checks/suites#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns check_suite Response when the suite already exists
     * @throws ApiError
     */
    static checksCreateSuite(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/check-suites',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update repository preferences for check suites
     * Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/rest/checks/suites#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns check_suite_preference Response
     * @throws ApiError
     */
    static checksSetSuitesPreferences(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/check-suites/preferences',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a check suite
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param checkSuiteId The unique identifier of the check suite.
     * @returns check_suite Response
     * @throws ApiError
     */
    static checksGetSuite(owner, repo, checkSuiteId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/check-suites/{check_suite_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'check_suite_id': checkSuiteId,
            },
        });
    }
    /**
     * List check runs in a check suite
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param checkSuiteId The unique identifier of the check suite.
     * @param checkName Returns check runs with the specified `name`.
     * @param status Returns check runs with the specified `status`.
     * @param filter Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    static checksListForSuite(owner, repo, checkSuiteId, checkName, status, filter = 'latest', perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs',
            path: {
                'owner': owner,
                'repo': repo,
                'check_suite_id': checkSuiteId,
            },
            query: {
                'check_name': checkName,
                'status': status,
                'filter': filter,
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Rerequest a check suite
     * Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
     *
     * To rerequest a check suite, your GitHub App must have the `checks:write` permission on a private repository or pull access to a public repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param checkSuiteId The unique identifier of the check suite.
     * @returns empty_object Response
     * @throws ApiError
     */
    static checksRerequestSuite(owner, repo, checkSuiteId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest',
            path: {
                'owner': owner,
                'repo': repo,
                'check_suite_id': checkSuiteId,
            },
        });
    }
    /**
     * List check runs for a Git reference
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref The commit reference. Can be a commit SHA, branch name (`heads/BRANCH_NAME`), or tag name (`tags/TAG_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
     * @param checkName Returns check runs with the specified `name`.
     * @param status Returns check runs with the specified `status`.
     * @param filter Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param appId
     * @returns any Response
     * @throws ApiError
     */
    static checksListForRef(owner, repo, ref, checkName, status, filter = 'latest', perPage = 30, page = 1, appId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{ref}/check-runs',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            query: {
                'check_name': checkName,
                'status': status,
                'filter': filter,
                'per_page': perPage,
                'page': page,
                'app_id': appId,
            },
        });
    }
    /**
     * List check suites for a Git reference
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref The commit reference. Can be a commit SHA, branch name (`heads/BRANCH_NAME`), or tag name (`tags/TAG_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
     * @param appId Filters check suites by GitHub App `id`.
     * @param checkName Returns check runs with the specified `name`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    static checksListSuitesForRef(owner, repo, ref, appId, checkName, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{ref}/check-suites',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            query: {
                'app_id': appId,
                'check_name': checkName,
                'per_page': perPage,
                'page': page,
            },
        });
    }
}
exports.ChecksService = ChecksService;
//# sourceMappingURL=ChecksService.js.map