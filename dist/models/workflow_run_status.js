"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflow_run_status = void 0;
/**
 * Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`.
 */
var workflow_run_status;
(function (workflow_run_status) {
    workflow_run_status["COMPLETED"] = "completed";
    workflow_run_status["ACTION_REQUIRED"] = "action_required";
    workflow_run_status["CANCELLED"] = "cancelled";
    workflow_run_status["FAILURE"] = "failure";
    workflow_run_status["NEUTRAL"] = "neutral";
    workflow_run_status["SKIPPED"] = "skipped";
    workflow_run_status["STALE"] = "stale";
    workflow_run_status["SUCCESS"] = "success";
    workflow_run_status["TIMED_OUT"] = "timed_out";
    workflow_run_status["IN_PROGRESS"] = "in_progress";
    workflow_run_status["QUEUED"] = "queued";
    workflow_run_status["REQUESTED"] = "requested";
    workflow_run_status["WAITING"] = "waiting";
    workflow_run_status["PENDING"] = "pending";
})(workflow_run_status || (exports.workflow_run_status = workflow_run_status = {}));
//# sourceMappingURL=workflow_run_status.js.map