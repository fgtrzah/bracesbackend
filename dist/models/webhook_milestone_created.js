"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_milestone_created = void 0;
var webhook_milestone_created;
(function (webhook_milestone_created) {
    let action;
    (function (action) {
        action["CREATED"] = "created";
    })(action = webhook_milestone_created.action || (webhook_milestone_created.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_milestone_created.type || (webhook_milestone_created.type = {}));
    /**
     * The state of the milestone.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_milestone_created.state || (webhook_milestone_created.state = {}));
})(webhook_milestone_created || (exports.webhook_milestone_created = webhook_milestone_created = {}));
//# sourceMappingURL=webhook_milestone_created.js.map