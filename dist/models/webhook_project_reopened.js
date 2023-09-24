"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_project_reopened = void 0;
var webhook_project_reopened;
(function (webhook_project_reopened) {
    let action;
    (function (action) {
        action["REOPENED"] = "reopened";
    })(action = webhook_project_reopened.action || (webhook_project_reopened.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_project_reopened.type || (webhook_project_reopened.type = {}));
    /**
     * State of the project; either 'open' or 'closed'
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_project_reopened.state || (webhook_project_reopened.state = {}));
})(webhook_project_reopened || (exports.webhook_project_reopened = webhook_project_reopened = {}));
//# sourceMappingURL=webhook_project_reopened.js.map