/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { dependabot_alert_security_vulnerability } from './dependabot_alert_security_vulnerability';

/**
 * Details for the GitHub Security Advisory.
 */
export type dependabot_alert_security_advisory = {
    /**
     * The unique GitHub Security Advisory ID assigned to the advisory.
     */
    readonly ghsa_id: string;
    /**
     * The unique CVE ID assigned to the advisory.
     */
    readonly cve_id: string | null;
    /**
     * A short, plain text summary of the advisory.
     */
    readonly summary: string;
    /**
     * A long-form Markdown-supported description of the advisory.
     */
    readonly description: string;
    /**
     * Vulnerable version range information for the advisory.
     */
    readonly vulnerabilities: Array<dependabot_alert_security_vulnerability>;
    /**
     * The severity of the advisory.
     */
    readonly severity: dependabot_alert_security_advisory.severity;
    /**
     * Details for the advisory pertaining to the Common Vulnerability Scoring System.
     */
    readonly cvss: {
        /**
         * The overall CVSS score of the advisory.
         */
        readonly score: number;
        /**
         * The full CVSS vector string for the advisory.
         */
        readonly vector_string: string | null;
    };
    /**
     * Details for the advisory pertaining to Common Weakness Enumeration.
     */
    readonly cwes: Array<{
        /**
         * The unique CWE ID.
         */
        readonly cwe_id: string;
        /**
         * The short, plain text name of the CWE.
         */
        readonly name: string;
    }>;
    /**
     * Values that identify this advisory among security information sources.
     */
    readonly identifiers: Array<{
        /**
         * The type of advisory identifier.
         */
        readonly type: 'CVE' | 'GHSA';
        /**
         * The value of the advisory identifer.
         */
        readonly value: string;
    }>;
    /**
     * Links to additional advisory information.
     */
    readonly references: Array<{
        /**
         * The URL of the reference.
         */
        readonly url: string;
    }>;
    /**
     * The time that the advisory was published in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    readonly published_at: string;
    /**
     * The time that the advisory was last modified in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    readonly updated_at: string;
    /**
     * The time that the advisory was withdrawn in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    readonly withdrawn_at: string | null;
};

export namespace dependabot_alert_security_advisory {

    /**
     * The severity of the advisory.
     */
    export enum severity {
        LOW = 'low',
        MEDIUM = 'medium',
        HIGH = 'high',
        CRITICAL = 'critical',
    }


}

