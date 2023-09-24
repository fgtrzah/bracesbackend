"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_team_created = void 0;
var webhook_team_created;
(function (webhook_team_created) {
    let action;
    (function (action) {
        action["CREATED"] = "created";
    })(action = webhook_team_created.action || (webhook_team_created.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_team_created.type || (webhook_team_created.type = {}));
    let visibility;
    (function (visibility) {
        visibility["PUBLIC"] = "public";
        visibility["PRIVATE"] = "private";
        visibility["INTERNAL"] = "internal";
    })(visibility = webhook_team_created.visibility || (webhook_team_created.visibility = {}));
    let privacy;
    (function (privacy) {
        privacy["OPEN"] = "open";
        privacy["CLOSED"] = "closed";
        privacy["SECRET"] = "secret";
    })(privacy = webhook_team_created.privacy || (webhook_team_created.privacy = {}));
    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    let notification_setting;
    (function (notification_setting) {
        notification_setting["NOTIFICATIONS_ENABLED"] = "notifications_enabled";
        notification_setting["NOTIFICATIONS_DISABLED"] = "notifications_disabled";
    })(notification_setting = webhook_team_created.notification_setting || (webhook_team_created.notification_setting = {}));
})(webhook_team_created || (exports.webhook_team_created = webhook_team_created = {}));
//# sourceMappingURL=webhook_team_created.js.map