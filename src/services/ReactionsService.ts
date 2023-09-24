/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { reaction } from '../models/reaction';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReactionsService {

    /**
     * List reactions for a team discussion comment
     * List the reactions to a [team discussion comment](https://docs.github.com/rest/teams/discussion-comments#get-a-discussion-comment). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param commentNumber The number that identifies the comment.
     * @param content Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a team discussion comment.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsListForTeamDiscussionCommentInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        commentNumber: number,
        content?: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<reaction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'discussion_number': discussionNumber,
                'comment_number': commentNumber,
            },
            query: {
                'content': content,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Create reaction for a team discussion comment
     * Create a reaction to a [team discussion comment](https://docs.github.com/rest/teams/discussion-comments#get-a-discussion-comment). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param commentNumber The number that identifies the comment.
     * @param requestBody
     * @returns reaction Response when the reaction type has already been added to this team discussion comment
     * @throws ApiError
     */
    public static reactionsCreateForTeamDiscussionCommentInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        commentNumber: number,
        requestBody: {
            /**
             * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion comment.
             */
            content: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes';
        },
    ): CancelablePromise<reaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'discussion_number': discussionNumber,
                'comment_number': commentNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete team discussion comment reaction
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion comment](https://docs.github.com/rest/teams/discussion-comments#get-a-discussion-comment). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param commentNumber The number that identifies the comment.
     * @param reactionId The unique identifier of the reaction.
     * @returns void
     * @throws ApiError
     */
    public static reactionsDeleteForTeamDiscussionComment(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        commentNumber: number,
        reactionId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'discussion_number': discussionNumber,
                'comment_number': commentNumber,
                'reaction_id': reactionId,
            },
        });
    }

    /**
     * List reactions for a team discussion
     * List the reactions to a [team discussion](https://docs.github.com/rest/teams/discussions#get-a-discussion). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param content Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a team discussion.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsListForTeamDiscussionInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        content?: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<reaction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'discussion_number': discussionNumber,
            },
            query: {
                'content': content,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Create reaction for a team discussion
     * Create a reaction to a [team discussion](https://docs.github.com/rest/teams/discussions#get-a-discussion). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param requestBody
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsCreateForTeamDiscussionInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        requestBody: {
            /**
             * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion.
             */
            content: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes';
        },
    ): CancelablePromise<reaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'discussion_number': discussionNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete team discussion reaction
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion](https://docs.github.com/rest/teams/discussions#get-a-discussion). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param reactionId The unique identifier of the reaction.
     * @returns void
     * @throws ApiError
     */
    public static reactionsDeleteForTeamDiscussion(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        reactionId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'discussion_number': discussionNumber,
                'reaction_id': reactionId,
            },
        });
    }

    /**
     * List reactions for a commit comment
     * List the reactions to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param content Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a commit comment.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsListForCommitComment(
        owner: string,
        repo: string,
        commentId: number,
        content?: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<reaction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/comments/{comment_id}/reactions',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
            },
            query: {
                'content': content,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create reaction for a commit comment
     * Create a reaction to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param requestBody
     * @returns reaction Reaction exists
     * @throws ApiError
     */
    public static reactionsCreateForCommitComment(
        owner: string,
        repo: string,
        commentId: number,
        requestBody: {
            /**
             * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the commit comment.
             */
            content: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes';
        },
    ): CancelablePromise<reaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/comments/{comment_id}/reactions',
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
     * Delete a commit comment reaction
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param reactionId The unique identifier of the reaction.
     * @returns void
     * @throws ApiError
     */
    public static reactionsDeleteForCommitComment(
        owner: string,
        repo: string,
        commentId: number,
        reactionId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
                'reaction_id': reactionId,
            },
        });
    }

    /**
     * List reactions for an issue comment
     * List the reactions to an [issue comment](https://docs.github.com/rest/issues/comments#get-an-issue-comment).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param content Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to an issue comment.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsListForIssueComment(
        owner: string,
        repo: string,
        commentId: number,
        content?: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<reaction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
            },
            query: {
                'content': content,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create reaction for an issue comment
     * Create a reaction to an [issue comment](https://docs.github.com/rest/issues/comments#get-an-issue-comment). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param requestBody
     * @returns reaction Reaction exists
     * @throws ApiError
     */
    public static reactionsCreateForIssueComment(
        owner: string,
        repo: string,
        commentId: number,
        requestBody: {
            /**
             * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the issue comment.
             */
            content: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes';
        },
    ): CancelablePromise<reaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions',
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
     * Delete an issue comment reaction
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue comment](https://docs.github.com/rest/issues/comments#get-an-issue-comment).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param reactionId The unique identifier of the reaction.
     * @returns void
     * @throws ApiError
     */
    public static reactionsDeleteForIssueComment(
        owner: string,
        repo: string,
        commentId: number,
        reactionId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
                'reaction_id': reactionId,
            },
        });
    }

    /**
     * List reactions for an issue
     * List the reactions to an [issue](https://docs.github.com/rest/issues/issues#get-an-issue).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param content Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to an issue.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsListForIssue(
        owner: string,
        repo: string,
        issueNumber: number,
        content?: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<reaction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/reactions',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            query: {
                'content': content,
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
     * Create reaction for an issue
     * Create a reaction to an [issue](https://docs.github.com/rest/issues/issues#get-an-issue). A response with an HTTP `200` status means that you already added the reaction type to this issue.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param requestBody
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsCreateForIssue(
        owner: string,
        repo: string,
        issueNumber: number,
        requestBody: {
            /**
             * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the issue.
             */
            content: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes';
        },
    ): CancelablePromise<reaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/reactions',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Delete an issue reaction
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue](https://docs.github.com/rest/issues/issues#get-an-issue).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param issueNumber The number that identifies the issue.
     * @param reactionId The unique identifier of the reaction.
     * @returns void
     * @throws ApiError
     */
    public static reactionsDeleteForIssue(
        owner: string,
        repo: string,
        issueNumber: number,
        reactionId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'issue_number': issueNumber,
                'reaction_id': reactionId,
            },
        });
    }

    /**
     * List reactions for a pull request review comment
     * List the reactions to a [pull request review comment](https://docs.github.com/pulls/comments#get-a-review-comment-for-a-pull-request).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param content Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a pull request review comment.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsListForPullRequestReviewComment(
        owner: string,
        repo: string,
        commentId: number,
        content?: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<reaction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
            },
            query: {
                'content': content,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create reaction for a pull request review comment
     * Create a reaction to a [pull request review comment](https://docs.github.com/rest/pulls/comments#get-a-review-comment-for-a-pull-request). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param requestBody
     * @returns reaction Reaction exists
     * @throws ApiError
     */
    public static reactionsCreateForPullRequestReviewComment(
        owner: string,
        repo: string,
        commentId: number,
        requestBody: {
            /**
             * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the pull request review comment.
             */
            content: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes';
        },
    ): CancelablePromise<reaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
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
     * Delete a pull request comment reaction
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`
     *
     * Delete a reaction to a [pull request review comment](https://docs.github.com/rest/pulls/comments#get-a-review-comment-for-a-pull-request).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param reactionId The unique identifier of the reaction.
     * @returns void
     * @throws ApiError
     */
    public static reactionsDeleteForPullRequestComment(
        owner: string,
        repo: string,
        commentId: number,
        reactionId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
                'reaction_id': reactionId,
            },
        });
    }

    /**
     * List reactions for a release
     * List the reactions to a [release](https://docs.github.com/rest/releases/releases#get-a-release).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param releaseId The unique identifier of the release.
     * @param content Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a release.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsListForRelease(
        owner: string,
        repo: string,
        releaseId: number,
        content?: '+1' | 'laugh' | 'heart' | 'hooray' | 'rocket' | 'eyes',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<reaction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/{release_id}/reactions',
            path: {
                'owner': owner,
                'repo': repo,
                'release_id': releaseId,
            },
            query: {
                'content': content,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create reaction for a release
     * Create a reaction to a [release](https://docs.github.com/rest/releases/releases#get-a-release). A response with a `Status: 200 OK` means that you already added the reaction type to this release.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param releaseId The unique identifier of the release.
     * @param requestBody
     * @returns reaction Reaction exists
     * @throws ApiError
     */
    public static reactionsCreateForRelease(
        owner: string,
        repo: string,
        releaseId: number,
        requestBody: {
            /**
             * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the release.
             */
            content: '+1' | 'laugh' | 'heart' | 'hooray' | 'rocket' | 'eyes';
        },
    ): CancelablePromise<reaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/releases/{release_id}/reactions',
            path: {
                'owner': owner,
                'repo': repo,
                'release_id': releaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Delete a release reaction
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`.
     *
     * Delete a reaction to a [release](https://docs.github.com/rest/releases/releases#get-a-release).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param releaseId The unique identifier of the release.
     * @param reactionId The unique identifier of the reaction.
     * @returns void
     * @throws ApiError
     */
    public static reactionsDeleteForRelease(
        owner: string,
        repo: string,
        releaseId: number,
        reactionId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'release_id': releaseId,
                'reaction_id': reactionId,
            },
        });
    }

    /**
     * @deprecated
     * List reactions for a team discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/rest/reactions/reactions#list-reactions-for-a-team-discussion-comment) endpoint.
     *
     * List the reactions to a [team discussion comment](https://docs.github.com/rest/teams/discussion-comments#get-a-discussion-comment). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @param commentNumber The number that identifies the comment.
     * @param content Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a team discussion comment.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsListForTeamDiscussionCommentLegacy(
        teamId: number,
        discussionNumber: number,
        commentNumber: number,
        content?: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<reaction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions',
            path: {
                'team_id': teamId,
                'discussion_number': discussionNumber,
                'comment_number': commentNumber,
            },
            query: {
                'content': content,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * @deprecated
     * Create reaction for a team discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/rest/reactions/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.
     *
     * Create a reaction to a [team discussion comment](https://docs.github.com/rest/teams/discussion-comments#get-a-discussion-comment). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @param commentNumber The number that identifies the comment.
     * @param requestBody
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsCreateForTeamDiscussionCommentLegacy(
        teamId: number,
        discussionNumber: number,
        commentNumber: number,
        requestBody: {
            /**
             * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion comment.
             */
            content: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes';
        },
    ): CancelablePromise<reaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions',
            path: {
                'team_id': teamId,
                'discussion_number': discussionNumber,
                'comment_number': commentNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * List reactions for a team discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/rest/reactions/reactions#list-reactions-for-a-team-discussion) endpoint.
     *
     * List the reactions to a [team discussion](https://docs.github.com/rest/teams/discussions#get-a-discussion). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @param content Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a team discussion.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsListForTeamDiscussionLegacy(
        teamId: number,
        discussionNumber: number,
        content?: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<reaction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/discussions/{discussion_number}/reactions',
            path: {
                'team_id': teamId,
                'discussion_number': discussionNumber,
            },
            query: {
                'content': content,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * @deprecated
     * Create reaction for a team discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/rest/reactions/reactions#create-reaction-for-a-team-discussion) endpoint.
     *
     * Create a reaction to a [team discussion](https://docs.github.com/rest/teams/discussions#get-a-discussion). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @param requestBody
     * @returns reaction Response
     * @throws ApiError
     */
    public static reactionsCreateForTeamDiscussionLegacy(
        teamId: number,
        discussionNumber: number,
        requestBody: {
            /**
             * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion.
             */
            content: '+1' | '-1' | 'laugh' | 'confused' | 'heart' | 'hooray' | 'rocket' | 'eyes';
        },
    ): CancelablePromise<reaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/teams/{team_id}/discussions/{discussion_number}/reactions',
            path: {
                'team_id': teamId,
                'discussion_number': discussionNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
