"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_merge_group_destroyed = void 0;
var webhook_merge_group_destroyed;
(function (webhook_merge_group_destroyed) {
    let action;
    (function (action) {
        action["DESTROYED"] = "destroyed";
    })(action = webhook_merge_group_destroyed.action || (webhook_merge_group_destroyed.action = {}));
    /**
     * Explains why the merge group is being destroyed. The group could have been merged, removed from the queue (dequeued), or invalidated by an earlier queue entry being dequeued (invalidated).
     */
    let reason;
    (function (reason) {
        reason["MERGED"] = "merged";
        reason["INVALIDATED"] = "invalidated";
        reason["DEQUEUED"] = "dequeued";
    })(reason = webhook_merge_group_destroyed.reason || (webhook_merge_group_destroyed.reason = {}));
})(webhook_merge_group_destroyed || (exports.webhook_merge_group_destroyed = webhook_merge_group_destroyed = {}));
//# sourceMappingURL=webhook_merge_group_destroyed.js.map