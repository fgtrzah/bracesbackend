"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_milestone_opened = void 0;
var webhook_milestone_opened;
(function (webhook_milestone_opened) {
    let action;
    (function (action) {
        action["OPENED"] = "opened";
    })(action = webhook_milestone_opened.action || (webhook_milestone_opened.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_milestone_opened.type || (webhook_milestone_opened.type = {}));
    /**
     * The state of the milestone.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_milestone_opened.state || (webhook_milestone_opened.state = {}));
})(webhook_milestone_opened || (exports.webhook_milestone_opened = webhook_milestone_opened = {}));
//# sourceMappingURL=webhook_milestone_opened.js.map