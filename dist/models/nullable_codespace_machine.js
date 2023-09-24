"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.nullable_codespace_machine = void 0;
var nullable_codespace_machine;
(function (nullable_codespace_machine) {
    /**
     * Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
     */
    let prebuild_availability;
    (function (prebuild_availability) {
        prebuild_availability["NONE"] = "none";
        prebuild_availability["READY"] = "ready";
        prebuild_availability["IN_PROGRESS"] = "in_progress";
    })(prebuild_availability = nullable_codespace_machine.prebuild_availability || (nullable_codespace_machine.prebuild_availability = {}));
})(nullable_codespace_machine || (exports.nullable_codespace_machine = nullable_codespace_machine = {}));
//# sourceMappingURL=nullable_codespace_machine.js.map