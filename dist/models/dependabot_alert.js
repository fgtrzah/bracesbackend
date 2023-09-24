"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dependabot_alert = void 0;
var dependabot_alert;
(function (dependabot_alert) {
    /**
     * The state of the Dependabot alert.
     */
    let state;
    (function (state) {
        state["AUTO_DISMISSED"] = "auto_dismissed";
        state["DISMISSED"] = "dismissed";
        state["FIXED"] = "fixed";
        state["OPEN"] = "open";
    })(state = dependabot_alert.state || (dependabot_alert.state = {}));
    /**
     * The execution scope of the vulnerable dependency.
     */
    let scope;
    (function (scope) {
        scope["DEVELOPMENT"] = "development";
        scope["RUNTIME"] = "runtime";
    })(scope = dependabot_alert.scope || (dependabot_alert.scope = {}));
    /**
     * The reason that the alert was dismissed.
     */
    let dismissed_reason;
    (function (dismissed_reason) {
        dismissed_reason["FIX_STARTED"] = "fix_started";
        dismissed_reason["INACCURATE"] = "inaccurate";
        dismissed_reason["NO_BANDWIDTH"] = "no_bandwidth";
        dismissed_reason["NOT_USED"] = "not_used";
        dismissed_reason["TOLERABLE_RISK"] = "tolerable_risk";
    })(dismissed_reason = dependabot_alert.dismissed_reason || (dependabot_alert.dismissed_reason = {}));
})(dependabot_alert || (exports.dependabot_alert = dependabot_alert = {}));
//# sourceMappingURL=dependabot_alert.js.map