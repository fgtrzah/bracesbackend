/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_repository_transferred = {
    action: webhook_repository_transferred.action;
    changes: {
        owner: {
            from: {
                organization?: {
                    avatar_url: string;
                    description: string | null;
                    events_url: string;
                    hooks_url: string;
                    html_url?: string;
                    id: number;
                    issues_url: string;
                    login: string;
                    members_url: string;
                    node_id: string;
                    public_members_url: string;
                    repos_url: string;
                    url: string;
                };
                user?: {
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
                    type?: webhook_repository_transferred.type;
                    url?: string;
                } | null;
            };
        };
    };
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_repository_transferred {

    export enum action {
        TRANSFERRED = 'transferred',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }


}

