/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { alert_auto_dismissed_at } from './alert_auto_dismissed_at';
import type { alert_created_at } from './alert_created_at';
import type { alert_dismissed_at } from './alert_dismissed_at';
import type { alert_fixed_at } from './alert_fixed_at';
import type { alert_html_url } from './alert_html_url';
import type { alert_number } from './alert_number';
import type { alert_updated_at } from './alert_updated_at';
import type { alert_url } from './alert_url';
import type { dependabot_alert_package } from './dependabot_alert_package';
import type { dependabot_alert_security_advisory } from './dependabot_alert_security_advisory';
import type { dependabot_alert_security_vulnerability } from './dependabot_alert_security_vulnerability';
import type { nullable_simple_user } from './nullable_simple_user';

/**
 * A Dependabot alert.
 */
export type dependabot_alert = {
    number: alert_number;
    /**
     * The state of the Dependabot alert.
     */
    readonly state: dependabot_alert.state;
    /**
     * Details for the vulnerable dependency.
     */
    readonly dependency: {
        package?: dependabot_alert_package;
        /**
         * The full path to the dependency manifest file, relative to the root of the repository.
         */
        readonly manifest_path?: string;
        /**
         * The execution scope of the vulnerable dependency.
         */
        readonly scope?: dependabot_alert.scope | null;
    };
    security_advisory: dependabot_alert_security_advisory;
    security_vulnerability: dependabot_alert_security_vulnerability;
    url: alert_url;
    html_url: alert_html_url;
    created_at: alert_created_at;
    updated_at: alert_updated_at;
    dismissed_at: alert_dismissed_at;
    dismissed_by: nullable_simple_user;
    /**
     * The reason that the alert was dismissed.
     */
    dismissed_reason: dependabot_alert.dismissed_reason | null;
    /**
     * An optional comment associated with the alert's dismissal.
     */
    dismissed_comment: string | null;
    fixed_at: alert_fixed_at;
    auto_dismissed_at?: alert_auto_dismissed_at;
};

export namespace dependabot_alert {

    /**
     * The state of the Dependabot alert.
     */
    export enum state {
        AUTO_DISMISSED = 'auto_dismissed',
        DISMISSED = 'dismissed',
        FIXED = 'fixed',
        OPEN = 'open',
    }

    /**
     * The execution scope of the vulnerable dependency.
     */
    export enum scope {
        DEVELOPMENT = 'development',
        RUNTIME = 'runtime',
    }

    /**
     * The reason that the alert was dismissed.
     */
    export enum dismissed_reason {
        FIX_STARTED = 'fix_started',
        INACCURATE = 'inaccurate',
        NO_BANDWIDTH = 'no_bandwidth',
        NOT_USED = 'not_used',
        TOLERABLE_RISK = 'tolerable_risk',
    }


}

