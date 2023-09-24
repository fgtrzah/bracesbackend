/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_team_added_to_repository = {
    action: webhook_team_added_to_repository.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization: organization_simple_webhooks;
    /**
     * A git repository
     */
    repository?: {
        /**
         * Whether to allow auto-merge for pull requests.
         */
        allow_auto_merge?: boolean;
        /**
         * Whether to allow private forks
         */
        allow_forking?: boolean;
        /**
         * Whether to allow merge commits for pull requests.
         */
        allow_merge_commit?: boolean;
        /**
         * Whether to allow rebase merges for pull requests.
         */
        allow_rebase_merge?: boolean;
        /**
         * Whether to allow squash merges for pull requests.
         */
        allow_squash_merge?: boolean;
        allow_update_branch?: boolean;
        archive_url: string;
        /**
         * Whether the repository is archived.
         */
        archived: boolean;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        clone_url: string;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        contributors_url: string;
        created_at: (number | string);
        /**
         * The default branch of the repository.
         */
        default_branch: string;
        /**
         * Whether to delete head branches when pull requests are merged
         */
        delete_branch_on_merge?: boolean;
        deployments_url: string;
        description: string | null;
        /**
         * Returns whether or not this repository is disabled.
         */
        disabled?: boolean;
        downloads_url: string;
        events_url: string;
        fork: boolean;
        forks: number;
        forks_count: number;
        forks_url: string;
        full_name: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url: string;
        /**
         * Whether downloads are enabled.
         */
        has_downloads: boolean;
        /**
         * Whether issues are enabled.
         */
        has_issues: boolean;
        has_pages: boolean;
        /**
         * Whether projects are enabled.
         */
        has_projects: boolean;
        /**
         * Whether the wiki is enabled.
         */
        has_wiki: boolean;
        homepage: string | null;
        hooks_url: string;
        html_url: string;
        /**
         * Unique identifier of the repository
         */
        id: number;
        is_template?: boolean;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        language: string | null;
        languages_url: string;
        license: {
            key: string;
            name: string;
            node_id: string;
            spdx_id: string;
            url: string | null;
        } | null;
        master_branch?: string;
        merges_url: string;
        milestones_url: string;
        mirror_url: string | null;
        /**
         * The name of the repository.
         */
        name: string;
        node_id: string;
        notifications_url: string;
        open_issues: number;
        open_issues_count: number;
        organization?: string;
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
            type?: webhook_team_added_to_repository.type;
            url?: string;
        } | null;
        permissions?: {
            admin: boolean;
            maintain?: boolean;
            pull: boolean;
            push: boolean;
            triage?: boolean;
        };
        /**
         * Whether the repository is private or public.
         */
        private: boolean;
        public?: boolean;
        pulls_url: string;
        pushed_at: (number | string) | null;
        releases_url: string;
        role_name?: string | null;
        size: number;
        ssh_url: string;
        stargazers?: number;
        stargazers_count: number;
        stargazers_url: string;
        statuses_url: string;
        subscribers_url: string;
        subscription_url: string;
        svn_url: string;
        tags_url: string;
        teams_url: string;
        topics: Array<string>;
        trees_url: string;
        updated_at: string;
        url: string;
        visibility: webhook_team_added_to_repository.visibility;
        watchers: number;
        watchers_count: number;
    };
    sender?: simple_user_webhooks;
    /**
     * Groups of organization members that gives permissions on specified repositories.
     */
    team: {
        deleted?: boolean;
        /**
         * Description of the team
         */
        description?: string | null;
        html_url?: string;
        /**
         * Unique identifier of the team
         */
        id: number;
        members_url?: string;
        /**
         * Name of the team
         */
        name: string;
        node_id?: string;
        parent?: {
            /**
             * Description of the team
             */
            description: string | null;
            html_url: string;
            /**
             * Unique identifier of the team
             */
            id: number;
            members_url: string;
            /**
             * Name of the team
             */
            name: string;
            node_id: string;
            /**
             * Permission that the team will have for its repositories
             */
            permission: string;
            privacy: webhook_team_added_to_repository.privacy;
            /**
             * Whether team members will receive notifications when their team is @mentioned
             */
            notification_setting: webhook_team_added_to_repository.notification_setting;
            repositories_url: string;
            slug: string;
            /**
             * URL for the team
             */
            url: string;
        } | null;
        /**
         * Permission that the team will have for its repositories
         */
        permission?: string;
        privacy?: webhook_team_added_to_repository.privacy;
        /**
         * Whether team members will receive notifications when their team is @mentioned
         */
        notification_setting?: webhook_team_added_to_repository.notification_setting;
        repositories_url?: string;
        slug?: string;
        /**
         * URL for the team
         */
        url?: string;
    };
};

export namespace webhook_team_added_to_repository {

    export enum action {
        ADDED_TO_REPOSITORY = 'added_to_repository',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }

    export enum visibility {
        PUBLIC = 'public',
        PRIVATE = 'private',
        INTERNAL = 'internal',
    }

    export enum privacy {
        OPEN = 'open',
        CLOSED = 'closed',
        SECRET = 'secret',
    }

    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    export enum notification_setting {
        NOTIFICATIONS_ENABLED = 'notifications_enabled',
        NOTIFICATIONS_DISABLED = 'notifications_disabled',
    }


}

