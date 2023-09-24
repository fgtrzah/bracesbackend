"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository_advisory = void 0;
var repository_advisory;
(function (repository_advisory) {
    /**
     * The severity of the advisory.
     */
    let severity;
    (function (severity) {
        severity["CRITICAL"] = "critical";
        severity["HIGH"] = "high";
        severity["MEDIUM"] = "medium";
        severity["LOW"] = "low";
    })(severity = repository_advisory.severity || (repository_advisory.severity = {}));
    /**
     * The state of the advisory.
     */
    let state;
    (function (state) {
        state["PUBLISHED"] = "published";
        state["CLOSED"] = "closed";
        state["WITHDRAWN"] = "withdrawn";
        state["DRAFT"] = "draft";
        state["TRIAGE"] = "triage";
    })(state = repository_advisory.state || (repository_advisory.state = {}));
})(repository_advisory || (exports.repository_advisory = repository_advisory = {}));
//# sourceMappingURL=repository_advisory.js.map