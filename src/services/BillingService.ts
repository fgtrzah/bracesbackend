/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { actions_billing_usage } from '../models/actions_billing_usage';
import type { combined_billing_usage } from '../models/combined_billing_usage';
import type { packages_billing_usage } from '../models/packages_billing_usage';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BillingService {

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
    public static billingGetGithubActionsBillingOrg(
        org: string,
    ): CancelablePromise<actions_billing_usage> {
        return __request(OpenAPI, {
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
    public static billingGetGithubPackagesBillingOrg(
        org: string,
    ): CancelablePromise<packages_billing_usage> {
        return __request(OpenAPI, {
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
    public static billingGetSharedStorageBillingOrg(
        org: string,
    ): CancelablePromise<combined_billing_usage> {
        return __request(OpenAPI, {
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
    public static billingGetGithubActionsBillingUser(
        username: string,
    ): CancelablePromise<actions_billing_usage> {
        return __request(OpenAPI, {
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
    public static billingGetGithubPackagesBillingUser(
        username: string,
    ): CancelablePromise<packages_billing_usage> {
        return __request(OpenAPI, {
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
    public static billingGetSharedStorageBillingUser(
        username: string,
    ): CancelablePromise<combined_billing_usage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/settings/billing/shared-storage',
            path: {
                'username': username,
            },
        });
    }

}
