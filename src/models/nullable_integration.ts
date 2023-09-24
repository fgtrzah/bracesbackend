/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_simple_user } from './nullable_simple_user';

/**
 * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
 */
export type nullable_integration = {
    /**
     * Unique identifier of the GitHub app
     */
    id: number;
    /**
     * The slug name of the GitHub app
     */
    slug?: string;
    node_id: string;
    owner: nullable_simple_user;
    /**
     * The name of the GitHub app
     */
    name: string;
    description: string | null;
    external_url: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    /**
     * The set of permissions for the GitHub app
     */
    permissions: Record<string, string>;
    /**
     * The list of events for the GitHub app
     */
    events: Array<string>;
    /**
     * The number of installations associated with the GitHub app
     */
    installations_count?: number;
    client_id?: string;
    client_secret?: string;
    webhook_secret?: string | null;
    pem?: string;
};

