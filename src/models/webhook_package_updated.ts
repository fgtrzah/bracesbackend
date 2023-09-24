/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';
import type { webhook_rubygems_metadata } from './webhook_rubygems_metadata';

export type webhook_package_updated = {
    action: webhook_package_updated.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    /**
     * Information about the package.
     */
    package: {
        created_at: string;
        description: string | null;
        ecosystem: string;
        html_url: string;
        id: number;
        name: string;
        namespace: string;
        owner: {
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
            type?: webhook_package_updated.type;
            url?: string;
        } | null;
        package_type: string;
        package_version: {
            author: {
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
                type?: webhook_package_updated.type;
                url?: string;
            } | null;
            body: string;
            body_html: string;
            created_at: string;
            description: string;
            docker_metadata?: Array<{
                tags?: Array<string>;
            }>;
            draft?: boolean;
            html_url: string;
            id: number;
            installation_command: string;
            manifest?: string;
            metadata: Array<Record<string, any>>;
            name: string;
            package_files: Array<{
                content_type: string;
                created_at: string;
                download_url: string;
                id: number;
                md5: string | null;
                name: string;
                sha1: string | null;
                sha256: string;
                size: number;
                state: string;
                updated_at: string;
            }>;
            package_url?: string;
            prerelease?: boolean;
            release?: {
                author: {
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
                    type?: webhook_package_updated.type;
                    url?: string;
                } | null;
                created_at: string;
                draft: boolean;
                html_url: string;
                id: number;
                name: string;
                prerelease: boolean;
                published_at: string;
                tag_name: string;
                target_commitish: string;
                url: string;
            };
            rubygems_metadata?: Array<webhook_rubygems_metadata>;
            source_url?: string;
            summary: string;
            tag_name?: string;
            target_commitish: string;
            target_oid: string;
            updated_at: string;
            version: string;
        };
        registry: {
            about_url: string;
            name: string;
            type: string;
            url: string;
            vendor: string;
        } | null;
        updated_at: string;
    };
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_package_updated {

    export enum action {
        UPDATED = 'updated',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }


}

