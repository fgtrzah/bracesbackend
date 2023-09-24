/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_project_closed = {
    action: webhook_project_closed.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    project: {
        /**
         * Body of the project
         */
        body: string | null;
        columns_url: string;
        created_at: string;
        creator: {
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
            type?: webhook_project_closed.type;
            url?: string;
        } | null;
        html_url: string;
        id: number;
        /**
         * Name of the project
         */
        name: string;
        node_id: string;
        number: number;
        owner_url: string;
        /**
         * State of the project; either 'open' or 'closed'
         */
        state: webhook_project_closed.state;
        updated_at: string;
        url: string;
    };
    repository?: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_project_closed {

    export enum action {
        CLOSED = 'closed',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }

    /**
     * State of the project; either 'open' or 'closed'
     */
    export enum state {
        OPEN = 'open',
        CLOSED = 'closed',
    }


}

