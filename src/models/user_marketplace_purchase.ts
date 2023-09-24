/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { marketplace_account } from './marketplace_account';
import type { marketplace_listing_plan } from './marketplace_listing_plan';

/**
 * User Marketplace Purchase
 */
export type user_marketplace_purchase = {
    billing_cycle: string;
    next_billing_date: string | null;
    unit_count: number | null;
    on_free_trial: boolean;
    free_trial_ends_on: string | null;
    updated_at: string | null;
    account: marketplace_account;
    plan: marketplace_listing_plan;
};

