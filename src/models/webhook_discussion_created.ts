/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_discussion_created = {
    action: webhook_discussion_created.action;
    discussion: ({
        active_lock_reason: string | null;
        answer_chosen_at: string | null;
        answer_chosen_by: {
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
            type?: webhook_discussion_created.type;
            url?: string;
        } | null;
        answer_html_url: string | null;
        /**
         * How the author is associated with the repository.
         */
        author_association: webhook_discussion_created.author_association;
        body: string | null;
        category: {
            created_at: string;
            description: string;
            emoji: string;
            id: number;
            is_answerable: boolean;
            name: string;
            node_id?: string;
            repository_id: number;
            slug: string;
            updated_at: string;
        };
        comments: number;
        created_at: string;
        html_url: string;
        id: number;
        locked: boolean;
        node_id: string;
        number: number;
        reactions?: {
            '+1': number;
            '-1': number;
            confused: number;
            eyes: number;
            heart: number;
            hooray: number;
            laugh: number;
            rocket: number;
            total_count: number;
            url: string;
        };
        repository_url: string;
        state: webhook_discussion_created.state;
        timeline_url?: string;
        title: string;
        updated_at: string;
        user: {
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
            type?: webhook_discussion_created.type;
            url?: string;
        } | null;
    } & {
        active_lock_reason?: any;
        answer_chosen_at: any;
        answer_chosen_by: any;
        answer_html_url: string | null;
        author_association?: string;
        body?: string | null;
        category?: {
            created_at?: string;
            description?: string;
            emoji?: string;
            id?: number;
            is_answerable?: boolean;
            name?: string;
            node_id?: string;
            repository_id?: number;
            slug?: string;
            updated_at?: string;
        };
        comments?: number;
        created_at?: string;
        html_url?: string;
        id?: number;
        locked: boolean;
        node_id?: string;
        number?: number;
        reactions?: {
            '+1'?: number;
            '-1'?: number;
            confused?: number;
            eyes?: number;
            heart?: number;
            hooray?: number;
            laugh?: number;
            rocket?: number;
            total_count?: number;
            url?: string;
        };
        repository_url?: string;
        state: webhook_discussion_created.state;
        timeline_url?: string;
        title?: string;
        updated_at?: string;
        user?: {
            avatar_url?: string;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id?: number;
            login?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: string;
            url?: string;
        };
    });
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_discussion_created {

    export enum action {
        CREATED = 'created',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }

    /**
     * How the author is associated with the repository.
     */
    export enum author_association {
        COLLABORATOR = 'COLLABORATOR',
        CONTRIBUTOR = 'CONTRIBUTOR',
        FIRST_TIMER = 'FIRST_TIMER',
        FIRST_TIME_CONTRIBUTOR = 'FIRST_TIME_CONTRIBUTOR',
        MANNEQUIN = 'MANNEQUIN',
        MEMBER = 'MEMBER',
        NONE = 'NONE',
        OWNER = 'OWNER',
    }

    export enum state {
        OPEN = 'open',
        LOCKED = 'locked',
        CONVERTING = 'converting',
        TRANSFERRING = 'transferring',
    }


}

