/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Successful deletion of a code scanning analysis
 */
export type code_scanning_analysis_deletion = {
    /**
     * Next deletable analysis in chain, without last analysis deletion confirmation
     */
    readonly next_analysis_url: string | null;
    /**
     * Next deletable analysis in chain, with last analysis deletion confirmation
     */
    readonly confirm_delete_url: string | null;
};

