"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository_webhooks = void 0;
var repository_webhooks;
(function (repository_webhooks) {
    /**
     * The default value for a squash merge commit title:
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    let squash_merge_commit_title;
    (function (squash_merge_commit_title) {
        squash_merge_commit_title["PR_TITLE"] = "PR_TITLE";
        squash_merge_commit_title["COMMIT_OR_PR_TITLE"] = "COMMIT_OR_PR_TITLE";
    })(squash_merge_commit_title = repository_webhooks.squash_merge_commit_title || (repository_webhooks.squash_merge_commit_title = {}));
    /**
     * The default value for a squash merge commit message:
     *
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    let squash_merge_commit_message;
    (function (squash_merge_commit_message) {
        squash_merge_commit_message["PR_BODY"] = "PR_BODY";
        squash_merge_commit_message["COMMIT_MESSAGES"] = "COMMIT_MESSAGES";
        squash_merge_commit_message["BLANK"] = "BLANK";
    })(squash_merge_commit_message = repository_webhooks.squash_merge_commit_message || (repository_webhooks.squash_merge_commit_message = {}));
    /**
     * The default value for a merge commit title.
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    let merge_commit_title;
    (function (merge_commit_title) {
        merge_commit_title["PR_TITLE"] = "PR_TITLE";
        merge_commit_title["MERGE_MESSAGE"] = "MERGE_MESSAGE";
    })(merge_commit_title = repository_webhooks.merge_commit_title || (repository_webhooks.merge_commit_title = {}));
    /**
     * The default value for a merge commit message.
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    let merge_commit_message;
    (function (merge_commit_message) {
        merge_commit_message["PR_BODY"] = "PR_BODY";
        merge_commit_message["PR_TITLE"] = "PR_TITLE";
        merge_commit_message["BLANK"] = "BLANK";
    })(merge_commit_message = repository_webhooks.merge_commit_message || (repository_webhooks.merge_commit_message = {}));
})(repository_webhooks || (exports.repository_webhooks = repository_webhooks = {}));
//# sourceMappingURL=repository_webhooks.js.map