/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The hierarchy between files in a Git repository.
 */
export type git_tree = {
    sha: string;
    url: string;
    truncated: boolean;
    /**
     * Objects specifying a tree structure
     */
    tree: Array<{
        path?: string;
        mode?: string;
        type?: string;
        sha?: string;
        size?: number;
        url?: string;
    }>;
};

