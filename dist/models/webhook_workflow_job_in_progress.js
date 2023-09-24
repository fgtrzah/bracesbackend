"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_workflow_job_in_progress = void 0;
var webhook_workflow_job_in_progress;
(function (webhook_workflow_job_in_progress) {
    let action;
    (function (action) {
        action["IN_PROGRESS"] = "in_progress";
    })(action = webhook_workflow_job_in_progress.action || (webhook_workflow_job_in_progress.action = {}));
    let conclusion;
    (function (conclusion) {
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["NEUTRAL"] = "neutral";
    })(conclusion = webhook_workflow_job_in_progress.conclusion || (webhook_workflow_job_in_progress.conclusion = {}));
    /**
     * The current status of the job. Can be `queued`, `in_progress`, or `completed`.
     */
    let status;
    (function (status) {
        status["QUEUED"] = "queued";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
    })(status = webhook_workflow_job_in_progress.status || (webhook_workflow_job_in_progress.status = {}));
})(webhook_workflow_job_in_progress || (exports.webhook_workflow_job_in_progress = webhook_workflow_job_in_progress = {}));
//# sourceMappingURL=webhook_workflow_job_in_progress.js.map