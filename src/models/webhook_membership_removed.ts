/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';

export type webhook_membership_removed = {
    action: webhook_membership_removed.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    member: {
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
        type?: webhook_membership_removed.type;
        url?: string;
    } | null;
    organization: organization_simple_webhooks;
    repository?: repository_webhooks;
    /**
     * The scope of the membership. Currently, can only be `team`.
     */
    scope: webhook_membership_removed.scope;
    sender: {
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
        type?: webhook_membership_removed.type;
        url?: string;
    } | null;
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
            privacy: webhook_membership_removed.privacy;
            /**
             * Whether team members will receive notifications when their team is @mentioned
             */
            notification_setting: webhook_membership_removed.notification_setting;
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
        privacy?: webhook_membership_removed.privacy;
        notification_setting?: webhook_membership_removed.notification_setting;
        repositories_url?: string;
        slug?: string;
        /**
         * URL for the team
         */
        url?: string;
    };
};

export namespace webhook_membership_removed {

    export enum action {
        REMOVED = 'removed',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }

    /**
     * The scope of the membership. Currently, can only be `team`.
     */
    export enum scope {
        TEAM = 'team',
        ORGANIZATION = 'organization',
    }

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

