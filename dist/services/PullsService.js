"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PullsService {
    /**
     * List pull requests
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param state Either `open`, `closed`, or `all` to filter by state.
     * @param head Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.
     * @param base Filter pulls by base branch name. Example: `gh-pages`.
     * @param sort What to sort results by. `popularity` will sort by the number of comments. `long-running` will sort by date created and will limit the results to pull requests that have been open for more than a month and have had activity within the past month.
     * @param direction The direction of the sort. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns pull_request_simple Response
     * @throws ApiError
     */
    static pullsList(owner, repo, state = 'open', head, base, sort = 'created', direction, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'state': state,
                'head': head,
                'base': base,
                'sort': sort,
                'direction': direction,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Create a pull request
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns pull_request Response
     * @throws ApiError
     */
    static pullsCreate(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List review comments in a repository
     * Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param sort
     * @param direction The direction to sort results. Ignored without `sort` parameter.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns pull_request_review_comment Response
     * @throws ApiError
     */
    static pullsListReviewCommentsForRepo(owner, repo, sort, direction, since, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/comments',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'sort': sort,
                'direction': direction,
                'since': since,
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Get a review comment for a pull request
     * Provides details for a review comment.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @returns pull_request_review_comment Response
     * @throws ApiError
     */
    static pullsGetReviewComment(owner, repo, commentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/comments/{comment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a review comment for a pull request
     * Enables you to edit a review comment.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param requestBody
     * @returns pull_request_review_comment Response
     * @throws ApiError
     */
    static pullsUpdateReviewComment(owner, repo, commentId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/pulls/comments/{comment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a review comment for a pull request
     * Deletes a review comment.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @returns void
     * @throws ApiError
     */
    static pullsDeleteReviewComment(owner, repo, commentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pulls/comments/{comment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get a pull request
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists details of a pull request by providing its number.
     *
     * When you get, [create](https://docs.github.com/rest/pulls/pulls/#create-a-pull-request), or [edit](https://docs.github.com/rest/pulls/pulls#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
     *
     * The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.
     *
     * The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:
     *
     * *   If merged as a [merge commit](https://docs.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
     * *   If merged via a [squash](https://docs.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
     * *   If [rebased](https://docs.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.
     *
     * Pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @returns pull_request Pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     * @throws ApiError
     */
    static pullsGet(owner, repo, pullNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            errors: {
                304: `Not modified`,
                404: `Resource not found`,
                500: `Internal Error`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Update a pull request
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param requestBody
     * @returns pull_request Response
     * @throws ApiError
     */
    static pullsUpdate(owner, repo, pullNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List review comments on a pull request
     * Lists all review comments for a pull request. By default, review comments are in ascending order by ID.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param sort The property to sort the results by.
     * @param direction The direction to sort results. Ignored without `sort` parameter.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns pull_request_review_comment Response
     * @throws ApiError
     */
    static pullsListReviewComments(owner, repo, pullNumber, sort = 'created', direction, since, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            query: {
                'sort': sort,
                'direction': direction,
                'since': since,
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Create a review comment for a pull request
     *
     * Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/rest/issues/comments#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.
     *
     * The `position` parameter is deprecated. If you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required.
     *
     * **Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param requestBody
     * @returns pull_request_review_comment Response
     * @throws ApiError
     */
    static pullsCreateReviewComment(owner, repo, pullNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Create a reply for a review comment
     * Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param commentId The unique identifier of the comment.
     * @param requestBody
     * @returns pull_request_review_comment Response
     * @throws ApiError
     */
    static pullsCreateReplyForReviewComment(owner, repo, pullNumber, commentId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
                'comment_id': commentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * List commits on a pull request
     * Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/rest/commits/commits#list-commits) endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns commit Response
     * @throws ApiError
     */
    static pullsListCommits(owner, repo, pullNumber, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/commits',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * List pull requests files
     * **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns diff_entry Response
     * @throws ApiError
     */
    static pullsListFiles(owner, repo, pullNumber, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/files',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Check if a pull request has been merged
     * Checks if a pull request has been merged into the base branch. The HTTP status of the response indicates whether or not the pull request has been merged; the response body is empty.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @returns void
     * @throws ApiError
     */
    static pullsCheckIfMerged(owner, repo, pullNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/merge',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            errors: {
                404: `Not Found if pull request has not been merged`,
            },
        });
    }
    /**
     * Merge a pull request
     * Merges a pull request into the base branch.
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param requestBody
     * @returns pull_request_merge_result if merge was successful
     * @throws ApiError
     */
    static pullsMerge(owner, repo, pullNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/merge',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                405: `Method Not Allowed if merge cannot be performed`,
                409: `Conflict if sha was provided and pull request head did not match`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get all requested reviewers for a pull request
     * Gets the users or teams whose review is requested for a pull request. Once a requested reviewer submits a review, they are no longer considered a requested reviewer. Their review will instead be returned by the [List reviews for a pull request](https://docs.github.com/rest/pulls/reviews#list-reviews-for-a-pull-request) operation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @returns pull_request_review_request Response
     * @throws ApiError
     */
    static pullsListRequestedReviewers(owner, repo, pullNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
        });
    }
    /**
     * Request reviewers for a pull request
     * Requests reviews for a pull request from a given set of users and/or teams.
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param requestBody
     * @returns pull_request_simple Response
     * @throws ApiError
     */
    static pullsRequestReviewers(owner, repo, pullNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                422: `Unprocessable Entity if user is not a collaborator`,
            },
        });
    }
    /**
     * Remove requested reviewers from a pull request
     * Removes review requests from a pull request for a given set of users and/or teams.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param requestBody
     * @returns pull_request_simple Response
     * @throws ApiError
     */
    static pullsRemoveRequestedReviewers(owner, repo, pullNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List reviews for a pull request
     * The list of reviews returns in chronological order.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns pull_request_review The list of reviews returns in chronological order.
     * @throws ApiError
     */
    static pullsListReviews(owner, repo, pullNumber, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/reviews',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Create a review for a pull request
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     *
     * Pull request reviews created in the `PENDING` state are not submitted and therefore do not include the `submitted_at` property in the response. To create a pending review for a pull request, leave the `event` parameter blank. For more information about submitting a `PENDING` review, see "[Submit a review for a pull request](https://docs.github.com/rest/pulls/reviews#submit-a-review-for-a-pull-request)."
     *
     * **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/rest/pulls/pulls#get-a-pull-request) endpoint.
     *
     * The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param requestBody
     * @returns pull_request_review Response
     * @throws ApiError
     */
    static pullsCreateReview(owner, repo, pullNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/reviews',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a review for a pull request
     * Retrieves a pull request review by its ID.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param reviewId The unique identifier of the review.
     * @returns pull_request_review Response
     * @throws ApiError
     */
    static pullsGetReview(owner, repo, pullNumber, reviewId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
                'review_id': reviewId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a review for a pull request
     * Update the review summary comment with new text.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param reviewId The unique identifier of the review.
     * @param requestBody
     * @returns pull_request_review Response
     * @throws ApiError
     */
    static pullsUpdateReview(owner, repo, pullNumber, reviewId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
                'review_id': reviewId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Delete a pending review for a pull request
     * Deletes a pull request review that has not been submitted. Submitted reviews cannot be deleted.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param reviewId The unique identifier of the review.
     * @returns pull_request_review Response
     * @throws ApiError
     */
    static pullsDeletePendingReview(owner, repo, pullNumber, reviewId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
                'review_id': reviewId,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List comments for a pull request review
     * List comments for a specific pull request review.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param reviewId The unique identifier of the review.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns review_comment Response
     * @throws ApiError
     */
    static pullsListCommentsForReview(owner, repo, pullNumber, reviewId, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
                'review_id': reviewId,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Dismiss a review for a pull request
     * **Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/rest/branches/branch-protection), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param reviewId The unique identifier of the review.
     * @param requestBody
     * @returns pull_request_review Response
     * @throws ApiError
     */
    static pullsDismissReview(owner, repo, pullNumber, reviewId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
                'review_id': reviewId,
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
     * Submit a review for a pull request
     * Submits a pending review for a pull request. For more information about creating a pending review for a pull request, see "[Create a review for a pull request](https://docs.github.com/rest/pulls/reviews#create-a-review-for-a-pull-request)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param reviewId The unique identifier of the review.
     * @param requestBody
     * @returns pull_request_review Response
     * @throws ApiError
     */
    static pullsSubmitReview(owner, repo, pullNumber, reviewId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
                'review_id': reviewId,
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
     * Update a pull request branch
     * Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param pullNumber The number that identifies the pull request.
     * @param requestBody
     * @returns any Response
     * @throws ApiError
     */
    static pullsUpdateBranch(owner, repo, pullNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/pulls/{pull_number}/update-branch',
            path: {
                'owner': owner,
                'repo': repo,
                'pull_number': pullNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
}
exports.PullsService = PullsService;
//# sourceMappingURL=PullsService.js.map