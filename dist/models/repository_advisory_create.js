"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository_advisory_create = void 0;
var repository_advisory_create;
(function (repository_advisory_create) {
    /**
     * The severity of the advisory. You must choose between setting this field or `cvss_vector_string`.
     */
    let severity;
    (function (severity) {
        severity["CRITICAL"] = "critical";
        severity["HIGH"] = "high";
        severity["MEDIUM"] = "medium";
        severity["LOW"] = "low";
    })(severity = repository_advisory_create.severity || (repository_advisory_create.severity = {}));
})(repository_advisory_create || (exports.repository_advisory_create = repository_advisory_create = {}));
//# sourceMappingURL=repository_advisory_create.js.map