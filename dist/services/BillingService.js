"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class BillingService {
    /**
     * Get GitHub Actions billing for an organization
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     * @param org The organization name. The name is not case sensitive.
     * @returns actions_billing_usage Response
     * @throws ApiError
     */
    static billingGetGithubActionsBillingOrg(org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/settings/billing/actions',
            path: {
                'org': org,
            },
        });
    }
    /**
     * Get GitHub Packages billing for an organization
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     * @param org The organization name. The name is not case sensitive.
     * @returns packages_billing_usage Response
     * @throws ApiError
     */
    static billingGetGithubPackagesBillingOrg(org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/settings/billing/packages',
            path: {
                'org': org,
            },
        });
    }
    /**
     * Get shared storage billing for an organization
     * Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     * @param org The organization name. The name is not case sensitive.
     * @returns combined_billing_usage Response
     * @throws ApiError
     */
    static billingGetSharedStorageBillingOrg(org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/settings/billing/shared-storage',
            path: {
                'org': org,
            },
        });
    }
    /**
     * Get GitHub Actions billing for a user
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Access tokens must have the `user` scope.
     * @param username The handle for the GitHub user account.
     * @returns actions_billing_usage Response
     * @throws ApiError
     */
    static billingGetGithubActionsBillingUser(username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{username}/settings/billing/actions',
            path: {
                'username': username,
            },
        });
    }
    /**
     * Get GitHub Packages billing for a user
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `user` scope.
     * @param username The handle for the GitHub user account.
     * @returns packages_billing_usage Response
     * @throws ApiError
     */
    static billingGetGithubPackagesBillingUser(username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{username}/settings/billing/packages',
            path: {
                'username': username,
            },
        });
    }
    /**
     * Get shared storage billing for a user
     * Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `user` scope.
     * @param username The handle for the GitHub user account.
     * @returns combined_billing_usage Response
     * @throws ApiError
     */
    static billingGetSharedStorageBillingUser(username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{username}/settings/billing/shared-storage',
            path: {
                'username': username,
            },
        });
    }
}
exports.BillingService = BillingService;
//# sourceMappingURL=BillingService.js.map