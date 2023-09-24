"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_team_deleted = void 0;
var webhook_team_deleted;
(function (webhook_team_deleted) {
    let action;
    (function (action) {
        action["DELETED"] = "deleted";
    })(action = webhook_team_deleted.action || (webhook_team_deleted.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_team_deleted.type || (webhook_team_deleted.type = {}));
    let visibility;
    (function (visibility) {
        visibility["PUBLIC"] = "public";
        visibility["PRIVATE"] = "private";
        visibility["INTERNAL"] = "internal";
    })(visibility = webhook_team_deleted.visibility || (webhook_team_deleted.visibility = {}));
    let privacy;
    (function (privacy) {
        privacy["OPEN"] = "open";
        privacy["CLOSED"] = "closed";
        privacy["SECRET"] = "secret";
    })(privacy = webhook_team_deleted.privacy || (webhook_team_deleted.privacy = {}));
    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    let notification_setting;
    (function (notification_setting) {
        notification_setting["NOTIFICATIONS_ENABLED"] = "notifications_enabled";
        notification_setting["NOTIFICATIONS_DISABLED"] = "notifications_disabled";
    })(notification_setting = webhook_team_deleted.notification_setting || (webhook_team_deleted.notification_setting = {}));
})(webhook_team_deleted || (exports.webhook_team_deleted = webhook_team_deleted = {}));
//# sourceMappingURL=webhook_team_deleted.js.map