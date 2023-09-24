/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { installation } from './installation';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_installation_repositories_added = {
    action: webhook_installation_repositories_added.action;
    enterprise?: enterprise_webhooks;
    installation: installation;
    organization?: organization_simple_webhooks;
    /**
     * An array of repository objects, which were added to the installation.
     */
    repositories_added: Array<{
        full_name: string;
        /**
         * Unique identifier of the repository
         */
        id: number;
        /**
         * The name of the repository.
         */
        name: string;
        node_id: string;
        /**
         * Whether the repository is private or public.
         */
        private: boolean;
    }>;
    /**
     * An array of repository objects, which were removed from the installation.
     */
    repositories_removed: Array<{
        full_name?: string;
        /**
         * Unique identifier of the repository
         */
        id?: number;
        /**
         * The name of the repository.
         */
        name?: string;
        node_id?: string;
        /**
         * Whether the repository is private or public.
         */
        private?: boolean;
    }>;
    repository?: repository_webhooks;
    /**
     * Describe whether all repositories have been selected or there's a selection involved
     */
    repository_selection: webhook_installation_repositories_added.repository_selection;
    requester: {
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
        type?: webhook_installation_repositories_added.type;
        url?: string;
    } | null;
    sender: simple_user_webhooks;
};

export namespace webhook_installation_repositories_added {

    export enum action {
        ADDED = 'added',
    }

    /**
     * Describe whether all repositories have been selected or there's a selection involved
     */
    export enum repository_selection {
        ALL = 'all',
        SELECTED = 'selected',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }


}

