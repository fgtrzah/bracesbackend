"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_discussion_created = void 0;
var webhook_discussion_created;
(function (webhook_discussion_created) {
    let action;
    (function (action) {
        action["CREATED"] = "created";
    })(action = webhook_discussion_created.action || (webhook_discussion_created.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_discussion_created.type || (webhook_discussion_created.type = {}));
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
    })(author_association = webhook_discussion_created.author_association || (webhook_discussion_created.author_association = {}));
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["LOCKED"] = "locked";
        state["CONVERTING"] = "converting";
        state["TRANSFERRING"] = "transferring";
    })(state = webhook_discussion_created.state || (webhook_discussion_created.state = {}));
})(webhook_discussion_created || (exports.webhook_discussion_created = webhook_discussion_created = {}));
//# sourceMappingURL=webhook_discussion_created.js.map