"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.simple_check_suite = void 0;
var simple_check_suite;
(function (simple_check_suite) {
    let conclusion;
    (function (conclusion) {
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["NEUTRAL"] = "neutral";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["SKIPPED"] = "skipped";
        conclusion["TIMED_OUT"] = "timed_out";
        conclusion["ACTION_REQUIRED"] = "action_required";
        conclusion["STALE"] = "stale";
        conclusion["STARTUP_FAILURE"] = "startup_failure";
    })(conclusion = simple_check_suite.conclusion || (simple_check_suite.conclusion = {}));
    let status;
    (function (status) {
        status["QUEUED"] = "queued";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
        status["PENDING"] = "pending";
        status["WAITING"] = "waiting";
    })(status = simple_check_suite.status || (simple_check_suite.status = {}));
})(simple_check_suite || (exports.simple_check_suite = simple_check_suite = {}));
//# sourceMappingURL=simple_check_suite.js.map