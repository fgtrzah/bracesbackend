"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_code_scanning_alert_created = void 0;
var webhook_code_scanning_alert_created;
(function (webhook_code_scanning_alert_created) {
    let action;
    (function (action) {
        action["CREATED"] = "created";
    })(action = webhook_code_scanning_alert_created.action || (webhook_code_scanning_alert_created.action = {}));
    /**
     * State of a code scanning alert.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["DISMISSED"] = "dismissed";
        state["FIXED"] = "fixed";
    })(state = webhook_code_scanning_alert_created.state || (webhook_code_scanning_alert_created.state = {}));
    /**
     * The severity of the alert.
     */
    let severity;
    (function (severity) {
        severity["NONE"] = "none";
        severity["NOTE"] = "note";
        severity["WARNING"] = "warning";
        severity["ERROR"] = "error";
    })(severity = webhook_code_scanning_alert_created.severity || (webhook_code_scanning_alert_created.severity = {}));
})(webhook_code_scanning_alert_created || (exports.webhook_code_scanning_alert_created = webhook_code_scanning_alert_created = {}));
//# sourceMappingURL=webhook_code_scanning_alert_created.js.map