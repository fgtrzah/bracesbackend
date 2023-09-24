/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`.
 */
export enum workflow_run_status {
    COMPLETED = 'completed',
    ACTION_REQUIRED = 'action_required',
    CANCELLED = 'cancelled',
    FAILURE = 'failure',
    NEUTRAL = 'neutral',
    SKIPPED = 'skipped',
    STALE = 'stale',
    SUCCESS = 'success',
    TIMED_OUT = 'timed_out',
    IN_PROGRESS = 'in_progress',
    QUEUED = 'queued',
    REQUESTED = 'requested',
    WAITING = 'waiting',
    PENDING = 'pending',
}
