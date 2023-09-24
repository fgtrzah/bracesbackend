/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { dependency } from './dependency';
import type { metadata } from './metadata';

export type manifest = {
    /**
     * The name of the manifest.
     */
    name: string;
    file?: {
        /**
         * The path of the manifest file relative to the root of the Git repository.
         */
        source_location?: string;
    };
    metadata?: metadata;
    /**
     * A collection of resolved package dependencies.
     */
    resolved?: Record<string, dependency>;
};

