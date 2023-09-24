/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_issues_labeled = {
    action: webhook_issues_labeled.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    /**
     * The [issue](https://docs.github.com/rest/issues/issues#get-an-issue) itself.
     */
    issue: {
        active_lock_reason: webhook_issues_labeled.active_lock_reason | null;
        assignee?: {
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
            type?: webhook_issues_labeled.type;
            url?: string;
        } | null;
        assignees: Array<{
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
            type?: 'Bot' | 'User' | 'Organization' | 'Mannequin';
            url?: string;
        } | null>;
        /**
         * How the author is associated with the repository.
         */
        author_association: webhook_issues_labeled.author_association;
        /**
         * Contents of the issue
         */
        body: string | null;
        closed_at: string | null;
        comments: number;
        comments_url: string;
        created_at: string;
        draft?: boolean;
        events_url: string;
        html_url: string;
        id: number;
        labels?: Array<{
            /**
             * 6-character hex code, without the leading #, identifying the color
             */
            color: string;
            default: boolean;
            description: string | null;
            id: number;
            /**
             * The name of the label.
             */
            name: string;
            node_id: string;
            /**
             * URL for the label
             */
            url: string;
        }>;
        labels_url: string;
        locked?: boolean;
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
                type?: webhook_issues_labeled.type;
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
            state: webhook_issues_labeled.state;
            /**
             * The title of the milestone.
             */
            title: string;
            updated_at: string;
            url: string;
        } | null;
        node_id: string;
        number: number;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: {
            created_at: string | null;
            description: string | null;
            /**
             * The list of events for the GitHub app
             */
            events?: Array<'branch_protection_rule' | 'check_run' | 'check_suite' | 'code_scanning_alert' | 'commit_comment' | 'content_reference' | 'create' | 'delete' | 'deployment' | 'deployment_review' | 'deployment_status' | 'deploy_key' | 'discussion' | 'discussion_comment' | 'fork' | 'gollum' | 'issues' | 'issue_comment' | 'label' | 'member' | 'membership' | 'milestone' | 'organization' | 'org_block' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'push' | 'registry_package' | 'release' | 'repository' | 'repository_dispatch' | 'secret_scanning_alert' | 'star' | 'status' | 'team' | 'team_add' | 'watch' | 'workflow_dispatch' | 'workflow_run' | 'pull_request_review_thread' | 'reminder'>;
            external_url: string | null;
            html_url: string;
            /**
             * Unique identifier of the GitHub app
             */
            id: number | null;
            /**
             * The name of the GitHub app
             */
            name: string;
            node_id: string;
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
                type?: webhook_issues_labeled.type;
                url?: string;
            } | null;
            /**
             * The set of permissions for the GitHub app
             */
            permissions?: {
                actions?: webhook_issues_labeled.actions;
                administration?: webhook_issues_labeled.administration;
                checks?: webhook_issues_labeled.checks;
                content_references?: webhook_issues_labeled.content_references;
                contents?: webhook_issues_labeled.contents;
                deployments?: webhook_issues_labeled.deployments;
                discussions?: webhook_issues_labeled.discussions;
                emails?: webhook_issues_labeled.emails;
                environments?: webhook_issues_labeled.environments;
                issues?: webhook_issues_labeled.issues;
                keys?: webhook_issues_labeled.keys;
                members?: webhook_issues_labeled.members;
                metadata?: webhook_issues_labeled.metadata;
                organization_administration?: webhook_issues_labeled.organization_administration;
                organization_hooks?: webhook_issues_labeled.organization_hooks;
                organization_packages?: webhook_issues_labeled.organization_packages;
                organization_plan?: webhook_issues_labeled.organization_plan;
                organization_projects?: webhook_issues_labeled.organization_projects;
                organization_secrets?: webhook_issues_labeled.organization_secrets;
                organization_self_hosted_runners?: webhook_issues_labeled.organization_self_hosted_runners;
                organization_user_blocking?: webhook_issues_labeled.organization_user_blocking;
                packages?: webhook_issues_labeled.packages;
                pages?: webhook_issues_labeled.pages;
                pull_requests?: webhook_issues_labeled.pull_requests;
                repository_hooks?: webhook_issues_labeled.repository_hooks;
                repository_projects?: webhook_issues_labeled.repository_projects;
                secret_scanning_alerts?: webhook_issues_labeled.secret_scanning_alerts;
                secrets?: webhook_issues_labeled.secrets;
                security_events?: webhook_issues_labeled.security_events;
                security_scanning_alert?: webhook_issues_labeled.security_scanning_alert;
                single_file?: webhook_issues_labeled.single_file;
                statuses?: webhook_issues_labeled.statuses;
                team_discussions?: webhook_issues_labeled.team_discussions;
                vulnerability_alerts?: webhook_issues_labeled.vulnerability_alerts;
                workflows?: webhook_issues_labeled.workflows;
            };
            /**
             * The slug name of the GitHub app
             */
            slug?: string;
            updated_at: string | null;
        } | null;
        pull_request?: {
            diff_url?: string;
            html_url?: string;
            merged_at?: string | null;
            patch_url?: string;
            url?: string;
        };
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
        /**
         * State of the issue; either 'open' or 'closed'
         */
        state?: webhook_issues_labeled.state;
        state_reason?: string | null;
        timeline_url?: string;
        /**
         * Title of the issue
         */
        title: string;
        updated_at: string;
        /**
         * URL for the issue
         */
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
            type?: webhook_issues_labeled.type;
            url?: string;
        } | null;
    };
    label?: {
        /**
         * 6-character hex code, without the leading #, identifying the color
         */
        color: string;
        default: boolean;
        description: string | null;
        id: number;
        /**
         * The name of the label.
         */
        name: string;
        node_id: string;
        /**
         * URL for the label
         */
        url: string;
    };
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_issues_labeled {

    export enum action {
        LABELED = 'labeled',
    }

    export enum active_lock_reason {
        RESOLVED = 'resolved',
        OFF_TOPIC = 'off-topic',
        TOO_HEATED = 'too heated',
        SPAM = 'spam',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
        MANNEQUIN = 'Mannequin',
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

    /**
     * The state of the milestone.
     */
    export enum state {
        OPEN = 'open',
        CLOSED = 'closed',
    }

    export enum actions {
        READ = 'read',
        WRITE = 'write',
    }

    export enum administration {
        READ = 'read',
        WRITE = 'write',
    }

    export enum checks {
        READ = 'read',
        WRITE = 'write',
    }

    export enum content_references {
        READ = 'read',
        WRITE = 'write',
    }

    export enum contents {
        READ = 'read',
        WRITE = 'write',
    }

    export enum deployments {
        READ = 'read',
        WRITE = 'write',
    }

    export enum discussions {
        READ = 'read',
        WRITE = 'write',
    }

    export enum emails {
        READ = 'read',
        WRITE = 'write',
    }

    export enum environments {
        READ = 'read',
        WRITE = 'write',
    }

    export enum issues {
        READ = 'read',
        WRITE = 'write',
    }

    export enum keys {
        READ = 'read',
        WRITE = 'write',
    }

    export enum members {
        READ = 'read',
        WRITE = 'write',
    }

    export enum metadata {
        READ = 'read',
        WRITE = 'write',
    }

    export enum organization_administration {
        READ = 'read',
        WRITE = 'write',
    }

    export enum organization_hooks {
        READ = 'read',
        WRITE = 'write',
    }

    export enum organization_packages {
        READ = 'read',
        WRITE = 'write',
    }

    export enum organization_plan {
        READ = 'read',
        WRITE = 'write',
    }

    export enum organization_projects {
        READ = 'read',
        WRITE = 'write',
        ADMIN = 'admin',
    }

    export enum organization_secrets {
        READ = 'read',
        WRITE = 'write',
    }

    export enum organization_self_hosted_runners {
        READ = 'read',
        WRITE = 'write',
    }

    export enum organization_user_blocking {
        READ = 'read',
        WRITE = 'write',
    }

    export enum packages {
        READ = 'read',
        WRITE = 'write',
    }

    export enum pages {
        READ = 'read',
        WRITE = 'write',
    }

    export enum pull_requests {
        READ = 'read',
        WRITE = 'write',
    }

    export enum repository_hooks {
        READ = 'read',
        WRITE = 'write',
    }

    export enum repository_projects {
        READ = 'read',
        WRITE = 'write',
    }

    export enum secret_scanning_alerts {
        READ = 'read',
        WRITE = 'write',
    }

    export enum secrets {
        READ = 'read',
        WRITE = 'write',
    }

    export enum security_events {
        READ = 'read',
        WRITE = 'write',
    }

    export enum security_scanning_alert {
        READ = 'read',
        WRITE = 'write',
    }

    export enum single_file {
        READ = 'read',
        WRITE = 'write',
    }

    export enum statuses {
        READ = 'read',
        WRITE = 'write',
    }

    export enum team_discussions {
        READ = 'read',
        WRITE = 'write',
    }

    export enum vulnerability_alerts {
        READ = 'read',
        WRITE = 'write',
    }

    export enum workflows {
        READ = 'read',
        WRITE = 'write',
    }


}

