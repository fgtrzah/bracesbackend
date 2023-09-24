"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.code_scanning_sarifs_status = void 0;
var code_scanning_sarifs_status;
(function (code_scanning_sarifs_status) {
    /**
     * `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed.
     */
    let processing_status;
    (function (processing_status) {
        processing_status["PENDING"] = "pending";
        processing_status["COMPLETE"] = "complete";
        processing_status["FAILED"] = "failed";
    })(processing_status = code_scanning_sarifs_status.processing_status || (code_scanning_sarifs_status.processing_status = {}));
})(code_scanning_sarifs_status || (exports.code_scanning_sarifs_status = code_scanning_sarifs_status = {}));
//# sourceMappingURL=code_scanning_sarifs_status.js.map