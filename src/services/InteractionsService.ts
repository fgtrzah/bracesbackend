/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { interaction_limit } from '../models/interaction_limit';
import type { interaction_limit_response } from '../models/interaction_limit_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InteractionsService {

    /**
     * Get interaction restrictions for an organization
     * Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.
     * @param org The organization name. The name is not case sensitive.
     * @returns any Response
     * @throws ApiError
     */
    public static interactionsGetRestrictionsForOrg(
        org: string,
    ): CancelablePromise<interaction_limit_response> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/interaction-limits',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Set interaction restrictions for an organization
     * Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns interaction_limit_response Response
     * @throws ApiError
     */
    public static interactionsSetRestrictionsForOrg(
        org: string,
        requestBody: interaction_limit,
    ): CancelablePromise<interaction_limit_response> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/interaction-limits',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Remove interaction restrictions for an organization
     * Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
     * @param org The organization name. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    public static interactionsRemoveRestrictionsForOrg(
        org: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/interaction-limits',
            path: {
                'org': org,
            },
        });
    }

    /**
     * Get interaction restrictions for a repository
     * Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns any Response
     * @throws ApiError
     */
    public static interactionsGetRestrictionsForRepo(
        owner: string,
        repo: string,
    ): CancelablePromise<interaction_limit_response> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/interaction-limits',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Set interaction restrictions for a repository
     * Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns interaction_limit_response Response
     * @throws ApiError
     */
    public static interactionsSetRestrictionsForRepo(
        owner: string,
        repo: string,
        requestBody: interaction_limit,
    ): CancelablePromise<interaction_limit_response> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/interaction-limits',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Response`,
            },
        });
    }

    /**
     * Remove interaction restrictions for a repository
     * Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    public static interactionsRemoveRestrictionsForRepo(
        owner: string,
        repo: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/interaction-limits',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                409: `Response`,
            },
        });
    }

    /**
     * Get interaction restrictions for your public repositories
     * Shows which type of GitHub user can interact with your public repositories and when the restriction expires.
     * @returns any Default response
     * @throws ApiError
     */
    public static interactionsGetRestrictionsForAuthenticatedUser(): CancelablePromise<interaction_limit_response> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/interaction-limits',
        });
    }

    /**
     * Set interaction restrictions for your public repositories
     * Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.
     * @param requestBody
     * @returns interaction_limit_response Response
     * @throws ApiError
     */
    public static interactionsSetRestrictionsForAuthenticatedUser(
        requestBody: interaction_limit,
    ): CancelablePromise<interaction_limit_response> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/interaction-limits',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Remove interaction restrictions from your public repositories
     * Removes any interaction restrictions from your public repositories.
     * @returns void
     * @throws ApiError
     */
    public static interactionsRemoveRestrictionsForAuthenticatedUser(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/interaction-limits',
        });
    }

}
