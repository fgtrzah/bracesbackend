"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_discussion_comment_deleted = void 0;
var webhook_discussion_comment_deleted;
(function (webhook_discussion_comment_deleted) {
    let action;
    (function (action) {
        action["DELETED"] = "deleted";
    })(action = webhook_discussion_comment_deleted.action || (webhook_discussion_comment_deleted.action = {}));
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
    })(author_association = webhook_discussion_comment_deleted.author_association || (webhook_discussion_comment_deleted.author_association = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_discussion_comment_deleted.type || (webhook_discussion_comment_deleted.type = {}));
})(webhook_discussion_comment_deleted || (exports.webhook_discussion_comment_deleted = webhook_discussion_comment_deleted = {}));
//# sourceMappingURL=webhook_discussion_comment_deleted.js.map