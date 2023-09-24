"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_status = void 0;
var webhook_status;
(function (webhook_status) {
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_status.type || (webhook_status.type = {}));
    let reason;
    (function (reason) {
        reason["EXPIRED_KEY"] = "expired_key";
        reason["NOT_SIGNING_KEY"] = "not_signing_key";
        reason["GPGVERIFY_ERROR"] = "gpgverify_error";
        reason["GPGVERIFY_UNAVAILABLE"] = "gpgverify_unavailable";
        reason["UNSIGNED"] = "unsigned";
        reason["UNKNOWN_SIGNATURE_TYPE"] = "unknown_signature_type";
        reason["NO_USER"] = "no_user";
        reason["UNVERIFIED_EMAIL"] = "unverified_email";
        reason["BAD_EMAIL"] = "bad_email";
        reason["UNKNOWN_KEY"] = "unknown_key";
        reason["MALFORMED_SIGNATURE"] = "malformed_signature";
        reason["INVALID"] = "invalid";
        reason["VALID"] = "valid";
        reason["BAD_CERT"] = "bad_cert";
        reason["OCSP_PENDING"] = "ocsp_pending";
    })(reason = webhook_status.reason || (webhook_status.reason = {}));
    /**
     * The new state. Can be `pending`, `success`, `failure`, or `error`.
     */
    let state;
    (function (state) {
        state["PENDING"] = "pending";
        state["SUCCESS"] = "success";
        state["FAILURE"] = "failure";
        state["ERROR"] = "error";
    })(state = webhook_status.state || (webhook_status.state = {}));
})(webhook_status || (exports.webhook_status = webhook_status = {}));
//# sourceMappingURL=webhook_status.js.map