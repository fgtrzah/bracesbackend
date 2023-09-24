"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.job = void 0;
var job;
(function (job) {
    /**
     * The phase of the lifecycle that the job is currently in.
     */
    let status;
    (function (status) {
        status["QUEUED"] = "queued";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
    })(status = job.status || (job.status = {}));
    /**
     * The outcome of the job.
     */
    let conclusion;
    (function (conclusion) {
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["NEUTRAL"] = "neutral";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["SKIPPED"] = "skipped";
        conclusion["TIMED_OUT"] = "timed_out";
        conclusion["ACTION_REQUIRED"] = "action_required";
    })(conclusion = job.conclusion || (job.conclusion = {}));
})(job || (exports.job = job = {}));
//# sourceMappingURL=job.js.map