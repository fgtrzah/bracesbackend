"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.package_type = void 0;
/**
 * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
 */
var package_type;
(function (package_type) {
    package_type["NPM"] = "npm";
    package_type["MAVEN"] = "maven";
    package_type["RUBYGEMS"] = "rubygems";
    package_type["DOCKER"] = "docker";
    package_type["NUGET"] = "nuget";
    package_type["CONTAINER"] = "container";
})(package_type || (exports.package_type = package_type = {}));
//# sourceMappingURL=package_type.js.map