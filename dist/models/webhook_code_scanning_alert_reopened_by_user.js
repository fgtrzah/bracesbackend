"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_code_scanning_alert_reopened_by_user = void 0;
var webhook_code_scanning_alert_reopened_by_user;
(function (webhook_code_scanning_alert_reopened_by_user) {
    let action;
    (function (action) {
        action["REOPENED_BY_USER"] = "reopened_by_user";
    })(action = webhook_code_scanning_alert_reopened_by_user.action || (webhook_code_scanning_alert_reopened_by_user.action = {}));
    /**
     * State of a code scanning alert.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["DISMISSED"] = "dismissed";
        state["FIXED"] = "fixed";
    })(state = webhook_code_scanning_alert_reopened_by_user.state || (webhook_code_scanning_alert_reopened_by_user.state = {}));
    /**
     * The severity of the alert.
     */
    let severity;
    (function (severity) {
        severity["NONE"] = "none";
        severity["NOTE"] = "note";
        severity["WARNING"] = "warning";
        severity["ERROR"] = "error";
    })(severity = webhook_code_scanning_alert_reopened_by_user.severity || (webhook_code_scanning_alert_reopened_by_user.severity = {}));
})(webhook_code_scanning_alert_reopened_by_user || (exports.webhook_code_scanning_alert_reopened_by_user = webhook_code_scanning_alert_reopened_by_user = {}));
//# sourceMappingURL=webhook_code_scanning_alert_reopened_by_user.js.map