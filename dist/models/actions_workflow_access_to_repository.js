"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions_workflow_access_to_repository = void 0;
var actions_workflow_access_to_repository;
(function (actions_workflow_access_to_repository) {
    /**
     * Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the
     * repository.
     *
     * `none` means the access is only possible from workflows in this repository. `user` level access allows sharing across user owned private repos only. `organization` level access allows sharing across the organization.
     */
    let access_level;
    (function (access_level) {
        access_level["NONE"] = "none";
        access_level["USER"] = "user";
        access_level["ORGANIZATION"] = "organization";
    })(access_level = actions_workflow_access_to_repository.access_level || (actions_workflow_access_to_repository.access_level = {}));
})(actions_workflow_access_to_repository || (exports.actions_workflow_access_to_repository = actions_workflow_access_to_repository = {}));
//# sourceMappingURL=actions_workflow_access_to_repository.js.map