/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A version of a software package
 */
export type package_version = {
    /**
     * Unique identifier of the package version.
     */
    id: number;
    /**
     * The name of the package version.
     */
    name: string;
    url: string;
    package_html_url: string;
    html_url?: string;
    license?: string;
    description?: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    metadata?: {
        package_type: package_version.package_type;
        container?: {
            tags: Array<string>;
        };
        docker?: {
            tag?: Array<string>;
        };
    };
};

export namespace package_version {

    export enum package_type {
        NPM = 'npm',
        MAVEN = 'maven',
        RUBYGEMS = 'rubygems',
        DOCKER = 'docker',
        NUGET = 'nuget',
        CONTAINER = 'container',
    }


}

