/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { hook_response } from './hook_response';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_user_webhooks } from './simple_user_webhooks';
import type { webhook_config_content_type } from './webhook_config_content_type';
import type { webhook_config_insecure_ssl } from './webhook_config_insecure_ssl';
import type { webhook_config_secret } from './webhook_config_secret';
import type { webhook_config_url } from './webhook_config_url';

export type webhook_ping = {
    /**
     * The webhook that is being pinged
     */
    hook?: {
        /**
         * Determines whether the hook is actually triggered for the events it subscribes to.
         */
        active: boolean;
        /**
         * Only included for GitHub Apps. When you register a new GitHub App, GitHub sends a ping event to the webhook URL you specified during registration. The GitHub App ID sent in this field is required for authenticating an app.
         */
        app_id?: number;
        config: {
            content_type?: webhook_config_content_type;
            insecure_ssl?: webhook_config_insecure_ssl;
            secret?: webhook_config_secret;
            url?: webhook_config_url;
        };
        created_at: string;
        deliveries_url?: string;
        /**
         * Determines what events the hook is triggered for. Default: ['push'].
         */
        events: Array<string>;
        /**
         * Unique identifier of the webhook.
         */
        id: number;
        last_response?: hook_response;
        /**
         * The type of webhook. The only valid value is 'web'.
         */
        name: webhook_ping.name;
        ping_url?: string;
        test_url?: string;
        type: string;
        updated_at: string;
        url?: string;
    };
    /**
     * The ID of the webhook that triggered the ping.
     */
    hook_id?: number;
    organization?: organization_simple_webhooks;
    repository?: repository_webhooks;
    sender?: simple_user_webhooks;
    /**
     * Random string of GitHub zen.
     */
    zen?: string;
};

export namespace webhook_ping {

    /**
     * The type of webhook. The only valid value is 'web'.
     */
    export enum name {
        WEB = 'web',
    }


}

