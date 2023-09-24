"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_team_edited = void 0;
var webhook_team_edited;
(function (webhook_team_edited) {
    let action;
    (function (action) {
        action["EDITED"] = "edited";
    })(action = webhook_team_edited.action || (webhook_team_edited.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_team_edited.type || (webhook_team_edited.type = {}));
    let visibility;
    (function (visibility) {
        visibility["PUBLIC"] = "public";
        visibility["PRIVATE"] = "private";
        visibility["INTERNAL"] = "internal";
    })(visibility = webhook_team_edited.visibility || (webhook_team_edited.visibility = {}));
    let privacy;
    (function (privacy) {
        privacy["OPEN"] = "open";
        privacy["CLOSED"] = "closed";
        privacy["SECRET"] = "secret";
    })(privacy = webhook_team_edited.privacy || (webhook_team_edited.privacy = {}));
    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    let notification_setting;
    (function (notification_setting) {
        notification_setting["NOTIFICATIONS_ENABLED"] = "notifications_enabled";
        notification_setting["NOTIFICATIONS_DISABLED"] = "notifications_disabled";
    })(notification_setting = webhook_team_edited.notification_setting || (webhook_team_edited.notification_setting = {}));
})(webhook_team_edited || (exports.webhook_team_edited = webhook_team_edited = {}));
//# sourceMappingURL=webhook_team_edited.js.map