"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_project_edited = void 0;
var webhook_project_edited;
(function (webhook_project_edited) {
    let action;
    (function (action) {
        action["EDITED"] = "edited";
    })(action = webhook_project_edited.action || (webhook_project_edited.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_project_edited.type || (webhook_project_edited.type = {}));
    /**
     * State of the project; either 'open' or 'closed'
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_project_edited.state || (webhook_project_edited.state = {}));
})(webhook_project_edited || (exports.webhook_project_edited = webhook_project_edited = {}));
//# sourceMappingURL=webhook_project_edited.js.map