"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_workflow_job_completed = void 0;
var webhook_workflow_job_completed;
(function (webhook_workflow_job_completed) {
    let action;
    (function (action) {
        action["COMPLETED"] = "completed";
    })(action = webhook_workflow_job_completed.action || (webhook_workflow_job_completed.action = {}));
    let conclusion;
    (function (conclusion) {
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["SKIPPED"] = "skipped";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["ACTION_REQUIRED"] = "action_required";
        conclusion["NEUTRAL"] = "neutral";
        conclusion["TIMED_OUT"] = "timed_out";
    })(conclusion = webhook_workflow_job_completed.conclusion || (webhook_workflow_job_completed.conclusion = {}));
    /**
     * The current status of the job. Can be `queued`, `in_progress`, `waiting`, or `completed`.
     */
    let status;
    (function (status) {
        status["QUEUED"] = "queued";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
        status["WAITING"] = "waiting";
    })(status = webhook_workflow_job_completed.status || (webhook_workflow_job_completed.status = {}));
})(webhook_workflow_job_completed || (exports.webhook_workflow_job_completed = webhook_workflow_job_completed = {}));
//# sourceMappingURL=webhook_workflow_job_completed.js.map