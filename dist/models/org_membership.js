"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.org_membership = void 0;
var org_membership;
(function (org_membership) {
    /**
     * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
     */
    let state;
    (function (state) {
        state["ACTIVE"] = "active";
        state["PENDING"] = "pending";
    })(state = org_membership.state || (org_membership.state = {}));
    /**
     * The user's membership type in the organization.
     */
    let role;
    (function (role) {
        role["ADMIN"] = "admin";
        role["MEMBER"] = "member";
        role["BILLING_MANAGER"] = "billing_manager";
    })(role = org_membership.role || (org_membership.role = {}));
})(org_membership || (exports.org_membership = org_membership = {}));
//# sourceMappingURL=org_membership.js.map