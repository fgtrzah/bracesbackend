"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.codespace_machine = void 0;
var codespace_machine;
(function (codespace_machine) {
    /**
     * Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
     */
    let prebuild_availability;
    (function (prebuild_availability) {
        prebuild_availability["NONE"] = "none";
        prebuild_availability["READY"] = "ready";
        prebuild_availability["IN_PROGRESS"] = "in_progress";
    })(prebuild_availability = codespace_machine.prebuild_availability || (codespace_machine.prebuild_availability = {}));
})(codespace_machine || (exports.codespace_machine = codespace_machine = {}));
//# sourceMappingURL=codespace_machine.js.map