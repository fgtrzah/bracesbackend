/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_sponsorship_pending_cancellation = {
    action: webhook_sponsorship_pending_cancellation.action;
    /**
     * The `pending_cancellation` and `pending_tier_change` event types will include the date the cancellation or tier change will take effect.
     */
    effective_date?: string;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository?: repository_webhooks;
    sender: simple_user_webhooks;
    sponsorship: {
        created_at: string;
        maintainer?: {
            avatar_url?: string;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id?: number;
            login?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: string;
            url?: string;
        };
        node_id: string;
        privacy_level: string;
        sponsor: {
            avatar_url?: string;
            deleted?: boolean;
            email?: string | null;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id: number;
            login: string;
            name?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: webhook_sponsorship_pending_cancellation.type;
            url?: string;
        } | null;
        sponsorable: {
            avatar_url?: string;
            deleted?: boolean;
            email?: string | null;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id: number;
            login: string;
            name?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: webhook_sponsorship_pending_cancellation.type;
            url?: string;
        } | null;
        /**
         * The `tier_changed` and `pending_tier_change` will include the original tier before the change or pending change. For more information, see the pending tier change payload.
         */
        tier: {
            created_at: string;
            description: string;
            is_custom_ammount?: boolean;
            is_custom_amount?: boolean;
            is_one_time: boolean;
            monthly_price_in_cents: number;
            monthly_price_in_dollars: number;
            name: string;
            node_id: string;
        };
    };
};

export namespace webhook_sponsorship_pending_cancellation {

    export enum action {
        PENDING_CANCELLATION = 'pending_cancellation',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }


}

