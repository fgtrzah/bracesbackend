"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_milestone_edited = void 0;
var webhook_milestone_edited;
(function (webhook_milestone_edited) {
    let action;
    (function (action) {
        action["EDITED"] = "edited";
    })(action = webhook_milestone_edited.action || (webhook_milestone_edited.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
        type["MANNEQUIN"] = "Mannequin";
    })(type = webhook_milestone_edited.type || (webhook_milestone_edited.type = {}));
    /**
     * The state of the milestone.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_milestone_edited.state || (webhook_milestone_edited.state = {}));
})(webhook_milestone_edited || (exports.webhook_milestone_edited = webhook_milestone_edited = {}));
//# sourceMappingURL=webhook_milestone_edited.js.map