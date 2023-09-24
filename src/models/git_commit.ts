/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Low-level Git commit operations within a repository
 */
export type git_commit = {
    /**
     * SHA for the commit
     */
    sha: string;
    node_id: string;
    url: string;
    /**
     * Identifying information for the git-user
     */
    author: {
        /**
         * Timestamp of the commit
         */
        date: string;
        /**
         * Git email address of the user
         */
        email: string;
        /**
         * Name of the git user
         */
        name: string;
    };
    /**
     * Identifying information for the git-user
     */
    committer: {
        /**
         * Timestamp of the commit
         */
        date: string;
        /**
         * Git email address of the user
         */
        email: string;
        /**
         * Name of the git user
         */
        name: string;
    };
    /**
     * Message describing the purpose of the commit
     */
    message: string;
    tree: {
        /**
         * SHA for the commit
         */
        sha: string;
        url: string;
    };
    parents: Array<{
        /**
         * SHA for the commit
         */
        sha: string;
        url: string;
        html_url: string;
    }>;
    verification: {
        verified: boolean;
        reason: string;
        signature: string | null;
        payload: string | null;
    };
    html_url: string;
};

