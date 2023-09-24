/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { license } from '../models/license';
import type { license_content } from '../models/license_content';
import type { license_simple } from '../models/license_simple';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LicensesService {

    /**
     * Get all commonly used licenses
     * Lists the most commonly used licenses on GitHub. For more information, see "[Licensing a repository ](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."
     * @param featured
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns license_simple Response
     * @throws ApiError
     */
    public static licensesGetAllCommonlyUsed(
        featured?: boolean,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<Array<license_simple>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/licenses',
            query: {
                'featured': featured,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
            },
        });
    }

    /**
     * Get a license
     * Gets information about a specific license. For more information, see "[Licensing a repository ](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."
     * @param license
     * @returns license Response
     * @throws ApiError
     */
    public static licensesGet(
        license: string,
    ): CancelablePromise<license> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/licenses/{license}',
            path: {
                'license': license,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Get the license for a repository
     * This method returns the contents of the repository's license file, if one is detected.
     *
     * Similar to [Get repository content](https://docs.github.com/rest/repos/contents#get-repository-content), this method also supports [custom media types](https://docs.github.com/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns license_content Response
     * @throws ApiError
     */
    public static licensesGetForRepo(
        owner: string,
        repo: string,
    ): CancelablePromise<license_content> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/license',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

}
