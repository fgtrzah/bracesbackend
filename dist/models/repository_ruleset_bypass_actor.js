"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository_ruleset_bypass_actor = void 0;
var repository_ruleset_bypass_actor;
(function (repository_ruleset_bypass_actor) {
    /**
     * The type of actor that can bypass a ruleset
     */
    let actor_type;
    (function (actor_type) {
        actor_type["REPOSITORY_ROLE"] = "RepositoryRole";
        actor_type["TEAM"] = "Team";
        actor_type["INTEGRATION"] = "Integration";
        actor_type["ORGANIZATION_ADMIN"] = "OrganizationAdmin";
    })(actor_type = repository_ruleset_bypass_actor.actor_type || (repository_ruleset_bypass_actor.actor_type = {}));
    /**
     * When the specified actor can bypass the ruleset. `pull_request` means that an actor can only bypass rules on pull requests.
     */
    let bypass_mode;
    (function (bypass_mode) {
        bypass_mode["ALWAYS"] = "always";
        bypass_mode["PULL_REQUEST"] = "pull_request";
    })(bypass_mode = repository_ruleset_bypass_actor.bypass_mode || (repository_ruleset_bypass_actor.bypass_mode = {}));
})(repository_ruleset_bypass_actor || (exports.repository_ruleset_bypass_actor = repository_ruleset_bypass_actor = {}));
//# sourceMappingURL=repository_ruleset_bypass_actor.js.map