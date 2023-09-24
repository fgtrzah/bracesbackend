"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GistsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class GistsService {
    /**
     * List gists for the authenticated user
     * Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns base_gist Response
     * @throws ApiError
     */
    static gistsList(since, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gists',
            query: {
                'since': since,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Create a gist
     * Allows you to add a new gist with one or more files.
     *
     * **Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
     * @param requestBody
     * @returns gist_simple Response
     * @throws ApiError
     */
    static gistsCreate(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/gists',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List public gists
     * List public gists sorted by most recently updated to least recently updated.
     *
     * Note: With [pagination](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns base_gist Response
     * @throws ApiError
     */
    static gistsListPublic(since, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gists/public',
            query: {
                'since': since,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List starred gists
     * List the authenticated user's starred gists:
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns base_gist Response
     * @throws ApiError
     */
    static gistsListStarred(since, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gists/starred',
            query: {
                'since': since,
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
     * Get a gist
     * @param gistId The unique identifier of the gist.
     * @returns gist_simple Response
     * @throws ApiError
     */
    static gistsGet(gistId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gists/{gist_id}',
            path: {
                'gist_id': gistId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden Gist`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a gist
     * Allows you to update a gist's description and to update, delete, or rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.
     * At least one of `description` or `files` is required.
     * @param gistId The unique identifier of the gist.
     * @param requestBody
     * @returns gist_simple Response
     * @throws ApiError
     */
    static gistsUpdate(gistId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/gists/{gist_id}',
            path: {
                'gist_id': gistId,
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
     * Delete a gist
     * @param gistId The unique identifier of the gist.
     * @returns void
     * @throws ApiError
     */
    static gistsDelete(gistId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/gists/{gist_id}',
            path: {
                'gist_id': gistId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * List gist comments
     * @param gistId The unique identifier of the gist.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns gist_comment Response
     * @throws ApiError
     */
    static gistsListComments(gistId, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gists/{gist_id}/comments',
            path: {
                'gist_id': gistId,
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
     * Create a gist comment
     * @param gistId The unique identifier of the gist.
     * @param requestBody
     * @returns gist_comment Response
     * @throws ApiError
     */
    static gistsCreateComment(gistId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/gists/{gist_id}/comments',
            path: {
                'gist_id': gistId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get a gist comment
     * @param gistId The unique identifier of the gist.
     * @param commentId The unique identifier of the comment.
     * @returns gist_comment Response
     * @throws ApiError
     */
    static gistsGetComment(gistId, commentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gists/{gist_id}/comments/{comment_id}',
            path: {
                'gist_id': gistId,
                'comment_id': commentId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden Gist`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a gist comment
     * @param gistId The unique identifier of the gist.
     * @param commentId The unique identifier of the comment.
     * @param requestBody
     * @returns gist_comment Response
     * @throws ApiError
     */
    static gistsUpdateComment(gistId, commentId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/gists/{gist_id}/comments/{comment_id}',
            path: {
                'gist_id': gistId,
                'comment_id': commentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Delete a gist comment
     * @param gistId The unique identifier of the gist.
     * @param commentId The unique identifier of the comment.
     * @returns void
     * @throws ApiError
     */
    static gistsDeleteComment(gistId, commentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/gists/{gist_id}/comments/{comment_id}',
            path: {
                'gist_id': gistId,
                'comment_id': commentId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * List gist commits
     * @param gistId The unique identifier of the gist.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns gist_commit Response
     * @throws ApiError
     */
    static gistsListCommits(gistId, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gists/{gist_id}/commits',
            path: {
                'gist_id': gistId,
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
     * List gist forks
     * @param gistId The unique identifier of the gist.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns gist_simple Response
     * @throws ApiError
     */
    static gistsListForks(gistId, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gists/{gist_id}/forks',
            path: {
                'gist_id': gistId,
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
     * Fork a gist
     * @param gistId The unique identifier of the gist.
     * @returns base_gist Response
     * @throws ApiError
     */
    static gistsFork(gistId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/gists/{gist_id}/forks',
            path: {
                'gist_id': gistId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Check if a gist is starred
     * @param gistId The unique identifier of the gist.
     * @returns void
     * @throws ApiError
     */
    static gistsCheckIsStarred(gistId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gists/{gist_id}/star',
            path: {
                'gist_id': gistId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Not Found if gist is not starred`,
            },
        });
    }
    /**
     * Star a gist
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     * @param gistId The unique identifier of the gist.
     * @returns void
     * @throws ApiError
     */
    static gistsStar(gistId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/gists/{gist_id}/star',
            path: {
                'gist_id': gistId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Unstar a gist
     * @param gistId The unique identifier of the gist.
     * @returns void
     * @throws ApiError
     */
    static gistsUnstar(gistId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/gists/{gist_id}/star',
            path: {
                'gist_id': gistId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get a gist revision
     * @param gistId The unique identifier of the gist.
     * @param sha
     * @returns gist_simple Response
     * @throws ApiError
     */
    static gistsGetRevision(gistId, sha) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gists/{gist_id}/{sha}',
            path: {
                'gist_id': gistId,
                'sha': sha,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List gists for a user
     * Lists public gists for the specified user:
     * @param username The handle for the GitHub user account.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns base_gist Response
     * @throws ApiError
     */
    static gistsListForUser(username, since, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{username}/gists',
            path: {
                'username': username,
            },
            query: {
                'since': since,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
}
exports.GistsService = GistsService;
//# sourceMappingURL=GistsService.js.map