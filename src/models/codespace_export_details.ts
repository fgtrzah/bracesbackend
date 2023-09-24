/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An export of a codespace. Also, latest export details for a codespace can be fetched with id = latest
 */
export type codespace_export_details = {
    /**
     * State of the latest export
     */
    state?: string | null;
    /**
     * Completion time of the last export operation
     */
    completed_at?: string | null;
    /**
     * Name of the exported branch
     */
    branch?: string | null;
    /**
     * Git commit SHA of the exported branch
     */
    sha?: string | null;
    /**
     * Id for the export details
     */
    id?: string;
    /**
     * Url for fetching export details
     */
    export_url?: string;
    /**
     * Web url for the exported branch
     */
    html_url?: string | null;
};

