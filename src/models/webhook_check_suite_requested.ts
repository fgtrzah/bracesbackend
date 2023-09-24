/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_check_suite_requested = {
    action: webhook_check_suite_requested.action;
    /**
     * The [check_suite](https://docs.github.com/rest/checks/suites#get-a-check-suite).
     */
    check_suite: {
        after: string | null;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        app: {
            created_at: string | null;
            description: string | null;
            /**
             * The list of events for the GitHub app
             */
            events?: Array<'branch_protection_rule' | 'check_run' | 'check_suite' | 'code_scanning_alert' | 'commit_comment' | 'content_reference' | 'create' | 'delete' | 'deployment' | 'deployment_review' | 'deployment_status' | 'deploy_key' | 'discussion' | 'discussion_comment' | 'fork' | 'gollum' | 'issues' | 'issue_comment' | 'label' | 'member' | 'membership' | 'milestone' | 'organization' | 'org_block' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'push' | 'registry_package' | 'release' | 'repository' | 'repository_dispatch' | 'secret_scanning_alert' | 'star' | 'status' | 'team' | 'team_add' | 'watch' | 'workflow_dispatch' | 'workflow_run' | 'pull_request_review_thread' | 'workflow_job' | 'merge_queue_entry' | 'security_and_analysis' | 'secret_scanning_alert_location' | 'projects_v2_item' | 'merge_group' | 'repository_import'>;
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
                type?: webhook_check_suite_requested.type;
                url?: string;
            } | null;
            /**
             * The set of permissions for the GitHub app
             */
            permissions?: {
                actions?: webhook_check_suite_requested.actions;
                administration?: webhook_check_suite_requested.administration;
                checks?: webhook_check_suite_requested.checks;
                content_references?: webhook_check_suite_requested.content_references;
                contents?: webhook_check_suite_requested.contents;
                deployments?: webhook_check_suite_requested.deployments;
                discussions?: webhook_check_suite_requested.discussions;
                emails?: webhook_check_suite_requested.emails;
                environments?: webhook_check_suite_requested.environments;
                issues?: webhook_check_suite_requested.issues;
                keys?: webhook_check_suite_requested.keys;
                members?: webhook_check_suite_requested.members;
                metadata?: webhook_check_suite_requested.metadata;
                organization_administration?: webhook_check_suite_requested.organization_administration;
                organization_hooks?: webhook_check_suite_requested.organization_hooks;
                organization_packages?: webhook_check_suite_requested.organization_packages;
                organization_plan?: webhook_check_suite_requested.organization_plan;
                organization_projects?: webhook_check_suite_requested.organization_projects;
                organization_secrets?: webhook_check_suite_requested.organization_secrets;
                organization_self_hosted_runners?: webhook_check_suite_requested.organization_self_hosted_runners;
                organization_user_blocking?: webhook_check_suite_requested.organization_user_blocking;
                packages?: webhook_check_suite_requested.packages;
                pages?: webhook_check_suite_requested.pages;
                pull_requests?: webhook_check_suite_requested.pull_requests;
                repository_hooks?: webhook_check_suite_requested.repository_hooks;
                repository_projects?: webhook_check_suite_requested.repository_projects;
                secret_scanning_alerts?: webhook_check_suite_requested.secret_scanning_alerts;
                secrets?: webhook_check_suite_requested.secrets;
                security_events?: webhook_check_suite_requested.security_events;
                security_scanning_alert?: webhook_check_suite_requested.security_scanning_alert;
                single_file?: webhook_check_suite_requested.single_file;
                statuses?: webhook_check_suite_requested.statuses;
                team_discussions?: webhook_check_suite_requested.team_discussions;
                vulnerability_alerts?: webhook_check_suite_requested.vulnerability_alerts;
                workflows?: webhook_check_suite_requested.workflows;
            };
            /**
             * The slug name of the GitHub app
             */
            slug?: string;
            updated_at: string | null;
        };
        before: string | null;
        check_runs_url: string;
        /**
         * The summary conclusion for all check runs that are part of the check suite. Can be one of `success`, `failure`,` neutral`, `cancelled`, `timed_out`, `action_required` or `stale`. This value will be `null` until the check run has completed.
         */
        conclusion: webhook_check_suite_requested.conclusion | null;
        created_at: string;
        /**
         * The head branch name the changes are on.
         */
        head_branch: string | null;
        head_commit: {
            /**
             * Metaproperties for Git author/committer information.
             */
            author: {
                date?: string;
                email: string | null;
                /**
                 * The git author's name.
                 */
                name: string;
                username?: string;
            };
            /**
             * Metaproperties for Git author/committer information.
             */
            committer: {
                date?: string;
                email: string | null;
                /**
                 * The git author's name.
                 */
                name: string;
                username?: string;
            };
            id: string;
            message: string;
            timestamp: string;
            tree_id: string;
        };
        /**
         * The SHA of the head commit that is being checked.
         */
        head_sha: string;
        id: number;
        latest_check_runs_count: number;
        node_id: string;
        /**
         * An array of pull requests that match this check suite. A pull request matches a check suite if they have the same `head_sha` and `head_branch`. When the check suite's `head_branch` is in a forked repository it will be `null` and the `pull_requests` array will be empty.
         */
        pull_requests: Array<{
            base: {
                ref: string;
                repo: {
                    id: number;
                    name: string;
                    url: string;
                };
                sha: string;
            };
            head: {
                ref: string;
                repo: {
                    id: number;
                    name: string;
                    url: string;
                };
                sha: string;
            };
            id: number;
            number: number;
            url: string;
        }>;
        rerequestable?: boolean;
        runs_rerequestable?: boolean;
        /**
         * The summary status for all check runs that are part of the check suite. Can be `requested`, `in_progress`, or `completed`.
         */
        status: webhook_check_suite_requested.status | null;
        updated_at: string;
        /**
         * URL that points to the check suite API resource.
         */
        url: string;
    };
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_check_suite_requested {

    export enum action {
        REQUESTED = 'requested',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
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
        ADMIN = 'admin',
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

    /**
     * The summary conclusion for all check runs that are part of the check suite. Can be one of `success`, `failure`,` neutral`, `cancelled`, `timed_out`, `action_required` or `stale`. This value will be `null` until the check run has completed.
     */
    export enum conclusion {
        SUCCESS = 'success',
        FAILURE = 'failure',
        NEUTRAL = 'neutral',
        CANCELLED = 'cancelled',
        TIMED_OUT = 'timed_out',
        ACTION_REQUIRED = 'action_required',
        STALE = 'stale',
        SKIPPED = 'skipped',
    }

    /**
     * The summary status for all check runs that are part of the check suite. Can be `requested`, `in_progress`, or `completed`.
     */
    export enum status {
        REQUESTED = 'requested',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
        QUEUED = 'queued',
    }


}

