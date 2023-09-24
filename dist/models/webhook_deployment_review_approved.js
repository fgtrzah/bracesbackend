"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_deployment_review_approved = void 0;
var webhook_deployment_review_approved;
(function (webhook_deployment_review_approved) {
    let action;
    (function (action) {
        action["APPROVED"] = "approved";
    })(action = webhook_deployment_review_approved.action || (webhook_deployment_review_approved.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_deployment_review_approved.type || (webhook_deployment_review_approved.type = {}));
    let conclusion;
    (function (conclusion) {
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["NEUTRAL"] = "neutral";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["TIMED_OUT"] = "timed_out";
        conclusion["ACTION_REQUIRED"] = "action_required";
        conclusion["STALE"] = "stale";
    })(conclusion = webhook_deployment_review_approved.conclusion || (webhook_deployment_review_approved.conclusion = {}));
    let status;
    (function (status) {
        status["REQUESTED"] = "requested";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
        status["QUEUED"] = "queued";
        status["WAITING"] = "waiting";
        status["PENDING"] = "pending";
    })(status = webhook_deployment_review_approved.status || (webhook_deployment_review_approved.status = {}));
})(webhook_deployment_review_approved || (exports.webhook_deployment_review_approved = webhook_deployment_review_approved = {}));
//# sourceMappingURL=webhook_deployment_review_approved.js.map