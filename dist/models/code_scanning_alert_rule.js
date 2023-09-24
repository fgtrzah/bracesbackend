"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.code_scanning_alert_rule = void 0;
var code_scanning_alert_rule;
(function (code_scanning_alert_rule) {
    /**
     * The severity of the alert.
     */
    let severity;
    (function (severity) {
        severity["NONE"] = "none";
        severity["NOTE"] = "note";
        severity["WARNING"] = "warning";
        severity["ERROR"] = "error";
    })(severity = code_scanning_alert_rule.severity || (code_scanning_alert_rule.severity = {}));
    /**
     * The security severity of the alert.
     */
    let security_severity_level;
    (function (security_severity_level) {
        security_severity_level["LOW"] = "low";
        security_severity_level["MEDIUM"] = "medium";
        security_severity_level["HIGH"] = "high";
        security_severity_level["CRITICAL"] = "critical";
    })(security_severity_level = code_scanning_alert_rule.security_severity_level || (code_scanning_alert_rule.security_severity_level = {}));
})(code_scanning_alert_rule || (exports.code_scanning_alert_rule = code_scanning_alert_rule = {}));
//# sourceMappingURL=code_scanning_alert_rule.js.map