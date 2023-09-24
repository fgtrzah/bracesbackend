"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployment_status = void 0;
var deployment_status;
(function (deployment_status) {
    /**
     * The state of the status.
     */
    let state;
    (function (state) {
        state["ERROR"] = "error";
        state["FAILURE"] = "failure";
        state["INACTIVE"] = "inactive";
        state["PENDING"] = "pending";
        state["SUCCESS"] = "success";
        state["QUEUED"] = "queued";
        state["IN_PROGRESS"] = "in_progress";
    })(state = deployment_status.state || (deployment_status.state = {}));
})(deployment_status || (exports.deployment_status = deployment_status = {}));
//# sourceMappingURL=deployment_status.js.map