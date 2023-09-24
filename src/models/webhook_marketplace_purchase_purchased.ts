/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_marketplace_purchase_purchased = {
    action: webhook_marketplace_purchase_purchased.action;
    effective_date: string;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    marketplace_purchase: ({
        account: {
            id: number;
            login: string;
            node_id: string;
            organization_billing_email: string | null;
            type: string;
        };
        billing_cycle: string;
        free_trial_ends_on: string | null;
        next_billing_date?: string | null;
        on_free_trial: boolean;
        plan: {
            bullets: Array<string>;
            description: string;
            has_free_trial: boolean;
            id: number;
            monthly_price_in_cents: number;
            name: string;
            price_model: webhook_marketplace_purchase_purchased.price_model;
            unit_name: string | null;
            yearly_price_in_cents: number;
        };
        unit_count: number;
    } & {
        account?: {
            id?: number;
            login?: string;
            node_id?: string;
            organization_billing_email?: string | null;
            type?: string;
        };
        billing_cycle?: string;
        free_trial_ends_on?: string | null;
        next_billing_date: string | null;
        on_free_trial?: boolean;
        plan?: {
            bullets?: Array<string | null>;
            description?: string;
            has_free_trial?: boolean;
            id?: number;
            monthly_price_in_cents?: number;
            name?: string;
            price_model?: webhook_marketplace_purchase_purchased.price_model;
            unit_name?: string | null;
            yearly_price_in_cents?: number;
        };
        unit_count?: number;
    });
    organization?: organization_simple_webhooks;
    previous_marketplace_purchase?: {
        account: {
            id: number;
            login: string;
            node_id: string;
            organization_billing_email: string | null;
            type: string;
        };
        billing_cycle: string;
        free_trial_ends_on: any;
        next_billing_date?: string | null;
        on_free_trial: boolean;
        plan: {
            bullets: Array<string>;
            description: string;
            has_free_trial: boolean;
            id: number;
            monthly_price_in_cents: number;
            name: string;
            price_model: webhook_marketplace_purchase_purchased.price_model;
            unit_name: string | null;
            yearly_price_in_cents: number;
        };
        unit_count: number;
    };
    repository?: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_marketplace_purchase_purchased {

    export enum action {
        PURCHASED = 'purchased',
    }

    export enum price_model {
        FREE = 'FREE',
        FLAT_RATE = 'FLAT_RATE',
        PER_UNIT = 'PER_UNIT',
    }


}

