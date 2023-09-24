/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type search_result_text_matches = Array<{
    object_url?: string;
    object_type?: string | null;
    property?: string;
    fragment?: string;
    matches?: Array<{
        text?: string;
        indices?: Array<number>;
    }>;
}>;
