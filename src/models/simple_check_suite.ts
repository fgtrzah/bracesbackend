/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { integration } from './integration';
import type { minimal_repository } from './minimal_repository';
import type { pull_request_minimal } from './pull_request_minimal';

/**
 * A suite of checks performed on the code of a given code change
 */
export type simple_check_suite = {
    after?: string | null;
    app?: integration;
    before?: string | null;
    conclusion?: simple_check_suite.conclusion | null;
    created_at?: string;
    head_branch?: string | null;
    /**
     * The SHA of the head commit that is being checked.
     */
    head_sha?: string;
    id?: number;
    node_id?: string;
    pull_requests?: Array<pull_request_minimal>;
    repository?: minimal_repository;
    status?: simple_check_suite.status;
    updated_at?: string;
    url?: string;
};

export namespace simple_check_suite {

    export enum conclusion {
        SUCCESS = 'success',
        FAILURE = 'failure',
        NEUTRAL = 'neutral',
        CANCELLED = 'cancelled',
        SKIPPED = 'skipped',
        TIMED_OUT = 'timed_out',
        ACTION_REQUIRED = 'action_required',
        STALE = 'stale',
        STARTUP_FAILURE = 'startup_failure',
    }

    export enum status {
        QUEUED = 'queued',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
        PENDING = 'pending',
        WAITING = 'waiting',
    }


}

