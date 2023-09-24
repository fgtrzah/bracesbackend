"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_workflow_run_requested = void 0;
var webhook_workflow_run_requested;
(function (webhook_workflow_run_requested) {
    let action;
    (function (action) {
        action["REQUESTED"] = "requested";
    })(action = webhook_workflow_run_requested.action || (webhook_workflow_run_requested.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_workflow_run_requested.type || (webhook_workflow_run_requested.type = {}));
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
        conclusion["STARTUP_FAILURE"] = "startup_failure";
    })(conclusion = webhook_workflow_run_requested.conclusion || (webhook_workflow_run_requested.conclusion = {}));
    let status;
    (function (status) {
        status["REQUESTED"] = "requested";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
        status["QUEUED"] = "queued";
        status["PENDING"] = "pending";
        status["WAITING"] = "waiting";
    })(status = webhook_workflow_run_requested.status || (webhook_workflow_run_requested.status = {}));
})(webhook_workflow_run_requested || (exports.webhook_workflow_run_requested = webhook_workflow_run_requested = {}));
//# sourceMappingURL=webhook_workflow_run_requested.js.map