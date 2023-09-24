"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_pull_request_review_edited = void 0;
var webhook_pull_request_review_edited;
(function (webhook_pull_request_review_edited) {
    let action;
    (function (action) {
        action["EDITED"] = "edited";
    })(action = webhook_pull_request_review_edited.action || (webhook_pull_request_review_edited.action = {}));
    let active_lock_reason;
    (function (active_lock_reason) {
        active_lock_reason["RESOLVED"] = "resolved";
        active_lock_reason["OFF_TOPIC"] = "off-topic";
        active_lock_reason["TOO_HEATED"] = "too heated";
        active_lock_reason["SPAM"] = "spam";
    })(active_lock_reason = webhook_pull_request_review_edited.active_lock_reason || (webhook_pull_request_review_edited.active_lock_reason = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
        type["MANNEQUIN"] = "Mannequin";
    })(type = webhook_pull_request_review_edited.type || (webhook_pull_request_review_edited.type = {}));
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
    })(author_association = webhook_pull_request_review_edited.author_association || (webhook_pull_request_review_edited.author_association = {}));
    /**
     * The merge method to use.
     */
    let merge_method;
    (function (merge_method) {
        merge_method["MERGE"] = "merge";
        merge_method["SQUASH"] = "squash";
        merge_method["REBASE"] = "rebase";
    })(merge_method = webhook_pull_request_review_edited.merge_method || (webhook_pull_request_review_edited.merge_method = {}));
    let visibility;
    (function (visibility) {
        visibility["PUBLIC"] = "public";
        visibility["PRIVATE"] = "private";
        visibility["INTERNAL"] = "internal";
    })(visibility = webhook_pull_request_review_edited.visibility || (webhook_pull_request_review_edited.visibility = {}));
    /**
     * The state of the milestone.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_pull_request_review_edited.state || (webhook_pull_request_review_edited.state = {}));
})(webhook_pull_request_review_edited || (exports.webhook_pull_request_review_edited = webhook_pull_request_review_edited = {}));
//# sourceMappingURL=webhook_pull_request_review_edited.js.map