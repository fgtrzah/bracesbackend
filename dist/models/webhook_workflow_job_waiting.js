"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_workflow_job_waiting = void 0;
var webhook_workflow_job_waiting;
(function (webhook_workflow_job_waiting) {
    let action;
    (function (action) {
        action["WAITING"] = "waiting";
    })(action = webhook_workflow_job_waiting.action || (webhook_workflow_job_waiting.action = {}));
    let status;
    (function (status) {
        status["QUEUED"] = "queued";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
        status["WAITING"] = "waiting";
    })(status = webhook_workflow_job_waiting.status || (webhook_workflow_job_waiting.status = {}));
})(webhook_workflow_job_waiting || (exports.webhook_workflow_job_waiting = webhook_workflow_job_waiting = {}));
//# sourceMappingURL=webhook_workflow_job_waiting.js.map