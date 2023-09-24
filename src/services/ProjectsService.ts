/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { project } from '../models/project';
import type { project_card } from '../models/project_card';
import type { project_collaborator_permission } from '../models/project_collaborator_permission';
import type { project_column } from '../models/project_column';
import type { simple_user } from '../models/simple_user';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProjectsService {

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
    public static projectsListForOrg(
        org: string,
        state: 'open' | 'closed' | 'all' = 'open',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<project>> {
        return __request(OpenAPI, {
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
    public static projectsCreateForOrg(
        org: string,
        requestBody: {
            /**
             * The name of the project.
             */
            name: string;
            /**
             * The description of the project.
             */
            body?: string;
        },
    ): CancelablePromise<project> {
        return __request(OpenAPI, {
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
    public static projectsGetCard(
        cardId: number,
    ): CancelablePromise<project_card> {
        return __request(OpenAPI, {
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
    public static projectsUpdateCard(
        cardId: number,
        requestBody?: {
            /**
             * The project card's note
             */
            note?: string | null;
            /**
             * Whether or not the card is archived
             */
            archived?: boolean;
        },
    ): CancelablePromise<project_card> {
        return __request(OpenAPI, {
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
    public static projectsDeleteCard(
        cardId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static projectsMoveCard(
        cardId: number,
        requestBody: {
            /**
             * The position of the card in a column. Can be one of: `top`, `bottom`, or `after:<card_id>` to place after the specified card.
             */
            position: string;
            /**
             * The unique identifier of the column the card should be moved to
             */
            column_id?: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static projectsGetColumn(
        columnId: number,
    ): CancelablePromise<project_column> {
        return __request(OpenAPI, {
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
    public static projectsUpdateColumn(
        columnId: number,
        requestBody: {
            /**
             * Name of the project column
             */
            name: string;
        },
    ): CancelablePromise<project_column> {
        return __request(OpenAPI, {
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
    public static projectsDeleteColumn(
        columnId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static projectsListCards(
        columnId: number,
        archivedState: 'all' | 'archived' | 'not_archived' = 'not_archived',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<project_card>> {
        return __request(OpenAPI, {
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
    public static projectsCreateCard(
        columnId: number,
        requestBody: ({
            /**
             * The project card's note
             */
            note: string | null;
        } | {
            /**
             * The unique identifier of the content associated with the card
             */
            content_id: number;
            /**
             * The piece of content associated with the card
             */
            content_type: string;
        }),
    ): CancelablePromise<project_card> {
        return __request(OpenAPI, {
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
    public static projectsMoveColumn(
        columnId: number,
        requestBody: {
            /**
             * The position of the column in a project. Can be one of: `first`, `last`, or `after:<column_id>` to place after the specified column.
             */
            position: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static projectsGet(
        projectId: number,
    ): CancelablePromise<project> {
        return __request(OpenAPI, {
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
    public static projectsUpdate(
        projectId: number,
        requestBody?: {
            /**
             * Name of the project
             */
            name?: string;
            /**
             * Body of the project
             */
            body?: string | null;
            /**
             * State of the project; either 'open' or 'closed'
             */
            state?: string;
            /**
             * The baseline permission that all organization members have on this project
             */
            organization_permission?: 'read' | 'write' | 'admin' | 'none';
            /**
             * Whether or not this project can be seen by everyone.
             */
            private?: boolean;
        },
    ): CancelablePromise<project> {
        return __request(OpenAPI, {
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
    public static projectsDelete(
        projectId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static projectsListCollaborators(
        projectId: number,
        affiliation: 'outside' | 'direct' | 'all' = 'all',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<simple_user>> {
        return __request(OpenAPI, {
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
    public static projectsAddCollaborator(
        projectId: number,
        username: string,
        requestBody?: {
            /**
             * The permission to grant the collaborator.
             */
            permission?: 'read' | 'write' | 'admin';
        } | null,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static projectsRemoveCollaborator(
        projectId: number,
        username: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static projectsGetPermissionForUser(
        projectId: number,
        username: string,
    ): CancelablePromise<project_collaborator_permission> {
        return __request(OpenAPI, {
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
    public static projectsListColumns(
        projectId: number,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<project_column>> {
        return __request(OpenAPI, {
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
    public static projectsCreateColumn(
        projectId: number,
        requestBody: {
            /**
             * Name of the project column
             */
            name: string;
        },
    ): CancelablePromise<project_column> {
        return __request(OpenAPI, {
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
    public static projectsListForRepo(
        owner: string,
        repo: string,
        state: 'open' | 'closed' | 'all' = 'open',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<project>> {
        return __request(OpenAPI, {
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
    public static projectsCreateForRepo(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * The name of the project.
             */
            name: string;
            /**
             * The description of the project.
             */
            body?: string;
        },
    ): CancelablePromise<project> {
        return __request(OpenAPI, {
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
    public static projectsCreateForAuthenticatedUser(
        requestBody: {
            /**
             * Name of the project
             */
            name: string;
            /**
             * Body of the project
             */
            body?: string | null;
        },
    ): CancelablePromise<project> {
        return __request(OpenAPI, {
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
    public static projectsListForUser(
        username: string,
        state: 'open' | 'closed' | 'all' = 'open',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<project>> {
        return __request(OpenAPI, {
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
