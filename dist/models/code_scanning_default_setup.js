"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.code_scanning_default_setup = void 0;
var code_scanning_default_setup;
(function (code_scanning_default_setup) {
    /**
     * Code scanning default setup has been configured or not.
     */
    let state;
    (function (state) {
        state["CONFIGURED"] = "configured";
        state["NOT_CONFIGURED"] = "not-configured";
    })(state = code_scanning_default_setup.state || (code_scanning_default_setup.state = {}));
    /**
     * CodeQL query suite to be used.
     */
    let query_suite;
    (function (query_suite) {
        query_suite["DEFAULT"] = "default";
        query_suite["EXTENDED"] = "extended";
    })(query_suite = code_scanning_default_setup.query_suite || (code_scanning_default_setup.query_suite = {}));
    /**
     * The frequency of the periodic analysis.
     */
    let schedule;
    (function (schedule) {
        schedule["WEEKLY"] = "weekly";
    })(schedule = code_scanning_default_setup.schedule || (code_scanning_default_setup.schedule = {}));
})(code_scanning_default_setup || (exports.code_scanning_default_setup = code_scanning_default_setup = {}));
//# sourceMappingURL=code_scanning_default_setup.js.map