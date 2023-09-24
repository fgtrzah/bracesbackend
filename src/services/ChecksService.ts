/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { check_annotation } from '../models/check_annotation';
import type { check_run } from '../models/check_run';
import type { check_suite } from '../models/check_suite';
import type { check_suite_preference } from '../models/check_suite_preference';
import type { empty_object } from '../models/empty_object';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChecksService {

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
    public static checksCreate(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * The name of the check. For example, "code-coverage".
             */
            name: string;
            /**
             * The SHA of the commit.
             */
            head_sha: string;
            /**
             * The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.
             */
            details_url?: string;
            /**
             * A reference for the run on the integrator's system.
             */
            external_id?: string;
            /**
             * The current status.
             */
            status?: 'queued' | 'in_progress' | 'completed';
            /**
             * The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
             */
            started_at?: string;
            /**
             * **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check.
             * **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. You cannot change a check run conclusion to `stale`, only GitHub can set this.
             */
            conclusion?: 'action_required' | 'cancelled' | 'failure' | 'neutral' | 'success' | 'skipped' | 'stale' | 'timed_out';
            /**
             * The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
             */
            completed_at?: string;
            /**
             * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run.
             */
            output?: {
                /**
                 * The title of the check run.
                 */
                title: string;
                /**
                 * The summary of the check run. This parameter supports Markdown. **Maximum length**: 65535 characters.
                 */
                summary: string;
                /**
                 * The details of the check run. This parameter supports Markdown. **Maximum length**: 65535 characters.
                 */
                text?: string;
                /**
                 * Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/checks/runs#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. GitHub Actions are limited to 10 warning annotations and 10 error annotations per step. For details about how you can view annotations on GitHub, see "[About status checks](https://docs.github.com/articles/about-status-checks#checks)".
                 */
                annotations?: Array<{
                    /**
                     * The path of the file to add an annotation to. For example, `assets/css/main.css`.
                     */
                    path: string;
                    /**
                     * The start line of the annotation. Line numbers start at 1.
                     */
                    start_line: number;
                    /**
                     * The end line of the annotation.
                     */
                    end_line: number;
                    /**
                     * The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values. Column numbers start at 1.
                     */
                    start_column?: number;
                    /**
                     * The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
                     */
                    end_column?: number;
                    /**
                     * The level of the annotation.
                     */
                    annotation_level: 'notice' | 'warning' | 'failure';
                    /**
                     * A short description of the feedback for these lines of code. The maximum size is 64 KB.
                     */
                    message: string;
                    /**
                     * The title that represents the annotation. The maximum size is 255 characters.
                     */
                    title?: string;
                    /**
                     * Details about this annotation. The maximum size is 64 KB.
                     */
                    raw_details?: string;
                }>;
                /**
                 * Adds images to the output displayed in the GitHub pull request UI.
                 */
                images?: Array<{
                    /**
                     * The alternative text for the image.
                     */
                    alt: string;
                    /**
                     * The full URL of the image.
                     */
                    image_url: string;
                    /**
                     * A short image description.
                     */
                    caption?: string;
                }>;
            };
            /**
             * Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [`check_run.requested_action` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/guides/using-the-rest-api-to-interact-with-checks#check-runs-and-requested-actions)."
             */
            actions?: Array<{
                /**
                 * The text to be displayed on a button in the web UI. The maximum size is 20 characters.
                 */
                label: string;
                /**
                 * A short explanation of what this action would do. The maximum size is 40 characters.
                 */
                description: string;
                /**
                 * A reference for the action on the integrator's system. The maximum size is 20 characters.
                 */
                identifier: string;
            }>;
        },
    ): CancelablePromise<check_run> {
        return __request(OpenAPI, {
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
    public static checksGet(
        owner: string,
        repo: string,
        checkRunId: number,
    ): CancelablePromise<check_run> {
        return __request(OpenAPI, {
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
    public static checksUpdate(
        owner: string,
        repo: string,
        checkRunId: number,
        requestBody: {
            /**
             * The name of the check. For example, "code-coverage".
             */
            name?: string;
            /**
             * The URL of the integrator's site that has the full details of the check.
             */
            details_url?: string;
            /**
             * A reference for the run on the integrator's system.
             */
            external_id?: string;
            /**
             * This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
             */
            started_at?: string;
            /**
             * The current status.
             */
            status?: 'queued' | 'in_progress' | 'completed';
            /**
             * **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check.
             * **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. You cannot change a check run conclusion to `stale`, only GitHub can set this.
             */
            conclusion?: 'action_required' | 'cancelled' | 'failure' | 'neutral' | 'success' | 'skipped' | 'stale' | 'timed_out';
            /**
             * The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
             */
            completed_at?: string;
            /**
             * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run.
             */
            output?: {
                /**
                 * **Required**.
                 */
                title?: string;
                /**
                 * Can contain Markdown.
                 */
                summary: string;
                /**
                 * Can contain Markdown.
                 */
                text?: string;
                /**
                 * Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. Annotations are visible in GitHub's pull request UI. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/checks/runs#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. GitHub Actions are limited to 10 warning annotations and 10 error annotations per step. For details about annotations in the UI, see "[About status checks](https://docs.github.com/articles/about-status-checks#checks)".
                 */
                annotations?: Array<{
                    /**
                     * The path of the file to add an annotation to. For example, `assets/css/main.css`.
                     */
                    path: string;
                    /**
                     * The start line of the annotation. Line numbers start at 1.
                     */
                    start_line: number;
                    /**
                     * The end line of the annotation.
                     */
                    end_line: number;
                    /**
                     * The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values. Column numbers start at 1.
                     */
                    start_column?: number;
                    /**
                     * The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
                     */
                    end_column?: number;
                    /**
                     * The level of the annotation.
                     */
                    annotation_level: 'notice' | 'warning' | 'failure';
                    /**
                     * A short description of the feedback for these lines of code. The maximum size is 64 KB.
                     */
                    message: string;
                    /**
                     * The title that represents the annotation. The maximum size is 255 characters.
                     */
                    title?: string;
                    /**
                     * Details about this annotation. The maximum size is 64 KB.
                     */
                    raw_details?: string;
                }>;
                /**
                 * Adds images to the output displayed in the GitHub pull request UI.
                 */
                images?: Array<{
                    /**
                     * The alternative text for the image.
                     */
                    alt: string;
                    /**
                     * The full URL of the image.
                     */
                    image_url: string;
                    /**
                     * A short image description.
                     */
                    caption?: string;
                }>;
            };
            /**
             * Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/guides/using-the-rest-api-to-interact-with-checks#check-runs-and-requested-actions)."
             */
            actions?: Array<{
                /**
                 * The text to be displayed on a button in the web UI. The maximum size is 20 characters.
                 */
                label: string;
                /**
                 * A short explanation of what this action would do. The maximum size is 40 characters.
                 */
                description: string;
                /**
                 * A reference for the action on the integrator's system. The maximum size is 20 characters.
                 */
                identifier: string;
            }>;
        },
    ): CancelablePromise<check_run> {
        return __request(OpenAPI, {
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
    public static checksListAnnotations(
        owner: string,
        repo: string,
        checkRunId: number,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<check_annotation>> {
        return __request(OpenAPI, {
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
    public static checksRerequestRun(
        owner: string,
        repo: string,
        checkRunId: number,
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
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
    public static checksCreateSuite(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * The sha of the head commit.
             */
            head_sha: string;
        },
    ): CancelablePromise<check_suite> {
        return __request(OpenAPI, {
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
    public static checksSetSuitesPreferences(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default.
             */
            auto_trigger_checks?: Array<{
                /**
                 * The `id` of the GitHub App.
                 */
                app_id: number;
                /**
                 * Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.
                 */
                setting: boolean;
            }>;
        },
    ): CancelablePromise<check_suite_preference> {
        return __request(OpenAPI, {
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
    public static checksGetSuite(
        owner: string,
        repo: string,
        checkSuiteId: number,
    ): CancelablePromise<check_suite> {
        return __request(OpenAPI, {
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
    public static checksListForSuite(
        owner: string,
        repo: string,
        checkSuiteId: number,
        checkName?: string,
        status?: 'queued' | 'in_progress' | 'completed',
        filter: 'latest' | 'all' = 'latest',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        check_runs: Array<check_run>;
    }> {
        return __request(OpenAPI, {
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
    public static checksRerequestSuite(
        owner: string,
        repo: string,
        checkSuiteId: number,
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
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
    public static checksListForRef(
        owner: string,
        repo: string,
        ref: string,
        checkName?: string,
        status?: 'queued' | 'in_progress' | 'completed',
        filter: 'latest' | 'all' = 'latest',
        perPage: number = 30,
        page: number = 1,
        appId?: number,
    ): CancelablePromise<{
        total_count: number;
        check_runs: Array<check_run>;
    }> {
        return __request(OpenAPI, {
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
    public static checksListSuitesForRef(
        owner: string,
        repo: string,
        ref: string,
        appId?: number,
        checkName?: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        check_suites: Array<check_suite>;
    }> {
        return __request(OpenAPI, {
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
