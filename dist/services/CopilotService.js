"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopilotService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CopilotService {
    /**
     * Get Copilot for Business seat information and settings for an organization
     * **Note**: This endpoint is in beta and is subject to change.
     *
     * Gets information about an organization's Copilot for Business subscription, including seat breakdown
     * and code matching policies. To configure these settings, go to your organization's settings on GitHub.com.
     * For more information, see "[Configuring GitHub Copilot settings in your organization](https://docs.github.com/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)".
     *
     * Only organization owners and members with admin permissions can configure and view details about the organization's Copilot for Business subscription. You must
     * authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @returns copilot_organization_details OK
     * @throws ApiError
     */
    static copilotGetCopilotOrganizationDetails(org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/copilot/billing',
            path: {
                'org': org,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * List all Copilot for Business seat assignments for an organization
     * **Note**: This endpoint is in beta and is subject to change.
     *
     * Lists all Copilot for Business seat assignments for an organization that are currently being billed (either active or pending cancellation at the start of the next billing cycle).
     *
     * Only organization owners and members with admin permissions can configure and view details about the organization's Copilot for Business subscription. You must
     * authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns any Response
     * @throws ApiError
     */
    static copilotListCopilotSeats(org, page = 1, perPage = 50) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/copilot/billing/seats',
            path: {
                'org': org,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Add teams to the Copilot for Business subscription for an organization
     * **Note**: This endpoint is in beta and is subject to change.
     *
     * Purchases a GitHub Copilot for Business seat for all users within each specified team.
     * The organization will be billed accordingly. For more information about Copilot for Business pricing, see "[About billing for GitHub Copilot for Business](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-for-business)".
     *
     * Only organization owners and members with admin permissions can configure GitHub Copilot in their organization. You must
     * authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.
     *
     * In order for an admin to use this endpoint, the organization must have a Copilot for Business subscription and a configured suggestion matching policy.
     * For more information about setting up a Copilot for Business subscription, see "[Setting up a Copilot for Business subscription for your organization](https://docs.github.com/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise#setting-up-a-copilot-for-business-subscription-for-your-organization)".
     * For more information about setting a suggestion matching policy, see "[Configuring suggestion matching policies for GitHub Copilot in your organization](https://docs.github.com/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization#configuring-suggestion-matching-policies-for-github-copilot-in-your-organization)".
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    static copilotAddCopilotForBusinessSeatsForTeams(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/copilot/billing/selected_teams',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Copilot for Business is not enabled for this organization, billing has not been set up for this organization, a public code suggestions policy has not been set for this organization, or the organization's Copilot access setting is set to enable Copilot for all users or is unconfigured.`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Remove teams from the Copilot for Business subscription for an organization
     * **Note**: This endpoint is in beta and is subject to change.
     *
     * Cancels the Copilot for Business seat assignment for all members of each team specified.
     * This will cause the members of the specified team(s) to lose access to GitHub Copilot at the end of the current billing cycle, and the organization will not be billed further for those users.
     *
     * For more information about Copilot for Business pricing, see "[About billing for GitHub Copilot for Business](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-for-business)".
     *
     * For more information about disabling access to Copilot for Business, see "[Disabling access to GitHub Copilot for specific users in your organization](https://docs.github.com/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization#disabling-access-to-github-copilot-for-specific-users-in-your-organization)".
     *
     * Only organization owners and members with admin permissions can configure GitHub Copilot in their organization. You must
     * authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    static copilotCancelCopilotSeatAssignmentForTeams(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/copilot/billing/selected_teams',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Copilot for Business is not enabled for this organization, billing has not been set up for this organization, a public code suggestions policy has not been set for this organization, or the organization's Copilot access setting is set to enable Copilot for all users or is unconfigured.`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Add users to the Copilot for Business subscription for an organization
     * **Note**: This endpoint is in beta and is subject to change.
     *
     * Purchases a GitHub Copilot for Business seat for each user specified.
     * The organization will be billed accordingly. For more information about Copilot for Business pricing, see "[About billing for GitHub Copilot for Business](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-for-business)".
     *
     * Only organization owners and members with admin permissions can configure GitHub Copilot in their organization. You must
     * authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.
     *
     * In order for an admin to use this endpoint, the organization must have a Copilot for Business subscription and a configured suggestion matching policy.
     * For more information about setting up a Copilot for Business subscription, see "[Setting up a Copilot for Business subscription for your organization](https://docs.github.com/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise#setting-up-a-copilot-for-business-subscription-for-your-organization)".
     * For more information about setting a suggestion matching policy, see "[Configuring suggestion matching policies for GitHub Copilot in your organization](https://docs.github.com/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization#configuring-suggestion-matching-policies-for-github-copilot-in-your-organization)".
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    static copilotAddCopilotForBusinessSeatsForUsers(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/copilot/billing/selected_users',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Copilot for Business is not enabled for this organization, billing has not been set up for this organization, a public code suggestions policy has not been set for this organization, or the organization's Copilot access setting is set to enable Copilot for all users or is unconfigured.`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Remove users from the Copilot for Business subscription for an organization
     * **Note**: This endpoint is in beta and is subject to change.
     *
     * Cancels the Copilot for Business seat assignment for each user specified.
     * This will cause the specified users to lose access to GitHub Copilot at the end of the current billing cycle, and the organization will not be billed further for those users.
     *
     * For more information about Copilot for Business pricing, see "[About billing for GitHub Copilot for Business](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-for-business)"
     *
     * For more information about disabling access to Copilot for Business, see "[Disabling access to GitHub Copilot for specific users in your organization](https://docs.github.com/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization#disabling-access-to-github-copilot-for-specific-users-in-your-organization)".
     *
     * Only organization owners and members with admin permissions can configure GitHub Copilot in their organization. You must
     * authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    static copilotCancelCopilotSeatAssignmentForUsers(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/copilot/billing/selected_users',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Copilot for Business is not enabled for this organization, billing has not been set up for this organization, a public code suggestions policy has not been set for this organization, the seat management setting is set to enable Copilot for all users or is unconfigured, or a user's seat cannot be cancelled because it was assigned to them via a team.`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Get Copilot for Business seat assignment details for a user
     * **Note**: This endpoint is in beta and is subject to change.
     *
     * Gets the GitHub Copilot for Business seat assignment details for a member of an organization who currently has access to GitHub Copilot.
     *
     * Organization owners and members with admin permissions can view GitHub Copilot seat assignment details for members in their organization. You must authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns copilot_seat_details The user's GitHub Copilot seat details, including usage.
     * @throws ApiError
     */
    static copilotGetCopilotSeatAssignmentDetailsForUser(org, username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/members/{username}/copilot',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Copilot for Business is not enabled for this organization or the user has a pending organization invitation.`,
                500: `Internal Error`,
            },
        });
    }
}
exports.CopilotService = CopilotService;
//# sourceMappingURL=CopilotService.js.map