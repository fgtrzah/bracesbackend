/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type pages_https_certificate = {
    state: pages_https_certificate.state;
    description: string;
    /**
     * Array of the domain set and its alternate name (if it is configured)
     */
    domains: Array<string>;
    expires_at?: string;
};

export namespace pages_https_certificate {

    export enum state {
        NEW = 'new',
        AUTHORIZATION_CREATED = 'authorization_created',
        AUTHORIZATION_PENDING = 'authorization_pending',
        AUTHORIZED = 'authorized',
        AUTHORIZATION_REVOKED = 'authorization_revoked',
        ISSUED = 'issued',
        UPLOADED = 'uploaded',
        APPROVED = 'approved',
        ERRORED = 'errored',
        BAD_AUTHZ = 'bad_authz',
        DESTROY_PENDING = 'destroy_pending',
        DNS_CHANGED = 'dns_changed',
    }


}

