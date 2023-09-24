/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type security_and_analysis = {
    advanced_security?: {
        status?: security_and_analysis.status;
    };
    /**
     * Enable or disable Dependabot security updates for the repository.
     */
    dependabot_security_updates?: {
        /**
         * The enablement status of Dependabot security updates for the repository.
         */
        status?: security_and_analysis.status;
    };
    secret_scanning?: {
        status?: security_and_analysis.status;
    };
    secret_scanning_push_protection?: {
        status?: security_and_analysis.status;
    };
};

export namespace security_and_analysis {

    export enum status {
        ENABLED = 'enabled',
        DISABLED = 'disabled',
    }


}

