/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { metadata } from './metadata';

export type dependency = {
    /**
     * Package-url (PURL) of dependency. See https://github.com/package-url/purl-spec for more details.
     */
    package_url?: string;
    metadata?: metadata;
    /**
     * A notation of whether a dependency is requested directly by this manifest or is a dependency of another dependency.
     */
    relationship?: dependency.relationship;
    /**
     * A notation of whether the dependency is required for the primary build artifact (runtime) or is only used for development. Future versions of this specification may allow for more granular scopes.
     */
    scope?: dependency.scope;
    /**
     * Array of package-url (PURLs) of direct child dependencies.
     */
    dependencies?: Array<string>;
};

export namespace dependency {

    /**
     * A notation of whether a dependency is requested directly by this manifest or is a dependency of another dependency.
     */
    export enum relationship {
        DIRECT = 'direct',
        INDIRECT = 'indirect',
    }

    /**
     * A notation of whether the dependency is required for the primary build artifact (runtime) or is only used for development. Future versions of this specification may allow for more granular scopes.
     */
    export enum scope {
        RUNTIME = 'runtime',
        DEVELOPMENT = 'development',
    }


}

