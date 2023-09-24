/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { simple_commit } from './simple_commit';

/**
 * A group of pull requests that the merge queue has grouped together to be merged.
 *
 */
export type merge_group = {
    /**
     * The SHA of the merge group.
     */
    head_sha: string;
    /**
     * The full ref of the merge group.
     */
    head_ref: string;
    /**
     * The SHA of the merge group's parent commit.
     */
    base_sha: string;
    /**
     * The full ref of the branch the merge group will be merged into.
     */
    base_ref: string;
    head_commit: simple_commit;
};

