"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_workflow_run_in_progress = void 0;
var webhook_workflow_run_in_progress;
(function (webhook_workflow_run_in_progress) {
    let action;
    (function (action) {
        action["IN_PROGRESS"] = "in_progress";
    })(action = webhook_workflow_run_in_progress.action || (webhook_workflow_run_in_progress.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_workflow_run_in_progress.type || (webhook_workflow_run_in_progress.type = {}));
    let conclusion;
    (function (conclusion) {
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["NEUTRAL"] = "neutral";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["TIMED_OUT"] = "timed_out";
        conclusion["ACTION_REQUIRED"] = "action_required";
        conclusion["STALE"] = "stale";
        conclusion["SKIPPED"] = "skipped";
    })(conclusion = webhook_workflow_run_in_progress.conclusion || (webhook_workflow_run_in_progress.conclusion = {}));
    let status;
    (function (status) {
        status["REQUESTED"] = "requested";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
        status["QUEUED"] = "queued";
        status["PENDING"] = "pending";
    })(status = webhook_workflow_run_in_progress.status || (webhook_workflow_run_in_progress.status = {}));
})(webhook_workflow_run_in_progress || (exports.webhook_workflow_run_in_progress = webhook_workflow_run_in_progress = {}));
//# sourceMappingURL=webhook_workflow_run_in_progress.js.map