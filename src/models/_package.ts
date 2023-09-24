/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_minimal_repository } from './nullable_minimal_repository';
import type { nullable_simple_user } from './nullable_simple_user';

/**
 * A software package
 */
export type _package = {
    /**
     * Unique identifier of the package.
     */
    id: number;
    /**
     * The name of the package.
     */
    name: string;
    package_type: _package.package_type;
    url: string;
    html_url: string;
    /**
     * The number of versions of the package.
     */
    version_count: number;
    visibility: _package.visibility;
    owner?: nullable_simple_user;
    repository?: nullable_minimal_repository;
    created_at: string;
    updated_at: string;
};

export namespace _package {

    export enum package_type {
        NPM = 'npm',
        MAVEN = 'maven',
        RUBYGEMS = 'rubygems',
        DOCKER = 'docker',
        NUGET = 'nuget',
        CONTAINER = 'container',
    }

    export enum visibility {
        PRIVATE = 'private',
        PUBLIC = 'public',
    }


}

