/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { manifest } from './manifest';
import type { metadata } from './metadata';

/**
 * Create a new snapshot of a repository's dependencies.
 */
export type snapshot = {
    /**
     * The version of the repository snapshot submission.
     */
    version: number;
    job: {
        /**
         * The external ID of the job.
         */
        id: string;
        /**
         * Correlator provides a key that is used to group snapshots submitted over time. Only the "latest" submitted snapshot for a given combination of `job.correlator` and `detector.name` will be considered when calculating a repository's current dependencies. Correlator should be as unique as it takes to distinguish all detection runs for a given "wave" of CI workflow you run. If you're using GitHub Actions, a good default value for this could be the environment variables GITHUB_WORKFLOW and GITHUB_JOB concatenated together. If you're using a build matrix, then you'll also need to add additional key(s) to distinguish between each submission inside a matrix variation.
         */
        correlator: string;
        /**
         * The url for the job.
         */
        html_url?: string;
    };
    /**
     * The commit SHA associated with this dependency snapshot. Maximum length: 40 characters.
     */
    sha: string;
    /**
     * The repository branch that triggered this snapshot.
     */
    ref: string;
    /**
     * A description of the detector used.
     */
    detector: {
        /**
         * The name of the detector used.
         */
        name: string;
        /**
         * The version of the detector used.
         */
        version: string;
        /**
         * The url of the detector used.
         */
        url: string;
    };
    metadata?: metadata;
    /**
     * A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies.
     */
    manifests?: Record<string, manifest>;
    /**
     * The time at which the snapshot was scanned.
     */
    scanned: string;
};

