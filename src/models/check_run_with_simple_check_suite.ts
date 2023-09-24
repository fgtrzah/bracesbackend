/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { deployment_simple } from './deployment_simple';
import type { nullable_integration } from './nullable_integration';
import type { pull_request_minimal } from './pull_request_minimal';
import type { simple_check_suite } from './simple_check_suite';

/**
 * A check performed on the code of a given code change
 */
export type check_run_with_simple_check_suite = {
    app: nullable_integration;
    check_suite: simple_check_suite;
    completed_at: string | null;
    conclusion: check_run_with_simple_check_suite.conclusion | null;
    deployment?: deployment_simple;
    details_url: string;
    external_id: string;
    /**
     * The SHA of the commit that is being checked.
     */
    head_sha: string;
    html_url: string;
    /**
     * The id of the check.
     */
    id: number;
    /**
     * The name of the check.
     */
    name: string;
    node_id: string;
    output: {
        annotations_count: number;
        annotations_url: string;
        summary: string | null;
        text: string | null;
        title: string | null;
    };
    pull_requests: Array<pull_request_minimal>;
    started_at: string;
    /**
     * The phase of the lifecycle that the check is currently in.
     */
    status: check_run_with_simple_check_suite.status;
    url: string;
};

export namespace check_run_with_simple_check_suite {

    export enum conclusion {
        WAITING = 'waiting',
        PENDING = 'pending',
        STARTUP_FAILURE = 'startup_failure',
        STALE = 'stale',
        SUCCESS = 'success',
        FAILURE = 'failure',
        NEUTRAL = 'neutral',
        CANCELLED = 'cancelled',
        SKIPPED = 'skipped',
        TIMED_OUT = 'timed_out',
        ACTION_REQUIRED = 'action_required',
    }

    /**
     * The phase of the lifecycle that the check is currently in.
     */
    export enum status {
        QUEUED = 'queued',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
        PENDING = 'pending',
    }


}

