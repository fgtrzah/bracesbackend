"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_team_add = void 0;
var webhook_team_add;
(function (webhook_team_add) {
    let privacy;
    (function (privacy) {
        privacy["OPEN"] = "open";
        privacy["CLOSED"] = "closed";
        privacy["SECRET"] = "secret";
    })(privacy = webhook_team_add.privacy || (webhook_team_add.privacy = {}));
    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    let notification_setting;
    (function (notification_setting) {
        notification_setting["NOTIFICATIONS_ENABLED"] = "notifications_enabled";
        notification_setting["NOTIFICATIONS_DISABLED"] = "notifications_disabled";
    })(notification_setting = webhook_team_add.notification_setting || (webhook_team_add.notification_setting = {}));
})(webhook_team_add || (exports.webhook_team_add = webhook_team_add = {}));
//# sourceMappingURL=webhook_team_add.js.map