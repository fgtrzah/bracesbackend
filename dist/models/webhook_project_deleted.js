"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_project_deleted = void 0;
var webhook_project_deleted;
(function (webhook_project_deleted) {
    let action;
    (function (action) {
        action["DELETED"] = "deleted";
    })(action = webhook_project_deleted.action || (webhook_project_deleted.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_project_deleted.type || (webhook_project_deleted.type = {}));
    /**
     * State of the project; either 'open' or 'closed'
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_project_deleted.state || (webhook_project_deleted.state = {}));
})(webhook_project_deleted || (exports.webhook_project_deleted = webhook_project_deleted = {}));
//# sourceMappingURL=webhook_project_deleted.js.map