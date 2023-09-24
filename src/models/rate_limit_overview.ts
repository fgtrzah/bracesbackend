/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { rate_limit } from './rate_limit';

/**
 * Rate Limit Overview
 */
export type rate_limit_overview = {
    resources: {
        core: rate_limit;
        graphql?: rate_limit;
        search: rate_limit;
        code_search?: rate_limit;
        source_import?: rate_limit;
        integration_manifest?: rate_limit;
        code_scanning_upload?: rate_limit;
        actions_runner_registration?: rate_limit;
        scim?: rate_limit;
        dependency_snapshots?: rate_limit;
    };
    rate: rate_limit;
};

