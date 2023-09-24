"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_member_added = void 0;
var webhook_member_added;
(function (webhook_member_added) {
    let action;
    (function (action) {
        action["ADDED"] = "added";
    })(action = webhook_member_added.action || (webhook_member_added.action = {}));
    let to;
    (function (to) {
        to["WRITE"] = "write";
        to["ADMIN"] = "admin";
        to["READ"] = "read";
    })(to = webhook_member_added.to || (webhook_member_added.to = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_member_added.type || (webhook_member_added.type = {}));
})(webhook_member_added || (exports.webhook_member_added = webhook_member_added = {}));
//# sourceMappingURL=webhook_member_added.js.map