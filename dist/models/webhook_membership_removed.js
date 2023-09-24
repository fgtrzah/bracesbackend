"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_membership_removed = void 0;
var webhook_membership_removed;
(function (webhook_membership_removed) {
    let action;
    (function (action) {
        action["REMOVED"] = "removed";
    })(action = webhook_membership_removed.action || (webhook_membership_removed.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_membership_removed.type || (webhook_membership_removed.type = {}));
    /**
     * The scope of the membership. Currently, can only be `team`.
     */
    let scope;
    (function (scope) {
        scope["TEAM"] = "team";
        scope["ORGANIZATION"] = "organization";
    })(scope = webhook_membership_removed.scope || (webhook_membership_removed.scope = {}));
    let privacy;
    (function (privacy) {
        privacy["OPEN"] = "open";
        privacy["CLOSED"] = "closed";
        privacy["SECRET"] = "secret";
    })(privacy = webhook_membership_removed.privacy || (webhook_membership_removed.privacy = {}));
    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    let notification_setting;
    (function (notification_setting) {
        notification_setting["NOTIFICATIONS_ENABLED"] = "notifications_enabled";
        notification_setting["NOTIFICATIONS_DISABLED"] = "notifications_disabled";
    })(notification_setting = webhook_membership_removed.notification_setting || (webhook_membership_removed.notification_setting = {}));
})(webhook_membership_removed || (exports.webhook_membership_removed = webhook_membership_removed = {}));
//# sourceMappingURL=webhook_membership_removed.js.map