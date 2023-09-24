/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { hook_delivery } from '../models/hook_delivery';
import type { hook_delivery_item } from '../models/hook_delivery_item';
import type { installation } from '../models/installation';
import type { minimal_repository } from '../models/minimal_repository';
import type { org_hook } from '../models/org_hook';
import type { org_membership } from '../models/org_membership';
import type { organization_full } from '../models/organization_full';
import type { organization_invitation } from '../models/organization_invitation';
import type { organization_programmatic_access_grant } from '../models/organization_programmatic_access_grant';
import type { organization_programmatic_access_grant_request } from '../models/organization_programmatic_access_grant_request';
import type { organization_simple } from '../models/organization_simple';
import type { simple_user } from '../models/simple_user';
import type { team } from '../models/team';
import type { team_simple } from '../models/team_simple';
import type { webhook_config } from '../models/webhook_config';
import type { webhook_config_content_type } from '../models/webhook_config_content_type';
import type { webhook_config_insecure_ssl } from '../models/webhook_config_insecure_ssl';
import type { webhook_config_secret } from '../models/webhook_config_secret';
import type { webhook_config_url } from '../models/webhook_config_url';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrgsService {

    /**
     * List organizations
     * Lists all organizations, in the order that they were created on GitHub.
     *
     * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers) to get the URL for the next page of organizations.
     * @param since An organization ID. Only return organizations with an ID greater than this ID.
     * @param perPage The number of results per page (max 100).
     * @returns organization_simple Response
     * @throws ApiError
     */
    public static orgsList(
        since?: number,
        perPage: number = 30,
    ): CancelablePromise<Array<organization_simple>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/organizations',
            query: {
                'since': since,
                'per_page': perPage,
            },
            errors: {
                304: `Not modified`,
            },
        });
    }

    /**
     * Get an organization
     * To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
     *
     * GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub plan. See "[Authenticating with GitHub Apps](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub plan information' below."
     * @param org The organization name. The name is not case sensitive.
     * @returns organization_full Response
     * @throws ApiError
     */
    public static orgsGet(
        org: string,
    ): CancelablePromise<organization_full> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}',
            path: {
                'org': org,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Update an organization
     * **Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
     *
     * Enables an authenticated organization owner with the `admin:org` scope or the `repo` scope to update the organization's profile and member privileges.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns organization_full Response
     * @throws ApiError
     */
    public static orgsUpdate(
        org: string,
        requestBody?: {
            /**
             * Billing email address. This address is not publicized.
             */
            billing_email?: string;
            /**
             * The company name.
             */
            company?: string;
            /**
             * The publicly visible email address.
             */
            email?: string;
            /**
             * The Twitter username of the company.
             */
            twitter_username?: string;
            /**
             * The location.
             */
            location?: string;
            /**
             * The shorthand name of the company.
             */
            name?: string;
            /**
             * The description of the company.
             */
            description?: string;
            /**
             * Whether an organization can use organization projects.
             */
            has_organization_projects?: boolean;
            /**
             * Whether repositories that belong to the organization can use repository projects.
             */
            has_repository_projects?: boolean;
            /**
             * Default permission level members have for organization repositories.
             */
            default_repository_permission?: 'read' | 'write' | 'admin' | 'none';
            /**
             * Whether of non-admin organization members can create repositories. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.
             */
            members_can_create_repositories?: boolean;
            /**
             * Whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
             */
            members_can_create_internal_repositories?: boolean;
            /**
             * Whether organization members can create private repositories, which are visible to organization members with permission. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
             */
            members_can_create_private_repositories?: boolean;
            /**
             * Whether organization members can create public repositories, which are visible to anyone. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
             */
            members_can_create_public_repositories?: boolean;
            /**
             * Specifies which types of repositories non-admin organization members can create. `private` is only available to repositories that are part of an organization on GitHub Enterprise Cloud.
             * **Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See the parameter deprecation notice in the operation description for details.
             */
            members_allowed_repository_creation_type?: 'all' | 'private' | 'none';
            /**
             * Whether organization members can create GitHub Pages sites. Existing published sites will not be impacted.
             */
            members_can_create_pages?: boolean;
            /**
             * Whether organization members can create public GitHub Pages sites. Existing published sites will not be impacted.
             */
            members_can_create_public_pages?: boolean;
            /**
             * Whether organization members can create private GitHub Pages sites. Existing published sites will not be impacted.
             */
            members_can_create_private_pages?: boolean;
            /**
             * Whether organization members can fork private organization repositories.
             */
            members_can_fork_private_repositories?: boolean;
            /**
             * Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface.
             */
            web_commit_signoff_required?: boolean;
            blog?: string;
            /**
             * Whether GitHub Advanced Security is automatically enabled for new repositories.
             *
             * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
             *
             * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
             */
            advanced_security_enabled_for_new_repositories?: boolean;
            /**
             * Whether Dependabot alerts is automatically enabled for new repositories.
             *
             * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
             *
             * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
             */
            dependabot_alerts_enabled_for_new_repositories?: boolean;
            /**
             * Whether Dependabot security updates is automatically enabled for new repositories.
             *
             * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
             *
             * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
             */
            dependabot_security_updates_enabled_for_new_repositories?: boolean;
            /**
             * Whether dependency graph is automatically enabled for new repositories.
             *
             * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
             *
             * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
             */
            dependency_graph_enabled_for_new_repositories?: boolean;
            /**
             * Whether secret scanning is automatically enabled for new repositories.
             *
             * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
             *
             * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
             */
            secret_scanning_enabled_for_new_repositories?: boolean;
            /**
             * Whether secret scanning push protection is automatically enabled for new repositories.
             *
             * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
             *
             * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
             */
            secret_scanning_push_protection_enabled_for_new_repositories?: boolean;
            /**
             * Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection.
             */
            secret_scanning_push_protection_custom_link_enabled?: boolean;
            /**
             * If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret.
             */
            secret_scanning_push_protection_custom_link?: string;
        },
    ): CancelablePromise<organization_full> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/orgs/{org}',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Conflict`,
                422: `Validation failed`,
            },
        });
    }

    /**
     * Delete an organization
     * Deletes an organization and all its repositories.
     *
     * The organization login will be unavailable for 90 days after deletion.
     *
     * Please review the Terms of Service regarding account deletion before using this endpoint:
     *
     * https://docs.github.com/site-policy/github-terms/github-terms-of-service
     * @param org The organization name. The name is not case sensitive.
     * @returns any Accepted
     * @throws ApiError
     */
    public static orgsDelete(
        org: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}',
            path: {
                'org': org,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List users blocked by an organization
     * List the users blocked by an organization.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    public static orgsListBlockedUsers(
        org: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/blocks',
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
     * Check if a user is blocked by an organization
     * Returns a 204 if the given user is blocked by the given organization. Returns a 404 if the organization is not blocking the user, or if the user account has been identified as spam by GitHub.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static orgsCheckBlockedUser(
        org: string,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/blocks/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                404: `If the user is not blocked`,
            },
        });
    }

    /**
     * Block a user from an organization
     * Blocks the given user on behalf of the specified organization and returns a 204. If the organization cannot block the given user a 422 is returned.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static orgsBlockUser(
        org: string,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/blocks/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Unblock a user from an organization
     * Unblocks the given user on behalf of the specified organization.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static orgsUnblockUser(
        org: string,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/blocks/{username}',
            path: {
                'org': org,
                'username': username,
            },
        });
    }

    /**
     * List failed organization invitations
     * The return hash contains `failed_at` and `failed_reason` fields which represent the time at which the invitation failed and the reason for the failure.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns organization_invitation Response
     * @throws ApiError
     */
    public static orgsListFailedInvitations(
        org: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<organization_invitation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/failed_invitations',
            path: {
                'org': org,
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
     * List organization webhooks
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns org_hook Response
     * @throws ApiError
     */
    public static orgsListWebhooks(
        org: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<org_hook>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/hooks',
            path: {
                'org': org,
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
     * Create an organization webhook
     * Here's how you can create a hook that posts payloads in JSON format:
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns org_hook Response
     * @throws ApiError
     */
    public static orgsCreateWebhook(
        org: string,
        requestBody: {
            /**
             * Must be passed as "web".
             */
            name: string;
            /**
             * Key/value pairs to provide settings for this webhook.
             */
            config: {
                url: webhook_config_url;
                content_type?: webhook_config_content_type;
                secret?: webhook_config_secret;
                insecure_ssl?: webhook_config_insecure_ssl;
                username?: string;
                password?: string;
            };
            /**
             * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. Set to `["*"]` to receive all possible events.
             */
            events?: Array<string>;
            /**
             * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
             */
            active?: boolean;
        },
    ): CancelablePromise<org_hook> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/hooks',
            path: {
                'org': org,
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
     * Get an organization webhook
     * Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/orgs/webhooks#get-a-webhook-configuration-for-an-organization)."
     * @param org The organization name. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @returns org_hook Response
     * @throws ApiError
     */
    public static orgsGetWebhook(
        org: string,
        hookId: number,
    ): CancelablePromise<org_hook> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/hooks/{hook_id}',
            path: {
                'org': org,
                'hook_id': hookId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Update an organization webhook
     * Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/orgs/webhooks#update-a-webhook-configuration-for-an-organization)."
     * @param org The organization name. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @param requestBody
     * @returns org_hook Response
     * @throws ApiError
     */
    public static orgsUpdateWebhook(
        org: string,
        hookId: number,
        requestBody?: {
            /**
             * Key/value pairs to provide settings for this webhook.
             */
            config?: {
                url: webhook_config_url;
                content_type?: webhook_config_content_type;
                secret?: webhook_config_secret;
                insecure_ssl?: webhook_config_insecure_ssl;
            };
            /**
             * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
             */
            events?: Array<string>;
            /**
             * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
             */
            active?: boolean;
            name?: string;
        },
    ): CancelablePromise<org_hook> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/orgs/{org}/hooks/{hook_id}',
            path: {
                'org': org,
                'hook_id': hookId,
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
     * Delete an organization webhook
     * @param org The organization name. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @returns void
     * @throws ApiError
     */
    public static orgsDeleteWebhook(
        org: string,
        hookId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/hooks/{hook_id}',
            path: {
                'org': org,
                'hook_id': hookId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Get a webhook configuration for an organization
     * Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/orgs/webhooks#get-an-organization-webhook)."
     *
     * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:read` permission.
     * @param org The organization name. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @returns webhook_config Response
     * @throws ApiError
     */
    public static orgsGetWebhookConfigForOrg(
        org: string,
        hookId: number,
    ): CancelablePromise<webhook_config> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/hooks/{hook_id}/config',
            path: {
                'org': org,
                'hook_id': hookId,
            },
        });
    }

    /**
     * Update a webhook configuration for an organization
     * Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/orgs/webhooks#update-an-organization-webhook)."
     *
     * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:write` permission.
     * @param org The organization name. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @param requestBody
     * @returns webhook_config Response
     * @throws ApiError
     */
    public static orgsUpdateWebhookConfigForOrg(
        org: string,
        hookId: number,
        requestBody?: {
            url?: webhook_config_url;
            content_type?: webhook_config_content_type;
            secret?: webhook_config_secret;
            insecure_ssl?: webhook_config_insecure_ssl;
        },
    ): CancelablePromise<webhook_config> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/orgs/{org}/hooks/{hook_id}/config',
            path: {
                'org': org,
                'hook_id': hookId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List deliveries for an organization webhook
     * Returns a list of webhook deliveries for a webhook configured in an organization.
     * @param org The organization name. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @param perPage The number of results per page (max 100).
     * @param cursor Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.
     * @param redelivery
     * @returns hook_delivery_item Response
     * @throws ApiError
     */
    public static orgsListWebhookDeliveries(
        org: string,
        hookId: number,
        perPage: number = 30,
        cursor?: string,
        redelivery?: boolean,
    ): CancelablePromise<Array<hook_delivery_item>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/hooks/{hook_id}/deliveries',
            path: {
                'org': org,
                'hook_id': hookId,
            },
            query: {
                'per_page': perPage,
                'cursor': cursor,
                'redelivery': redelivery,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get a webhook delivery for an organization webhook
     * Returns a delivery for a webhook configured in an organization.
     * @param org The organization name. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @param deliveryId
     * @returns hook_delivery Response
     * @throws ApiError
     */
    public static orgsGetWebhookDelivery(
        org: string,
        hookId: number,
        deliveryId: number,
    ): CancelablePromise<hook_delivery> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}',
            path: {
                'org': org,
                'hook_id': hookId,
                'delivery_id': deliveryId,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Redeliver a delivery for an organization webhook
     * Redeliver a delivery for a webhook configured in an organization.
     * @param org The organization name. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @param deliveryId
     * @returns any Accepted
     * @throws ApiError
     */
    public static orgsRedeliverWebhookDelivery(
        org: string,
        hookId: number,
        deliveryId: number,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts',
            path: {
                'org': org,
                'hook_id': hookId,
                'delivery_id': deliveryId,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Ping an organization webhook
     * This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.
     * @param org The organization name. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @returns void
     * @throws ApiError
     */
    public static orgsPingWebhook(
        org: string,
        hookId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/hooks/{hook_id}/pings',
            path: {
                'org': org,
                'hook_id': hookId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * List app installations for an organization
     * Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static orgsListAppInstallations(
        org: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        installations: Array<installation>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/installations',
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
     * List pending organization invitations
     * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, or `hiring_manager`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param role Filter invitations by their member role.
     * @param invitationSource Filter invitations by their invitation source.
     * @returns organization_invitation Response
     * @throws ApiError
     */
    public static orgsListPendingInvitations(
        org: string,
        perPage: number = 30,
        page: number = 1,
        role: 'all' | 'admin' | 'direct_member' | 'billing_manager' | 'hiring_manager' = 'all',
        invitationSource: 'all' | 'member' | 'scim' = 'all',
    ): CancelablePromise<Array<organization_invitation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/invitations',
            path: {
                'org': org,
            },
            query: {
                'per_page': perPage,
                'page': page,
                'role': role,
                'invitation_source': invitationSource,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create an organization invitation
     * Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns organization_invitation Response
     * @throws ApiError
     */
    public static orgsCreateInvitation(
        org: string,
        requestBody?: {
            /**
             * **Required unless you provide `email`**. GitHub user ID for the person you are inviting.
             */
            invitee_id?: number;
            /**
             * **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
             */
            email?: string;
            /**
             * The role for the new member.
             * * `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.
             * * `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.
             * * `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
             */
            role?: 'admin' | 'direct_member' | 'billing_manager';
            /**
             * Specify IDs for the teams you want to invite new members to.
             */
            team_ids?: Array<number>;
        },
    ): CancelablePromise<organization_invitation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/invitations',
            path: {
                'org': org,
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
     * Cancel an organization invitation
     * Cancel an organization invitation. In order to cancel an organization invitation, the authenticated user must be an organization owner.
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications).
     * @param org The organization name. The name is not case sensitive.
     * @param invitationId The unique identifier of the invitation.
     * @returns void
     * @throws ApiError
     */
    public static orgsCancelInvitation(
        org: string,
        invitationId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/invitations/{invitation_id}',
            path: {
                'org': org,
                'invitation_id': invitationId,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List organization invitation teams
     * List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.
     * @param org The organization name. The name is not case sensitive.
     * @param invitationId The unique identifier of the invitation.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns team Response
     * @throws ApiError
     */
    public static orgsListInvitationTeams(
        org: string,
        invitationId: number,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<team>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/invitations/{invitation_id}/teams',
            path: {
                'org': org,
                'invitation_id': invitationId,
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
     * List organization members
     * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
     * @param org The organization name. The name is not case sensitive.
     * @param filter Filter members returned in the list. `2fa_disabled` means that only members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled will be returned. This options is only available for organization owners.
     * @param role Filter members returned by their role.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    public static orgsListMembers(
        org: string,
        filter: '2fa_disabled' | 'all' = 'all',
        role: 'all' | 'admin' | 'member' = 'all',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/members',
            path: {
                'org': org,
            },
            query: {
                'filter': filter,
                'role': role,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Check organization membership for a user
     * Check if a user is, publicly or privately, a member of the organization.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static orgsCheckMembershipForUser(
        org: string,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                302: `Response if requester is not an organization member`,
                404: `Not Found if requester is an organization member and user is not a member`,
            },
        });
    }

    /**
     * Remove an organization member
     * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static orgsRemoveMember(
        org: string,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }

    /**
     * Get organization membership for a user
     * In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns org_membership Response
     * @throws ApiError
     */
    public static orgsGetMembershipForUser(
        org: string,
        username: string,
    ): CancelablePromise<org_membership> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/memberships/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Set organization membership for a user
     * Only authenticated organization owners can add a member to the organization or update the member's role.
     *
     * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/rest/orgs/members#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
     *
     * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
     *
     * **Rate limits**
     *
     * To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @param requestBody
     * @returns org_membership Response
     * @throws ApiError
     */
    public static orgsSetMembershipForUser(
        org: string,
        username: string,
        requestBody?: {
            /**
             * The role to give the user in the organization. Can be one of:
             * * `admin` - The user will become an owner of the organization.
             * * `member` - The user will become a non-owner member of the organization.
             */
            role?: 'admin' | 'member';
        },
    ): CancelablePromise<org_membership> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/memberships/{username}',
            path: {
                'org': org,
                'username': username,
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
     * Remove organization membership for a user
     * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
     *
     * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static orgsRemoveMembershipForUser(
        org: string,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/memberships/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List outside collaborators for an organization
     * List all users who are outside collaborators of an organization.
     * @param org The organization name. The name is not case sensitive.
     * @param filter Filter the list of outside collaborators. `2fa_disabled` means that only outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled will be returned.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    public static orgsListOutsideCollaborators(
        org: string,
        filter: '2fa_disabled' | 'all' = 'all',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/outside_collaborators',
            path: {
                'org': org,
            },
            query: {
                'filter': filter,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Convert an organization member to outside collaborator
     * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)". Converting an organization member to an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @param requestBody
     * @returns any User is getting converted asynchronously
     * @throws ApiError
     */
    public static orgsConvertMemberToOutsideCollaborator(
        org: string,
        username: string,
        requestBody?: {
            /**
             * When set to `true`, the request will be performed asynchronously. Returns a 202 status code when the job is successfully queued.
             */
            async?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/outside_collaborators/{username}',
            path: {
                'org': org,
                'username': username,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden if user is the last owner of the organization, not a member of the organization, or if the enterprise enforces a policy for inviting outside collaborators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Remove outside collaborator from an organization
     * Removing a user from this list will remove them from all the organization's repositories.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static orgsRemoveOutsideCollaborator(
        org: string,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/outside_collaborators/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                422: `Unprocessable Entity if user is a member of the organization`,
            },
        });
    }

    /**
     * List requests to access organization resources with fine-grained personal access tokens
     * Lists requests from organization members to access organization resources with a fine-grained personal access token. Only GitHub Apps can call this API,
     * using the `organization_personal_access_token_requests: read` permission.
     *
     * **Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param sort The property by which to sort the results.
     * @param direction The direction to sort the results by.
     * @param owner A list of owner usernames to use to filter the results.
     * @param repository The name of the repository to use to filter the results.
     * @param permission The permission to use to filter the results.
     * @param lastUsedBefore Only show fine-grained personal access tokens used before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param lastUsedAfter Only show fine-grained personal access tokens used after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @returns organization_programmatic_access_grant_request Response
     * @throws ApiError
     */
    public static orgsListPatGrantRequests(
        org: string,
        perPage: number = 30,
        page: number = 1,
        sort: 'created_at' = 'created_at',
        direction: 'asc' | 'desc' = 'desc',
        owner?: Array<string>,
        repository?: string,
        permission?: string,
        lastUsedBefore?: string,
        lastUsedAfter?: string,
    ): CancelablePromise<Array<organization_programmatic_access_grant_request>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/personal-access-token-requests',
            path: {
                'org': org,
            },
            query: {
                'per_page': perPage,
                'page': page,
                'sort': sort,
                'direction': direction,
                'owner': owner,
                'repository': repository,
                'permission': permission,
                'last_used_before': lastUsedBefore,
                'last_used_after': lastUsedAfter,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Review requests to access organization resources with fine-grained personal access tokens
     * Approves or denies multiple pending requests to access organization resources via a fine-grained personal access token. Only GitHub Apps can call this API,
     * using the `organization_personal_access_token_requests: write` permission.
     *
     * **Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns any Accepted
     * @throws ApiError
     */
    public static orgsReviewPatGrantRequestsInBulk(
        org: string,
        requestBody: {
            /**
             * Unique identifiers of the requests for access via fine-grained personal access token. Must be formed of between 1 and 100 `pat_request_id` values.
             */
            pat_request_ids?: Array<number>;
            /**
             * Action to apply to the requests.
             */
            action: 'approve' | 'deny';
            /**
             * Reason for approving or denying the requests. Max 1024 characters.
             */
            reason?: string | null;
        },
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/personal-access-token-requests',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Review a request to access organization resources with a fine-grained personal access token
     * Approves or denies a pending request to access organization resources via a fine-grained personal access token. Only GitHub Apps can call this API,
     * using the `organization_personal_access_token_requests: write` permission.
     *
     * **Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.
     * @param org The organization name. The name is not case sensitive.
     * @param patRequestId Unique identifier of the request for access via fine-grained personal access token.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static orgsReviewPatGrantRequest(
        org: string,
        patRequestId: number,
        requestBody: {
            /**
             * Action to apply to the request.
             */
            action: 'approve' | 'deny';
            /**
             * Reason for approving or denying the request. Max 1024 characters.
             */
            reason?: string | null;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/personal-access-token-requests/{pat_request_id}',
            path: {
                'org': org,
                'pat_request_id': patRequestId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * List repositories requested to be accessed by a fine-grained personal access token
     * Lists the repositories a fine-grained personal access token request is requesting access to. Only GitHub Apps can call this API,
     * using the `organization_personal_access_token_requests: read` permission.
     *
     * **Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.
     * @param org The organization name. The name is not case sensitive.
     * @param patRequestId Unique identifier of the request for access via fine-grained personal access token.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns minimal_repository Response
     * @throws ApiError
     */
    public static orgsListPatGrantRequestRepositories(
        org: string,
        patRequestId: number,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<minimal_repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories',
            path: {
                'org': org,
                'pat_request_id': patRequestId,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * List fine-grained personal access tokens with access to organization resources
     * Lists approved fine-grained personal access tokens owned by organization members that can access organization resources. Only GitHub Apps can call this API,
     * using the `organization_personal_access_tokens: read` permission.
     *
     * **Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param sort The property by which to sort the results.
     * @param direction The direction to sort the results by.
     * @param owner A list of owner usernames to use to filter the results.
     * @param repository The name of the repository to use to filter the results.
     * @param permission The permission to use to filter the results.
     * @param lastUsedBefore Only show fine-grained personal access tokens used before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param lastUsedAfter Only show fine-grained personal access tokens used after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @returns organization_programmatic_access_grant Response
     * @throws ApiError
     */
    public static orgsListPatGrants(
        org: string,
        perPage: number = 30,
        page: number = 1,
        sort: 'created_at' = 'created_at',
        direction: 'asc' | 'desc' = 'desc',
        owner?: Array<string>,
        repository?: string,
        permission?: string,
        lastUsedBefore?: string,
        lastUsedAfter?: string,
    ): CancelablePromise<Array<organization_programmatic_access_grant>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/personal-access-tokens',
            path: {
                'org': org,
            },
            query: {
                'per_page': perPage,
                'page': page,
                'sort': sort,
                'direction': direction,
                'owner': owner,
                'repository': repository,
                'permission': permission,
                'last_used_before': lastUsedBefore,
                'last_used_after': lastUsedAfter,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Update the access to organization resources via fine-grained personal access tokens
     * Updates the access organization members have to organization resources via fine-grained personal access tokens. Limited to revoking a token's existing access. Only GitHub Apps can call this API,
     * using the `organization_personal_access_tokens: write` permission.
     *
     * **Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns any Accepted
     * @throws ApiError
     */
    public static orgsUpdatePatAccesses(
        org: string,
        requestBody: {
            /**
             * Action to apply to the fine-grained personal access token.
             */
            action: 'revoke';
            /**
             * The IDs of the fine-grained personal access tokens.
             */
            pat_ids: Array<number>;
        },
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/personal-access-tokens',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Update the access a fine-grained personal access token has to organization resources
     * Updates the access an organization member has to organization resources via a fine-grained personal access token. Limited to revoking the token's existing access. Limited to revoking a token's existing access. Only GitHub Apps can call this API,
     * using the `organization_personal_access_tokens: write` permission.
     *
     * **Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.
     * @param org The organization name. The name is not case sensitive.
     * @param patId The unique identifier of the fine-grained personal access token.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static orgsUpdatePatAccess(
        org: string,
        patId: number,
        requestBody: {
            /**
             * Action to apply to the fine-grained personal access token.
             */
            action: 'revoke';
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/personal-access-tokens/{pat_id}',
            path: {
                'org': org,
                'pat_id': patId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * List repositories a fine-grained personal access token has access to
     * Lists the repositories a fine-grained personal access token has access to. Only GitHub Apps can call this API,
     * using the `organization_personal_access_tokens: read` permission.
     *
     * **Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.
     * @param org The organization name. The name is not case sensitive.
     * @param patId Unique identifier of the fine-grained personal access token.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns minimal_repository Response
     * @throws ApiError
     */
    public static orgsListPatGrantRepositories(
        org: string,
        patId: number,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<minimal_repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/personal-access-tokens/{pat_id}/repositories',
            path: {
                'org': org,
                'pat_id': patId,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * List public organization members
     * Members of an organization can choose to have their membership publicized or not.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    public static orgsListPublicMembers(
        org: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/public_members',
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
     * Check public organization membership for a user
     * Check if the provided user is a public member of the organization.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static orgsCheckPublicMembershipForUser(
        org: string,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/public_members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                404: `Not Found if user is not a public member`,
            },
        });
    }

    /**
     * Set public organization membership for the authenticated user
     * The user can publicize their own membership. (A user cannot publicize the membership for another user.)
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static orgsSetPublicMembershipForAuthenticatedUser(
        org: string,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/public_members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }

    /**
     * Remove public organization membership for the authenticated user
     * Removes the public membership for the authenticated user from the specified organization, unless public visibility is enforced by default.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    public static orgsRemovePublicMembershipForAuthenticatedUser(
        org: string,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/public_members/{username}',
            path: {
                'org': org,
                'username': username,
            },
        });
    }

    /**
     * List security manager teams
     * Lists teams that are security managers for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
     *
     * To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `read:org` scope.
     *
     * GitHub Apps must have the `administration` organization read permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @returns team_simple Response
     * @throws ApiError
     */
    public static orgsListSecurityManagerTeams(
        org: string,
    ): CancelablePromise<Array<team_simple>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/security-managers',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Add a security manager team
     * Adds a team as a security manager for an organization. For more information, see "[Managing security for an organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) for an organization."
     *
     * To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `write:org` scope.
     *
     * GitHub Apps must have the `administration` organization read-write permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @returns void
     * @throws ApiError
     */
    public static orgsAddSecurityManagerTeam(
        org: string,
        teamSlug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/security-managers/teams/{team_slug}',
            path: {
                'org': org,
                'team_slug': teamSlug,
            },
            errors: {
                409: `The organization has reached the maximum number of security manager teams.`,
            },
        });
    }

    /**
     * Remove a security manager team
     * Removes the security manager role from a team for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) team from an organization."
     *
     * To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `admin:org` scope.
     *
     * GitHub Apps must have the `administration` organization read-write permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param teamSlug The slug of the team name.
     * @returns void
     * @throws ApiError
     */
    public static orgsRemoveSecurityManagerTeam(
        org: string,
        teamSlug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/security-managers/teams/{team_slug}',
            path: {
                'org': org,
                'team_slug': teamSlug,
            },
        });
    }

    /**
     * Enable or disable a security feature for an organization
     * Enables or disables the specified security feature for all eligible repositories in an organization.
     *
     * To use this endpoint, you must be an organization owner or be member of a team with the security manager role.
     * A token with the 'write:org' scope is also required.
     *
     * GitHub Apps must have the `organization_administration:write` permission to use this endpoint.
     *
     * For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
     * @param org The organization name. The name is not case sensitive.
     * @param securityProduct The security feature to enable or disable.
     * @param enablement The action to take.
     *
     * `enable_all` means to enable the specified security feature for all repositories in the organization.
     * `disable_all` means to disable the specified security feature for all repositories in the organization.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static orgsEnableOrDisableSecurityProductOnAllOrgRepos(
        org: string,
        securityProduct: 'dependency_graph' | 'dependabot_alerts' | 'dependabot_security_updates' | 'advanced_security' | 'code_scanning_default_setup' | 'secret_scanning' | 'secret_scanning_push_protection',
        enablement: 'enable_all' | 'disable_all',
        requestBody?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/{security_product}/{enablement}',
            path: {
                'org': org,
                'security_product': securityProduct,
                'enablement': enablement,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `The action could not be taken due to an in progress enablement, or a policy is preventing enablement`,
            },
        });
    }

    /**
     * List organization memberships for the authenticated user
     * Lists all of the authenticated user's organization memberships.
     * @param state Indicates the state of the memberships to return. If not specified, the API returns both active and pending memberships.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns org_membership Response
     * @throws ApiError
     */
    public static orgsListMembershipsForAuthenticatedUser(
        state?: 'active' | 'pending',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<org_membership>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/memberships/orgs',
            query: {
                'state': state,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get an organization membership for the authenticated user
     * If the authenticated user is an active or pending member of the organization, this endpoint will return the user's membership. If the authenticated user is not affiliated with the organization, a `404` is returned. This endpoint will return a `403` if the request is made by a GitHub App that is blocked by the organization.
     * @param org The organization name. The name is not case sensitive.
     * @returns org_membership Response
     * @throws ApiError
     */
    public static orgsGetMembershipForAuthenticatedUser(
        org: string,
    ): CancelablePromise<org_membership> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/memberships/orgs/{org}',
            path: {
                'org': org,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Update an organization membership for the authenticated user
     * Converts the authenticated user to an active member of the organization, if that user has a pending invitation from the organization.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns org_membership Response
     * @throws ApiError
     */
    public static orgsUpdateMembershipForAuthenticatedUser(
        org: string,
        requestBody: {
            /**
             * The state that the membership should be in. Only `"active"` will be accepted.
             */
            state: 'active';
        },
    ): CancelablePromise<org_membership> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/memberships/orgs/{org}',
            path: {
                'org': org,
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
     * List organizations for the authenticated user
     * List organizations for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns organization_simple Response
     * @throws ApiError
     */
    public static orgsListForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<organization_simple>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/orgs',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * List organizations for a user
     * List [public organization memberships](https://docs.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
     *
     * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/rest/orgs/orgs#list-organizations-for-the-authenticated-user) API instead.
     * @param username The handle for the GitHub user account.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns organization_simple Response
     * @throws ApiError
     */
    public static orgsListForUser(
        username: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<organization_simple>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/orgs',
            path: {
                'username': username,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

}
