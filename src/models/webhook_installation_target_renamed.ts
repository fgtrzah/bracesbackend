/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_installation_target_renamed = {
    account: {
        archived_at?: string | null;
        avatar_url: string;
        created_at?: string;
        description?: any;
        events_url?: string;
        followers?: number;
        followers_url?: string;
        following?: number;
        following_url?: string;
        gists_url?: string;
        gravatar_id?: string;
        has_organization_projects?: boolean;
        has_repository_projects?: boolean;
        hooks_url?: string;
        html_url: string;
        id: number;
        is_verified?: boolean;
        issues_url?: string;
        login?: string;
        members_url?: string;
        name?: string;
        node_id: string;
        organizations_url?: string;
        public_gists?: number;
        public_members_url?: string;
        public_repos?: number;
        received_events_url?: string;
        repos_url?: string;
        site_admin?: boolean;
        slug?: string;
        starred_url?: string;
        subscriptions_url?: string;
        type?: string;
        updated_at?: string;
        url?: string;
        website_url?: any;
    };
    action: webhook_installation_target_renamed.action;
    changes: {
        login?: {
            from: string;
        };
        slug?: {
            from: string;
        };
    };
    enterprise?: enterprise_webhooks;
    installation: simple_installation;
    organization?: organization_simple_webhooks;
    repository?: repository_webhooks;
    sender?: simple_user_webhooks;
    target_type: string;
};

export namespace webhook_installation_target_renamed {

    export enum action {
        RENAMED = 'renamed',
    }


}

