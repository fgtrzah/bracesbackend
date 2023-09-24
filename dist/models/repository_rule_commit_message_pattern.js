"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository_rule_commit_message_pattern = void 0;
var repository_rule_commit_message_pattern;
(function (repository_rule_commit_message_pattern) {
    let type;
    (function (type) {
        type["COMMIT_MESSAGE_PATTERN"] = "commit_message_pattern";
    })(type = repository_rule_commit_message_pattern.type || (repository_rule_commit_message_pattern.type = {}));
    /**
     * The operator to use for matching.
     */
    let operator;
    (function (operator) {
        operator["STARTS_WITH"] = "starts_with";
        operator["ENDS_WITH"] = "ends_with";
        operator["CONTAINS"] = "contains";
        operator["REGEX"] = "regex";
    })(operator = repository_rule_commit_message_pattern.operator || (repository_rule_commit_message_pattern.operator = {}));
})(repository_rule_commit_message_pattern || (exports.repository_rule_commit_message_pattern = repository_rule_commit_message_pattern = {}));
//# sourceMappingURL=repository_rule_commit_message_pattern.js.map