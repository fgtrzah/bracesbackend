/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { nullable_repository_webhooks } from './nullable_repository_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_project_card_deleted = {
    action: webhook_project_card_deleted.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    project_card: {
        after_id?: number | null;
        /**
         * Whether or not the card is archived
         */
        archived: boolean;
        column_id: number | null;
        column_url: string;
        content_url?: string;
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
            type?: webhook_project_card_deleted.type;
            url?: string;
        } | null;
        /**
         * The project card's ID
         */
        id: number;
        node_id: string;
        note: string | null;
        project_url: string;
        updated_at: string;
        url: string;
    };
    repository?: nullable_repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_project_card_deleted {

    export enum action {
        DELETED = 'deleted',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
        MANNEQUIN = 'Mannequin',
    }


}

