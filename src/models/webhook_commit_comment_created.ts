/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_commit_comment_created = {
    /**
     * The action performed. Can be `created`.
     */
    action: webhook_commit_comment_created.action;
    /**
     * The [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment) resource.
     */
    comment: {
        /**
         * How the author is associated with the repository.
         */
        author_association: webhook_commit_comment_created.author_association;
        /**
         * The text of the comment.
         */
        body: string;
        /**
         * The SHA of the commit to which the comment applies.
         */
        commit_id: string;
        created_at: string;
        html_url: string;
        /**
         * The ID of the commit comment.
         */
        id: number;
        /**
         * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
         */
        line: number | null;
        /**
         * The node ID of the commit comment.
         */
        node_id: string;
        /**
         * The relative path of the file to which the comment applies.
         */
        path: string | null;
        /**
         * The line index in the diff to which the comment applies.
         */
        position: number | null;
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
        updated_at: string;
        url: string;
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
            type?: webhook_commit_comment_created.type;
            url?: string;
        } | null;
    };
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_commit_comment_created {

    /**
     * The action performed. Can be `created`.
     */
    export enum action {
        CREATED = 'created',
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

