/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { pull_request } from './pull_request';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_pull_request_converted_to_draft = {
    action: webhook_pull_request_converted_to_draft.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    /**
     * The pull request number.
     */
    number: number;
    organization?: organization_simple_webhooks;
    pull_request: (pull_request & {
        /**
         * Whether to allow auto-merge for pull requests.
         */
        allow_auto_merge?: boolean;
        /**
         * Whether to allow updating the pull request's branch.
         */
        allow_update_branch?: boolean;
        /**
         * Whether to delete head branches when pull requests are merged.
         */
        delete_branch_on_merge?: boolean;
        /**
         * The default value for a merge commit message.
         * - `PR_TITLE` - default to the pull request's title.
         * - `PR_BODY` - default to the pull request's body.
         * - `BLANK` - default to a blank commit message.
         */
        merge_commit_message?: webhook_pull_request_converted_to_draft.merge_commit_message;
        /**
         * The default value for a merge commit title.
         * - `PR_TITLE` - default to the pull request's title.
         * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., "Merge pull request #123 from branch-name").
         */
        merge_commit_title?: webhook_pull_request_converted_to_draft.merge_commit_title;
        /**
         * The default value for a squash merge commit message:
         * - `PR_BODY` - default to the pull request's body.
         * - `COMMIT_MESSAGES` - default to the branch's commit messages.
         * - `BLANK` - default to a blank commit message.
         */
        squash_merge_commit_message?: webhook_pull_request_converted_to_draft.squash_merge_commit_message;
        /**
         * The default value for a squash merge commit title:
         * - `PR_TITLE` - default to the pull request's title.
         * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
         */
        squash_merge_commit_title?: webhook_pull_request_converted_to_draft.squash_merge_commit_title;
        /**
         * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.**
         */
        use_squash_pr_title_as_default?: boolean;
    });
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_pull_request_converted_to_draft {

    export enum action {
        CONVERTED_TO_DRAFT = 'converted_to_draft',
    }

    /**
     * The default value for a merge commit message.
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    export enum merge_commit_message {
        PR_BODY = 'PR_BODY',
        PR_TITLE = 'PR_TITLE',
        BLANK = 'BLANK',
    }

    /**
     * The default value for a merge commit title.
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., "Merge pull request #123 from branch-name").
     */
    export enum merge_commit_title {
        PR_TITLE = 'PR_TITLE',
        MERGE_MESSAGE = 'MERGE_MESSAGE',
    }

    /**
     * The default value for a squash merge commit message:
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    export enum squash_merge_commit_message {
        PR_BODY = 'PR_BODY',
        COMMIT_MESSAGES = 'COMMIT_MESSAGES',
        BLANK = 'BLANK',
    }

    /**
     * The default value for a squash merge commit title:
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    export enum squash_merge_commit_title {
        PR_TITLE = 'PR_TITLE',
        COMMIT_OR_PR_TITLE = 'COMMIT_OR_PR_TITLE',
    }


}

