"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dependabot_alert_with_repository = void 0;
var dependabot_alert_with_repository;
(function (dependabot_alert_with_repository) {
    /**
     * The state of the Dependabot alert.
     */
    let state;
    (function (state) {
        state["AUTO_DISMISSED"] = "auto_dismissed";
        state["DISMISSED"] = "dismissed";
        state["FIXED"] = "fixed";
        state["OPEN"] = "open";
    })(state = dependabot_alert_with_repository.state || (dependabot_alert_with_repository.state = {}));
    /**
     * The execution scope of the vulnerable dependency.
     */
    let scope;
    (function (scope) {
        scope["DEVELOPMENT"] = "development";
        scope["RUNTIME"] = "runtime";
    })(scope = dependabot_alert_with_repository.scope || (dependabot_alert_with_repository.scope = {}));
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
    })(dismissed_reason = dependabot_alert_with_repository.dismissed_reason || (dependabot_alert_with_repository.dismissed_reason = {}));
})(dependabot_alert_with_repository || (exports.dependabot_alert_with_repository = dependabot_alert_with_repository = {}));
//# sourceMappingURL=dependabot_alert_with_repository.js.map