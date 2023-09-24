"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class IssuesService {
    /**
     * List issues assigned to the authenticated user
     * List issues assigned to the authenticated user across all visible repositories including owned repositories, member
     * repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
     * necessarily assigned to you.
     *
     *
     * **Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/rest/pulls/pulls#list-pull-requests)" endpoint.
     * @param filter Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation.
     * @param state Indicates the state of the issues to return.
     * @param labels A list of comma separated label names. Example: `bug,ui,@high`
     * @param sort What to sort results by.
     * @param direction The direction to sort the results by.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param collab
     * @param orgs
     * @param owned
     * @param pulls
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns issue Response
     * @throws ApiError
     */
    static issuesList(filter = 'assigned', state = 'open', labels, sort = 'created', direction = 'desc', since, collab, orgs, owned, pulls, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/issues',
            query: {
                'filter': filter,
                'state': state,
                'labels': labels,
                'sort': sort,
                'direction': direction,
                'since': since,
                'collab': collab,
                'orgs': orgs,
                'owned': owned,
                'pulls': pulls,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List organization issues assigned to the authenticated user
     * List issues in an organization assigned to the authenticated user.
     *
     * **Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/rest/pulls/pulls#list-pull-requests)" endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param filter Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation.
     * @param state Indicates the state of the issues to return.
     * @param labels A list of comma separated label names. Example: `bug,ui,@high`
     * @param sort What to sort results by.
     * @param direction The direction to sort the results by.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns issue Response
     * @throws ApiError
     */
    static issuesListForOrg(org, filter = 'assigned', state = 'open', labels, sort = 'created', direction = 'desc', since, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/issues',
            path: {
                'org': org,
            },
            query: {
                'filter': filter,
                'state': state,
                'labels': labels,
                'sort': sort,
                'direction': direction,
                'since': since,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * List assignees
     * Lists the [available assignees](https://docs.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    static issuesListAssignees(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/assignees',
            path: {
                'owner': owner,
                'repo': repo,
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
     * Check if a user can be assigned
     * Checks if a user has permission to be assigned to an issue in this repository.
     *
     * If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.
     *
     * Otherwise a `404` status code is returned.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param assignee
     * @returns void
     * @throws ApiError
     */
    static issuesCheckUserCanBeAssigned(owner, repo, assignee) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/assignees/{assignee}',
            path: {
                'owner': owner,
                'repo': repo,
                'assignee': assignee,
            },
            errors: {
                404: `Otherwise a \`404\` status code is returned.`,
            },
        });
    }
    /**
     * List repository issues
     * List issues in a repository. Only open issues will be listed.
     *
     * **Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/rest/pulls/pulls#list-pull-requests)" endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param milestone If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
     * @param state Indicates the state of the issues to return.
     * @param assignee Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
     * @param creator The user that created the issue.
     * @param mentioned A user that's mentioned in the issue.
     * @param labels A list of comma separated label names. Example: `bug,ui,@high`
     * @param sort What to sort results by.
     * @param direction The direction to sort the results by.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns issue Response
     * @throws ApiError
     */
    static issuesListForRepo(owner, repo, milestone, state = 'open', assignee, creator, mentioned, labels, sort = 'created', direction = 'desc', since, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'milestone': milestone,
                'state': state,
                'assignee': assignee,
                'creator': creator,
                'mentioned': mentioned,
                'labels': labels,
                'sort': sort,
                'direction': direction,
                'since': since,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                301: `Moved permanently`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Create an issue
     * Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://docs.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns issue Response
     * @throws ApiError
     */
    static issuesCreate(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Resource not found`,
                410: `Gone`,
                422: `Validation failed, or the endpoint has been spammed.`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * List issue comments for a repository
     * You can use the REST API to list comments on issues and pull requests for a repository. Every pull request is an issue, but not every issue is a pull request.
     *
     * By default, issue comments are ordered by ascending ID.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param sort The property to sort the results by.
     * @param direction Either `asc` or `desc`. Ignored without the `sort` parameter.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns issue_comment Response
     * @throws ApiError
     */
    static issuesListCommentsForRepo(owner, repo, sort = 'created', direction, since, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/comments',
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
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get an issue comment
     * You can use the REST API to get comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @returns issue_comment Response
     * @throws ApiError
     */
    static issuesGetComment(owner, repo, commentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/comments/{comment_id}',
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
     * Update an issue comment
     * You can use the REST API to update comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param requestBody
     * @returns issue_comment Response
     * @throws ApiError
     */
    static issuesUpdateComment(owner, repo, commentId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/issues/comments/{comment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Delete an issue comment
     * You can use the REST API to delete comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @returns void
     * @throws ApiError
     */
    static issuesDeleteComment(owner, repo, commentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/comments/{comment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
            },
        });
    }
    /**
     * List issue events for a repository
     * Lists events for a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns issue_event Response
     * @throws ApiError
     */
    static issuesListEventsForRepo(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/events',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get an issue event
     * Gets a single event by the event id.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param eventId
     * @returns issue_event Response
     * @throws ApiError
     */
    static issuesGetEvent(owner, repo, eventId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/events/{event_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'event_id': eventId,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                410: `Gone`,
            },
        });
    }
    /**
     * Get an issue
     * The API returns a [`301 Moved Permanently` status](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
     * [transferred](https://docs.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
     * the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
     * returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
     * access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
     * to the [`issues`](https://docs.github.com/webhooks/event-payloads/#issues) webhook.
     *
     * **Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/rest/pulls/pulls#list-pull-requests)" endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @returns issue Response
     * @throws ApiError
     */
    static issuesGet(owner, repo, issueNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{issue_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            errors: {
                301: `Moved permanently`,
                304: `Not modified`,
                404: `Resource not found`,
                410: `Gone`,
            },
        });
    }
    /**
     * Update an issue
     * Issue owners and users with push access can edit an issue.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param requestBody
     * @returns issue Response
     * @throws ApiError
     */
    static issuesUpdate(owner, repo, issueNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/issues/{issue_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                301: `Moved permanently`,
                403: `Forbidden`,
                404: `Resource not found`,
                410: `Gone`,
                422: `Validation failed, or the endpoint has been spammed.`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Add assignees to an issue
     * Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param requestBody
     * @returns issue Response
     * @throws ApiError
     */
    static issuesAddAssignees(owner, repo, issueNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/assignees',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove assignees from an issue
     * Removes one or more assignees from an issue.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param requestBody
     * @returns issue Response
     * @throws ApiError
     */
    static issuesRemoveAssignees(owner, repo, issueNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/assignees',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Check if a user can be assigned to a issue
     * Checks if a user has permission to be assigned to a specific issue.
     *
     * If the `assignee` can be assigned to this issue, a `204` status code with no content is returned.
     *
     * Otherwise a `404` status code is returned.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param assignee
     * @returns void
     * @throws ApiError
     */
    static issuesCheckUserCanBeAssignedToIssue(owner, repo, issueNumber, assignee) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
                'assignee': assignee,
            },
            errors: {
                404: `Response if \`assignee\` can not be assigned to \`issue_number\``,
            },
        });
    }
    /**
     * List issue comments
     * You can use the REST API to list comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request.
     *
     * Issue comments are ordered by ascending ID.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns issue_comment Response
     * @throws ApiError
     */
    static issuesListComments(owner, repo, issueNumber, since, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            query: {
                'since': since,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
                410: `Gone`,
            },
        });
    }
    /**
     * Create an issue comment
     *
     * You can use the REST API to create comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request.
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications).
     * Creating content too quickly using this endpoint may result in secondary rate limiting.
     * See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)"
     * and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)"
     * for details.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param requestBody
     * @returns issue_comment Response
     * @throws ApiError
     */
    static issuesCreateComment(owner, repo, issueNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                410: `Gone`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List issue events
     * Lists all events for an issue.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns issue_event_for_issue Response
     * @throws ApiError
     */
    static issuesListEvents(owner, repo, issueNumber, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/events',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                410: `Gone`,
            },
        });
    }
    /**
     * List labels for an issue
     * Lists all labels for an issue.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns label Response
     * @throws ApiError
     */
    static issuesListLabelsOnIssue(owner, repo, issueNumber, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                301: `Moved permanently`,
                404: `Resource not found`,
                410: `Gone`,
            },
        });
    }
    /**
     * Add labels to an issue
     * Adds labels to an issue. If you provide an empty array of labels, all labels are removed from the issue.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param requestBody
     * @returns label Response
     * @throws ApiError
     */
    static issuesAddLabels(owner, repo, issueNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                301: `Moved permanently`,
                404: `Resource not found`,
                410: `Gone`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Set labels for an issue
     * Removes any previous labels and sets the new labels for an issue.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param requestBody
     * @returns label Response
     * @throws ApiError
     */
    static issuesSetLabels(owner, repo, issueNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                301: `Moved permanently`,
                404: `Resource not found`,
                410: `Gone`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Remove all labels from an issue
     * Removes all labels from an issue.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @returns void
     * @throws ApiError
     */
    static issuesRemoveAllLabels(owner, repo, issueNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            errors: {
                301: `Moved permanently`,
                404: `Resource not found`,
                410: `Gone`,
            },
        });
    }
    /**
     * Remove a label from an issue
     * Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param name
     * @returns label Response
     * @throws ApiError
     */
    static issuesRemoveLabel(owner, repo, issueNumber, name) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
                'name': name,
            },
            errors: {
                301: `Moved permanently`,
                404: `Resource not found`,
                410: `Gone`,
            },
        });
    }
    /**
     * Lock an issue
     * Users with push access can lock an issue or pull request's conversation.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static issuesLock(owner, repo, issueNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/lock',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                410: `Gone`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Unlock an issue
     * Users with push access can unlock an issue's conversation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @returns void
     * @throws ApiError
     */
    static issuesUnlock(owner, repo, issueNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/lock',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * List timeline events for an issue
     * List all timeline events for an issue.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns timeline_issue_events Response
     * @throws ApiError
     */
    static issuesListEventsForTimeline(owner, repo, issueNumber, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/timeline',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
                410: `Gone`,
            },
        });
    }
    /**
     * List labels for a repository
     * Lists all labels for a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns label Response
     * @throws ApiError
     */
    static issuesListLabelsForRepo(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/labels',
            path: {
                'owner': owner,
                'repo': repo,
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
     * Create a label
     * Creates a label for the specified repository with the given name and color. The name and color parameters are required. The color must be a valid [hexadecimal color code](http://www.color-hex.com/).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns label Response
     * @throws ApiError
     */
    static issuesCreateLabel(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/labels',
            path: {
                'owner': owner,
                'repo': repo,
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
     * Get a label
     * Gets a label using the given name.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param name
     * @returns label Response
     * @throws ApiError
     */
    static issuesGetLabel(owner, repo, name) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/labels/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a label
     * Updates a label using the given label name.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param name
     * @param requestBody
     * @returns label Response
     * @throws ApiError
     */
    static issuesUpdateLabel(owner, repo, name, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/labels/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a label
     * Deletes a label using the given label name.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param name
     * @returns void
     * @throws ApiError
     */
    static issuesDeleteLabel(owner, repo, name) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/labels/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
        });
    }
    /**
     * List milestones
     * Lists milestones for a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param state The state of the milestone. Either `open`, `closed`, or `all`.
     * @param sort What to sort results by. Either `due_on` or `completeness`.
     * @param direction The direction of the sort. Either `asc` or `desc`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns milestone Response
     * @throws ApiError
     */
    static issuesListMilestones(owner, repo, state = 'open', sort = 'due_on', direction = 'asc', perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/milestones',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'state': state,
                'sort': sort,
                'direction': direction,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Create a milestone
     * Creates a milestone.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns milestone Response
     * @throws ApiError
     */
    static issuesCreateMilestone(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/milestones',
            path: {
                'owner': owner,
                'repo': repo,
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
     * Get a milestone
     * Gets a milestone using the given milestone number.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param milestoneNumber The number that identifies the milestone.
     * @returns milestone Response
     * @throws ApiError
     */
    static issuesGetMilestone(owner, repo, milestoneNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/milestones/{milestone_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'milestone_number': milestoneNumber,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a milestone
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param milestoneNumber The number that identifies the milestone.
     * @param requestBody
     * @returns milestone Response
     * @throws ApiError
     */
    static issuesUpdateMilestone(owner, repo, milestoneNumber, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/milestones/{milestone_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'milestone_number': milestoneNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a milestone
     * Deletes a milestone using the given milestone number.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param milestoneNumber The number that identifies the milestone.
     * @returns void
     * @throws ApiError
     */
    static issuesDeleteMilestone(owner, repo, milestoneNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/milestones/{milestone_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'milestone_number': milestoneNumber,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * List labels for issues in a milestone
     * Lists labels for issues in a milestone.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param milestoneNumber The number that identifies the milestone.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns label Response
     * @throws ApiError
     */
    static issuesListLabelsForMilestone(owner, repo, milestoneNumber, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/milestones/{milestone_number}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'milestone_number': milestoneNumber,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * List user account issues assigned to the authenticated user
     * List issues across owned and member repositories assigned to the authenticated user.
     *
     * **Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/rest/pulls/pulls#list-pull-requests)" endpoint.
     * @param filter Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation.
     * @param state Indicates the state of the issues to return.
     * @param labels A list of comma separated label names. Example: `bug,ui,@high`
     * @param sort What to sort results by.
     * @param direction The direction to sort the results by.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns issue Response
     * @throws ApiError
     */
    static issuesListForAuthenticatedUser(filter = 'assigned', state = 'open', labels, sort = 'created', direction = 'desc', since, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/issues',
            query: {
                'filter': filter,
                'state': state,
                'labels': labels,
                'sort': sort,
                'direction': direction,
                'since': since,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                404: `Resource not found`,
            },
        });
    }
}
exports.IssuesService = IssuesService;
//# sourceMappingURL=IssuesService.js.map