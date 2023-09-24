/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app_permissions } from '../models/app_permissions';
import type { authorization } from '../models/authorization';
import type { hook_delivery } from '../models/hook_delivery';
import type { hook_delivery_item } from '../models/hook_delivery_item';
import type { installation } from '../models/installation';
import type { installation_token } from '../models/installation_token';
import type { integration } from '../models/integration';
import type { integration_installation_request } from '../models/integration_installation_request';
import type { marketplace_listing_plan } from '../models/marketplace_listing_plan';
import type { marketplace_purchase } from '../models/marketplace_purchase';
import type { repository } from '../models/repository';
import type { user_marketplace_purchase } from '../models/user_marketplace_purchase';
import type { webhook_config } from '../models/webhook_config';
import type { webhook_config_content_type } from '../models/webhook_config_content_type';
import type { webhook_config_insecure_ssl } from '../models/webhook_config_insecure_ssl';
import type { webhook_config_secret } from '../models/webhook_config_secret';
import type { webhook_config_url } from '../models/webhook_config_url';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AppsService {

    /**
     * Get the authenticated app
     * Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/rest/apps/apps#list-installations-for-the-authenticated-app)" endpoint.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @returns integration Response
     * @throws ApiError
     */
    public static appsGetAuthenticated(): CancelablePromise<integration> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app',
        });
    }

    /**
     * Create a GitHub App from a manifest
     * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
     * @param code
     * @returns any Response
     * @throws ApiError
     */
    public static appsCreateFromManifest(
        code: string,
    ): CancelablePromise<(integration & Record<string, any>)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/app-manifests/{code}/conversions',
            path: {
                'code': code,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get a webhook configuration for an app
     * Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @returns webhook_config Response
     * @throws ApiError
     */
    public static appsGetWebhookConfigForApp(): CancelablePromise<webhook_config> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app/hook/config',
        });
    }

    /**
     * Update a webhook configuration for an app
     * Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param requestBody
     * @returns webhook_config Response
     * @throws ApiError
     */
    public static appsUpdateWebhookConfigForApp(
        requestBody: {
            url?: webhook_config_url;
            content_type?: webhook_config_content_type;
            secret?: webhook_config_secret;
            insecure_ssl?: webhook_config_insecure_ssl;
        },
    ): CancelablePromise<webhook_config> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/app/hook/config',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List deliveries for an app webhook
     * Returns a list of webhook deliveries for the webhook configured for a GitHub App.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param perPage The number of results per page (max 100).
     * @param cursor Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.
     * @param redelivery
     * @returns hook_delivery_item Response
     * @throws ApiError
     */
    public static appsListWebhookDeliveries(
        perPage: number = 30,
        cursor?: string,
        redelivery?: boolean,
    ): CancelablePromise<Array<hook_delivery_item>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app/hook/deliveries',
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
     * Get a delivery for an app webhook
     * Returns a delivery for the webhook configured for a GitHub App.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param deliveryId
     * @returns hook_delivery Response
     * @throws ApiError
     */
    public static appsGetWebhookDelivery(
        deliveryId: number,
    ): CancelablePromise<hook_delivery> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app/hook/deliveries/{delivery_id}',
            path: {
                'delivery_id': deliveryId,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Redeliver a delivery for an app webhook
     * Redeliver a delivery for the webhook configured for a GitHub App.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param deliveryId
     * @returns any Accepted
     * @throws ApiError
     */
    public static appsRedeliverWebhookDelivery(
        deliveryId: number,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/app/hook/deliveries/{delivery_id}/attempts',
            path: {
                'delivery_id': deliveryId,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List installation requests for the authenticated app
     * Lists all the pending installation requests for the authenticated GitHub App.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns integration_installation_request List of integration installation requests
     * @throws ApiError
     */
    public static appsListInstallationRequestsForAuthenticatedApp(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<integration_installation_request>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app/installation-requests',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
            },
        });
    }

    /**
     * List installations for the authenticated app
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * The permissions the installation has are included under the `permissions` key.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param outdated
     * @returns installation The permissions the installation has are included under the `permissions` key.
     * @throws ApiError
     */
    public static appsListInstallations(
        perPage: number = 30,
        page: number = 1,
        since?: string,
        outdated?: string,
    ): CancelablePromise<Array<installation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app/installations',
            query: {
                'per_page': perPage,
                'page': page,
                'since': since,
                'outdated': outdated,
            },
        });
    }

    /**
     * Get an installation for the authenticated app
     * Enables an authenticated GitHub App to find an installation's information using the installation id.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param installationId The unique identifier of the installation.
     * @returns installation Response
     * @throws ApiError
     */
    public static appsGetInstallation(
        installationId: number,
    ): CancelablePromise<installation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Delete an installation for the authenticated app
     * Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/rest/apps/apps#suspend-an-app-installation)" endpoint.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param installationId The unique identifier of the installation.
     * @returns void
     * @throws ApiError
     */
    public static appsDeleteInstallation(
        installationId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/app/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create an installation access token for an app
     * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param installationId The unique identifier of the installation.
     * @param requestBody
     * @returns installation_token Response
     * @throws ApiError
     */
    public static appsCreateInstallationAccessToken(
        installationId: number,
        requestBody?: {
            /**
             * List of repository names that the token should have access to
             */
            repositories?: Array<string>;
            /**
             * List of repository IDs that the token should have access to
             */
            repository_ids?: Array<number>;
            permissions?: app_permissions;
        },
    ): CancelablePromise<installation_token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/app/installations/{installation_id}/access_tokens',
            path: {
                'installation_id': installationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Suspend an app installation
     * Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param installationId The unique identifier of the installation.
     * @returns void
     * @throws ApiError
     */
    public static appsSuspendInstallation(
        installationId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/app/installations/{installation_id}/suspended',
            path: {
                'installation_id': installationId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Unsuspend an app installation
     * Removes a GitHub App installation suspension.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param installationId The unique identifier of the installation.
     * @returns void
     * @throws ApiError
     */
    public static appsUnsuspendInstallation(
        installationId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/app/installations/{installation_id}/suspended',
            path: {
                'installation_id': installationId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Delete an app authorization
     * OAuth and GitHub application owners can revoke a grant for their application and a specific user. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
     * Deleting an application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
     * @param clientId The client ID of the GitHub app.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static appsDeleteAuthorization(
        clientId: string,
        requestBody: {
            /**
             * The OAuth access token used to authenticate to the GitHub API.
             */
            access_token: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/applications/{client_id}/grant',
            path: {
                'client_id': clientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Check a token
     * OAuth applications and GitHub applications with OAuth authorizations can use this API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
     * @param clientId The client ID of the GitHub app.
     * @param requestBody
     * @returns authorization Response
     * @throws ApiError
     */
    public static appsCheckToken(
        clientId: string,
        requestBody: {
            /**
             * The access_token of the OAuth or GitHub application.
             */
            access_token: string;
        },
    ): CancelablePromise<authorization> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/applications/{client_id}/token',
            path: {
                'client_id': clientId,
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
     * Reset a token
     * OAuth applications and GitHub applications with OAuth authorizations can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     * @param clientId The client ID of the GitHub app.
     * @param requestBody
     * @returns authorization Response
     * @throws ApiError
     */
    public static appsResetToken(
        clientId: string,
        requestBody: {
            /**
             * The access_token of the OAuth or GitHub application.
             */
            access_token: string;
        },
    ): CancelablePromise<authorization> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/applications/{client_id}/token',
            path: {
                'client_id': clientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Delete an app token
     * OAuth  or GitHub application owners can revoke a single token for an OAuth application or a GitHub application with an OAuth authorization. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the application's `client_id` and `client_secret` as the username and password.
     * @param clientId The client ID of the GitHub app.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static appsDeleteToken(
        clientId: string,
        requestBody: {
            /**
             * The OAuth access token used to authenticate to the GitHub API.
             */
            access_token: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/applications/{client_id}/token',
            path: {
                'client_id': clientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Create a scoped access token
     * Use a non-scoped user access token to create a repository scoped and/or permission scoped user access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the `client_id` and `client_secret` of the GitHub App as the username and password. Invalid tokens will return `404 NOT FOUND`.
     * @param clientId The client ID of the GitHub app.
     * @param requestBody
     * @returns authorization Response
     * @throws ApiError
     */
    public static appsScopeToken(
        clientId: string,
        requestBody: {
            /**
             * The access token used to authenticate to the GitHub API.
             */
            access_token: string;
            /**
             * The name of the user or organization to scope the user access token to. **Required** unless `target_id` is specified.
             */
            target?: string;
            /**
             * The ID of the user or organization to scope the user access token to. **Required** unless `target` is specified.
             */
            target_id?: number;
            /**
             * The list of repository names to scope the user access token to. `repositories` may not be specified if `repository_ids` is specified.
             */
            repositories?: Array<string>;
            /**
             * The list of repository IDs to scope the user access token to. `repository_ids` may not be specified if `repositories` is specified.
             */
            repository_ids?: Array<number>;
            permissions?: app_permissions;
        },
    ): CancelablePromise<authorization> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/applications/{client_id}/token/scoped',
            path: {
                'client_id': clientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get an app
     * **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
     *
     * If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     * @param appSlug
     * @returns integration Response
     * @throws ApiError
     */
    public static appsGetBySlug(
        appSlug: string,
    ): CancelablePromise<integration> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/apps/{app_slug}',
            path: {
                'app_slug': appSlug,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List repositories accessible to the app installation
     * List repositories that an app installation can access.
     *
     * You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static appsListReposAccessibleToInstallation(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        repositories: Array<repository>;
        repository_selection?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/installation/repositories',
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
     * Revoke an installation access token
     * Revokes the installation token you're using to authenticate as an installation and access this endpoint.
     *
     * Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/rest/apps/apps#create-an-installation-access-token-for-an-app)" endpoint.
     *
     * You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     * @returns void
     * @throws ApiError
     */
    public static appsRevokeInstallationAccessToken(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/installation/token',
        });
    }

    /**
     * Get a subscription plan for an account
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param accountId account_id parameter
     * @returns marketplace_purchase Response
     * @throws ApiError
     */
    public static appsGetSubscriptionPlanForAccount(
        accountId: number,
    ): CancelablePromise<marketplace_purchase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplace_listing/accounts/{account_id}',
            path: {
                'account_id': accountId,
            },
            errors: {
                401: `Requires authentication`,
                404: `Not Found when the account has not purchased the listing`,
            },
        });
    }

    /**
     * List plans
     * Lists all plans that are part of your GitHub Marketplace listing.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns marketplace_listing_plan Response
     * @throws ApiError
     */
    public static appsListPlans(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<marketplace_listing_plan>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplace_listing/plans',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                401: `Requires authentication`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List accounts for a plan
     * Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param planId The unique identifier of the plan.
     * @param sort The property to sort the results by.
     * @param direction To return the oldest accounts first, set to `asc`. Ignored without the `sort` parameter.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns marketplace_purchase Response
     * @throws ApiError
     */
    public static appsListAccountsForPlan(
        planId: number,
        sort: 'created' | 'updated' = 'created',
        direction?: 'asc' | 'desc',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<marketplace_purchase>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplace_listing/plans/{plan_id}/accounts',
            path: {
                'plan_id': planId,
            },
            query: {
                'sort': sort,
                'direction': direction,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                401: `Requires authentication`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get a subscription plan for an account (stubbed)
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param accountId account_id parameter
     * @returns marketplace_purchase Response
     * @throws ApiError
     */
    public static appsGetSubscriptionPlanForAccountStubbed(
        accountId: number,
    ): CancelablePromise<marketplace_purchase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplace_listing/stubbed/accounts/{account_id}',
            path: {
                'account_id': accountId,
            },
            errors: {
                401: `Requires authentication`,
                404: `Not Found when the account has not purchased the listing`,
            },
        });
    }

    /**
     * List plans (stubbed)
     * Lists all plans that are part of your GitHub Marketplace listing.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns marketplace_listing_plan Response
     * @throws ApiError
     */
    public static appsListPlansStubbed(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<marketplace_listing_plan>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplace_listing/stubbed/plans',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                401: `Requires authentication`,
            },
        });
    }

    /**
     * List accounts for a plan (stubbed)
     * Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param planId The unique identifier of the plan.
     * @param sort The property to sort the results by.
     * @param direction To return the oldest accounts first, set to `asc`. Ignored without the `sort` parameter.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns marketplace_purchase Response
     * @throws ApiError
     */
    public static appsListAccountsForPlanStubbed(
        planId: number,
        sort: 'created' | 'updated' = 'created',
        direction?: 'asc' | 'desc',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<marketplace_purchase>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplace_listing/stubbed/plans/{plan_id}/accounts',
            path: {
                'plan_id': planId,
            },
            query: {
                'sort': sort,
                'direction': direction,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                401: `Requires authentication`,
            },
        });
    }

    /**
     * Get an organization installation for the authenticated app
     * Enables an authenticated GitHub App to find the organization's installation information.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @returns installation Response
     * @throws ApiError
     */
    public static appsGetOrgInstallation(
        org: string,
    ): CancelablePromise<installation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/installation',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Get a repository installation for the authenticated app
     * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns installation Response
     * @throws ApiError
     */
    public static appsGetRepoInstallation(
        owner: string,
        repo: string,
    ): CancelablePromise<installation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/installation',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                301: `Moved permanently`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List app installations accessible to the user access token
     * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * You must use a [user access token](https://docs.github.com/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You can find the permissions for the installation under the `permissions` key.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any You can find the permissions for the installation under the `permissions` key.
     * @throws ApiError
     */
    public static appsListInstallationsForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        installations: Array<installation>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/installations',
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
     * List repositories accessible to the user access token
     * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You must use a [user access token](https://docs.github.com/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The access the user has to each repository is included in the hash under the `permissions` key.
     * @param installationId The unique identifier of the installation.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any The access the user has to each repository is included in the hash under the `permissions` key.
     * @throws ApiError
     */
    public static appsListInstallationReposForAuthenticatedUser(
        installationId: number,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        repository_selection?: string;
        repositories: Array<repository>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/installations/{installation_id}/repositories',
            path: {
                'installation_id': installationId,
            },
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

    /**
     * Add a repository to an app installation
     * Add a single repository to an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     * @param installationId The unique identifier of the installation.
     * @param repositoryId The unique identifier of the repository.
     * @returns void
     * @throws ApiError
     */
    public static appsAddRepoToInstallationForAuthenticatedUser(
        installationId: number,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/installations/{installation_id}/repositories/{repository_id}',
            path: {
                'installation_id': installationId,
                'repository_id': repositoryId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Remove a repository from an app installation
     * Remove a single repository from an installation. The authenticated user must have admin access to the repository. The installation must have the `repository_selection` of `selected`.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     * @param installationId The unique identifier of the installation.
     * @param repositoryId The unique identifier of the repository.
     * @returns void
     * @throws ApiError
     */
    public static appsRemoveRepoFromInstallationForAuthenticatedUser(
        installationId: number,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/installations/{installation_id}/repositories/{repository_id}',
            path: {
                'installation_id': installationId,
                'repository_id': repositoryId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Returned when the application is installed on \`all\` repositories in the organization, or if this request would remove the last repository that the application has access to in the organization.`,
            },
        });
    }

    /**
     * List subscriptions for the authenticated user
     * Lists the active subscriptions for the authenticated user. GitHub Apps must use a [user access token](https://docs.github.com/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app), created for a user who has authorized your GitHub App, to access this endpoint. OAuth apps must authenticate using an [OAuth token](https://docs.github.com/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps).
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns user_marketplace_purchase Response
     * @throws ApiError
     */
    public static appsListSubscriptionsForAuthenticatedUser(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<user_marketplace_purchase>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/marketplace_purchases',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List subscriptions for the authenticated user (stubbed)
     * Lists the active subscriptions for the authenticated user. GitHub Apps must use a [user access token](https://docs.github.com/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app), created for a user who has authorized your GitHub App, to access this endpoint. OAuth apps must authenticate using an [OAuth token](https://docs.github.com/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps).
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns user_marketplace_purchase Response
     * @throws ApiError
     */
    public static appsListSubscriptionsForAuthenticatedUserStubbed(
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<user_marketplace_purchase>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/marketplace_purchases/stubbed',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
            },
        });
    }

    /**
     * Get a user installation for the authenticated app
     * Enables an authenticated GitHub App to find the user’s installation information.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param username The handle for the GitHub user account.
     * @returns installation Response
     * @throws ApiError
     */
    public static appsGetUserInstallation(
        username: string,
    ): CancelablePromise<installation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/installation',
            path: {
                'username': username,
            },
        });
    }

}
