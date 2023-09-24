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

export type webhook_registry_package_published = {
    action: webhook_registry_package_published.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    registry_package: {
        created_at: string | null;
        description: string | null;
        ecosystem: string;
        html_url: string;
        id: number;
        name: string;
        namespace: string;
        owner: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            html_url: string;
            id: number;
            login: string;
            node_id: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        };
        package_type: string;
        package_version: {
            author?: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            body?: (string | Record<string, any>);
            body_html?: string;
            container_metadata?: {
                labels?: Record<string, any> | null;
                manifest?: Record<string, any> | null;
                tag?: {
                    digest?: string;
                    name?: string;
                };
            };
            created_at?: string;
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
            npm_metadata?: {
                name?: string;
                version?: string;
                npm_user?: string;
                author?: (string | Record<string, any>) | null;
                bugs?: (string | Record<string, any>) | null;
                dependencies?: Record<string, any>;
                dev_dependencies?: Record<string, any>;
                peer_dependencies?: Record<string, any>;
                optional_dependencies?: Record<string, any>;
                description?: string;
                dist?: (string | Record<string, any>) | null;
                git_head?: string;
                homepage?: string;
                license?: string;
                main?: string;
                repository?: (string | Record<string, any>) | null;
                scripts?: Record<string, any>;
                id?: string;
                node_version?: string;
                npm_version?: string;
                has_shrinkwrap?: boolean;
                maintainers?: Array<string>;
                contributors?: Array<string>;
                engines?: Record<string, any>;
                keywords?: Array<string>;
                files?: Array<string>;
                bin?: Record<string, any>;
                man?: Record<string, any>;
                directories?: (string | Record<string, any>) | null;
                os?: Array<string>;
                cpu?: Array<string>;
                readme?: string;
                installation_command?: string;
                release_id?: number;
                commit_oid?: string;
                published_via_actions?: boolean;
                deleted_by_id?: number;
            } | null;
            nuget_metadata?: Array<{
                id?: (string | Record<string, any> | number) | null;
                name?: string;
                value?: (boolean | string | number | {
                    url?: string;
                    branch?: string;
                    commit?: string;
                    type?: string;
                });
            }> | null;
            package_files: Array<{
                content_type: string;
                created_at: string;
                download_url: string;
                id: number;
                md5: string | null;
                name: string;
                sha1: string | null;
                sha256: string | null;
                size: number;
                state: string | null;
                updated_at: string;
            }>;
            package_url: string;
            prerelease?: boolean;
            release?: {
                author?: {
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
                created_at?: string;
                draft?: boolean;
                html_url?: string;
                id?: number;
                name?: string | null;
                prerelease?: boolean;
                published_at?: string;
                tag_name?: string;
                target_commitish?: string;
                url?: string;
            };
            rubygems_metadata?: Array<webhook_rubygems_metadata>;
            summary: string;
            tag_name?: string;
            target_commitish?: string;
            target_oid?: string;
            updated_at?: string;
            version: string;
        } | null;
        registry: {
            about_url?: string;
            name?: string;
            type?: string;
            url?: string;
            vendor?: string;
        } | null;
        updated_at: string | null;
    };
    repository?: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_registry_package_published {

    export enum action {
        PUBLISHED = 'published',
    }


}

