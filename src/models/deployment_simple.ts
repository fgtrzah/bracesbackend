/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_integration } from './nullable_integration';

/**
 * A deployment created as the result of an Actions check run from a workflow that references an environment
 */
export type deployment_simple = {
    url: string;
    /**
     * Unique identifier of the deployment
     */
    id: number;
    node_id: string;
    /**
     * Parameter to specify a task to execute
     */
    task: string;
    original_environment?: string;
    /**
     * Name for the target deployment environment.
     */
    environment: string;
    description: string | null;
    created_at: string;
    updated_at: string;
    statuses_url: string;
    repository_url: string;
    /**
     * Specifies if the given environment is will no longer exist at some point in the future. Default: false.
     */
    transient_environment?: boolean;
    /**
     * Specifies if the given environment is one that end-users directly interact with. Default: false.
     */
    production_environment?: boolean;
    performed_via_github_app?: nullable_integration;
};

