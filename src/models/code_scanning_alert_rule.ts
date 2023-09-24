/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type code_scanning_alert_rule = {
    /**
     * A unique identifier for the rule used to detect the alert.
     */
    id?: string | null;
    /**
     * The name of the rule used to detect the alert.
     */
    name?: string;
    /**
     * The severity of the alert.
     */
    severity?: code_scanning_alert_rule.severity | null;
    /**
     * The security severity of the alert.
     */
    security_severity_level?: code_scanning_alert_rule.security_severity_level | null;
    /**
     * A short description of the rule used to detect the alert.
     */
    description?: string;
    /**
     * description of the rule used to detect the alert.
     */
    full_description?: string;
    /**
     * A set of tags applicable for the rule.
     */
    tags?: Array<string> | null;
    /**
     * Detailed documentation for the rule as GitHub Flavored Markdown.
     */
    help?: string | null;
    /**
     * A link to the documentation for the rule used to detect the alert.
     */
    help_uri?: string | null;
};

export namespace code_scanning_alert_rule {

    /**
     * The severity of the alert.
     */
    export enum severity {
        NONE = 'none',
        NOTE = 'note',
        WARNING = 'warning',
        ERROR = 'error',
    }

    /**
     * The security severity of the alert.
     */
    export enum security_severity_level {
        LOW = 'low',
        MEDIUM = 'medium',
        HIGH = 'high',
        CRITICAL = 'critical',
    }


}

