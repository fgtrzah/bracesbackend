/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { code_of_conduct } from '../models/code_of_conduct';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CodesOfConductService {

    /**
     * Get all codes of conduct
     * Returns array of all GitHub's codes of conduct.
     * @returns code_of_conduct Response
     * @throws ApiError
     */
    public static codesOfConductGetAllCodesOfConduct(): CancelablePromise<Array<code_of_conduct>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/codes_of_conduct',
            errors: {
                304: `Not modified`,
            },
        });
    }

    /**
     * Get a code of conduct
     * Returns information about the specified GitHub code of conduct.
     * @param key
     * @returns code_of_conduct Response
     * @throws ApiError
     */
    public static codesOfConductGetConductCode(
        key: string,
    ): CancelablePromise<code_of_conduct> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/codes_of_conduct/{key}',
            path: {
                'key': key,
            },
            errors: {
                304: `Not modified`,
                404: `Resource not found`,
            },
        });
    }

}
