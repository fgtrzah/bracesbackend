/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Api Overview
 */
export type api_overview = {
    verifiable_password_authentication: boolean;
    ssh_key_fingerprints?: {
        SHA256_RSA?: string;
        SHA256_DSA?: string;
        SHA256_ECDSA?: string;
        SHA256_ED25519?: string;
    };
    ssh_keys?: Array<string>;
    hooks?: Array<string>;
    github_enterprise_importer?: Array<string>;
    web?: Array<string>;
    api?: Array<string>;
    git?: Array<string>;
    packages?: Array<string>;
    pages?: Array<string>;
    importer?: Array<string>;
    actions?: Array<string>;
    dependabot?: Array<string>;
    domains?: {
        website?: Array<string>;
        codespaces?: Array<string>;
        copilot?: Array<string>;
        packages?: Array<string>;
    };
};

