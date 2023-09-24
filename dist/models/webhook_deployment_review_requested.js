"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_deployment_review_requested = void 0;
var webhook_deployment_review_requested;
(function (webhook_deployment_review_requested) {
    let action;
    (function (action) {
        action["REQUESTED"] = "requested";
    })(action = webhook_deployment_review_requested.action || (webhook_deployment_review_requested.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_deployment_review_requested.type || (webhook_deployment_review_requested.type = {}));
    let conclusion;
    (function (conclusion) {
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["NEUTRAL"] = "neutral";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["TIMED_OUT"] = "timed_out";
        conclusion["ACTION_REQUIRED"] = "action_required";
        conclusion["STALE"] = "stale";
    })(conclusion = webhook_deployment_review_requested.conclusion || (webhook_deployment_review_requested.conclusion = {}));
    let status;
    (function (status) {
        status["REQUESTED"] = "requested";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
        status["QUEUED"] = "queued";
        status["WAITING"] = "waiting";
        status["PENDING"] = "pending";
    })(status = webhook_deployment_review_requested.status || (webhook_deployment_review_requested.status = {}));
})(webhook_deployment_review_requested || (exports.webhook_deployment_review_requested = webhook_deployment_review_requested = {}));
//# sourceMappingURL=webhook_deployment_review_requested.js.map