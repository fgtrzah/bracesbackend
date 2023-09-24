/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Require all commits be made to a non-target branch and submitted via a pull request before they can be merged.
 */
export type repository_rule_pull_request = {
    type: repository_rule_pull_request.type;
    parameters?: {
        /**
         * New, reviewable commits pushed will dismiss previous pull request review approvals.
         */
        dismiss_stale_reviews_on_push: boolean;
        /**
         * Require an approving review in pull requests that modify files that have a designated code owner.
         */
        require_code_owner_review: boolean;
        /**
         * Whether the most recent reviewable push must be approved by someone other than the person who pushed it.
         */
        require_last_push_approval: boolean;
        /**
         * The number of approving reviews that are required before a pull request can be merged.
         */
        required_approving_review_count: number;
        /**
         * All conversations on code must be resolved before a pull request can be merged.
         */
        required_review_thread_resolution: boolean;
    };
};

export namespace repository_rule_pull_request {

    export enum type {
        PULL_REQUEST = 'pull_request',
    }


}

