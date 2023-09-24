/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise } from './enterprise';
import type { simple_user } from './simple_user';

/**
 * Request to install an integration on a target
 */
export type integration_installation_request = {
    /**
     * Unique identifier of the request installation.
     */
    id: number;
    node_id?: string;
    account: (simple_user | enterprise);
    requester: simple_user;
    created_at: string;
};

