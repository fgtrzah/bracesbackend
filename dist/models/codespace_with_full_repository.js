"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.codespace_with_full_repository = void 0;
var codespace_with_full_repository;
(function (codespace_with_full_repository) {
    /**
     * State of this codespace.
     */
    let state;
    (function (state) {
        state["UNKNOWN"] = "Unknown";
        state["CREATED"] = "Created";
        state["QUEUED"] = "Queued";
        state["PROVISIONING"] = "Provisioning";
        state["AVAILABLE"] = "Available";
        state["AWAITING"] = "Awaiting";
        state["UNAVAILABLE"] = "Unavailable";
        state["DELETED"] = "Deleted";
        state["MOVED"] = "Moved";
        state["SHUTDOWN"] = "Shutdown";
        state["ARCHIVED"] = "Archived";
        state["STARTING"] = "Starting";
        state["SHUTTING_DOWN"] = "ShuttingDown";
        state["FAILED"] = "Failed";
        state["EXPORTING"] = "Exporting";
        state["UPDATING"] = "Updating";
        state["REBUILDING"] = "Rebuilding";
    })(state = codespace_with_full_repository.state || (codespace_with_full_repository.state = {}));
    /**
     * The initally assigned location of a new codespace.
     */
    let location;
    (function (location) {
        location["EAST_US"] = "EastUs";
        location["SOUTH_EAST_ASIA"] = "SouthEastAsia";
        location["WEST_EUROPE"] = "WestEurope";
        location["WEST_US2"] = "WestUs2";
    })(location = codespace_with_full_repository.location || (codespace_with_full_repository.location = {}));
})(codespace_with_full_repository || (exports.codespace_with_full_repository = codespace_with_full_repository = {}));
//# sourceMappingURL=codespace_with_full_repository.js.map