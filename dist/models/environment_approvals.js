"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment_approvals = void 0;
var environment_approvals;
(function (environment_approvals) {
    /**
     * Whether deployment to the environment(s) was approved or rejected or pending (with comments)
     */
    let state;
    (function (state) {
        state["APPROVED"] = "approved";
        state["REJECTED"] = "rejected";
        state["PENDING"] = "pending";
    })(state = environment_approvals.state || (environment_approvals.state = {}));
})(environment_approvals || (exports.environment_approvals = environment_approvals = {}));
//# sourceMappingURL=environment_approvals.js.map