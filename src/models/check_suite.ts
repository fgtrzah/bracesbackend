/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { minimal_repository } from './minimal_repository';
import type { nullable_integration } from './nullable_integration';
import type { pull_request_minimal } from './pull_request_minimal';
import type { simple_commit } from './simple_commit';

/**
 * A suite of checks performed on the code of a given code change
 */
export type check_suite = {
    id: number;
    node_id: string;
    head_branch: string | null;
    /**
     * The SHA of the head commit that is being checked.
     */
    head_sha: string;
    status: check_suite.status | null;
    conclusion: check_suite.conclusion | null;
    url: string | null;
    before: string | null;
    after: string | null;
    pull_requests: Array<pull_request_minimal> | null;
    app: nullable_integration;
    repository: minimal_repository;
    created_at: string | null;
    updated_at: string | null;
    head_commit: simple_commit;
    latest_check_runs_count: number;
    check_runs_url: string;
    rerequestable?: boolean;
    runs_rerequestable?: boolean;
};

export namespace check_suite {

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
        STARTUP_FAILURE = 'startup_failure',
        STALE = 'stale',
    }


}

