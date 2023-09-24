/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_team_add = {
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
    /**
     * Groups of organization members that gives permissions on specified repositories.
     */
    team: {
        deleted?: boolean;
        /**
         * Description of the team
         */
        description?: string | null;
        html_url?: string;
        /**
         * Unique identifier of the team
         */
        id: number;
        members_url?: string;
        /**
         * Name of the team
         */
        name: string;
        node_id?: string;
        parent?: {
            /**
             * Description of the team
             */
            description: string | null;
            html_url: string;
            /**
             * Unique identifier of the team
             */
            id: number;
            members_url: string;
            /**
             * Name of the team
             */
            name: string;
            node_id: string;
            /**
             * Permission that the team will have for its repositories
             */
            permission: string;
            privacy: webhook_team_add.privacy;
            /**
             * Whether team members will receive notifications when their team is @mentioned
             */
            notification_setting: webhook_team_add.notification_setting;
            repositories_url: string;
            slug: string;
            /**
             * URL for the team
             */
            url: string;
        } | null;
        /**
         * Permission that the team will have for its repositories
         */
        permission?: string;
        privacy?: webhook_team_add.privacy;
        /**
         * Whether team members will receive notifications when their team is @mentioned
         */
        notification_setting?: webhook_team_add.notification_setting;
        repositories_url?: string;
        slug?: string;
        /**
         * URL for the team
         */
        url?: string;
    };
};

export namespace webhook_team_add {

    export enum privacy {
        OPEN = 'open',
        CLOSED = 'closed',
        SECRET = 'secret',
    }

    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    export enum notification_setting {
        NOTIFICATIONS_ENABLED = 'notifications_enabled',
        NOTIFICATIONS_DISABLED = 'notifications_disabled',
    }


}

