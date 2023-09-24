/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type code_scanning_alert_rule_summary = {
    /**
     * A unique identifier for the rule used to detect the alert.
     */
    id?: string | null;
    /**
     * The name of the rule used to detect the alert.
     */
    name?: string;
    /**
     * A set of tags applicable for the rule.
     */
    tags?: Array<string> | null;
    /**
     * The severity of the alert.
     */
    severity?: code_scanning_alert_rule_summary.severity | null;
    /**
     * A short description of the rule used to detect the alert.
     */
    description?: string;
};

export namespace code_scanning_alert_rule_summary {

    /**
     * The severity of the alert.
     */
    export enum severity {
        NONE = 'none',
        NOTE = 'note',
        WARNING = 'warning',
        ERROR = 'error',
    }


}

