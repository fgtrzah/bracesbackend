"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_discussion_answered = void 0;
var webhook_discussion_answered;
(function (webhook_discussion_answered) {
    let action;
    (function (action) {
        action["ANSWERED"] = "answered";
    })(action = webhook_discussion_answered.action || (webhook_discussion_answered.action = {}));
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
    })(author_association = webhook_discussion_answered.author_association || (webhook_discussion_answered.author_association = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_discussion_answered.type || (webhook_discussion_answered.type = {}));
})(webhook_discussion_answered || (exports.webhook_discussion_answered = webhook_discussion_answered = {}));
//# sourceMappingURL=webhook_discussion_answered.js.map