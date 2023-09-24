"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_team_added_to_repository = void 0;
var webhook_team_added_to_repository;
(function (webhook_team_added_to_repository) {
    let action;
    (function (action) {
        action["ADDED_TO_REPOSITORY"] = "added_to_repository";
    })(action = webhook_team_added_to_repository.action || (webhook_team_added_to_repository.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_team_added_to_repository.type || (webhook_team_added_to_repository.type = {}));
    let visibility;
    (function (visibility) {
        visibility["PUBLIC"] = "public";
        visibility["PRIVATE"] = "private";
        visibility["INTERNAL"] = "internal";
    })(visibility = webhook_team_added_to_repository.visibility || (webhook_team_added_to_repository.visibility = {}));
    let privacy;
    (function (privacy) {
        privacy["OPEN"] = "open";
        privacy["CLOSED"] = "closed";
        privacy["SECRET"] = "secret";
    })(privacy = webhook_team_added_to_repository.privacy || (webhook_team_added_to_repository.privacy = {}));
    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    let notification_setting;
    (function (notification_setting) {
        notification_setting["NOTIFICATIONS_ENABLED"] = "notifications_enabled";
        notification_setting["NOTIFICATIONS_DISABLED"] = "notifications_disabled";
    })(notification_setting = webhook_team_added_to_repository.notification_setting || (webhook_team_added_to_repository.notification_setting = {}));
})(webhook_team_added_to_repository || (exports.webhook_team_added_to_repository = webhook_team_added_to_repository = {}));
//# sourceMappingURL=webhook_team_added_to_repository.js.map