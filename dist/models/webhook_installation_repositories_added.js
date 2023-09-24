"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_installation_repositories_added = void 0;
var webhook_installation_repositories_added;
(function (webhook_installation_repositories_added) {
    let action;
    (function (action) {
        action["ADDED"] = "added";
    })(action = webhook_installation_repositories_added.action || (webhook_installation_repositories_added.action = {}));
    /**
     * Describe whether all repositories have been selected or there's a selection involved
     */
    let repository_selection;
    (function (repository_selection) {
        repository_selection["ALL"] = "all";
        repository_selection["SELECTED"] = "selected";
    })(repository_selection = webhook_installation_repositories_added.repository_selection || (webhook_installation_repositories_added.repository_selection = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_installation_repositories_added.type || (webhook_installation_repositories_added.type = {}));
})(webhook_installation_repositories_added || (exports.webhook_installation_repositories_added = webhook_installation_repositories_added = {}));
//# sourceMappingURL=webhook_installation_repositories_added.js.map