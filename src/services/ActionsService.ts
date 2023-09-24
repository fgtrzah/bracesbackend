/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { actions_cache_list } from '../models/actions_cache_list';
import type { actions_cache_usage_by_repository } from '../models/actions_cache_usage_by_repository';
import type { actions_cache_usage_org_enterprise } from '../models/actions_cache_usage_org_enterprise';
import type { actions_enabled } from '../models/actions_enabled';
import type { actions_get_default_workflow_permissions } from '../models/actions_get_default_workflow_permissions';
import type { actions_organization_permissions } from '../models/actions_organization_permissions';
import type { actions_public_key } from '../models/actions_public_key';
import type { actions_repository_permissions } from '../models/actions_repository_permissions';
import type { actions_secret } from '../models/actions_secret';
import type { actions_set_default_workflow_permissions } from '../models/actions_set_default_workflow_permissions';
import type { actions_variable } from '../models/actions_variable';
import type { actions_workflow_access_to_repository } from '../models/actions_workflow_access_to_repository';
import type { allowed_actions } from '../models/allowed_actions';
import type { artifact } from '../models/artifact';
import type { authentication_token } from '../models/authentication_token';
import type { deployment } from '../models/deployment';
import type { empty_object } from '../models/empty_object';
import type { enabled_repositories } from '../models/enabled_repositories';
import type { environment_approvals } from '../models/environment_approvals';
import type { job } from '../models/job';
import type { minimal_repository } from '../models/minimal_repository';
import type { oidc_custom_sub_repo } from '../models/oidc_custom_sub_repo';
import type { organization_actions_secret } from '../models/organization_actions_secret';
import type { organization_actions_variable } from '../models/organization_actions_variable';
import type { pending_deployment } from '../models/pending_deployment';
import type { repository } from '../models/repository';
import type { review_custom_gates_comment_required } from '../models/review_custom_gates_comment_required';
import type { review_custom_gates_state_required } from '../models/review_custom_gates_state_required';
import type { runner } from '../models/runner';
import type { runner_application } from '../models/runner_application';
import type { runner_label } from '../models/runner_label';
import type { selected_actions } from '../models/selected_actions';
import type { workflow } from '../models/workflow';
import type { workflow_run } from '../models/workflow_run';
import type { workflow_run_usage } from '../models/workflow_run_usage';
import type { workflow_usage } from '../models/workflow_usage';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ActionsService {

    /**
     * Get GitHub Actions cache usage for an organization
     * Gets the total GitHub Actions cache usage for an organization.
     * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
     * You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @returns actions_cache_usage_org_enterprise Response
     * @throws ApiError
     */
    public static actionsGetActionsCacheUsageForOrg(
        org: string,
    ): CancelablePromise<actions_cache_usage_org_enterprise> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/cache/usage',
            path: {
                'org': org,
            },
        });
    }

    /**
     * List repositories with GitHub Actions cache usage for an organization
     * Lists repositories and their GitHub Actions cache usage for an organization.
     * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
     * You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsGetActionsCacheUsageByRepoForOrg(
        org: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        repository_cache_usages: Array<actions_cache_usage_by_repository>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/cache/usage-by-repository',
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
     * Get GitHub Actions permissions for an organization
     * Gets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     * @param org The organization name. The name is not case sensitive.
     * @returns actions_organization_permissions Response
     * @throws ApiError
     */
    public static actionsGetGithubActionsPermissionsOrganization(
        org: string,
    ): CancelablePromise<actions_organization_permissions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/permissions',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Set GitHub Actions permissions for an organization
     * Sets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsSetGithubActionsPermissionsOrganization(
        org: string,
        requestBody: {
            enabled_repositories: enabled_repositories;
            allowed_actions?: allowed_actions;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/permissions',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List selected repositories enabled for GitHub Actions in an organization
     * Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListSelectedRepositoriesEnabledGithubActionsOrganization(
        org: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        repositories: Array<repository>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/permissions/repositories',
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
     * Set selected repositories enabled for GitHub Actions in an organization
     * Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsSetSelectedRepositoriesEnabledGithubActionsOrganization(
        org: string,
        requestBody: {
            /**
             * List of repository IDs to enable for GitHub Actions.
             */
            selected_repository_ids: Array<number>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/permissions/repositories',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Enable a selected repository for GitHub Actions in an organization
     * Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     * @param org The organization name. The name is not case sensitive.
     * @param repositoryId The unique identifier of the repository.
     * @returns void
     * @throws ApiError
     */
    public static actionsEnableSelectedRepositoryGithubActionsOrganization(
        org: string,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/permissions/repositories/{repository_id}',
            path: {
                'org': org,
                'repository_id': repositoryId,
            },
        });
    }

    /**
     * Disable a selected repository for GitHub Actions in an organization
     * Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     * @param org The organization name. The name is not case sensitive.
     * @param repositoryId The unique identifier of the repository.
     * @returns void
     * @throws ApiError
     */
    public static actionsDisableSelectedRepositoryGithubActionsOrganization(
        org: string,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/actions/permissions/repositories/{repository_id}',
            path: {
                'org': org,
                'repository_id': repositoryId,
            },
        });
    }

    /**
     * Get allowed actions and reusable workflows for an organization
     * Gets the selected actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     * @param org The organization name. The name is not case sensitive.
     * @returns selected_actions Response
     * @throws ApiError
     */
    public static actionsGetAllowedActionsOrganization(
        org: string,
    ): CancelablePromise<selected_actions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/permissions/selected-actions',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Set allowed actions and reusable workflows for an organization
     * Sets the actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsSetAllowedActionsOrganization(
        org: string,
        requestBody?: selected_actions,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/permissions/selected-actions',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get default workflow permissions for an organization
     * Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization,
     * as well as whether GitHub Actions can submit approving pull request reviews. For more information, see
     * "[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     * @param org The organization name. The name is not case sensitive.
     * @returns actions_get_default_workflow_permissions Response
     * @throws ApiError
     */
    public static actionsGetGithubActionsDefaultWorkflowPermissionsOrganization(
        org: string,
    ): CancelablePromise<actions_get_default_workflow_permissions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/permissions/workflow',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Set default workflow permissions for an organization
     * Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions
     * can submit approving pull request reviews. For more information, see
     * "[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsSetGithubActionsDefaultWorkflowPermissionsOrganization(
        org: string,
        requestBody?: actions_set_default_workflow_permissions,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/permissions/workflow',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List self-hosted runners for an organization
     * Lists all self-hosted runners configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param org The organization name. The name is not case sensitive.
     * @param name The name of a self-hosted runner.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListSelfHostedRunnersForOrg(
        org: string,
        name?: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        runners: Array<runner>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/runners',
            path: {
                'org': org,
            },
            query: {
                'name': name,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * List runner applications for an organization
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param org The organization name. The name is not case sensitive.
     * @returns runner_application Response
     * @throws ApiError
     */
    public static actionsListRunnerApplicationsForOrg(
        org: string,
    ): CancelablePromise<Array<runner_application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/runners/downloads',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Create configuration for a just-in-time runner for an organization
     * Generates a configuration that can be passed to the runner application at startup.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns any Response
     * @throws ApiError
     */
    public static actionsGenerateRunnerJitconfigForOrg(
        org: string,
        requestBody: {
            /**
             * The name of the new runner.
             */
            name: string;
            /**
             * The ID of the runner group to register the runner to.
             */
            runner_group_id: number;
            /**
             * The names of the custom labels to add to the runner. **Minimum items**: 1. **Maximum items**: 100.
             */
            labels: Array<string>;
            /**
             * The working directory to be used for job execution, relative to the runner install directory.
             */
            work_folder?: string;
        },
    ): CancelablePromise<{
        runner: runner;
        /**
         * The base64 encoded runner configuration.
         */
        encoded_jit_config: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/actions/runners/generate-jitconfig',
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
     * Create a registration token for an organization
     * Returns a token that you can pass to the `config` script. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     *
     * Example using registration token:
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     *
     * ```
     * ./config.sh --url https://github.com/octo-org --token TOKEN
     * ```
     * @param org The organization name. The name is not case sensitive.
     * @returns authentication_token Response
     * @throws ApiError
     */
    public static actionsCreateRegistrationTokenForOrg(
        org: string,
    ): CancelablePromise<authentication_token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/actions/runners/registration-token',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Create a remove token for an organization
     * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     *
     * Example using remove token:
     *
     * To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
     * endpoint.
     *
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     * @param org The organization name. The name is not case sensitive.
     * @returns authentication_token Response
     * @throws ApiError
     */
    public static actionsCreateRemoveTokenForOrg(
        org: string,
    ): CancelablePromise<authentication_token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/actions/runners/remove-token',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Get a self-hosted runner for an organization
     * Gets a specific self-hosted runner configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param org The organization name. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @returns runner Response
     * @throws ApiError
     */
    public static actionsGetSelfHostedRunnerForOrg(
        org: string,
        runnerId: number,
    ): CancelablePromise<runner> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/runners/{runner_id}',
            path: {
                'org': org,
                'runner_id': runnerId,
            },
        });
    }

    /**
     * Delete a self-hosted runner from an organization
     * Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param org The organization name. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteSelfHostedRunnerFromOrg(
        org: string,
        runnerId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/actions/runners/{runner_id}',
            path: {
                'org': org,
                'runner_id': runnerId,
            },
        });
    }

    /**
     * List labels for a self-hosted runner for an organization
     * Lists all labels for a self-hosted runner configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param org The organization name. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListLabelsForSelfHostedRunnerForOrg(
        org: string,
        runnerId: number,
    ): CancelablePromise<{
        total_count: number;
        labels: Array<runner_label>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/runners/{runner_id}/labels',
            path: {
                'org': org,
                'runner_id': runnerId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Add custom labels to a self-hosted runner for an organization
     * Add custom labels to a self-hosted runner configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param org The organization name. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @param requestBody
     * @returns any Response
     * @throws ApiError
     */
    public static actionsAddCustomLabelsToSelfHostedRunnerForOrg(
        org: string,
        runnerId: number,
        requestBody: {
            /**
             * The names of the custom labels to add to the runner.
             */
            labels: Array<string>;
        },
    ): CancelablePromise<{
        total_count: number;
        labels: Array<runner_label>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/actions/runners/{runner_id}/labels',
            path: {
                'org': org,
                'runner_id': runnerId,
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
     * Set custom labels for a self-hosted runner for an organization
     * Remove all previous custom labels and set the new custom labels for a specific
     * self-hosted runner configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param org The organization name. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @param requestBody
     * @returns any Response
     * @throws ApiError
     */
    public static actionsSetCustomLabelsForSelfHostedRunnerForOrg(
        org: string,
        runnerId: number,
        requestBody: {
            /**
             * The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.
             */
            labels: Array<string>;
        },
    ): CancelablePromise<{
        total_count: number;
        labels: Array<runner_label>;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/runners/{runner_id}/labels',
            path: {
                'org': org,
                'runner_id': runnerId,
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
     * Remove all custom labels from a self-hosted runner for an organization
     * Remove all custom labels from a self-hosted runner configured in an
     * organization. Returns the remaining read-only labels from the runner.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param org The organization name. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg(
        org: string,
        runnerId: number,
    ): CancelablePromise<{
        total_count: number;
        labels: Array<runner_label>;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/actions/runners/{runner_id}/labels',
            path: {
                'org': org,
                'runner_id': runnerId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Remove a custom label from a self-hosted runner for an organization
     * Remove a custom label from a self-hosted runner configured
     * in an organization. Returns the remaining labels from the runner.
     *
     * This endpoint returns a `404 Not Found` status if the custom label is not
     * present on the runner.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param org The organization name. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @param name The name of a self-hosted runner's custom label.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsRemoveCustomLabelFromSelfHostedRunnerForOrg(
        org: string,
        runnerId: number,
        name: string,
    ): CancelablePromise<{
        total_count: number;
        labels: Array<runner_label>;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/actions/runners/{runner_id}/labels/{name}',
            path: {
                'org': org,
                'runner_id': runnerId,
                'name': name,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List organization secrets
     * Lists all secrets available in an organization without revealing their
     * encrypted values.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListOrgSecrets(
        org: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        secrets: Array<organization_actions_secret>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/secrets',
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
     * Get an organization public key
     * Gets your public key, which you need to encrypt secrets. You need to
     * encrypt a secret before you can create or update secrets.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param org The organization name. The name is not case sensitive.
     * @returns actions_public_key Response
     * @throws ApiError
     */
    public static actionsGetOrgPublicKey(
        org: string,
    ): CancelablePromise<actions_public_key> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/secrets/public-key',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Get an organization secret
     * Gets a single organization secret without revealing its encrypted value.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns organization_actions_secret Response
     * @throws ApiError
     */
    public static actionsGetOrgSecret(
        org: string,
        secretName: string,
    ): CancelablePromise<organization_actions_secret> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/secrets/{secret_name}',
            path: {
                'org': org,
                'secret_name': secretName,
            },
        });
    }

    /**
     * Create or update an organization secret
     * Creates or updates an organization secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns empty_object Response when creating a secret
     * @throws ApiError
     */
    public static actionsCreateOrUpdateOrgSecret(
        org: string,
        secretName: string,
        requestBody: {
            /**
             * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/actions/secrets#get-an-organization-public-key) endpoint.
             */
            encrypted_value?: string;
            /**
             * ID of the key you used to encrypt the secret.
             */
            key_id?: string;
            /**
             * Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.
             */
            visibility: 'all' | 'private' | 'selected';
            /**
             * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/actions/secrets#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/actions/secrets#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/actions/secrets#remove-selected-repository-from-an-organization-secret) endpoints.
             */
            selected_repository_ids?: Array<number>;
        },
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/secrets/{secret_name}',
            path: {
                'org': org,
                'secret_name': secretName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an organization secret
     * Deletes a secret in an organization using the secret name.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteOrgSecret(
        org: string,
        secretName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/actions/secrets/{secret_name}',
            path: {
                'org': org,
                'secret_name': secretName,
            },
        });
    }

    /**
     * List selected repositories for an organization secret
     * Lists all repositories that have been selected when the `visibility`
     * for repository access to a secret is set to `selected`.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListSelectedReposForOrgSecret(
        org: string,
        secretName: string,
        page: number = 1,
        perPage: number = 30,
    ): CancelablePromise<{
        total_count: number;
        repositories: Array<minimal_repository>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/secrets/{secret_name}/repositories',
            path: {
                'org': org,
                'secret_name': secretName,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Set selected repositories for an organization secret
     * Replaces all repositories for an organization secret when the `visibility`
     * for repository access is set to `selected`. The visibility is set when you [Create
     * or update an organization secret](https://docs.github.com/rest/actions/secrets#create-or-update-an-organization-secret).
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsSetSelectedReposForOrgSecret(
        org: string,
        secretName: string,
        requestBody: {
            /**
             * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Add selected repository to an organization secret](https://docs.github.com/rest/actions/secrets#add-selected-repository-to-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/actions/secrets#remove-selected-repository-from-an-organization-secret) endpoints.
             */
            selected_repository_ids: Array<number>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/secrets/{secret_name}/repositories',
            path: {
                'org': org,
                'secret_name': secretName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Add selected repository to an organization secret
     * Adds a repository to an organization secret when the `visibility` for
     * repository access is set to `selected`. The visibility is set when you [Create or
     * update an organization secret](https://docs.github.com/rest/actions/secrets#create-or-update-an-organization-secret).
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param repositoryId
     * @returns void
     * @throws ApiError
     */
    public static actionsAddSelectedRepoToOrgSecret(
        org: string,
        secretName: string,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}',
            path: {
                'org': org,
                'secret_name': secretName,
                'repository_id': repositoryId,
            },
            errors: {
                409: `Conflict when visibility type is not set to selected`,
            },
        });
    }

    /**
     * Remove selected repository from an organization secret
     * Removes a repository from an organization secret when the `visibility`
     * for repository access is set to `selected`. The visibility is set when you [Create
     * or update an organization secret](https://docs.github.com/rest/actions/secrets#create-or-update-an-organization-secret).
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param org The organization name. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param repositoryId
     * @returns void
     * @throws ApiError
     */
    public static actionsRemoveSelectedRepoFromOrgSecret(
        org: string,
        secretName: string,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}',
            path: {
                'org': org,
                'secret_name': secretName,
                'repository_id': repositoryId,
            },
            errors: {
                409: `Conflict when visibility type not set to selected`,
            },
        });
    }

    /**
     * List organization variables
     * Lists all organization variables.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint. Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 30).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListOrgVariables(
        org: string,
        perPage: number = 10,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        variables: Array<organization_actions_variable>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/variables',
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
     * Create an organization variable
     * Creates an organization variable that you can reference in a GitHub Actions workflow.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns empty_object Response when creating a variable
     * @throws ApiError
     */
    public static actionsCreateOrgVariable(
        org: string,
        requestBody: {
            /**
             * The name of the variable.
             */
            name: string;
            /**
             * The value of the variable.
             */
            value: string;
            /**
             * The type of repositories in the organization that can access the variable. `selected` means only the repositories specified by `selected_repository_ids` can access the variable.
             */
            visibility: 'all' | 'private' | 'selected';
            /**
             * An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the `visibility` is set to `selected`.
             */
            selected_repository_ids?: Array<number>;
        },
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/actions/variables',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get an organization variable
     * Gets a specific variable in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param org The organization name. The name is not case sensitive.
     * @param name The name of the variable.
     * @returns organization_actions_variable Response
     * @throws ApiError
     */
    public static actionsGetOrgVariable(
        org: string,
        name: string,
    ): CancelablePromise<organization_actions_variable> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/variables/{name}',
            path: {
                'org': org,
                'name': name,
            },
        });
    }

    /**
     * Update an organization variable
     * Updates an organization variable that you can reference in a GitHub Actions workflow.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param org The organization name. The name is not case sensitive.
     * @param name The name of the variable.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsUpdateOrgVariable(
        org: string,
        name: string,
        requestBody: {
            /**
             * The name of the variable.
             */
            name?: string;
            /**
             * The value of the variable.
             */
            value?: string;
            /**
             * The type of repositories in the organization that can access the variable. `selected` means only the repositories specified by `selected_repository_ids` can access the variable.
             */
            visibility?: 'all' | 'private' | 'selected';
            /**
             * An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the `visibility` is set to `selected`.
             */
            selected_repository_ids?: Array<number>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/orgs/{org}/actions/variables/{name}',
            path: {
                'org': org,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an organization variable
     * Deletes an organization variable using the variable name.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param org The organization name. The name is not case sensitive.
     * @param name The name of the variable.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteOrgVariable(
        org: string,
        name: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/actions/variables/{name}',
            path: {
                'org': org,
                'name': name,
            },
        });
    }

    /**
     * List selected repositories for an organization variable
     * Lists all repositories that can access an organization variable
     * that is available to selected repositories.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param org The organization name. The name is not case sensitive.
     * @param name The name of the variable.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListSelectedReposForOrgVariable(
        org: string,
        name: string,
        page: number = 1,
        perPage: number = 30,
    ): CancelablePromise<{
        total_count: number;
        repositories: Array<minimal_repository>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/variables/{name}/repositories',
            path: {
                'org': org,
                'name': name,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                409: `Response when the visibility of the variable is not set to \`selected\``,
            },
        });
    }

    /**
     * Set selected repositories for an organization variable
     * Replaces all repositories for an organization variable that is available
     * to selected repositories. Organization variables that are available to selected
     * repositories have their `visibility` field set to `selected`.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this
     * endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param org The organization name. The name is not case sensitive.
     * @param name The name of the variable.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsSetSelectedReposForOrgVariable(
        org: string,
        name: string,
        requestBody: {
            /**
             * The IDs of the repositories that can access the organization variable.
             */
            selected_repository_ids: Array<number>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/variables/{name}/repositories',
            path: {
                'org': org,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Response when the visibility of the variable is not set to \`selected\``,
            },
        });
    }

    /**
     * Add selected repository to an organization variable
     * Adds a repository to an organization variable that is available to selected repositories.
     * Organization variables that are available to selected repositories have their `visibility` field set to `selected`.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param org The organization name. The name is not case sensitive.
     * @param name The name of the variable.
     * @param repositoryId
     * @returns void
     * @throws ApiError
     */
    public static actionsAddSelectedRepoToOrgVariable(
        org: string,
        name: string,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/variables/{name}/repositories/{repository_id}',
            path: {
                'org': org,
                'name': name,
                'repository_id': repositoryId,
            },
            errors: {
                409: `Response when the visibility of the variable is not set to \`selected\``,
            },
        });
    }

    /**
     * Remove selected repository from an organization variable
     * Removes a repository from an organization variable that is
     * available to selected repositories. Organization variables that are available to
     * selected repositories have their `visibility` field set to `selected`.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param org The organization name. The name is not case sensitive.
     * @param name The name of the variable.
     * @param repositoryId
     * @returns void
     * @throws ApiError
     */
    public static actionsRemoveSelectedRepoFromOrgVariable(
        org: string,
        name: string,
        repositoryId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/actions/variables/{name}/repositories/{repository_id}',
            path: {
                'org': org,
                'name': name,
                'repository_id': repositoryId,
            },
            errors: {
                409: `Response when the visibility of the variable is not set to \`selected\``,
            },
        });
    }

    /**
     * List artifacts for a repository
     * Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param name The name field of an artifact. When specified, only artifacts with this name will be returned.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListArtifactsForRepo(
        owner: string,
        repo: string,
        perPage: number = 30,
        page: number = 1,
        name?: string,
    ): CancelablePromise<{
        total_count: number;
        artifacts: Array<artifact>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/artifacts',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
                'name': name,
            },
        });
    }

    /**
     * Get an artifact
     * Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param artifactId The unique identifier of the artifact.
     * @returns artifact Response
     * @throws ApiError
     */
    public static actionsGetArtifact(
        owner: string,
        repo: string,
        artifactId: number,
    ): CancelablePromise<artifact> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/artifacts/{artifact_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'artifact_id': artifactId,
            },
        });
    }

    /**
     * Delete an artifact
     * Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param artifactId The unique identifier of the artifact.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteArtifact(
        owner: string,
        repo: string,
        artifactId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/artifacts/{artifact_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'artifact_id': artifactId,
            },
        });
    }

    /**
     * Download an artifact
     * Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
     * the response header to find the URL for the download. The `:archive_format` must be `zip`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param artifactId The unique identifier of the artifact.
     * @param archiveFormat
     * @returns void
     * @throws ApiError
     */
    public static actionsDownloadArtifact(
        owner: string,
        repo: string,
        artifactId: number,
        archiveFormat: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}',
            path: {
                'owner': owner,
                'repo': repo,
                'artifact_id': artifactId,
                'archive_format': archiveFormat,
            },
            errors: {
                302: `Response`,
                410: `Gone`,
            },
        });
    }

    /**
     * Get GitHub Actions cache usage for a repository
     * Gets GitHub Actions cache usage for a repository.
     * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns actions_cache_usage_by_repository Response
     * @throws ApiError
     */
    public static actionsGetActionsCacheUsage(
        owner: string,
        repo: string,
    ): CancelablePromise<actions_cache_usage_by_repository> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/cache/usage',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * List GitHub Actions caches for a repository
     * Lists the GitHub Actions caches for a repository.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param ref The full Git reference for narrowing down the cache. The `ref` for a branch should be formatted as `refs/heads/<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
     * @param key An explicit key or prefix for identifying the cache
     * @param sort The property to sort the results by. `created_at` means when the cache was created. `last_accessed_at` means when the cache was last accessed. `size_in_bytes` is the size of the cache in bytes.
     * @param direction The direction to sort the results by.
     * @returns actions_cache_list Response
     * @throws ApiError
     */
    public static actionsGetActionsCacheList(
        owner: string,
        repo: string,
        perPage: number = 30,
        page: number = 1,
        ref?: string,
        key?: string,
        sort: 'created_at' | 'last_accessed_at' | 'size_in_bytes' = 'last_accessed_at',
        direction: 'asc' | 'desc' = 'desc',
    ): CancelablePromise<actions_cache_list> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/caches',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
                'ref': ref,
                'key': key,
                'sort': sort,
                'direction': direction,
            },
        });
    }

    /**
     * Delete GitHub Actions caches for a repository (using a cache key)
     * Deletes one or more GitHub Actions caches for a repository, using a complete cache key. By default, all caches that match the provided key are deleted, but you can optionally provide a Git ref to restrict deletions to caches that match both the provided key and the Git ref.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param key A key for identifying the cache.
     * @param ref The full Git reference for narrowing down the cache. The `ref` for a branch should be formatted as `refs/heads/<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
     * @returns actions_cache_list Response
     * @throws ApiError
     */
    public static actionsDeleteActionsCacheByKey(
        owner: string,
        repo: string,
        key: string,
        ref?: string,
    ): CancelablePromise<actions_cache_list> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/caches',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'key': key,
                'ref': ref,
            },
        });
    }

    /**
     * Delete a GitHub Actions cache for a repository (using a cache ID)
     * Deletes a GitHub Actions cache for a repository, using a cache ID.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param cacheId The unique identifier of the GitHub Actions cache.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteActionsCacheById(
        owner: string,
        repo: string,
        cacheId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/caches/{cache_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'cache_id': cacheId,
            },
        });
    }

    /**
     * Get a job for a workflow run
     * Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param jobId The unique identifier of the job.
     * @returns job Response
     * @throws ApiError
     */
    public static actionsGetJobForWorkflowRun(
        owner: string,
        repo: string,
        jobId: number,
    ): CancelablePromise<job> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/jobs/{job_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'job_id': jobId,
            },
        });
    }

    /**
     * Download job logs for a workflow run
     * Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
     * for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
     * use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
     * have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param jobId The unique identifier of the job.
     * @returns void
     * @throws ApiError
     */
    public static actionsDownloadJobLogsForWorkflowRun(
        owner: string,
        repo: string,
        jobId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/jobs/{job_id}/logs',
            path: {
                'owner': owner,
                'repo': repo,
                'job_id': jobId,
            },
            errors: {
                302: `Response`,
            },
        });
    }

    /**
     * Re-run a job from a workflow run
     * Re-run a job and its dependent jobs in a workflow run.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param jobId The unique identifier of the job.
     * @param requestBody
     * @returns empty_object Response
     * @throws ApiError
     */
    public static actionsReRunJobForWorkflowRun(
        owner: string,
        repo: string,
        jobId: number,
        requestBody?: {
            /**
             * Whether to enable debug logging for the re-run.
             */
            enable_debug_logging?: boolean;
        } | null,
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/jobs/{job_id}/rerun',
            path: {
                'owner': owner,
                'repo': repo,
                'job_id': jobId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
            },
        });
    }

    /**
     * Get the customization template for an OIDC subject claim for a repository
     * Gets the customization template for an OpenID Connect (OIDC) subject claim.
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint. GitHub Apps must have the `organization_administration:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns oidc_custom_sub_repo Status response
     * @throws ApiError
     */
    public static actionsGetCustomOidcSubClaimForRepo(
        owner: string,
        repo: string,
    ): CancelablePromise<oidc_custom_sub_repo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/oidc/customization/sub',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                400: `Bad Request`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Set the customization template for an OIDC subject claim for a repository
     * Sets the customization template and `opt-in` or `opt-out` flag for an OpenID Connect (OIDC) subject claim for a repository.
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns empty_object Empty response
     * @throws ApiError
     */
    public static actionsSetCustomOidcSubClaimForRepo(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * Whether to use the default template or not. If `true`, the `include_claim_keys` field is ignored.
             */
            use_default: boolean;
            /**
             * Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.
             */
            include_claim_keys?: Array<string>;
        },
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/actions/oidc/customization/sub',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List repository organization secrets
     * Lists all organization secrets shared with a repository without revealing their encrypted
     * values.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListRepoOrganizationSecrets(
        owner: string,
        repo: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        secrets: Array<actions_secret>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/organization-secrets',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * List repository organization variables
     * Lists all organiation variables shared with a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions_variables:read` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 30).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListRepoOrganizationVariables(
        owner: string,
        repo: string,
        perPage: number = 10,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        variables: Array<actions_variable>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/organization-variables',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Get GitHub Actions permissions for a repository
     * Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions and reusable workflows allowed to run in the repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns actions_repository_permissions Response
     * @throws ApiError
     */
    public static actionsGetGithubActionsPermissionsRepository(
        owner: string,
        repo: string,
    ): CancelablePromise<actions_repository_permissions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/permissions',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Set GitHub Actions permissions for a repository
     * Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions and reusable workflows in the repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsSetGithubActionsPermissionsRepository(
        owner: string,
        repo: string,
        requestBody: {
            enabled: actions_enabled;
            allowed_actions?: allowed_actions;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/actions/permissions',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get the level of access for workflows outside of the repository
     * Gets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
     * This endpoint only applies to private repositories.
     * For more information, see "[Allowing access to components in a private repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
     * repository `administration` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns actions_workflow_access_to_repository Response
     * @throws ApiError
     */
    public static actionsGetWorkflowAccessToRepository(
        owner: string,
        repo: string,
    ): CancelablePromise<actions_workflow_access_to_repository> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/permissions/access',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Set the level of access for workflows outside of the repository
     * Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
     * This endpoint only applies to private repositories.
     * For more information, see "[Allowing access to components in a private repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)".
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
     * repository `administration` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsSetWorkflowAccessToRepository(
        owner: string,
        repo: string,
        requestBody: actions_workflow_access_to_repository,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/actions/permissions/access',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get allowed actions and reusable workflows for a repository
     * Gets the settings for selected actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns selected_actions Response
     * @throws ApiError
     */
    public static actionsGetAllowedActionsRepository(
        owner: string,
        repo: string,
    ): CancelablePromise<selected_actions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/permissions/selected-actions',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Set allowed actions and reusable workflows for a repository
     * Sets the actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsSetAllowedActionsRepository(
        owner: string,
        repo: string,
        requestBody?: selected_actions,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/actions/permissions/selected-actions',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get default workflow permissions for a repository
     * Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository,
     * as well as if GitHub Actions can submit approving pull request reviews.
     * For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns actions_get_default_workflow_permissions Response
     * @throws ApiError
     */
    public static actionsGetGithubActionsDefaultWorkflowPermissionsRepository(
        owner: string,
        repo: string,
    ): CancelablePromise<actions_get_default_workflow_permissions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/permissions/workflow',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Set default workflow permissions for a repository
     * Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions
     * can submit approving pull request reviews.
     * For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsSetGithubActionsDefaultWorkflowPermissionsRepository(
        owner: string,
        repo: string,
        requestBody: actions_set_default_workflow_permissions,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/actions/permissions/workflow',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Conflict response when changing a setting is prevented by the owning organization`,
            },
        });
    }

    /**
     * List self-hosted runners for a repository
     * Lists all self-hosted runners configured in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param name The name of a self-hosted runner.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListSelfHostedRunnersForRepo(
        owner: string,
        repo: string,
        name?: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        runners: Array<runner>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runners',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'name': name,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * List runner applications for a repository
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns runner_application Response
     * @throws ApiError
     */
    public static actionsListRunnerApplicationsForRepo(
        owner: string,
        repo: string,
    ): CancelablePromise<Array<runner_application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runners/downloads',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Create configuration for a just-in-time runner for a repository
     * Generates a configuration that can be passed to the runner application at startup.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns any Response
     * @throws ApiError
     */
    public static actionsGenerateRunnerJitconfigForRepo(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * The name of the new runner.
             */
            name: string;
            /**
             * The ID of the runner group to register the runner to.
             */
            runner_group_id: number;
            /**
             * The names of the custom labels to add to the runner. **Minimum items**: 1. **Maximum items**: 100.
             */
            labels: Array<string>;
            /**
             * The working directory to be used for job execution, relative to the runner install directory.
             */
            work_folder?: string;
        },
    ): CancelablePromise<{
        runner: runner;
        /**
         * The base64 encoded runner configuration.
         */
        encoded_jit_config: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/runners/generate-jitconfig',
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
     * Create a registration token for a repository
     * Returns a token that you can pass to the `config` script. The token
     * expires after one hour.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     *
     * Example using registration token:
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided
     * by this endpoint.
     *
     * ```config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN```
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns authentication_token Response
     * @throws ApiError
     */
    public static actionsCreateRegistrationTokenForRepo(
        owner: string,
        repo: string,
    ): CancelablePromise<authentication_token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/runners/registration-token',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Create a remove token for a repository
     * Returns a token that you can pass to remove a self-hosted runner from
     * a repository. The token expires after one hour.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     *
     * Example using remove token:
     *
     * To remove your self-hosted runner from a repository, replace TOKEN with
     * the remove token provided by this endpoint.
     *
     * ```config.sh remove --token TOKEN```
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns authentication_token Response
     * @throws ApiError
     */
    public static actionsCreateRemoveTokenForRepo(
        owner: string,
        repo: string,
    ): CancelablePromise<authentication_token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/runners/remove-token',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Get a self-hosted runner for a repository
     * Gets a specific self-hosted runner configured in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @returns runner Response
     * @throws ApiError
     */
    public static actionsGetSelfHostedRunnerForRepo(
        owner: string,
        repo: string,
        runnerId: number,
    ): CancelablePromise<runner> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runners/{runner_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'runner_id': runnerId,
            },
        });
    }

    /**
     * Delete a self-hosted runner from a repository
     * Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteSelfHostedRunnerFromRepo(
        owner: string,
        repo: string,
        runnerId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/runners/{runner_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'runner_id': runnerId,
            },
        });
    }

    /**
     * List labels for a self-hosted runner for a repository
     * Lists all labels for a self-hosted runner configured in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListLabelsForSelfHostedRunnerForRepo(
        owner: string,
        repo: string,
        runnerId: number,
    ): CancelablePromise<{
        total_count: number;
        labels: Array<runner_label>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'runner_id': runnerId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Add custom labels to a self-hosted runner for a repository
     * Add custom labels to a self-hosted runner configured in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @param requestBody
     * @returns any Response
     * @throws ApiError
     */
    public static actionsAddCustomLabelsToSelfHostedRunnerForRepo(
        owner: string,
        repo: string,
        runnerId: number,
        requestBody: {
            /**
             * The names of the custom labels to add to the runner.
             */
            labels: Array<string>;
        },
    ): CancelablePromise<{
        total_count: number;
        labels: Array<runner_label>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'runner_id': runnerId,
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
     * Set custom labels for a self-hosted runner for a repository
     * Remove all previous custom labels and set the new custom labels for a specific
     * self-hosted runner configured in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @param requestBody
     * @returns any Response
     * @throws ApiError
     */
    public static actionsSetCustomLabelsForSelfHostedRunnerForRepo(
        owner: string,
        repo: string,
        runnerId: number,
        requestBody: {
            /**
             * The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.
             */
            labels: Array<string>;
        },
    ): CancelablePromise<{
        total_count: number;
        labels: Array<runner_label>;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'runner_id': runnerId,
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
     * Remove all custom labels from a self-hosted runner for a repository
     * Remove all custom labels from a self-hosted runner configured in a
     * repository. Returns the remaining read-only labels from the runner.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo(
        owner: string,
        repo: string,
        runnerId: number,
    ): CancelablePromise<{
        total_count: number;
        labels: Array<runner_label>;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'runner_id': runnerId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Remove a custom label from a self-hosted runner for a repository
     * Remove a custom label from a self-hosted runner configured
     * in a repository. Returns the remaining labels from the runner.
     *
     * This endpoint returns a `404 Not Found` status if the custom label is not
     * present on the runner.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
     * Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runnerId Unique identifier of the self-hosted runner.
     * @param name The name of a self-hosted runner's custom label.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsRemoveCustomLabelFromSelfHostedRunnerForRepo(
        owner: string,
        repo: string,
        runnerId: number,
        name: string,
    ): CancelablePromise<{
        total_count: number;
        labels: Array<runner_label>;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'runner_id': runnerId,
                'name': name,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * List workflow runs for a repository
     * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param actor Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
     * @param branch Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
     * @param event Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
     * @param status Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param created Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
     * @param excludePullRequests If `true` pull requests are omitted from the response (empty array).
     * @param checkSuiteId Returns workflow runs with the `check_suite_id` that you specify.
     * @param headSha Only returns workflow runs that are associated with the specified `head_sha`.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListWorkflowRunsForRepo(
        owner: string,
        repo: string,
        actor?: string,
        branch?: string,
        event?: string,
        status?: 'completed' | 'action_required' | 'cancelled' | 'failure' | 'neutral' | 'skipped' | 'stale' | 'success' | 'timed_out' | 'in_progress' | 'queued' | 'requested' | 'waiting' | 'pending',
        perPage: number = 30,
        page: number = 1,
        created?: string,
        excludePullRequests: boolean = false,
        checkSuiteId?: number,
        headSha?: string,
    ): CancelablePromise<{
        total_count: number;
        workflow_runs: Array<workflow_run>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runs',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'actor': actor,
                'branch': branch,
                'event': event,
                'status': status,
                'per_page': perPage,
                'page': page,
                'created': created,
                'exclude_pull_requests': excludePullRequests,
                'check_suite_id': checkSuiteId,
                'head_sha': headSha,
            },
        });
    }

    /**
     * Get a workflow run
     * Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @param excludePullRequests If `true` pull requests are omitted from the response (empty array).
     * @returns workflow_run Response
     * @throws ApiError
     */
    public static actionsGetWorkflowRun(
        owner: string,
        repo: string,
        runId: number,
        excludePullRequests: boolean = false,
    ): CancelablePromise<workflow_run> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
            query: {
                'exclude_pull_requests': excludePullRequests,
            },
        });
    }

    /**
     * Delete a workflow run
     * Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
     * private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
     * this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteWorkflowRun(
        owner: string,
        repo: string,
        runId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
        });
    }

    /**
     * Get the review history for a workflow run
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @returns environment_approvals Response
     * @throws ApiError
     */
    public static actionsGetReviewsForRun(
        owner: string,
        repo: string,
        runId: number,
    ): CancelablePromise<Array<environment_approvals>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/approvals',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
        });
    }

    /**
     * Approve a workflow run for a fork pull request
     * Approves a workflow run for a pull request from a public fork of a first time contributor. For more information, see ["Approving workflow runs from public forks](https://docs.github.com/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @returns empty_object Response
     * @throws ApiError
     */
    public static actionsApproveWorkflowRun(
        owner: string,
        repo: string,
        runId: number,
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/approve',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * List workflow run artifacts
     * Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param name The name field of an artifact. When specified, only artifacts with this name will be returned.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListWorkflowRunArtifacts(
        owner: string,
        repo: string,
        runId: number,
        perPage: number = 30,
        page: number = 1,
        name?: string,
    ): CancelablePromise<{
        total_count: number;
        artifacts: Array<artifact>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
            query: {
                'per_page': perPage,
                'page': page,
                'name': name,
            },
        });
    }

    /**
     * Get a workflow run attempt
     * Gets a specific workflow run attempt. Anyone with read access to the repository
     * can use this endpoint. If the repository is private you must use an access token
     * with the `repo` scope. GitHub Apps must have the `actions:read` permission to
     * use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @param attemptNumber The attempt number of the workflow run.
     * @param excludePullRequests If `true` pull requests are omitted from the response (empty array).
     * @returns workflow_run Response
     * @throws ApiError
     */
    public static actionsGetWorkflowRunAttempt(
        owner: string,
        repo: string,
        runId: number,
        attemptNumber: number,
        excludePullRequests: boolean = false,
    ): CancelablePromise<workflow_run> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
                'attempt_number': attemptNumber,
            },
            query: {
                'exclude_pull_requests': excludePullRequests,
            },
        });
    }

    /**
     * List jobs for a workflow run attempt
     * Lists jobs for a specific workflow run attempt. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @param attemptNumber The attempt number of the workflow run.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListJobsForWorkflowRunAttempt(
        owner: string,
        repo: string,
        runId: number,
        attemptNumber: number,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        jobs: Array<job>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
                'attempt_number': attemptNumber,
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
     * Download workflow run attempt logs
     * Gets a redirect URL to download an archive of log files for a specific workflow run attempt. This link expires after
     * 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to
     * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @param attemptNumber The attempt number of the workflow run.
     * @returns void
     * @throws ApiError
     */
    public static actionsDownloadWorkflowRunAttemptLogs(
        owner: string,
        repo: string,
        runId: number,
        attemptNumber: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
                'attempt_number': attemptNumber,
            },
            errors: {
                302: `Response`,
            },
        });
    }

    /**
     * Cancel a workflow run
     * Cancels a workflow run using its `id`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @returns empty_object Response
     * @throws ApiError
     */
    public static actionsCancelWorkflowRun(
        owner: string,
        repo: string,
        runId: number,
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/cancel',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
            errors: {
                409: `Conflict`,
            },
        });
    }

    /**
     * Review custom deployment protection rules for a workflow run
     * Approve or reject custom deployment protection rules provided by a GitHub App for a workflow run. For more information, see "[Using environments for deployment](https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment)."
     *
     * **Note:** GitHub Apps can only review their own custom deployment protection rules.
     * To approve or reject pending deployments that are waiting for review from a specific person or team, see [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/actions/workflow-runs#review-pending-deployments-for-a-workflow-run).
     *
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have read and write permission for **Deployments** to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsReviewCustomGatesForRun(
        owner: string,
        repo: string,
        runId: number,
        requestBody: (review_custom_gates_comment_required | review_custom_gates_state_required),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List jobs for a workflow run
     * Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @param filter Filters jobs by their `completed_at` timestamp. `latest` returns jobs from the most recent execution of the workflow run. `all` returns all jobs for a workflow run, including from old executions of the workflow run.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListJobsForWorkflowRun(
        owner: string,
        repo: string,
        runId: number,
        filter: 'latest' | 'all' = 'latest',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        jobs: Array<job>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/jobs',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
            query: {
                'filter': filter,
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Download workflow run logs
     * Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
     * `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
     * this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
     * the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @returns void
     * @throws ApiError
     */
    public static actionsDownloadWorkflowRunLogs(
        owner: string,
        repo: string,
        runId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/logs',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
            errors: {
                302: `Response`,
            },
        });
    }

    /**
     * Delete workflow run logs
     * Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteWorkflowRunLogs(
        owner: string,
        repo: string,
        runId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/logs',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
            errors: {
                403: `Forbidden`,
                500: `Internal Error`,
            },
        });
    }

    /**
     * Get pending deployments for a workflow run
     * Get all deployment environments for a workflow run that are waiting for protection rules to pass.
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @returns pending_deployment Response
     * @throws ApiError
     */
    public static actionsGetPendingDeploymentsForRun(
        owner: string,
        repo: string,
        runId: number,
    ): CancelablePromise<Array<pending_deployment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
        });
    }

    /**
     * Review pending deployments for a workflow run
     * Approve or reject pending deployments that are waiting on approval by a required reviewer.
     *
     * Required reviewers with read access to the repository contents and deployments can use this endpoint. Required reviewers must authenticate using an access token with the `repo` scope to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @param requestBody
     * @returns deployment Response
     * @throws ApiError
     */
    public static actionsReviewPendingDeploymentsForRun(
        owner: string,
        repo: string,
        runId: number,
        requestBody: {
            /**
             * The list of environment ids to approve or reject
             */
            environment_ids: Array<number>;
            /**
             * Whether to approve or reject deployment to the specified environments.
             */
            state: 'approved' | 'rejected';
            /**
             * A comment to accompany the deployment review
             */
            comment: string;
        },
    ): CancelablePromise<Array<deployment>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Re-run a workflow
     * Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @param requestBody
     * @returns empty_object Response
     * @throws ApiError
     */
    public static actionsReRunWorkflow(
        owner: string,
        repo: string,
        runId: number,
        requestBody?: {
            /**
             * Whether to enable debug logging for the re-run.
             */
            enable_debug_logging?: boolean;
        } | null,
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/rerun',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Re-run failed jobs from a workflow run
     * Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @param requestBody
     * @returns empty_object Response
     * @throws ApiError
     */
    public static actionsReRunWorkflowFailedJobs(
        owner: string,
        repo: string,
        runId: number,
        requestBody?: {
            /**
             * Whether to enable debug logging for the re-run.
             */
            enable_debug_logging?: boolean;
        } | null,
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get workflow run usage
     * Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param runId The unique identifier of the workflow run.
     * @returns workflow_run_usage Response
     * @throws ApiError
     */
    public static actionsGetWorkflowRunUsage(
        owner: string,
        repo: string,
        runId: number,
    ): CancelablePromise<workflow_run_usage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runs/{run_id}/timing',
            path: {
                'owner': owner,
                'repo': repo,
                'run_id': runId,
            },
        });
    }

    /**
     * List repository secrets
     * Lists all secrets available in a repository without revealing their encrypted
     * values.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListRepoSecrets(
        owner: string,
        repo: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        secrets: Array<actions_secret>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/secrets',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Get a repository public key
     * Gets your public key, which you need to encrypt secrets. You need to
     * encrypt a secret before you can create or update secrets.
     *
     * Anyone with read access to the repository can use this endpoint.
     * If the repository is private you must use an access token with the `repo` scope.
     * GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns actions_public_key Response
     * @throws ApiError
     */
    public static actionsGetRepoPublicKey(
        owner: string,
        repo: string,
    ): CancelablePromise<actions_public_key> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/secrets/public-key',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Get a repository secret
     * Gets a single repository secret without revealing its encrypted value.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns actions_secret Response
     * @throws ApiError
     */
    public static actionsGetRepoSecret(
        owner: string,
        repo: string,
        secretName: string,
    ): CancelablePromise<actions_secret> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/secrets/{secret_name}',
            path: {
                'owner': owner,
                'repo': repo,
                'secret_name': secretName,
            },
        });
    }

    /**
     * Create or update a repository secret
     * Creates or updates a repository secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns empty_object Response when creating a secret
     * @throws ApiError
     */
    public static actionsCreateOrUpdateRepoSecret(
        owner: string,
        repo: string,
        secretName: string,
        requestBody: {
            /**
             * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/actions/secrets#get-a-repository-public-key) endpoint.
             */
            encrypted_value?: string;
            /**
             * ID of the key you used to encrypt the secret.
             */
            key_id?: string;
        },
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/actions/secrets/{secret_name}',
            path: {
                'owner': owner,
                'repo': repo,
                'secret_name': secretName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a repository secret
     * Deletes a secret in a repository using the secret name.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param secretName The name of the secret.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteRepoSecret(
        owner: string,
        repo: string,
        secretName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/secrets/{secret_name}',
            path: {
                'owner': owner,
                'repo': repo,
                'secret_name': secretName,
            },
        });
    }

    /**
     * List repository variables
     * Lists all repository variables.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions_variables:read` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 30).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListRepoVariables(
        owner: string,
        repo: string,
        perPage: number = 10,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        variables: Array<actions_variable>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/variables',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Create a repository variable
     * Creates a repository variable that you can reference in a GitHub Actions workflow.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns empty_object Response
     * @throws ApiError
     */
    public static actionsCreateRepoVariable(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * The name of the variable.
             */
            name: string;
            /**
             * The value of the variable.
             */
            value: string;
        },
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/variables',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a repository variable
     * Gets a specific variable in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions_variables:read` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param name The name of the variable.
     * @returns actions_variable Response
     * @throws ApiError
     */
    public static actionsGetRepoVariable(
        owner: string,
        repo: string,
        name: string,
    ): CancelablePromise<actions_variable> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/variables/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
        });
    }

    /**
     * Update a repository variable
     * Updates a repository variable that you can reference in a GitHub Actions workflow.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param name The name of the variable.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsUpdateRepoVariable(
        owner: string,
        repo: string,
        name: string,
        requestBody: {
            /**
             * The name of the variable.
             */
            name?: string;
            /**
             * The value of the variable.
             */
            value?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/actions/variables/{name}',
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
     * Delete a repository variable
     * Deletes a repository variable using the variable name.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param name The name of the variable.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteRepoVariable(
        owner: string,
        repo: string,
        name: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/variables/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
        });
    }

    /**
     * List repository workflows
     * Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListRepoWorkflows(
        owner: string,
        repo: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        workflows: Array<workflow>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/workflows',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Get a workflow
     * Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param workflowId The ID of the workflow. You can also pass the workflow file name as a string.
     * @returns workflow Response
     * @throws ApiError
     */
    public static actionsGetWorkflow(
        owner: string,
        repo: string,
        workflowId: (number | string),
    ): CancelablePromise<workflow> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/workflows/{workflow_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * Disable a workflow
     * Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param workflowId The ID of the workflow. You can also pass the workflow file name as a string.
     * @returns void
     * @throws ApiError
     */
    public static actionsDisableWorkflow(
        owner: string,
        repo: string,
        workflowId: (number | string),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable',
            path: {
                'owner': owner,
                'repo': repo,
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * Create a workflow dispatch event
     * You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param workflowId The ID of the workflow. You can also pass the workflow file name as a string.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsCreateWorkflowDispatch(
        owner: string,
        repo: string,
        workflowId: (number | string),
        requestBody: {
            /**
             * The git reference for the workflow. The reference can be a branch or tag name.
             */
            ref: string;
            /**
             * Input keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when `inputs` are omitted.
             */
            inputs?: Record<string, any>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches',
            path: {
                'owner': owner,
                'repo': repo,
                'workflow_id': workflowId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Enable a workflow
     * Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param workflowId The ID of the workflow. You can also pass the workflow file name as a string.
     * @returns void
     * @throws ApiError
     */
    public static actionsEnableWorkflow(
        owner: string,
        repo: string,
        workflowId: (number | string),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable',
            path: {
                'owner': owner,
                'repo': repo,
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * List workflow runs for a workflow
     * List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param workflowId The ID of the workflow. You can also pass the workflow file name as a string.
     * @param actor Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
     * @param branch Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
     * @param event Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
     * @param status Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param created Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
     * @param excludePullRequests If `true` pull requests are omitted from the response (empty array).
     * @param checkSuiteId Returns workflow runs with the `check_suite_id` that you specify.
     * @param headSha Only returns workflow runs that are associated with the specified `head_sha`.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListWorkflowRuns(
        owner: string,
        repo: string,
        workflowId: (number | string),
        actor?: string,
        branch?: string,
        event?: string,
        status?: 'completed' | 'action_required' | 'cancelled' | 'failure' | 'neutral' | 'skipped' | 'stale' | 'success' | 'timed_out' | 'in_progress' | 'queued' | 'requested' | 'waiting' | 'pending',
        perPage: number = 30,
        page: number = 1,
        created?: string,
        excludePullRequests: boolean = false,
        checkSuiteId?: number,
        headSha?: string,
    ): CancelablePromise<{
        total_count: number;
        workflow_runs: Array<workflow_run>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs',
            path: {
                'owner': owner,
                'repo': repo,
                'workflow_id': workflowId,
            },
            query: {
                'actor': actor,
                'branch': branch,
                'event': event,
                'status': status,
                'per_page': perPage,
                'page': page,
                'created': created,
                'exclude_pull_requests': excludePullRequests,
                'check_suite_id': checkSuiteId,
                'head_sha': headSha,
            },
        });
    }

    /**
     * Get workflow usage
     * Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param workflowId The ID of the workflow. You can also pass the workflow file name as a string.
     * @returns workflow_usage Response
     * @throws ApiError
     */
    public static actionsGetWorkflowUsage(
        owner: string,
        repo: string,
        workflowId: (number | string),
    ): CancelablePromise<workflow_usage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing',
            path: {
                'owner': owner,
                'repo': repo,
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * List environment secrets
     * Lists all secrets available in an environment without revealing their
     * encrypted values.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param repositoryId The unique identifier of the repository.
     * @param environmentName The name of the environment.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListEnvironmentSecrets(
        repositoryId: number,
        environmentName: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        secrets: Array<actions_secret>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/environments/{environment_name}/secrets',
            path: {
                'repository_id': repositoryId,
                'environment_name': environmentName,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Get an environment public key
     * Get the public key for an environment, which you need to encrypt environment
     * secrets. You need to encrypt a secret before you can create or update secrets.
     *
     * Anyone with read access to the repository can use this endpoint.
     * If the repository is private you must use an access token with the `repo` scope.
     * GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param repositoryId The unique identifier of the repository.
     * @param environmentName The name of the environment.
     * @returns actions_public_key Response
     * @throws ApiError
     */
    public static actionsGetEnvironmentPublicKey(
        repositoryId: number,
        environmentName: string,
    ): CancelablePromise<actions_public_key> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/environments/{environment_name}/secrets/public-key',
            path: {
                'repository_id': repositoryId,
                'environment_name': environmentName,
            },
        });
    }

    /**
     * Get an environment secret
     * Gets a single environment secret without revealing its encrypted value.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param repositoryId The unique identifier of the repository.
     * @param environmentName The name of the environment.
     * @param secretName The name of the secret.
     * @returns actions_secret Response
     * @throws ApiError
     */
    public static actionsGetEnvironmentSecret(
        repositoryId: number,
        environmentName: string,
        secretName: string,
    ): CancelablePromise<actions_secret> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}',
            path: {
                'repository_id': repositoryId,
                'environment_name': environmentName,
                'secret_name': secretName,
            },
        });
    }

    /**
     * Create or update an environment secret
     * Creates or updates an environment secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param repositoryId The unique identifier of the repository.
     * @param environmentName The name of the environment.
     * @param secretName The name of the secret.
     * @param requestBody
     * @returns empty_object Response when creating a secret
     * @throws ApiError
     */
    public static actionsCreateOrUpdateEnvironmentSecret(
        repositoryId: number,
        environmentName: string,
        secretName: string,
        requestBody: {
            /**
             * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-environment-public-key) endpoint.
             */
            encrypted_value: string;
            /**
             * ID of the key you used to encrypt the secret.
             */
            key_id: string;
        },
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}',
            path: {
                'repository_id': repositoryId,
                'environment_name': environmentName,
                'secret_name': secretName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an environment secret
     * Deletes a secret in an environment using the secret name.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
     * @param repositoryId The unique identifier of the repository.
     * @param environmentName The name of the environment.
     * @param secretName The name of the secret.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteEnvironmentSecret(
        repositoryId: number,
        environmentName: string,
        secretName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}',
            path: {
                'repository_id': repositoryId,
                'environment_name': environmentName,
                'secret_name': secretName,
            },
        });
    }

    /**
     * List environment variables
     * Lists all environment variables.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `environments:read` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param repositoryId The unique identifier of the repository.
     * @param environmentName The name of the environment.
     * @param perPage The number of results per page (max 30).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static actionsListEnvironmentVariables(
        repositoryId: number,
        environmentName: string,
        perPage: number = 10,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        variables: Array<actions_variable>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/environments/{environment_name}/variables',
            path: {
                'repository_id': repositoryId,
                'environment_name': environmentName,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Create an environment variable
     * Create an environment variable that you can reference in a GitHub Actions workflow.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `environment:write` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param repositoryId The unique identifier of the repository.
     * @param environmentName The name of the environment.
     * @param requestBody
     * @returns empty_object Response
     * @throws ApiError
     */
    public static actionsCreateEnvironmentVariable(
        repositoryId: number,
        environmentName: string,
        requestBody: {
            /**
             * The name of the variable.
             */
            name: string;
            /**
             * The value of the variable.
             */
            value: string;
        },
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repositories/{repository_id}/environments/{environment_name}/variables',
            path: {
                'repository_id': repositoryId,
                'environment_name': environmentName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get an environment variable
     * Gets a specific variable in an environment.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `environments:read` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param repositoryId The unique identifier of the repository.
     * @param environmentName The name of the environment.
     * @param name The name of the variable.
     * @returns actions_variable Response
     * @throws ApiError
     */
    public static actionsGetEnvironmentVariable(
        repositoryId: number,
        environmentName: string,
        name: string,
    ): CancelablePromise<actions_variable> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/environments/{environment_name}/variables/{name}',
            path: {
                'repository_id': repositoryId,
                'environment_name': environmentName,
                'name': name,
            },
        });
    }

    /**
     * Update an environment variable
     * Updates an environment variable that you can reference in a GitHub Actions workflow.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `environment:write` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param repositoryId The unique identifier of the repository.
     * @param name The name of the variable.
     * @param environmentName The name of the environment.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static actionsUpdateEnvironmentVariable(
        repositoryId: number,
        name: string,
        environmentName: string,
        requestBody: {
            /**
             * The name of the variable.
             */
            name?: string;
            /**
             * The value of the variable.
             */
            value?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repositories/{repository_id}/environments/{environment_name}/variables/{name}',
            path: {
                'repository_id': repositoryId,
                'name': name,
                'environment_name': environmentName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an environment variable
     * Deletes an environment variable using the variable name.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * If the repository is private, you must use an access token with the `repo` scope.
     * GitHub Apps must have the `environment:write` repository permission to use this endpoint.
     * Authenticated users must have collaborator access to a repository to create, update, or read variables.
     * @param repositoryId The unique identifier of the repository.
     * @param name The name of the variable.
     * @param environmentName The name of the environment.
     * @returns void
     * @throws ApiError
     */
    public static actionsDeleteEnvironmentVariable(
        repositoryId: number,
        name: string,
        environmentName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repositories/{repository_id}/environments/{environment_name}/variables/{name}',
            path: {
                'repository_id': repositoryId,
                'name': name,
                'environment_name': environmentName,
            },
        });
    }

}
