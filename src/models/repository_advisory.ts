/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { repository_advisory_credit } from './repository_advisory_credit';
import type { repository_advisory_vulnerability } from './repository_advisory_vulnerability';
import type { security_advisory_credit_types } from './security_advisory_credit_types';
import type { simple_repository } from './simple_repository';
import type { simple_user } from './simple_user';
import type { team } from './team';

/**
 * A repository security advisory.
 */
export type repository_advisory = {
    /**
     * The GitHub Security Advisory ID.
     */
    readonly ghsa_id: string;
    /**
     * The Common Vulnerabilities and Exposures (CVE) ID.
     */
    cve_id: string | null;
    /**
     * The API URL for the advisory.
     */
    url: string;
    /**
     * The URL for the advisory.
     */
    readonly html_url: string;
    /**
     * A short summary of the advisory.
     */
    summary: string;
    /**
     * A detailed description of what the advisory entails.
     */
    description: string | null;
    /**
     * The severity of the advisory.
     */
    severity: repository_advisory.severity | null;
    /**
     * The author of the advisory.
     */
    readonly author: simple_user | null;
    /**
     * The publisher of the advisory.
     */
    readonly publisher: simple_user | null;
    readonly identifiers: Array<{
        /**
         * The type of identifier.
         */
        type: 'CVE' | 'GHSA';
        /**
         * The identifier value.
         */
        value: string;
    }>;
    /**
     * The state of the advisory.
     */
    state: repository_advisory.state;
    /**
     * The date and time of when the advisory was created, in ISO 8601 format.
     */
    readonly created_at: string | null;
    /**
     * The date and time of when the advisory was last updated, in ISO 8601 format.
     */
    readonly updated_at: string | null;
    /**
     * The date and time of when the advisory was published, in ISO 8601 format.
     */
    readonly published_at: string | null;
    /**
     * The date and time of when the advisory was closed, in ISO 8601 format.
     */
    readonly closed_at: string | null;
    /**
     * The date and time of when the advisory was withdrawn, in ISO 8601 format.
     */
    readonly withdrawn_at: string | null;
    readonly submission: {
        /**
         * Whether a private vulnerability report was accepted by the repository's administrators.
         */
        readonly accepted: boolean;
    } | null;
    vulnerabilities: Array<repository_advisory_vulnerability> | null;
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
    readonly cwes: Array<{
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
     * A list of only the CWE IDs.
     */
    cwe_ids: Array<string> | null;
    credits: Array<{
        /**
         * The username of the user credited.
         */
        login?: string;
        type?: security_advisory_credit_types;
    }> | null;
    readonly credits_detailed: Array<repository_advisory_credit> | null;
    /**
     * A list of users that collaborate on the advisory.
     */
    collaborating_users: Array<simple_user> | null;
    /**
     * A list of teams that collaborate on the advisory.
     */
    collaborating_teams: Array<team> | null;
    /**
     * A temporary private fork of the advisory's repository for collaborating on a fix.
     */
    readonly private_fork: simple_repository | null;
};

export namespace repository_advisory {

    /**
     * The severity of the advisory.
     */
    export enum severity {
        CRITICAL = 'critical',
        HIGH = 'high',
        MEDIUM = 'medium',
        LOW = 'low',
    }

    /**
     * The state of the advisory.
     */
    export enum state {
        PUBLISHED = 'published',
        CLOSED = 'closed',
        WITHDRAWN = 'withdrawn',
        DRAFT = 'draft',
        TRIAGE = 'triage',
    }


}

