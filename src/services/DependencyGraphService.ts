/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dependency_graph_diff } from '../models/dependency_graph_diff';
import type { dependency_graph_spdx_sbom } from '../models/dependency_graph_spdx_sbom';
import type { snapshot } from '../models/snapshot';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DependencyGraphService {

    /**
     * Get a diff of the dependencies between commits
     * Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param basehead The base and head Git revisions to compare. The Git revisions will be resolved to commit SHAs. Named revisions will be resolved to their corresponding HEAD commits, and an appropriate merge base will be determined. This parameter expects the format `{base}...{head}`.
     * @param name The full path, relative to the repository root, of the dependency manifest file.
     * @returns dependency_graph_diff Response
     * @throws ApiError
     */
    public static dependencyGraphDiffRange(
        owner: string,
        repo: string,
        basehead: string,
        name?: string,
    ): CancelablePromise<dependency_graph_diff> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/dependency-graph/compare/{basehead}',
            path: {
                'owner': owner,
                'repo': repo,
                'basehead': basehead,
            },
            query: {
                'name': name,
            },
            errors: {
                403: `Response if GitHub Advanced Security is not enabled for this repository`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Export a software bill of materials (SBOM) for a repository.
     * Exports the software bill of materials (SBOM) for a repository in SPDX JSON format.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns dependency_graph_spdx_sbom Response
     * @throws ApiError
     */
    public static dependencyGraphExportSbom(
        owner: string,
        repo: string,
    ): CancelablePromise<dependency_graph_spdx_sbom> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/dependency-graph/sbom',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create a snapshot of dependencies for a repository
     * Create a new snapshot of a repository's dependencies. You must authenticate using an access token with the `repo` scope to use this endpoint for a repository that the requesting user has access to.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns any Response
     * @throws ApiError
     */
    public static dependencyGraphCreateRepositorySnapshot(
        owner: string,
        repo: string,
        requestBody: snapshot,
    ): CancelablePromise<{
        /**
         * ID of the created snapshot.
         */
        id: number;
        /**
         * The time at which the snapshot was created.
         */
        created_at: string;
        /**
         * Either "SUCCESS", "ACCEPTED", or "INVALID". "SUCCESS" indicates that the snapshot was successfully created and the repository's dependencies were updated. "ACCEPTED" indicates that the snapshot was successfully created, but the repository's dependencies were not updated. "INVALID" indicates that the snapshot was malformed.
         */
        result: string;
        /**
         * A message providing further details about the result, such as why the dependencies were not updated.
         */
        message: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/dependency-graph/snapshots',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
