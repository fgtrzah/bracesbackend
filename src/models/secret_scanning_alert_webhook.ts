/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { alert_created_at } from './alert_created_at';
import type { alert_html_url } from './alert_html_url';
import type { alert_number } from './alert_number';
import type { alert_url } from './alert_url';
import type { nullable_alert_updated_at } from './nullable_alert_updated_at';
import type { nullable_simple_user } from './nullable_simple_user';
import type { secret_scanning_alert_resolution_webhook } from './secret_scanning_alert_resolution_webhook';

export type secret_scanning_alert_webhook = {
    number?: alert_number;
    created_at?: alert_created_at;
    updated_at?: nullable_alert_updated_at;
    url?: alert_url;
    html_url?: alert_html_url;
    /**
     * The REST API URL of the code locations for this alert.
     */
    locations_url?: string;
    resolution?: secret_scanning_alert_resolution_webhook;
    /**
     * The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    resolved_at?: string | null;
    resolved_by?: nullable_simple_user;
    /**
     * An optional comment to resolve an alert.
     */
    resolution_comment?: string | null;
    /**
     * The type of secret that secret scanning detected.
     */
    secret_type?: string;
    /**
     * Whether push protection was bypassed for the detected secret.
     */
    push_protection_bypassed?: boolean | null;
    push_protection_bypassed_by?: nullable_simple_user;
    /**
     * The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    push_protection_bypassed_at?: string | null;
};

