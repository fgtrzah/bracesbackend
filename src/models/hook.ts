/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { hook_response } from './hook_response';
import type { webhook_config_content_type } from './webhook_config_content_type';
import type { webhook_config_insecure_ssl } from './webhook_config_insecure_ssl';
import type { webhook_config_secret } from './webhook_config_secret';
import type { webhook_config_url } from './webhook_config_url';

/**
 * Webhooks for repositories.
 */
export type hook = {
    type: string;
    /**
     * Unique identifier of the webhook.
     */
    id: number;
    /**
     * The name of a valid service, use 'web' for a webhook.
     */
    name: string;
    /**
     * Determines whether the hook is actually triggered on pushes.
     */
    active: boolean;
    /**
     * Determines what events the hook is triggered for. Default: ['push'].
     */
    events: Array<string>;
    config: {
        email?: string;
        password?: string;
        room?: string;
        subdomain?: string;
        url?: webhook_config_url;
        insecure_ssl?: webhook_config_insecure_ssl;
        content_type?: webhook_config_content_type;
        digest?: string;
        secret?: webhook_config_secret;
        token?: string;
    };
    updated_at: string;
    created_at: string;
    url: string;
    test_url: string;
    ping_url: string;
    deliveries_url?: string;
    last_response: hook_response;
};

