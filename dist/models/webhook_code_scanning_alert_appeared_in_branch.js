"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_code_scanning_alert_appeared_in_branch = void 0;
var webhook_code_scanning_alert_appeared_in_branch;
(function (webhook_code_scanning_alert_appeared_in_branch) {
    let action;
    (function (action) {
        action["APPEARED_IN_BRANCH"] = "appeared_in_branch";
    })(action = webhook_code_scanning_alert_appeared_in_branch.action || (webhook_code_scanning_alert_appeared_in_branch.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_code_scanning_alert_appeared_in_branch.type || (webhook_code_scanning_alert_appeared_in_branch.type = {}));
    /**
     * The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`.
     */
    let dismissed_reason;
    (function (dismissed_reason) {
        dismissed_reason["FALSE_POSITIVE"] = "false positive";
        dismissed_reason["WON_T_FIX"] = "won't fix";
        dismissed_reason["USED_IN_TESTS"] = "used in tests";
    })(dismissed_reason = webhook_code_scanning_alert_appeared_in_branch.dismissed_reason || (webhook_code_scanning_alert_appeared_in_branch.dismissed_reason = {}));
    /**
     * State of a code scanning alert.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["DISMISSED"] = "dismissed";
        state["FIXED"] = "fixed";
    })(state = webhook_code_scanning_alert_appeared_in_branch.state || (webhook_code_scanning_alert_appeared_in_branch.state = {}));
    /**
     * The severity of the alert.
     */
    let severity;
    (function (severity) {
        severity["NONE"] = "none";
        severity["NOTE"] = "note";
        severity["WARNING"] = "warning";
        severity["ERROR"] = "error";
    })(severity = webhook_code_scanning_alert_appeared_in_branch.severity || (webhook_code_scanning_alert_appeared_in_branch.severity = {}));
})(webhook_code_scanning_alert_appeared_in_branch || (exports.webhook_code_scanning_alert_appeared_in_branch = webhook_code_scanning_alert_appeared_in_branch = {}));
//# sourceMappingURL=webhook_code_scanning_alert_appeared_in_branch.js.map