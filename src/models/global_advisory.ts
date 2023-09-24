/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { security_advisory_credit_types } from './security_advisory_credit_types';
import type { security_advisory_ecosystems } from './security_advisory_ecosystems';
import type { simple_user } from './simple_user';

/**
 * A GitHub Security Advisory.
 */
export type global_advisory = {
    /**
     * The GitHub Security Advisory ID.
     */
    readonly ghsa_id: string;
    /**
     * The Common Vulnerabilities and Exposures (CVE) ID.
     */
    readonly cve_id: string | null;
    /**
     * The API URL for the advisory.
     */
    readonly url: string;
    /**
     * The URL for the advisory.
     */
    readonly html_url: string;
    /**
     * The API URL for the repository advisory.
     */
    readonly repository_advisory_url: string | null;
    /**
     * A short summary of the advisory.
     */
    summary: string;
    /**
     * A detailed description of what the advisory entails.
     */
    description: string | null;
    /**
     * The type of advisory.
     */
    readonly type: global_advisory.type;
    /**
     * The severity of the advisory.
     */
    severity: global_advisory.severity;
    /**
     * The URL of the advisory's source code.
     */
    source_code_location: string | null;
    readonly identifiers: Array<{
        /**
         * The type of identifier.
         */
        type: 'CVE' | 'GHSA';
        /**
         * The identifier value.
         */
        value: string;
    }> | null;
    references: Array<string> | null;
    /**
     * The date and time of when the advisory was published, in ISO 8601 format.
     */
    readonly published_at: string;
    /**
     * The date and time of when the advisory was last updated, in ISO 8601 format.
     */
    readonly updated_at: string;
    /**
     * The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format.
     */
    readonly github_reviewed_at: string | null;
    /**
     * The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format.
     * This field is only populated when the advisory is imported from the National Vulnerability Database.
     */
    readonly nvd_published_at: string | null;
    /**
     * The date and time of when the advisory was withdrawn, in ISO 8601 format.
     */
    readonly withdrawn_at: string | null;
    /**
     * The products and respective version ranges affected by the advisory.
     */
    vulnerabilities: Array<{
        /**
         * The name of the package affected by the vulnerability.
         */
        package: {
            ecosystem: security_advisory_ecosystems;
            /**
             * The unique package name within its ecosystem.
             */
            name: string | null;
        } | null;
        /**
         * The range of the package versions affected by the vulnerability.
         */
        vulnerable_version_range: string | null;
        /**
         * The package version that resolve the vulnerability.
         */
        first_patched_version: string | null;
        /**
         * The functions in the package that are affected by the vulnerability.
         */
        readonly vulnerable_functions: Array<string> | null;
    }> | null;
    cvss: {
        /**
         * The CVSS vector.
         */
        vector_string: string | null;
        /**
         * The CVSS score.
         */
        readonly score: number | null;
    } | null;
    cwes: Array<{
        /**
         * The Common Weakness Enumeration (CWE) identifier.
         */
        cwe_id: string;
        /**
         * The name of the CWE.
         */
        readonly name: string;
    }> | null;
    /**
     * The users who contributed to the advisory.
     */
    readonly credits: Array<{
        user: simple_user;
        type: security_advisory_credit_types;
    }> | null;
};

export namespace global_advisory {

    /**
     * The type of advisory.
     */
    export enum type {
        REVIEWED = 'reviewed',
        UNREVIEWED = 'unreviewed',
        MALWARE = 'malware',
    }

    /**
     * The severity of the advisory.
     */
    export enum severity {
        CRITICAL = 'critical',
        HIGH = 'high',
        MEDIUM = 'medium',
        LOW = 'low',
        UNKNOWN = 'unknown',
    }


}

