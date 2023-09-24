"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_milestone_closed = void 0;
var webhook_milestone_closed;
(function (webhook_milestone_closed) {
    let action;
    (function (action) {
        action["CLOSED"] = "closed";
    })(action = webhook_milestone_closed.action || (webhook_milestone_closed.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
        type["MANNEQUIN"] = "Mannequin";
    })(type = webhook_milestone_closed.type || (webhook_milestone_closed.type = {}));
    /**
     * The state of the milestone.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_milestone_closed.state || (webhook_milestone_closed.state = {}));
})(webhook_milestone_closed || (exports.webhook_milestone_closed = webhook_milestone_closed = {}));
//# sourceMappingURL=webhook_milestone_closed.js.map