"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.secret_scanning_location = void 0;
var secret_scanning_location;
(function (secret_scanning_location) {
    /**
     * The location type. Because secrets may be found in different types of resources (ie. code, comments, issues), this field identifies the type of resource where the secret was found.
     */
    let type;
    (function (type) {
        type["COMMIT"] = "commit";
        type["ISSUE_TITLE"] = "issue_title";
        type["ISSUE_BODY"] = "issue_body";
        type["ISSUE_COMMENT"] = "issue_comment";
    })(type = secret_scanning_location.type || (secret_scanning_location.type = {}));
})(secret_scanning_location || (exports.secret_scanning_location = secret_scanning_location = {}));
//# sourceMappingURL=secret_scanning_location.js.map