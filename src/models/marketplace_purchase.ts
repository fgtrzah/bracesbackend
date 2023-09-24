/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { marketplace_listing_plan } from './marketplace_listing_plan';

/**
 * Marketplace Purchase
 */
export type marketplace_purchase = {
    url: string;
    type: string;
    id: number;
    login: string;
    organization_billing_email?: string;
    email?: string | null;
    marketplace_pending_change?: {
        is_installed?: boolean;
        effective_date?: string;
        unit_count?: number | null;
        id?: number;
        plan?: marketplace_listing_plan;
    } | null;
    marketplace_purchase: {
        billing_cycle?: string;
        next_billing_date?: string | null;
        is_installed?: boolean;
        unit_count?: number | null;
        on_free_trial?: boolean;
        free_trial_ends_on?: string | null;
        updated_at?: string;
        plan?: marketplace_listing_plan;
    };
};

