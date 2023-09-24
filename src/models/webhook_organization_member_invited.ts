/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_organization_member_invited = {
    action: webhook_organization_member_invited.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    /**
     * The invitation for the user or email if the action is `member_invited`.
     */
    invitation: {
        created_at: string;
        email: string | null;
        failed_at: string | null;
        failed_reason: string | null;
        id: number;
        invitation_teams_url: string;
        inviter: {
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
            type?: webhook_organization_member_invited.type;
            url?: string;
        } | null;
        login: string | null;
        node_id: string;
        role: string;
        team_count: number;
        invitation_source?: string;
    };
    organization: organization_simple_webhooks;
    repository?: repository_webhooks;
    sender: simple_user_webhooks;
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
        type?: webhook_organization_member_invited.type;
        url?: string;
    } | null;
};

export namespace webhook_organization_member_invited {

    export enum action {
        MEMBER_INVITED = 'member_invited',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }


}

