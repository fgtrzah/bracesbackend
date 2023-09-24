"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_pull_request_review_comment_deleted = void 0;
var webhook_pull_request_review_comment_deleted;
(function (webhook_pull_request_review_comment_deleted) {
    let action;
    (function (action) {
        action["DELETED"] = "deleted";
    })(action = webhook_pull_request_review_comment_deleted.action || (webhook_pull_request_review_comment_deleted.action = {}));
    /**
     * How the author is associated with the repository.
     */
    let author_association;
    (function (author_association) {
        author_association["COLLABORATOR"] = "COLLABORATOR";
        author_association["CONTRIBUTOR"] = "CONTRIBUTOR";
        author_association["FIRST_TIMER"] = "FIRST_TIMER";
        author_association["FIRST_TIME_CONTRIBUTOR"] = "FIRST_TIME_CONTRIBUTOR";
        author_association["MANNEQUIN"] = "MANNEQUIN";
        author_association["MEMBER"] = "MEMBER";
        author_association["NONE"] = "NONE";
        author_association["OWNER"] = "OWNER";
    })(author_association = webhook_pull_request_review_comment_deleted.author_association || (webhook_pull_request_review_comment_deleted.author_association = {}));
    /**
     * The side of the first line of the range for a multi-line comment.
     */
    let side;
    (function (side) {
        side["LEFT"] = "LEFT";
        side["RIGHT"] = "RIGHT";
    })(side = webhook_pull_request_review_comment_deleted.side || (webhook_pull_request_review_comment_deleted.side = {}));
    /**
     * The side of the first line of the range for a multi-line comment.
     */
    let start_side;
    (function (start_side) {
        start_side["LEFT"] = "LEFT";
        start_side["RIGHT"] = "RIGHT";
    })(start_side = webhook_pull_request_review_comment_deleted.start_side || (webhook_pull_request_review_comment_deleted.start_side = {}));
    /**
     * The level at which the comment is targeted, can be a diff line or a file.
     */
    let subject_type;
    (function (subject_type) {
        subject_type["LINE"] = "line";
        subject_type["FILE"] = "file";
    })(subject_type = webhook_pull_request_review_comment_deleted.subject_type || (webhook_pull_request_review_comment_deleted.subject_type = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_pull_request_review_comment_deleted.type || (webhook_pull_request_review_comment_deleted.type = {}));
    let active_lock_reason;
    (function (active_lock_reason) {
        active_lock_reason["RESOLVED"] = "resolved";
        active_lock_reason["OFF_TOPIC"] = "off-topic";
        active_lock_reason["TOO_HEATED"] = "too heated";
        active_lock_reason["SPAM"] = "spam";
    })(active_lock_reason = webhook_pull_request_review_comment_deleted.active_lock_reason || (webhook_pull_request_review_comment_deleted.active_lock_reason = {}));
    /**
     * The merge method to use.
     */
    let merge_method;
    (function (merge_method) {
        merge_method["MERGE"] = "merge";
        merge_method["SQUASH"] = "squash";
        merge_method["REBASE"] = "rebase";
    })(merge_method = webhook_pull_request_review_comment_deleted.merge_method || (webhook_pull_request_review_comment_deleted.merge_method = {}));
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
    })(merge_commit_message = webhook_pull_request_review_comment_deleted.merge_commit_message || (webhook_pull_request_review_comment_deleted.merge_commit_message = {}));
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
    })(merge_commit_title = webhook_pull_request_review_comment_deleted.merge_commit_title || (webhook_pull_request_review_comment_deleted.merge_commit_title = {}));
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
    })(squash_merge_commit_message = webhook_pull_request_review_comment_deleted.squash_merge_commit_message || (webhook_pull_request_review_comment_deleted.squash_merge_commit_message = {}));
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
    })(squash_merge_commit_title = webhook_pull_request_review_comment_deleted.squash_merge_commit_title || (webhook_pull_request_review_comment_deleted.squash_merge_commit_title = {}));
    let visibility;
    (function (visibility) {
        visibility["PUBLIC"] = "public";
        visibility["PRIVATE"] = "private";
        visibility["INTERNAL"] = "internal";
    })(visibility = webhook_pull_request_review_comment_deleted.visibility || (webhook_pull_request_review_comment_deleted.visibility = {}));
    /**
     * The state of the milestone.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_pull_request_review_comment_deleted.state || (webhook_pull_request_review_comment_deleted.state = {}));
})(webhook_pull_request_review_comment_deleted || (exports.webhook_pull_request_review_comment_deleted = webhook_pull_request_review_comment_deleted = {}));
//# sourceMappingURL=webhook_pull_request_review_comment_deleted.js.map