"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.code_scanning_default_setup_update = void 0;
var code_scanning_default_setup_update;
(function (code_scanning_default_setup_update) {
    /**
     * Whether code scanning default setup has been configured or not.
     */
    let state;
    (function (state) {
        state["CONFIGURED"] = "configured";
        state["NOT_CONFIGURED"] = "not-configured";
    })(state = code_scanning_default_setup_update.state || (code_scanning_default_setup_update.state = {}));
    /**
     * CodeQL query suite to be used.
     */
    let query_suite;
    (function (query_suite) {
        query_suite["DEFAULT"] = "default";
        query_suite["EXTENDED"] = "extended";
    })(query_suite = code_scanning_default_setup_update.query_suite || (code_scanning_default_setup_update.query_suite = {}));
})(code_scanning_default_setup_update || (exports.code_scanning_default_setup_update = code_scanning_default_setup_update = {}));
//# sourceMappingURL=code_scanning_default_setup_update.js.map