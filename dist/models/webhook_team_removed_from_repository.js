"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_team_removed_from_repository = void 0;
var webhook_team_removed_from_repository;
(function (webhook_team_removed_from_repository) {
    let action;
    (function (action) {
        action["REMOVED_FROM_REPOSITORY"] = "removed_from_repository";
    })(action = webhook_team_removed_from_repository.action || (webhook_team_removed_from_repository.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_team_removed_from_repository.type || (webhook_team_removed_from_repository.type = {}));
    let visibility;
    (function (visibility) {
        visibility["PUBLIC"] = "public";
        visibility["PRIVATE"] = "private";
        visibility["INTERNAL"] = "internal";
    })(visibility = webhook_team_removed_from_repository.visibility || (webhook_team_removed_from_repository.visibility = {}));
    let privacy;
    (function (privacy) {
        privacy["OPEN"] = "open";
        privacy["CLOSED"] = "closed";
        privacy["SECRET"] = "secret";
    })(privacy = webhook_team_removed_from_repository.privacy || (webhook_team_removed_from_repository.privacy = {}));
    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    let notification_setting;
    (function (notification_setting) {
        notification_setting["NOTIFICATIONS_ENABLED"] = "notifications_enabled";
        notification_setting["NOTIFICATIONS_DISABLED"] = "notifications_disabled";
    })(notification_setting = webhook_team_removed_from_repository.notification_setting || (webhook_team_removed_from_repository.notification_setting = {}));
})(webhook_team_removed_from_repository || (exports.webhook_team_removed_from_repository = webhook_team_removed_from_repository = {}));
//# sourceMappingURL=webhook_team_removed_from_repository.js.map