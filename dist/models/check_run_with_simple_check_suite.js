"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_run_with_simple_check_suite = void 0;
var check_run_with_simple_check_suite;
(function (check_run_with_simple_check_suite) {
    let conclusion;
    (function (conclusion) {
        conclusion["WAITING"] = "waiting";
        conclusion["PENDING"] = "pending";
        conclusion["STARTUP_FAILURE"] = "startup_failure";
        conclusion["STALE"] = "stale";
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["NEUTRAL"] = "neutral";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["SKIPPED"] = "skipped";
        conclusion["TIMED_OUT"] = "timed_out";
        conclusion["ACTION_REQUIRED"] = "action_required";
    })(conclusion = check_run_with_simple_check_suite.conclusion || (check_run_with_simple_check_suite.conclusion = {}));
    /**
     * The phase of the lifecycle that the check is currently in.
     */
    let status;
    (function (status) {
        status["QUEUED"] = "queued";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
        status["PENDING"] = "pending";
    })(status = check_run_with_simple_check_suite.status || (check_run_with_simple_check_suite.status = {}));
})(check_run_with_simple_check_suite || (exports.check_run_with_simple_check_suite = check_run_with_simple_check_suite = {}));
//# sourceMappingURL=check_run_with_simple_check_suite.js.map