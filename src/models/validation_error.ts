/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Validation Error
 */
export type validation_error = {
    message: string;
    documentation_url: string;
    errors?: Array<{
        resource?: string;
        field?: string;
        message?: string;
        code: string;
        index?: number;
        value?: (string | null | number | null | Array<string> | null);
    }>;
};

