"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.issue = void 0;
var issue;
(function (issue) {
    /**
     * The reason for the current state
     */
    let state_reason;
    (function (state_reason) {
        state_reason["COMPLETED"] = "completed";
        state_reason["REOPENED"] = "reopened";
        state_reason["NOT_PLANNED"] = "not_planned";
    })(state_reason = issue.state_reason || (issue.state_reason = {}));
})(issue || (exports.issue = issue = {}));
//# sourceMappingURL=issue.js.map