"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_workflow_run_completed = void 0;
var webhook_workflow_run_completed;
(function (webhook_workflow_run_completed) {
    let action;
    (function (action) {
        action["COMPLETED"] = "completed";
    })(action = webhook_workflow_run_completed.action || (webhook_workflow_run_completed.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_workflow_run_completed.type || (webhook_workflow_run_completed.type = {}));
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
    })(conclusion = webhook_workflow_run_completed.conclusion || (webhook_workflow_run_completed.conclusion = {}));
    let status;
    (function (status) {
        status["REQUESTED"] = "requested";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
        status["QUEUED"] = "queued";
        status["PENDING"] = "pending";
        status["WAITING"] = "waiting";
    })(status = webhook_workflow_run_completed.status || (webhook_workflow_run_completed.status = {}));
})(webhook_workflow_run_completed || (exports.webhook_workflow_run_completed = webhook_workflow_run_completed = {}));
//# sourceMappingURL=webhook_workflow_run_completed.js.map