"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_pull_request_review_thread_resolved = void 0;
var webhook_pull_request_review_thread_resolved;
(function (webhook_pull_request_review_thread_resolved) {
    let action;
    (function (action) {
        action["RESOLVED"] = "resolved";
    })(action = webhook_pull_request_review_thread_resolved.action || (webhook_pull_request_review_thread_resolved.action = {}));
    let active_lock_reason;
    (function (active_lock_reason) {
        active_lock_reason["RESOLVED"] = "resolved";
        active_lock_reason["OFF_TOPIC"] = "off-topic";
        active_lock_reason["TOO_HEATED"] = "too heated";
        active_lock_reason["SPAM"] = "spam";
    })(active_lock_reason = webhook_pull_request_review_thread_resolved.active_lock_reason || (webhook_pull_request_review_thread_resolved.active_lock_reason = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_pull_request_review_thread_resolved.type || (webhook_pull_request_review_thread_resolved.type = {}));
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
    })(author_association = webhook_pull_request_review_thread_resolved.author_association || (webhook_pull_request_review_thread_resolved.author_association = {}));
    /**
     * The merge method to use.
     */
    let merge_method;
    (function (merge_method) {
        merge_method["MERGE"] = "merge";
        merge_method["SQUASH"] = "squash";
        merge_method["REBASE"] = "rebase";
    })(merge_method = webhook_pull_request_review_thread_resolved.merge_method || (webhook_pull_request_review_thread_resolved.merge_method = {}));
    let visibility;
    (function (visibility) {
        visibility["PUBLIC"] = "public";
        visibility["PRIVATE"] = "private";
        visibility["INTERNAL"] = "internal";
    })(visibility = webhook_pull_request_review_thread_resolved.visibility || (webhook_pull_request_review_thread_resolved.visibility = {}));
    /**
     * The state of the milestone.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_pull_request_review_thread_resolved.state || (webhook_pull_request_review_thread_resolved.state = {}));
})(webhook_pull_request_review_thread_resolved || (exports.webhook_pull_request_review_thread_resolved = webhook_pull_request_review_thread_resolved = {}));
//# sourceMappingURL=webhook_pull_request_review_thread_resolved.js.map