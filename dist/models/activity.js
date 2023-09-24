"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.activity = void 0;
var activity;
(function (activity) {
    /**
     * The type of the activity that was performed.
     */
    let activity_type;
    (function (activity_type) {
        activity_type["PUSH"] = "push";
        activity_type["FORCE_PUSH"] = "force_push";
        activity_type["BRANCH_DELETION"] = "branch_deletion";
        activity_type["BRANCH_CREATION"] = "branch_creation";
        activity_type["PR_MERGE"] = "pr_merge";
        activity_type["MERGE_QUEUE_MERGE"] = "merge_queue_merge";
    })(activity_type = activity.activity_type || (activity.activity_type = {}));
})(activity || (exports.activity = activity = {}));
//# sourceMappingURL=activity.js.map