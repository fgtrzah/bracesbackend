"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class InteractionsService {
    /**
     * Get interaction restrictions for an organization
     * Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.
     * @param org The organization name. The name is not case sensitive.
     * @returns any Response
     * @throws ApiError
     */
    static interactionsGetRestrictionsForOrg(org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static interactionsSetRestrictionsForOrg(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static interactionsRemoveRestrictionsForOrg(org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static interactionsGetRestrictionsForRepo(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static interactionsSetRestrictionsForRepo(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static interactionsRemoveRestrictionsForRepo(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static interactionsGetRestrictionsForAuthenticatedUser() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static interactionsSetRestrictionsForAuthenticatedUser(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static interactionsRemoveRestrictionsForAuthenticatedUser() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/user/interaction-limits',
        });
    }
}
exports.InteractionsService = InteractionsService;
//# sourceMappingURL=InteractionsService.js.map