/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { runner_label } from './runner_label';

/**
 * A self hosted runner
 */
export type runner = {
    /**
     * The id of the runner.
     */
    id: number;
    /**
     * The id of the runner group.
     */
    runner_group_id?: number;
    /**
     * The name of the runner.
     */
    name: string;
    /**
     * The Operating System of the runner.
     */
    os: string;
    /**
     * The status of the runner.
     */
    status: string;
    busy: boolean;
    labels: Array<runner_label>;
};

