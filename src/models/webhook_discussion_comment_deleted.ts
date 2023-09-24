/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { discussion } from './discussion';
import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_discussion_comment_deleted = {
    action: webhook_discussion_comment_deleted.action;
    comment: {
        /**
         * How the author is associated with the repository.
         */
        author_association: webhook_discussion_comment_deleted.author_association;
        body: string;
        child_comment_count: number;
        created_at: string;
        discussion_id: number;
        html_url: string;
        id: number;
        node_id: string;
        parent_id: number | null;
        reactions: {
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
            type?: webhook_discussion_comment_deleted.type;
            url?: string;
        } | null;
    };
    discussion: discussion;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_discussion_comment_deleted {

    export enum action {
        DELETED = 'deleted',
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

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }


}

