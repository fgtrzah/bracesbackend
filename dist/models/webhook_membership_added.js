"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_membership_added = void 0;
var webhook_membership_added;
(function (webhook_membership_added) {
    let action;
    (function (action) {
        action["ADDED"] = "added";
    })(action = webhook_membership_added.action || (webhook_membership_added.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_membership_added.type || (webhook_membership_added.type = {}));
    /**
     * The scope of the membership. Currently, can only be `team`.
     */
    let scope;
    (function (scope) {
        scope["TEAM"] = "team";
    })(scope = webhook_membership_added.scope || (webhook_membership_added.scope = {}));
    let privacy;
    (function (privacy) {
        privacy["OPEN"] = "open";
        privacy["CLOSED"] = "closed";
        privacy["SECRET"] = "secret";
    })(privacy = webhook_membership_added.privacy || (webhook_membership_added.privacy = {}));
    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    let notification_setting;
    (function (notification_setting) {
        notification_setting["NOTIFICATIONS_ENABLED"] = "notifications_enabled";
        notification_setting["NOTIFICATIONS_DISABLED"] = "notifications_disabled";
    })(notification_setting = webhook_membership_added.notification_setting || (webhook_membership_added.notification_setting = {}));
})(webhook_membership_added || (exports.webhook_membership_added = webhook_membership_added = {}));
//# sourceMappingURL=webhook_membership_added.js.map