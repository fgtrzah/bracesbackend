"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.team_membership = void 0;
var team_membership;
(function (team_membership) {
    /**
     * The role of the user in the team.
     */
    let role;
    (function (role) {
        role["MEMBER"] = "member";
        role["MAINTAINER"] = "maintainer";
    })(role = team_membership.role || (team_membership.role = {}));
    /**
     * The state of the user's membership in the team.
     */
    let state;
    (function (state) {
        state["ACTIVE"] = "active";
        state["PENDING"] = "pending";
    })(state = team_membership.state || (team_membership.state = {}));
})(team_membership || (exports.team_membership = team_membership = {}));
//# sourceMappingURL=team_membership.js.map