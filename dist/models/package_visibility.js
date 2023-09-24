"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.package_visibility = void 0;
/**
 * The selected visibility of the packages.  This parameter is optional and only filters an existing result set.
 *
 * The `internal` visibility is only supported for GitHub Packages registries that allow for granular permissions. For other ecosystems `internal` is synonymous with `private`.
 * For the list of GitHub Packages registries that support granular permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 */
var package_visibility;
(function (package_visibility) {
    package_visibility["PUBLIC"] = "public";
    package_visibility["PRIVATE"] = "private";
    package_visibility["INTERNAL"] = "internal";
})(package_visibility || (exports.package_visibility = package_visibility = {}));
//# sourceMappingURL=package_visibility.js.map