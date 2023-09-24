"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository_advisory_update = void 0;
var repository_advisory_update;
(function (repository_advisory_update) {
    /**
     * The severity of the advisory. You must choose between setting this field or `cvss_vector_string`.
     */
    let severity;
    (function (severity) {
        severity["CRITICAL"] = "critical";
        severity["HIGH"] = "high";
        severity["MEDIUM"] = "medium";
        severity["LOW"] = "low";
    })(severity = repository_advisory_update.severity || (repository_advisory_update.severity = {}));
    /**
     * The state of the advisory.
     */
    let state;
    (function (state) {
        state["PUBLISHED"] = "published";
        state["CLOSED"] = "closed";
        state["DRAFT"] = "draft";
    })(state = repository_advisory_update.state || (repository_advisory_update.state = {}));
})(repository_advisory_update || (exports.repository_advisory_update = repository_advisory_update = {}));
//# sourceMappingURL=repository_advisory_update.js.map