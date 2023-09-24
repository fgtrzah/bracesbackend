"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_installation_repositories_removed = void 0;
var webhook_installation_repositories_removed;
(function (webhook_installation_repositories_removed) {
    let action;
    (function (action) {
        action["REMOVED"] = "removed";
    })(action = webhook_installation_repositories_removed.action || (webhook_installation_repositories_removed.action = {}));
    /**
     * Describe whether all repositories have been selected or there's a selection involved
     */
    let repository_selection;
    (function (repository_selection) {
        repository_selection["ALL"] = "all";
        repository_selection["SELECTED"] = "selected";
    })(repository_selection = webhook_installation_repositories_removed.repository_selection || (webhook_installation_repositories_removed.repository_selection = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_installation_repositories_removed.type || (webhook_installation_repositories_removed.type = {}));
})(webhook_installation_repositories_removed || (exports.webhook_installation_repositories_removed = webhook_installation_repositories_removed = {}));
//# sourceMappingURL=webhook_installation_repositories_removed.js.map