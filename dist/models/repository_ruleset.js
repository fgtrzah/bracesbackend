"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository_ruleset = void 0;
var repository_ruleset;
(function (repository_ruleset) {
    /**
     * The target of the ruleset
     */
    let target;
    (function (target) {
        target["BRANCH"] = "branch";
        target["TAG"] = "tag";
    })(target = repository_ruleset.target || (repository_ruleset.target = {}));
    /**
     * The type of the source of the ruleset
     */
    let source_type;
    (function (source_type) {
        source_type["REPOSITORY"] = "Repository";
        source_type["ORGANIZATION"] = "Organization";
    })(source_type = repository_ruleset.source_type || (repository_ruleset.source_type = {}));
    /**
     * The bypass type of the user making the API request for this ruleset. This field is only returned when
     * querying the repository-level endpoint.
     */
    let current_user_can_bypass;
    (function (current_user_can_bypass) {
        current_user_can_bypass["ALWAYS"] = "always";
        current_user_can_bypass["PULL_REQUESTS_ONLY"] = "pull_requests_only";
        current_user_can_bypass["NEVER"] = "never";
    })(current_user_can_bypass = repository_ruleset.current_user_can_bypass || (repository_ruleset.current_user_can_bypass = {}));
})(repository_ruleset || (exports.repository_ruleset = repository_ruleset = {}));
//# sourceMappingURL=repository_ruleset.js.map