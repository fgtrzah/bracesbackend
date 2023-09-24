/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
 */
export enum package_type {
    NPM = 'npm',
    MAVEN = 'maven',
    RUBYGEMS = 'rubygems',
    DOCKER = 'docker',
    NUGET = 'nuget',
    CONTAINER = 'container',
}
