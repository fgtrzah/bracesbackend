/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { deployment_simple } from './deployment_simple';
import type { nullable_integration } from './nullable_integration';
import type { pull_request_minimal } from './pull_request_minimal';

/**
 * A check performed on the code of a given code change
 */
export type check_run = {
    /**
     * The id of the check.
     */
    id: number;
    /**
     * The SHA of the commit that is being checked.
     */
    head_sha: string;
    node_id: string;
    external_id: string | null;
    url: string;
    html_url: string | null;
    details_url: string | null;
    /**
     * The phase of the lifecycle that the check is currently in.
     */
    status: check_run.status;
    conclusion: check_run.conclusion | null;
    started_at: string | null;
    completed_at: string | null;
    output: {
        title: string | null;
        summary: string | null;
        text: string | null;
        annotations_count: number;
        annotations_url: string;
    };
    /**
     * The name of the check.
     */
    name: string;
    check_suite: {
        id: number;
    } | null;
    app: nullable_integration;
    /**
     * Pull requests that are open with a `head_sha` or `head_branch` that matches the check. The returned pull requests do not necessarily indicate pull requests that triggered the check.
     */
    pull_requests: Array<pull_request_minimal>;
    deployment?: deployment_simple;
};

export namespace check_run {

    /**
     * The phase of the lifecycle that the check is currently in.
     */
    export enum status {
        QUEUED = 'queued',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
    }

    export enum conclusion {
        SUCCESS = 'success',
        FAILURE = 'failure',
        NEUTRAL = 'neutral',
        CANCELLED = 'cancelled',
        SKIPPED = 'skipped',
        TIMED_OUT = 'timed_out',
        ACTION_REQUIRED = 'action_required',
    }


}

