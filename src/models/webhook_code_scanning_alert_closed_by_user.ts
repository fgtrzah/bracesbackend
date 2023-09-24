/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_code_scanning_alert_closed_by_user = {
    action: webhook_code_scanning_alert_closed_by_user.action;
    /**
     * The code scanning alert involved in the event.
     */
    alert: {
        /**
         * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ.`
         */
        created_at: string;
        /**
         * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         */
        dismissed_at: string;
        dismissed_by: {
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
            type?: webhook_code_scanning_alert_closed_by_user.type;
            url?: string;
        } | null;
        /**
         * The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`.
         */
        dismissed_reason: webhook_code_scanning_alert_closed_by_user.dismissed_reason | null;
        /**
         * The GitHub URL of the alert resource.
         */
        html_url: string;
        most_recent_instance?: {
            /**
             * Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name.
             */
            analysis_key: string;
            /**
             * Identifies the configuration under which the analysis was executed.
             */
            category?: string;
            classifications?: Array<string>;
            commit_sha?: string;
            /**
             * Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed.
             */
            environment: string;
            location?: {
                end_column?: number;
                end_line?: number;
                path?: string;
                start_column?: number;
                start_line?: number;
            };
            message?: {
                text?: string;
            };
            /**
             * The full Git reference, formatted as `refs/heads/<branch name>`.
             */
            ref: string;
            /**
             * State of a code scanning alert.
             */
            state: webhook_code_scanning_alert_closed_by_user.state;
        } | null;
        /**
         * The code scanning alert number.
         */
        number: number;
        rule: {
            /**
             * A short description of the rule used to detect the alert.
             */
            description: string;
            full_description?: string;
            help?: string | null;
            /**
             * A link to the documentation for the rule used to detect the alert.
             */
            help_uri?: string | null;
            /**
             * A unique identifier for the rule used to detect the alert.
             */
            id: string;
            name?: string;
            /**
             * The severity of the alert.
             */
            severity: webhook_code_scanning_alert_closed_by_user.severity | null;
            tags?: Array<string> | null;
        };
        /**
         * State of a code scanning alert.
         */
        state: webhook_code_scanning_alert_closed_by_user.state;
        tool: {
            guid?: string | null;
            /**
             * The name of the tool used to generate the code scanning analysis alert.
             */
            name: string;
            /**
             * The version of the tool used to detect the alert.
             */
            version: string | null;
        };
        url: string;
    };
    /**
     * The commit SHA of the code scanning alert. When the action is `reopened_by_user` or `closed_by_user`, the event was triggered by the `sender` and this value will be empty.
     */
    commit_oid: string;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    /**
     * The Git reference of the code scanning alert. When the action is `reopened_by_user` or `closed_by_user`, the event was triggered by the `sender` and this value will be empty.
     */
    ref: string;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_code_scanning_alert_closed_by_user {

    export enum action {
        CLOSED_BY_USER = 'closed_by_user',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }

    /**
     * The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`.
     */
    export enum dismissed_reason {
        FALSE_POSITIVE = 'false positive',
        WON_T_FIX = 'won\'t fix',
        USED_IN_TESTS = 'used in tests',
    }

    /**
     * State of a code scanning alert.
     */
    export enum state {
        OPEN = 'open',
        DISMISSED = 'dismissed',
        FIXED = 'fixed',
    }

    /**
     * The severity of the alert.
     */
    export enum severity {
        NONE = 'none',
        NOTE = 'note',
        WARNING = 'warning',
        ERROR = 'error',
    }


}

