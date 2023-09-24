/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_milestone_edited = {
    action: webhook_milestone_edited.action;
    /**
     * The changes to the milestone if the action was `edited`.
     */
    changes: {
        description?: {
            /**
             * The previous version of the description if the action was `edited`.
             */
            from: string;
        };
        due_on?: {
            /**
             * The previous version of the due date if the action was `edited`.
             */
            from: string;
        };
        title?: {
            /**
             * The previous version of the title if the action was `edited`.
             */
            from: string;
        };
    };
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    /**
     * A collection of related issues and pull requests.
     */
    milestone: {
        closed_at: string | null;
        closed_issues: number;
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
            type?: webhook_milestone_edited.type;
            url?: string;
        } | null;
        description: string | null;
        due_on: string | null;
        html_url: string;
        id: number;
        labels_url: string;
        node_id: string;
        /**
         * The number of the milestone.
         */
        number: number;
        open_issues: number;
        /**
         * The state of the milestone.
         */
        state: webhook_milestone_edited.state;
        /**
         * The title of the milestone.
         */
        title: string;
        updated_at: string;
        url: string;
    };
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_milestone_edited {

    export enum action {
        EDITED = 'edited',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
        MANNEQUIN = 'Mannequin',
    }

    /**
     * The state of the milestone.
     */
    export enum state {
        OPEN = 'open',
        CLOSED = 'closed',
    }


}

