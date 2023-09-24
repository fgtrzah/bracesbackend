/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { security_advisory_credit_types } from './security_advisory_credit_types';
import type { security_advisory_ecosystems } from './security_advisory_ecosystems';

export type repository_advisory_create = {
    /**
     * A short summary of the advisory.
     */
    summary: string;
    /**
     * A detailed description of what the advisory impacts.
     */
    description: string;
    /**
     * The Common Vulnerabilities and Exposures (CVE) ID.
     */
    cve_id?: string | null;
    /**
     * A product affected by the vulnerability detailed in a repository security advisory.
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
            name?: string | null;
        };
        /**
         * The range of the package versions affected by the vulnerability.
         */
        vulnerable_version_range?: string | null;
        /**
         * The package version(s) that resolve the vulnerability.
         */
        patched_versions?: string | null;
        /**
         * The functions in the package that are affected.
         */
        vulnerable_functions?: Array<string> | null;
    }>;
    /**
     * A list of Common Weakness Enumeration (CWE) IDs.
     */
    cwe_ids?: Array<string> | null;
    /**
     * A list of users receiving credit for their participation in the security advisory.
     */
    credits?: Array<{
        /**
         * The username of the user credited.
         */
        login: string;
        type: security_advisory_credit_types;
    }> | null;
    /**
     * The severity of the advisory. You must choose between setting this field or `cvss_vector_string`.
     */
    severity?: repository_advisory_create.severity | null;
    /**
     * The CVSS vector that calculates the severity of the advisory. You must choose between setting this field or `severity`.
     */
    cvss_vector_string?: string | null;
};

export namespace repository_advisory_create {

    /**
     * The severity of the advisory. You must choose between setting this field or `cvss_vector_string`.
     */
    export enum severity {
        CRITICAL = 'critical',
        HIGH = 'high',
        MEDIUM = 'medium',
        LOW = 'low',
    }


}

