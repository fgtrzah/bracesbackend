"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_project_created = void 0;
var webhook_project_created;
(function (webhook_project_created) {
    let action;
    (function (action) {
        action["CREATED"] = "created";
    })(action = webhook_project_created.action || (webhook_project_created.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_project_created.type || (webhook_project_created.type = {}));
    /**
     * State of the project; either 'open' or 'closed'
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_project_created.state || (webhook_project_created.state = {}));
})(webhook_project_created || (exports.webhook_project_created = webhook_project_created = {}));
//# sourceMappingURL=webhook_project_created.js.map