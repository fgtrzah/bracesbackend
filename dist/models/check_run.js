"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_run = void 0;
var check_run;
(function (check_run) {
    /**
     * The phase of the lifecycle that the check is currently in.
     */
    let status;
    (function (status) {
        status["QUEUED"] = "queued";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
    })(status = check_run.status || (check_run.status = {}));
    let conclusion;
    (function (conclusion) {
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["NEUTRAL"] = "neutral";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["SKIPPED"] = "skipped";
        conclusion["TIMED_OUT"] = "timed_out";
        conclusion["ACTION_REQUIRED"] = "action_required";
    })(conclusion = check_run.conclusion || (check_run.conclusion = {}));
})(check_run || (exports.check_run = check_run = {}));
//# sourceMappingURL=check_run.js.map