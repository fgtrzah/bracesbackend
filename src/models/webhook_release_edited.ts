/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_release_edited = {
    action: webhook_release_edited.action;
    changes: {
        body?: {
            /**
             * The previous version of the body if the action was `edited`.
             */
            from: string;
        };
        name?: {
            /**
             * The previous version of the name if the action was `edited`.
             */
            from: string;
        };
        make_latest?: {
            /**
             * Whether this release was explicitly `edited` to be the latest.
             */
            to: boolean;
        };
    };
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    /**
     * The [release](https://docs.github.com/rest/releases/releases/#get-a-release) object.
     */
    release: {
        assets: Array<{
            browser_download_url: string;
            content_type: string;
            created_at: string;
            download_count: number;
            id: number;
            label: string | null;
            /**
             * The file name of the asset.
             */
            name: string;
            node_id: string;
            size: number;
            /**
             * State of the release asset.
             */
            state: 'uploaded';
            updated_at: string;
            uploader?: {
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
                type?: 'Bot' | 'User' | 'Organization';
                url?: string;
            } | null;
            url: string;
        }>;
        assets_url: string;
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
            type?: webhook_release_edited.type;
            url?: string;
        } | null;
        body: string | null;
        created_at: string | null;
        discussion_url?: string;
        /**
         * Whether the release is a draft or published
         */
        draft: boolean;
        html_url: string;
        id: number;
        name: string | null;
        node_id: string;
        /**
         * Whether the release is identified as a prerelease or a full release.
         */
        prerelease: boolean;
        published_at: string | null;
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
        /**
         * The name of the tag.
         */
        tag_name: string;
        tarball_url: string | null;
        /**
         * Specifies the commitish value that determines where the Git tag is created from.
         */
        target_commitish: string;
        upload_url: string;
        url: string;
        zipball_url: string | null;
    };
    repository: repository_webhooks;
    sender?: simple_user_webhooks;
};

export namespace webhook_release_edited {

    export enum action {
        EDITED = 'edited',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }


}

