/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { minimal_repository } from '../models/minimal_repository';
import type { organization_invitation } from '../models/organization_invitation';
import type { simple_user } from '../models/simple_user';
import type { team } from '../models/team';
import type { team_discussion } from '../models/team_discussion';
import type { team_discussion_comment } from '../models/team_discussion_comment';
import type { team_full } from '../models/team_full';
import type { team_membership } from '../models/team_membership';
import type { team_project } from '../models/team_project';
import type { team_repository } from '../models/team_repository';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TeamsService {

    /**
     * List teams
     * Lists all teams in an organization that are visible to the authenticated user.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns team Response
     * @throws ApiError
     */
    public static teamsList(
        org: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<team>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams',
            path: {
                'org': org,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }

    /**
     * Create a team
     * To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://docs.github.com/articles/setting-team-creation-permissions-in-your-organization)."
     *
     * When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/about-teams)".
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns team_full Response
     * @throws ApiError
     */
    public static teamsCreate(
        org: string,
        requestBody: {
            /**
             * The name of the team.
             */
            name: string;
            /**
             * The description of the team.
             */
            description?: string;
            /**
             * List GitHub IDs for organization members who will become team maintainers.
             */
            maintainers?: Array<string>;
            /**
             * The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
             */
            repo_names?: Array<string>;
            /**
             * The level of privacy this team should have. The options are:
             * **For a non-nested team:**
             * * `secret` - only visible to organization owners and members of this team.
             * * `closed` - visible to all members of this organization.
             * Default: `secret`
             * **For a parent or child team:**
             * * `closed` - visible to all members of this organization.
             * Default for child team: `closed`
             */
            privacy?: 'secret' | 'closed';
            /**
             * The notification setting the team has chosen. The options are:
             * * `notifications_enabled` - team members receive notifications when the team is @mentioned.
             * * `notifications_disabled` - no one receives notifications.
             * Default: `notifications_enabled`
             */
            notification_setting?: 'notifications_enabled' | 'notifications_disabled';
            /**
             * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
             */
            permission?: 'pull' | 'push';
            /**
             * The ID of a team to set as the parent team.
             */
            parent_team_id?: number;
        },
    ): CancelablePromise<team_full> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/teams',
            path: {
                'org': org,
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
     * Get a team by name
     * Gets a team using the team's `slug`. To create the `slug`, GitHub replaces special characters in the `name` string, changes all words to lowercase, and replaces spaces with a `-` separator. For example, `"My TEam Näme"` would become `my-team-name`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @returns team_full Response
     * @throws ApiError
     */
    public static teamsGetByName(
        org: string,
        teamSlug: string,
    ): CancelablePromise<team_full> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}',
            path: {
                'org': org,
                'team_slug': teamSlug,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Update a team
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param requestBody
     * @returns team_full Response when the updated information already exists
     * @throws ApiError
     */
    public static teamsUpdateInOrg(
        org: string,
        teamSlug: string,
        requestBody?: {
            /**
             * The name of the team.
             */
            name?: string;
            /**
             * The description of the team.
             */
            description?: string;
            /**
             * The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. When a team is nested, the `privacy` for parent teams cannot be `secret`. The options are:
             * **For a non-nested team:**
             * * `secret` - only visible to organization owners and members of this team.
             * * `closed` - visible to all members of this organization.
             * **For a parent or child team:**
             * * `closed` - visible to all members of this organization.
             */
            privacy?: 'secret' | 'closed';
            /**
             * The notification setting the team has chosen. Editing teams without specifying this parameter leaves `notification_setting` intact. The options are:
             * * `notifications_enabled` - team members receive notifications when the team is @mentioned.
             * * `notifications_disabled` - no one receives notifications.
             */
            notification_setting?: 'notifications_enabled' | 'notifications_disabled';
            /**
             * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
             */
            permission?: 'pull' | 'push' | 'admin';
            /**
             * The ID of a team to set as the parent team.
             */
            parent_team_id?: number | null;
        },
    ): CancelablePromise<team_full> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/orgs/{org}/teams/{team_slug}',
            path: {
                'org': org,
                'team_slug': teamSlug,
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
     * Delete a team
     * To delete a team, the authenticated user must be an organization owner or team maintainer.
     *
     * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @returns void
     * @throws ApiError
     */
    public static teamsDeleteInOrg(
        org: string,
        teamSlug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/teams/{team_slug}',
            path: {
                'org': org,
                'team_slug': teamSlug,
            },
        });
    }

    /**
     * List discussions
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param direction The direction to sort the results by.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param pinned Pinned discussions only filter
     * @returns team_discussion Response
     * @throws ApiError
     */
    public static teamsListDiscussionsInOrg(
        org: string,
        teamSlug: string,
        direction: 'asc' | 'desc' = 'desc',
        perPage: number = 30,
        page: number = 1,
        pinned?: string,
    ): CancelablePromise<Array<team_discussion>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/discussions',
            path: {
                'org': org,
                'team_slug': teamSlug,
            },
            query: {
                'direction': direction,
                'per_page': perPage,
                'page': page,
                'pinned': pinned,
            },
        });
    }

    /**
     * Create a discussion
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param requestBody
     * @returns team_discussion Response
     * @throws ApiError
     */
    public static teamsCreateDiscussionInOrg(
        org: string,
        teamSlug: string,
        requestBody: {
            /**
             * The discussion post's title.
             */
            title: string;
            /**
             * The discussion post's body text.
             */
            body: string;
            /**
             * Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
             */
            private?: boolean;
        },
    ): CancelablePromise<team_discussion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/teams/{team_slug}/discussions',
            path: {
                'org': org,
                'team_slug': teamSlug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a discussion
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @returns team_discussion Response
     * @throws ApiError
     */
    public static teamsGetDiscussionInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
    ): CancelablePromise<team_discussion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'discussion_number': discussionNumber,
            },
        });
    }

    /**
     * Update a discussion
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param requestBody
     * @returns team_discussion Response
     * @throws ApiError
     */
    public static teamsUpdateDiscussionInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        requestBody?: {
            /**
             * The discussion post's title.
             */
            title?: string;
            /**
             * The discussion post's body text.
             */
            body?: string;
        },
    ): CancelablePromise<team_discussion> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}',
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
     * Delete a discussion
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @returns void
     * @throws ApiError
     */
    public static teamsDeleteDiscussionInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'discussion_number': discussionNumber,
            },
        });
    }

    /**
     * List discussion comments
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param direction The direction to sort the results by.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns team_discussion_comment Response
     * @throws ApiError
     */
    public static teamsListDiscussionCommentsInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        direction: 'asc' | 'desc' = 'desc',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<team_discussion_comment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'discussion_number': discussionNumber,
            },
            query: {
                'direction': direction,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Create a discussion comment
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param requestBody
     * @returns team_discussion_comment Response
     * @throws ApiError
     */
    public static teamsCreateDiscussionCommentInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        requestBody: {
            /**
             * The discussion comment's body text.
             */
            body: string;
        },
    ): CancelablePromise<team_discussion_comment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments',
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
     * Get a discussion comment
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param commentNumber The number that identifies the comment.
     * @returns team_discussion_comment Response
     * @throws ApiError
     */
    public static teamsGetDiscussionCommentInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        commentNumber: number,
    ): CancelablePromise<team_discussion_comment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'discussion_number': discussionNumber,
                'comment_number': commentNumber,
            },
        });
    }

    /**
     * Update a discussion comment
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param commentNumber The number that identifies the comment.
     * @param requestBody
     * @returns team_discussion_comment Response
     * @throws ApiError
     */
    public static teamsUpdateDiscussionCommentInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        commentNumber: number,
        requestBody: {
            /**
             * The discussion comment's body text.
             */
            body: string;
        },
    ): CancelablePromise<team_discussion_comment> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}',
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
     * Delete a discussion comment
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param discussionNumber The number that identifies the discussion.
     * @param commentNumber The number that identifies the comment.
     * @returns void
     * @throws ApiError
     */
    public static teamsDeleteDiscussionCommentInOrg(
        org: string,
        teamSlug: string,
        discussionNumber: number,
        commentNumber: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'discussion_number': discussionNumber,
                'comment_number': commentNumber,
            },
        });
    }

    /**
     * List pending team invitations
     * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/invitations`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns organization_invitation Response
     * @throws ApiError
     */
    public static teamsListPendingInvitationsInOrg(
        org: string,
        teamSlug: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<organization_invitation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/invitations',
            path: {
                'org': org,
                'team_slug': teamSlug,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * List team members
     * Team members will include the members of child teams.
     *
     * To list members in a team, the team must be visible to the authenticated user.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param role Filters members returned by their role in the team.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    public static teamsListMembersInOrg(
        org: string,
        teamSlug: string,
        role: 'member' | 'maintainer' | 'all' = 'all',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/members',
            path: {
                'org': org,
                'team_slug': teamSlug,
            },
            query: {
                'role': role,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Get team membership for a user
     * Team members will include the members of child teams.
     *
     * To get a user's membership with a team, the team must be visible to the authenticated user.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     *
     * **Note:**
     * The response contains the `state` of the membership and the member's `role`.
     *
     * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/teams/teams#create-a-team).
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param username The handle for the GitHub user account.
     * @returns team_membership Response
     * @throws ApiError
     */
    public static teamsGetMembershipForUserInOrg(
        org: string,
        teamSlug: string,
        username: string,
    ): CancelablePromise<team_membership> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/memberships/{username}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'username': username,
            },
            errors: {
                404: `if user has no team membership`,
            },
        });
    }

    /**
     * Add or update team membership for a user
     * Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.
     *
     * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param username The handle for the GitHub user account.
     * @param requestBody
     * @returns team_membership Response
     * @throws ApiError
     */
    public static teamsAddOrUpdateMembershipForUserInOrg(
        org: string,
        teamSlug: string,
        username: string,
        requestBody?: {
            /**
             * The role that this user should have in the team.
             */
            role?: 'member' | 'maintainer';
        },
    ): CancelablePromise<team_membership> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/teams/{team_slug}/memberships/{username}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'username': username,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden if team synchronization is set up`,
                422: `Unprocessable Entity if you attempt to add an organization to a team`,
            },
        });
    }

    /**
     * Remove team membership for a user
     * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static teamsRemoveMembershipForUserInOrg(
        org: string,
        teamSlug: string,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/teams/{team_slug}/memberships/{username}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'username': username,
            },
            errors: {
                403: `Forbidden if team synchronization is set up`,
            },
        });
    }

    /**
     * List team projects
     * Lists the organization projects for a team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns team_project Response
     * @throws ApiError
     */
    public static teamsListProjectsInOrg(
        org: string,
        teamSlug: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<team_project>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/projects',
            path: {
                'org': org,
                'team_slug': teamSlug,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Check team permissions for a project
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param projectId The unique identifier of the project.
     * @returns team_project Response
     * @throws ApiError
     */
    public static teamsCheckPermissionsForProjectInOrg(
        org: string,
        teamSlug: string,
        projectId: number,
    ): CancelablePromise<team_project> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/projects/{project_id}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'project_id': projectId,
            },
            errors: {
                404: `Not Found if project is not managed by this team`,
            },
        });
    }

    /**
     * Add or update team project permissions
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param projectId The unique identifier of the project.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static teamsAddOrUpdateProjectPermissionsInOrg(
        org: string,
        teamSlug: string,
        projectId: number,
        requestBody?: {
            /**
             * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
             */
            permission?: 'read' | 'write' | 'admin';
        } | null,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/teams/{team_slug}/projects/{project_id}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden if the project is not owned by the organization`,
            },
        });
    }

    /**
     * Remove a project from a team
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param projectId The unique identifier of the project.
     * @returns void
     * @throws ApiError
     */
    public static teamsRemoveProjectInOrg(
        org: string,
        teamSlug: string,
        projectId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/teams/{team_slug}/projects/{project_id}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'project_id': projectId,
            },
        });
    }

    /**
     * List team repositories
     * Lists a team's repositories visible to the authenticated user.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns minimal_repository Response
     * @throws ApiError
     */
    public static teamsListReposInOrg(
        org: string,
        teamSlug: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<minimal_repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/repos',
            path: {
                'org': org,
                'team_slug': teamSlug,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Check team permissions for a repository
     * Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.
     *
     * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.
     *
     * If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns team_repository Alternative response with repository permissions
     * @throws ApiError
     */
    public static teamsCheckPermissionsForRepoInOrg(
        org: string,
        teamSlug: string,
        owner: string,
        repo: string,
    ): CancelablePromise<team_repository> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `Not Found if team does not have permission for the repository`,
            },
        });
    }

    /**
     * Add or update team repository permissions
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     *
     * For more information about the permission levels, see "[Repository permission levels for an organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static teamsAddOrUpdateRepoPermissionsInOrg(
        org: string,
        teamSlug: string,
        owner: string,
        repo: string,
        requestBody?: {
            /**
             * The permission to grant the team on this repository. We accept the following permissions to be set: `pull`, `triage`, `push`, `maintain`, `admin` and you can also specify a custom repository role name, if the owning organization has defined any. If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
             */
            permission?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove a repository from a team
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    public static teamsRemoveRepoInOrg(
        org: string,
        teamSlug: string,
        owner: string,
        repo: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}',
            path: {
                'org': org,
                'team_slug': teamSlug,
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * List child teams
     * Lists the child teams of the team specified by `{team_slug}`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns team if child teams exist
     * @throws ApiError
     */
    public static teamsListChildInOrg(
        org: string,
        teamSlug: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<team>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/{team_slug}/teams',
            path: {
                'org': org,
                'team_slug': teamSlug,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * @deprecated
     * Get a team (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/rest/teams/teams#get-a-team-by-name) endpoint.
     * @param teamId The unique identifier of the team.
     * @returns team_full Response
     * @throws ApiError
     */
    public static teamsGetLegacy(
        teamId: number,
    ): CancelablePromise<team_full> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}',
            path: {
                'team_id': teamId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * @deprecated
     * Update a team (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/rest/teams/teams#update-a-team) endpoint.
     *
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
     *
     * **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
     * @param teamId The unique identifier of the team.
     * @param requestBody
     * @returns team_full Response when the updated information already exists
     * @throws ApiError
     */
    public static teamsUpdateLegacy(
        teamId: number,
        requestBody: {
            /**
             * The name of the team.
             */
            name: string;
            /**
             * The description of the team.
             */
            description?: string;
            /**
             * The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:
             * **For a non-nested team:**
             * * `secret` - only visible to organization owners and members of this team.
             * * `closed` - visible to all members of this organization.
             * **For a parent or child team:**
             * * `closed` - visible to all members of this organization.
             */
            privacy?: 'secret' | 'closed';
            /**
             * The notification setting the team has chosen. Editing teams without specifying this parameter leaves `notification_setting` intact. The options are:
             * * `notifications_enabled` - team members receive notifications when the team is @mentioned.
             * * `notifications_disabled` - no one receives notifications.
             */
            notification_setting?: 'notifications_enabled' | 'notifications_disabled';
            /**
             * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
             */
            permission?: 'pull' | 'push' | 'admin';
            /**
             * The ID of a team to set as the parent team.
             */
            parent_team_id?: number | null;
        },
    ): CancelablePromise<team_full> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/teams/{team_id}',
            path: {
                'team_id': teamId,
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
     * @deprecated
     * Delete a team (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/rest/teams/teams#delete-a-team) endpoint.
     *
     * To delete a team, the authenticated user must be an organization owner or team maintainer.
     *
     * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
     * @param teamId The unique identifier of the team.
     * @returns void
     * @throws ApiError
     */
    public static teamsDeleteLegacy(
        teamId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/teams/{team_id}',
            path: {
                'team_id': teamId,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * @deprecated
     * List discussions (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/rest/teams/discussions#list-discussions) endpoint.
     *
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param teamId The unique identifier of the team.
     * @param direction The direction to sort the results by.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns team_discussion Response
     * @throws ApiError
     */
    public static teamsListDiscussionsLegacy(
        teamId: number,
        direction: 'asc' | 'desc' = 'desc',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<team_discussion>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/discussions',
            path: {
                'team_id': teamId,
            },
            query: {
                'direction': direction,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * @deprecated
     * Create a discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/rest/teams/discussions#create-a-discussion) endpoint.
     *
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     * @param teamId The unique identifier of the team.
     * @param requestBody
     * @returns team_discussion Response
     * @throws ApiError
     */
    public static teamsCreateDiscussionLegacy(
        teamId: number,
        requestBody: {
            /**
             * The discussion post's title.
             */
            title: string;
            /**
             * The discussion post's body text.
             */
            body: string;
            /**
             * Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
             */
            private?: boolean;
        },
    ): CancelablePromise<team_discussion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/teams/{team_id}/discussions',
            path: {
                'team_id': teamId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Get a discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/rest/teams/discussions#get-a-discussion) endpoint.
     *
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @returns team_discussion Response
     * @throws ApiError
     */
    public static teamsGetDiscussionLegacy(
        teamId: number,
        discussionNumber: number,
    ): CancelablePromise<team_discussion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/discussions/{discussion_number}',
            path: {
                'team_id': teamId,
                'discussion_number': discussionNumber,
            },
        });
    }

    /**
     * @deprecated
     * Update a discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/rest/teams/discussions#update-a-discussion) endpoint.
     *
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @param requestBody
     * @returns team_discussion Response
     * @throws ApiError
     */
    public static teamsUpdateDiscussionLegacy(
        teamId: number,
        discussionNumber: number,
        requestBody?: {
            /**
             * The discussion post's title.
             */
            title?: string;
            /**
             * The discussion post's body text.
             */
            body?: string;
        },
    ): CancelablePromise<team_discussion> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/teams/{team_id}/discussions/{discussion_number}',
            path: {
                'team_id': teamId,
                'discussion_number': discussionNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Delete a discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/rest/teams/discussions#delete-a-discussion) endpoint.
     *
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @returns void
     * @throws ApiError
     */
    public static teamsDeleteDiscussionLegacy(
        teamId: number,
        discussionNumber: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/teams/{team_id}/discussions/{discussion_number}',
            path: {
                'team_id': teamId,
                'discussion_number': discussionNumber,
            },
        });
    }

    /**
     * @deprecated
     * List discussion comments (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/rest/teams/discussion-comments#list-discussion-comments) endpoint.
     *
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @param direction The direction to sort the results by.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns team_discussion_comment Response
     * @throws ApiError
     */
    public static teamsListDiscussionCommentsLegacy(
        teamId: number,
        discussionNumber: number,
        direction: 'asc' | 'desc' = 'desc',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<team_discussion_comment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/discussions/{discussion_number}/comments',
            path: {
                'team_id': teamId,
                'discussion_number': discussionNumber,
            },
            query: {
                'direction': direction,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * @deprecated
     * Create a discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/rest/teams/discussion-comments#create-a-discussion-comment) endpoint.
     *
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @param requestBody
     * @returns team_discussion_comment Response
     * @throws ApiError
     */
    public static teamsCreateDiscussionCommentLegacy(
        teamId: number,
        discussionNumber: number,
        requestBody: {
            /**
             * The discussion comment's body text.
             */
            body: string;
        },
    ): CancelablePromise<team_discussion_comment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/teams/{team_id}/discussions/{discussion_number}/comments',
            path: {
                'team_id': teamId,
                'discussion_number': discussionNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Get a discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/rest/teams/discussion-comments#get-a-discussion-comment) endpoint.
     *
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @param commentNumber The number that identifies the comment.
     * @returns team_discussion_comment Response
     * @throws ApiError
     */
    public static teamsGetDiscussionCommentLegacy(
        teamId: number,
        discussionNumber: number,
        commentNumber: number,
    ): CancelablePromise<team_discussion_comment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}',
            path: {
                'team_id': teamId,
                'discussion_number': discussionNumber,
                'comment_number': commentNumber,
            },
        });
    }

    /**
     * @deprecated
     * Update a discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/rest/teams/discussion-comments#update-a-discussion-comment) endpoint.
     *
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @param commentNumber The number that identifies the comment.
     * @param requestBody
     * @returns team_discussion_comment Response
     * @throws ApiError
     */
    public static teamsUpdateDiscussionCommentLegacy(
        teamId: number,
        discussionNumber: number,
        commentNumber: number,
        requestBody: {
            /**
             * The discussion comment's body text.
             */
            body: string;
        },
    ): CancelablePromise<team_discussion_comment> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}',
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
     * Delete a discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/rest/teams/discussion-comments#delete-a-discussion-comment) endpoint.
     *
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param teamId The unique identifier of the team.
     * @param discussionNumber The number that identifies the discussion.
     * @param commentNumber The number that identifies the comment.
     * @returns void
     * @throws ApiError
     */
    public static teamsDeleteDiscussionCommentLegacy(
        teamId: number,
        discussionNumber: number,
        commentNumber: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}',
            path: {
                'team_id': teamId,
                'discussion_number': discussionNumber,
                'comment_number': commentNumber,
            },
        });
    }

    /**
     * @deprecated
     * List pending team invitations (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List pending team invitations`](https://docs.github.com/rest/teams/members#list-pending-team-invitations) endpoint.
     *
     * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
     * @param teamId The unique identifier of the team.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns organization_invitation Response
     * @throws ApiError
     */
    public static teamsListPendingInvitationsLegacy(
        teamId: number,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<organization_invitation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/invitations',
            path: {
                'team_id': teamId,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * @deprecated
     * List team members (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/rest/teams/members#list-team-members) endpoint.
     *
     * Team members will include the members of child teams.
     * @param teamId The unique identifier of the team.
     * @param role Filters members returned by their role in the team.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    public static teamsListMembersLegacy(
        teamId: number,
        role: 'member' | 'maintainer' | 'all' = 'all',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/members',
            path: {
                'team_id': teamId,
            },
            query: {
                'role': role,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * @deprecated
     * Get team member (Legacy)
     * The "Get team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Get team membership for a user](https://docs.github.com/rest/teams/members#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
     *
     * To list members in a team, the team must be visible to the authenticated user.
     * @param teamId The unique identifier of the team.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static teamsGetMemberLegacy(
        teamId: number,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/members/{username}',
            path: {
                'team_id': teamId,
                'username': username,
            },
            errors: {
                404: `if user is not a member`,
            },
        });
    }

    /**
     * @deprecated
     * Add team member (Legacy)
     * The "Add team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Add or update team membership for a user](https://docs.github.com/rest/teams/members#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     * @param teamId The unique identifier of the team.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static teamsAddMemberLegacy(
        teamId: number,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/teams/{team_id}/members/{username}',
            path: {
                'team_id': teamId,
                'username': username,
            },
            errors: {
                403: `Forbidden`,
                404: `Not Found if team synchronization is set up`,
                422: `Unprocessable Entity if you attempt to add an organization to a team or you attempt to add a user to a team when they are not a member of at least one other team in the same organization`,
            },
        });
    }

    /**
     * @deprecated
     * Remove team member (Legacy)
     * The "Remove team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Remove team membership for a user](https://docs.github.com/rest/teams/members#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     * @param teamId The unique identifier of the team.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static teamsRemoveMemberLegacy(
        teamId: number,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/teams/{team_id}/members/{username}',
            path: {
                'team_id': teamId,
                'username': username,
            },
            errors: {
                404: `Not Found if team synchronization is setup`,
            },
        });
    }

    /**
     * @deprecated
     * Get team membership for a user (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/rest/teams/members#get-team-membership-for-a-user) endpoint.
     *
     * Team members will include the members of child teams.
     *
     * To get a user's membership with a team, the team must be visible to the authenticated user.
     *
     * **Note:**
     * The response contains the `state` of the membership and the member's `role`.
     *
     * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/teams/teams#create-a-team).
     * @param teamId The unique identifier of the team.
     * @param username The handle for the GitHub user account.
     * @returns team_membership Response
     * @throws ApiError
     */
    public static teamsGetMembershipForUserLegacy(
        teamId: number,
        username: string,
    ): CancelablePromise<team_membership> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/memberships/{username}',
            path: {
                'team_id': teamId,
                'username': username,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * @deprecated
     * Add or update team membership for a user (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/rest/teams/members#add-or-update-team-membership-for-a-user) endpoint.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
     *
     * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     * @param teamId The unique identifier of the team.
     * @param username The handle for the GitHub user account.
     * @param requestBody
     * @returns team_membership Response
     * @throws ApiError
     */
    public static teamsAddOrUpdateMembershipForUserLegacy(
        teamId: number,
        username: string,
        requestBody?: {
            /**
             * The role that this user should have in the team.
             */
            role?: 'member' | 'maintainer';
        },
    ): CancelablePromise<team_membership> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/teams/{team_id}/memberships/{username}',
            path: {
                'team_id': teamId,
                'username': username,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden if team synchronization is set up`,
                404: `Resource not found`,
                422: `Unprocessable Entity if you attempt to add an organization to a team`,
            },
        });
    }

    /**
     * @deprecated
     * Remove team membership for a user (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/rest/teams/members#remove-team-membership-for-a-user) endpoint.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     * @param teamId The unique identifier of the team.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static teamsRemoveMembershipForUserLegacy(
        teamId: number,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/teams/{team_id}/memberships/{username}',
            path: {
                'team_id': teamId,
                'username': username,
            },
            errors: {
                403: `if team synchronization is set up`,
            },
        });
    }

    /**
     * @deprecated
     * List team projects (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/rest/teams/teams#list-team-projects) endpoint.
     *
     * Lists the organization projects for a team.
     * @param teamId The unique identifier of the team.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns team_project Response
     * @throws ApiError
     */
    public static teamsListProjectsLegacy(
        teamId: number,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<team_project>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/projects',
            path: {
                'team_id': teamId,
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
     * @deprecated
     * Check team permissions for a project (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/rest/teams/teams#check-team-permissions-for-a-project) endpoint.
     *
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     * @param teamId The unique identifier of the team.
     * @param projectId The unique identifier of the project.
     * @returns team_project Response
     * @throws ApiError
     */
    public static teamsCheckPermissionsForProjectLegacy(
        teamId: number,
        projectId: number,
    ): CancelablePromise<team_project> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/projects/{project_id}',
            path: {
                'team_id': teamId,
                'project_id': projectId,
            },
            errors: {
                404: `Not Found if project is not managed by this team`,
            },
        });
    }

    /**
     * @deprecated
     * Add or update team project permissions (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/rest/teams/teams#add-or-update-team-project-permissions) endpoint.
     *
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     * @param teamId The unique identifier of the team.
     * @param projectId The unique identifier of the project.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static teamsAddOrUpdateProjectPermissionsLegacy(
        teamId: number,
        projectId: number,
        requestBody?: {
            /**
             * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
             */
            permission?: 'read' | 'write' | 'admin';
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/teams/{team_id}/projects/{project_id}',
            path: {
                'team_id': teamId,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden if the project is not owned by the organization`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * @deprecated
     * Remove a project from a team (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/rest/teams/teams#remove-a-project-from-a-team) endpoint.
     *
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
     * @param teamId The unique identifier of the team.
     * @param projectId The unique identifier of the project.
     * @returns void
     * @throws ApiError
     */
    public static teamsRemoveProjectLegacy(
        teamId: number,
        projectId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/teams/{team_id}/projects/{project_id}',
            path: {
                'team_id': teamId,
                'project_id': projectId,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * @deprecated
     * List team repositories (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/rest/teams/teams#list-team-repositories) endpoint.
     * @param teamId The unique identifier of the team.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns minimal_repository Response
     * @throws ApiError
     */
    public static teamsListReposLegacy(
        teamId: number,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<minimal_repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/repos',
            path: {
                'team_id': teamId,
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
     * @deprecated
     * Check team permissions for a repository (Legacy)
     * **Note**: Repositories inherited through a parent team will also be checked.
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/rest/teams/teams#check-team-permissions-for-a-repository) endpoint.
     *
     * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
     * @param teamId The unique identifier of the team.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns team_repository Alternative response with extra repository information
     * @throws ApiError
     */
    public static teamsCheckPermissionsForRepoLegacy(
        teamId: number,
        owner: string,
        repo: string,
    ): CancelablePromise<team_repository> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/repos/{owner}/{repo}',
            path: {
                'team_id': teamId,
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `Not Found if repository is not managed by this team`,
            },
        });
    }

    /**
     * @deprecated
     * Add or update team repository permissions (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/rest/teams/teams#add-or-update-team-repository-permissions)" endpoint.
     *
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     * @param teamId The unique identifier of the team.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static teamsAddOrUpdateRepoPermissionsLegacy(
        teamId: number,
        owner: string,
        repo: string,
        requestBody?: {
            /**
             * The permission to grant the team on this repository. If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
             */
            permission?: 'pull' | 'push' | 'admin';
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/teams/{team_id}/repos/{owner}/{repo}',
            path: {
                'team_id': teamId,
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
     * @deprecated
     * Remove a repository from a team (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/rest/teams/teams#remove-a-repository-from-a-team) endpoint.
     *
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
     * @param teamId The unique identifier of the team.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    public static teamsRemoveRepoLegacy(
        teamId: number,
        owner: string,
        repo: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/teams/{team_id}/repos/{owner}/{repo}',
            path: {
                'team_id': teamId,
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * @deprecated
     * List child teams (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/rest/teams/teams#list-child-teams) endpoint.
     * @param teamId The unique identifier of the team.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns team if child teams exist
     * @throws ApiError
     */
    public static teamsListChildLegacy(
        teamId: number,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<team>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{team_id}/teams',
            path: {
                'team_id': teamId,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List teams for the authenticated user
     * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/apps/building-oauth-apps/). When using a fine-grained personal access token, the resource owner of the token [must be a single organization](https://docs.github.com/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#fine-grained-personal-access-tokens), and have at least read-only member organization permissions. The response payload only contains the teams from a single organization when using a fine-grained personal access token.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns team_full Response
     * @throws ApiError
     */
    public static teamsListForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<team_full>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/teams',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

}
