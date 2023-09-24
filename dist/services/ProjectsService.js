"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ProjectsService {
    /**
     * List organization projects
     * Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param org The organization name. The name is not case sensitive.
     * @param state Indicates the state of the projects to return.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns project Response
     * @throws ApiError
     */
    static projectsListForOrg(org, state = 'open', perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/projects',
            path: {
                'org': org,
            },
            query: {
                'state': state,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Create an organization project
     * Creates an organization project board. Returns a `410 Gone` status if projects are disabled in the organization or if the organization does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns project Response
     * @throws ApiError
     */
    static projectsCreateForOrg(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/projects',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                410: `Gone`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a project card
     * Gets information about a project card.
     * @param cardId The unique identifier of the card.
     * @returns project_card Response
     * @throws ApiError
     */
    static projectsGetCard(cardId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/projects/columns/cards/{card_id}',
            path: {
                'card_id': cardId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update an existing project card
     * @param cardId The unique identifier of the card.
     * @param requestBody
     * @returns project_card Response
     * @throws ApiError
     */
    static projectsUpdateCard(cardId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/projects/columns/cards/{card_id}',
            path: {
                'card_id': cardId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Delete a project card
     * Deletes a project card
     * @param cardId The unique identifier of the card.
     * @returns void
     * @throws ApiError
     */
    static projectsDeleteCard(cardId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/projects/columns/cards/{card_id}',
            path: {
                'card_id': cardId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Move a project card
     * @param cardId The unique identifier of the card.
     * @param requestBody
     * @returns any Response
     * @throws ApiError
     */
    static projectsMoveCard(cardId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/projects/columns/cards/{card_id}/moves',
            path: {
                'card_id': cardId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
                503: `Response`,
            },
        });
    }
    /**
     * Get a project column
     * Gets information about a project column.
     * @param columnId The unique identifier of the column.
     * @returns project_column Response
     * @throws ApiError
     */
    static projectsGetColumn(columnId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/projects/columns/{column_id}',
            path: {
                'column_id': columnId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update an existing project column
     * @param columnId The unique identifier of the column.
     * @param requestBody
     * @returns project_column Response
     * @throws ApiError
     */
    static projectsUpdateColumn(columnId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/projects/columns/{column_id}',
            path: {
                'column_id': columnId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Delete a project column
     * Deletes a project column.
     * @param columnId The unique identifier of the column.
     * @returns void
     * @throws ApiError
     */
    static projectsDeleteColumn(columnId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/projects/columns/{column_id}',
            path: {
                'column_id': columnId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * List project cards
     * Lists the project cards in a project.
     * @param columnId The unique identifier of the column.
     * @param archivedState Filters the project cards that are returned by the card's state.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns project_card Response
     * @throws ApiError
     */
    static projectsListCards(columnId, archivedState = 'not_archived', perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/projects/columns/{column_id}/cards',
            path: {
                'column_id': columnId,
            },
            query: {
                'archived_state': archivedState,
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
     * Create a project card
     * @param columnId The unique identifier of the column.
     * @param requestBody
     * @returns project_card Response
     * @throws ApiError
     */
    static projectsCreateCard(columnId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/projects/columns/{column_id}/cards',
            path: {
                'column_id': columnId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                422: `Validation failed`,
                503: `Response`,
            },
        });
    }
    /**
     * Move a project column
     * @param columnId The unique identifier of the column.
     * @param requestBody
     * @returns any Response
     * @throws ApiError
     */
    static projectsMoveColumn(columnId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/projects/columns/{column_id}/moves',
            path: {
                'column_id': columnId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a project
     * Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param projectId The unique identifier of the project.
     * @returns project Response
     * @throws ApiError
     */
    static projectsGet(projectId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/projects/{project_id}',
            path: {
                'project_id': projectId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Update a project
     * Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param projectId The unique identifier of the project.
     * @param requestBody
     * @returns project Response
     * @throws ApiError
     */
    static projectsUpdate(projectId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/projects/{project_id}',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Not Found if the authenticated user does not have access to the project`,
                410: `Gone`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Delete a project
     * Deletes a project board. Returns a `404 Not Found` status if projects are disabled.
     * @param projectId The unique identifier of the project.
     * @returns void
     * @throws ApiError
     */
    static projectsDelete(projectId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/projects/{project_id}',
            path: {
                'project_id': projectId,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                410: `Gone`,
            },
        });
    }
    /**
     * List project collaborators
     * Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
     * @param projectId The unique identifier of the project.
     * @param affiliation Filters the collaborators by their affiliation. `outside` means outside collaborators of a project that are not a member of the project's organization. `direct` means collaborators with permissions to a project, regardless of organization membership status. `all` means all collaborators the authenticated user can see.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns simple_user Response
     * @throws ApiError
     */
    static projectsListCollaborators(projectId, affiliation = 'all', perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/projects/{project_id}/collaborators',
            path: {
                'project_id': projectId,
            },
            query: {
                'affiliation': affiliation,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Add project collaborator
     * Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
     * @param projectId The unique identifier of the project.
     * @param username The handle for the GitHub user account.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static projectsAddCollaborator(projectId, username, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/projects/{project_id}/collaborators/{username}',
            path: {
                'project_id': projectId,
                'username': username,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Remove user as a collaborator
     * Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.
     * @param projectId The unique identifier of the project.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    static projectsRemoveCollaborator(projectId, username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/projects/{project_id}/collaborators/{username}',
            path: {
                'project_id': projectId,
                'username': username,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get project permission for a user
     * Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
     * @param projectId The unique identifier of the project.
     * @param username The handle for the GitHub user account.
     * @returns project_collaborator_permission Response
     * @throws ApiError
     */
    static projectsGetPermissionForUser(projectId, username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/projects/{project_id}/collaborators/{username}/permission',
            path: {
                'project_id': projectId,
                'username': username,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List project columns
     * Lists the project columns in a project.
     * @param projectId The unique identifier of the project.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns project_column Response
     * @throws ApiError
     */
    static projectsListColumns(projectId, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/projects/{project_id}/columns',
            path: {
                'project_id': projectId,
            },
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
     * Create a project column
     * Creates a new project column.
     * @param projectId The unique identifier of the project.
     * @param requestBody
     * @returns project_column Response
     * @throws ApiError
     */
    static projectsCreateColumn(projectId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/projects/{project_id}/columns',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List repository projects
     * Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param state Indicates the state of the projects to return.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns project Response
     * @throws ApiError
     */
    static projectsListForRepo(owner, repo, state = 'open', perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/projects',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'state': state,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                410: `Gone`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Create a repository project
     * Creates a repository project board. Returns a `410 Gone` status if projects are disabled in the repository or if the repository does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns project Response
     * @throws ApiError
     */
    static projectsCreateForRepo(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/projects',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                410: `Gone`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Create a user project
     * Creates a user project board. Returns a `410 Gone` status if the user does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param requestBody
     * @returns project Response
     * @throws ApiError
     */
    static projectsCreateForAuthenticatedUser(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/user/projects',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List user projects
     * Lists projects for a user.
     * @param username The handle for the GitHub user account.
     * @param state Indicates the state of the projects to return.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns project Response
     * @throws ApiError
     */
    static projectsListForUser(username, state = 'open', perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{username}/projects',
            path: {
                'username': username,
            },
            query: {
                'state': state,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
}
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=ProjectsService.js.map