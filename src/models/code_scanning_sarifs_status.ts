/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type code_scanning_sarifs_status = {
    /**
     * `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed.
     */
    processing_status?: code_scanning_sarifs_status.processing_status;
    /**
     * The REST API URL for getting the analyses associated with the upload.
     */
    readonly analyses_url?: string | null;
    /**
     * Any errors that ocurred during processing of the delivery.
     */
    readonly errors?: Array<string> | null;
};

export namespace code_scanning_sarifs_status {

    /**
     * `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed.
     */
    export enum processing_status {
        PENDING = 'pending',
        COMPLETE = 'complete',
        FAILED = 'failed',
    }


}

