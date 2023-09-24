"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.discussion = void 0;
var discussion;
(function (discussion) {
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = discussion.type || (discussion.type = {}));
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
    })(author_association = discussion.author_association || (discussion.author_association = {}));
    /**
     * The current state of the discussion.
     * `converting` means that the discussion is being converted from an issue.
     * `transferring` means that the discussion is being transferred from another repository.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
        state["LOCKED"] = "locked";
        state["CONVERTING"] = "converting";
        state["TRANSFERRING"] = "transferring";
    })(state = discussion.state || (discussion.state = {}));
    /**
     * The reason for the current state
     */
    let state_reason;
    (function (state_reason) {
        state_reason["RESOLVED"] = "resolved";
        state_reason["OUTDATED"] = "outdated";
        state_reason["DUPLICATE"] = "duplicate";
        state_reason["REOPENED"] = "reopened";
    })(state_reason = discussion.state_reason || (discussion.state_reason = {}));
})(discussion || (exports.discussion = discussion = {}));
//# sourceMappingURL=discussion.js.map