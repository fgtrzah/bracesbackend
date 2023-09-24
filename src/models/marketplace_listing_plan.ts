/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Marketplace Listing Plan
 */
export type marketplace_listing_plan = {
    url: string;
    accounts_url: string;
    id: number;
    number: number;
    name: string;
    description: string;
    monthly_price_in_cents: number;
    yearly_price_in_cents: number;
    price_model: marketplace_listing_plan.price_model;
    has_free_trial: boolean;
    unit_name: string | null;
    state: string;
    bullets: Array<string>;
};

export namespace marketplace_listing_plan {

    export enum price_model {
        FREE = 'FREE',
        FLAT_RATE = 'FLAT_RATE',
        PER_UNIT = 'PER_UNIT',
    }


}

