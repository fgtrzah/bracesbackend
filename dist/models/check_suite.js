"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_suite = void 0;
var check_suite;
(function (check_suite) {
    let status;
    (function (status) {
        status["QUEUED"] = "queued";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
    })(status = check_suite.status || (check_suite.status = {}));
    let conclusion;
    (function (conclusion) {
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["NEUTRAL"] = "neutral";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["SKIPPED"] = "skipped";
        conclusion["TIMED_OUT"] = "timed_out";
        conclusion["ACTION_REQUIRED"] = "action_required";
        conclusion["STARTUP_FAILURE"] = "startup_failure";
        conclusion["STALE"] = "stale";
    })(conclusion = check_suite.conclusion || (check_suite.conclusion = {}));
})(check_suite || (exports.check_suite = check_suite = {}));
//# sourceMappingURL=check_suite.js.map