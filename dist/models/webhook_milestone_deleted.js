"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_milestone_deleted = void 0;
var webhook_milestone_deleted;
(function (webhook_milestone_deleted) {
    let action;
    (function (action) {
        action["DELETED"] = "deleted";
    })(action = webhook_milestone_deleted.action || (webhook_milestone_deleted.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
        type["MANNEQUIN"] = "Mannequin";
    })(type = webhook_milestone_deleted.type || (webhook_milestone_deleted.type = {}));
    /**
     * The state of the milestone.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_milestone_deleted.state || (webhook_milestone_deleted.state = {}));
})(webhook_milestone_deleted || (exports.webhook_milestone_deleted = webhook_milestone_deleted = {}));
//# sourceMappingURL=webhook_milestone_deleted.js.map