/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmojisService {

    /**
     * Get emojis
     * Lists all the emojis available to use on GitHub.
     * @returns string Response
     * @throws ApiError
     */
    public static emojisGet(): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/emojis',
            errors: {
                304: `Not modified`,
            },
        });
    }

}
