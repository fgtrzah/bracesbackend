"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dependency = void 0;
var dependency;
(function (dependency) {
    /**
     * A notation of whether a dependency is requested directly by this manifest or is a dependency of another dependency.
     */
    let relationship;
    (function (relationship) {
        relationship["DIRECT"] = "direct";
        relationship["INDIRECT"] = "indirect";
    })(relationship = dependency.relationship || (dependency.relationship = {}));
    /**
     * A notation of whether the dependency is required for the primary build artifact (runtime) or is only used for development. Future versions of this specification may allow for more granular scopes.
     */
    let scope;
    (function (scope) {
        scope["RUNTIME"] = "runtime";
        scope["DEVELOPMENT"] = "development";
    })(scope = dependency.scope || (dependency.scope = {}));
})(dependency || (exports.dependency = dependency = {}));
//# sourceMappingURL=dependency.js.map