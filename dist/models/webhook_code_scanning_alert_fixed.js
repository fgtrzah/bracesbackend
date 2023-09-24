"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_code_scanning_alert_fixed = void 0;
var webhook_code_scanning_alert_fixed;
(function (webhook_code_scanning_alert_fixed) {
    let action;
    (function (action) {
        action["FIXED"] = "fixed";
    })(action = webhook_code_scanning_alert_fixed.action || (webhook_code_scanning_alert_fixed.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_code_scanning_alert_fixed.type || (webhook_code_scanning_alert_fixed.type = {}));
    /**
     * The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`.
     */
    let dismissed_reason;
    (function (dismissed_reason) {
        dismissed_reason["FALSE_POSITIVE"] = "false positive";
        dismissed_reason["WON_T_FIX"] = "won't fix";
        dismissed_reason["USED_IN_TESTS"] = "used in tests";
    })(dismissed_reason = webhook_code_scanning_alert_fixed.dismissed_reason || (webhook_code_scanning_alert_fixed.dismissed_reason = {}));
    /**
     * State of a code scanning alert.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["DISMISSED"] = "dismissed";
        state["FIXED"] = "fixed";
    })(state = webhook_code_scanning_alert_fixed.state || (webhook_code_scanning_alert_fixed.state = {}));
    /**
     * The severity of the alert.
     */
    let severity;
    (function (severity) {
        severity["NONE"] = "none";
        severity["NOTE"] = "note";
        severity["WARNING"] = "warning";
        severity["ERROR"] = "error";
    })(severity = webhook_code_scanning_alert_fixed.severity || (webhook_code_scanning_alert_fixed.severity = {}));
})(webhook_code_scanning_alert_fixed || (exports.webhook_code_scanning_alert_fixed = webhook_code_scanning_alert_fixed = {}));
//# sourceMappingURL=webhook_code_scanning_alert_fixed.js.map