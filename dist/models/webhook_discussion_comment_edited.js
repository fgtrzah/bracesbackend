"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_discussion_comment_edited = void 0;
var webhook_discussion_comment_edited;
(function (webhook_discussion_comment_edited) {
    let action;
    (function (action) {
        action["EDITED"] = "edited";
    })(action = webhook_discussion_comment_edited.action || (webhook_discussion_comment_edited.action = {}));
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
    })(author_association = webhook_discussion_comment_edited.author_association || (webhook_discussion_comment_edited.author_association = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_discussion_comment_edited.type || (webhook_discussion_comment_edited.type = {}));
})(webhook_discussion_comment_edited || (exports.webhook_discussion_comment_edited = webhook_discussion_comment_edited = {}));
//# sourceMappingURL=webhook_discussion_comment_edited.js.map