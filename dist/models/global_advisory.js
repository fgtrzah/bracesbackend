"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.global_advisory = void 0;
var global_advisory;
(function (global_advisory) {
    /**
     * The type of advisory.
     */
    let type;
    (function (type) {
        type["REVIEWED"] = "reviewed";
        type["UNREVIEWED"] = "unreviewed";
        type["MALWARE"] = "malware";
    })(type = global_advisory.type || (global_advisory.type = {}));
    /**
     * The severity of the advisory.
     */
    let severity;
    (function (severity) {
        severity["CRITICAL"] = "critical";
        severity["HIGH"] = "high";
        severity["MEDIUM"] = "medium";
        severity["LOW"] = "low";
        severity["UNKNOWN"] = "unknown";
    })(severity = global_advisory.severity || (global_advisory.severity = {}));
})(global_advisory || (exports.global_advisory = global_advisory = {}));
//# sourceMappingURL=global_advisory.js.map