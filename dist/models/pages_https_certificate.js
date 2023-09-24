"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pages_https_certificate = void 0;
var pages_https_certificate;
(function (pages_https_certificate) {
    let state;
    (function (state) {
        state["NEW"] = "new";
        state["AUTHORIZATION_CREATED"] = "authorization_created";
        state["AUTHORIZATION_PENDING"] = "authorization_pending";
        state["AUTHORIZED"] = "authorized";
        state["AUTHORIZATION_REVOKED"] = "authorization_revoked";
        state["ISSUED"] = "issued";
        state["UPLOADED"] = "uploaded";
        state["APPROVED"] = "approved";
        state["ERRORED"] = "errored";
        state["BAD_AUTHZ"] = "bad_authz";
        state["DESTROY_PENDING"] = "destroy_pending";
        state["DNS_CHANGED"] = "dns_changed";
    })(state = pages_https_certificate.state || (pages_https_certificate.state = {}));
})(pages_https_certificate || (exports.pages_https_certificate = pages_https_certificate = {}));
//# sourceMappingURL=pages_https_certificate.js.map