/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { gitignore_template } from '../models/gitignore_template';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GitignoreService {

    /**
     * Get all gitignore templates
     * List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/repos/repos#create-a-repository-for-the-authenticated-user).
     * @returns string Response
     * @throws ApiError
     */
    public static gitignoreGetAllTemplates(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitignore/templates',
            errors: {
                304: `Not modified`,
            },
        });
    }

    /**
     * Get a gitignore template
     * The API also allows fetching the source of a single template.
     * Use the raw [media type](https://docs.github.com/rest/overview/media-types/) to get the raw contents.
     * @param name
     * @returns gitignore_template Response
     * @throws ApiError
     */
    public static gitignoreGetTemplate(
        name: string,
    ): CancelablePromise<gitignore_template> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitignore/templates/{name}',
            path: {
                'name': name,
            },
            errors: {
                304: `Not modified`,
            },
        });
    }

}
