"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.project = void 0;
var project;
(function (project) {
    /**
     * The baseline permission that all organization members have on this project. Only present if owner is an organization.
     */
    let organization_permission;
    (function (organization_permission) {
        organization_permission["READ"] = "read";
        organization_permission["WRITE"] = "write";
        organization_permission["ADMIN"] = "admin";
        organization_permission["NONE"] = "none";
    })(organization_permission = project.organization_permission || (project.organization_permission = {}));
})(project || (exports.project = project = {}));
//# sourceMappingURL=project.js.map