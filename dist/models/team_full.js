"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.team_full = void 0;
var team_full;
(function (team_full) {
    /**
     * The level of privacy this team should have
     */
    let privacy;
    (function (privacy) {
        privacy["CLOSED"] = "closed";
        privacy["SECRET"] = "secret";
    })(privacy = team_full.privacy || (team_full.privacy = {}));
    /**
     * The notification setting the team has set
     */
    let notification_setting;
    (function (notification_setting) {
        notification_setting["NOTIFICATIONS_ENABLED"] = "notifications_enabled";
        notification_setting["NOTIFICATIONS_DISABLED"] = "notifications_disabled";
    })(notification_setting = team_full.notification_setting || (team_full.notification_setting = {}));
})(team_full || (exports.team_full = team_full = {}));
//# sourceMappingURL=team_full.js.map