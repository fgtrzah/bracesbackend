"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_deployment_review_rejected = void 0;
var webhook_deployment_review_rejected;
(function (webhook_deployment_review_rejected) {
    let action;
    (function (action) {
        action["REJECTED"] = "rejected";
    })(action = webhook_deployment_review_rejected.action || (webhook_deployment_review_rejected.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_deployment_review_rejected.type || (webhook_deployment_review_rejected.type = {}));
    let conclusion;
    (function (conclusion) {
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["NEUTRAL"] = "neutral";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["TIMED_OUT"] = "timed_out";
        conclusion["ACTION_REQUIRED"] = "action_required";
        conclusion["STALE"] = "stale";
    })(conclusion = webhook_deployment_review_rejected.conclusion || (webhook_deployment_review_rejected.conclusion = {}));
    let status;
    (function (status) {
        status["REQUESTED"] = "requested";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
        status["QUEUED"] = "queued";
        status["WAITING"] = "waiting";
    })(status = webhook_deployment_review_rejected.status || (webhook_deployment_review_rejected.status = {}));
})(webhook_deployment_review_rejected || (exports.webhook_deployment_review_rejected = webhook_deployment_review_rejected = {}));
//# sourceMappingURL=webhook_deployment_review_rejected.js.map