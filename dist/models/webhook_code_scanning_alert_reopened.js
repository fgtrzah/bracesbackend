"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_code_scanning_alert_reopened = void 0;
var webhook_code_scanning_alert_reopened;
(function (webhook_code_scanning_alert_reopened) {
    let action;
    (function (action) {
        action["REOPENED"] = "reopened";
    })(action = webhook_code_scanning_alert_reopened.action || (webhook_code_scanning_alert_reopened.action = {}));
    /**
     * State of a code scanning alert.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["DISMISSED"] = "dismissed";
        state["FIXED"] = "fixed";
    })(state = webhook_code_scanning_alert_reopened.state || (webhook_code_scanning_alert_reopened.state = {}));
    /**
     * The severity of the alert.
     */
    let severity;
    (function (severity) {
        severity["NONE"] = "none";
        severity["NOTE"] = "note";
        severity["WARNING"] = "warning";
        severity["ERROR"] = "error";
    })(severity = webhook_code_scanning_alert_reopened.severity || (webhook_code_scanning_alert_reopened.severity = {}));
})(webhook_code_scanning_alert_reopened || (exports.webhook_code_scanning_alert_reopened = webhook_code_scanning_alert_reopened = {}));
//# sourceMappingURL=webhook_code_scanning_alert_reopened.js.map