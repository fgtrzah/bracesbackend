/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_deployment_status_created = {
    action: webhook_deployment_status_created.action;
    check_run?: {
        completed_at: string | null;
        /**
         * The result of the completed check run. Can be one of `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` or `stale`. This value will be `null` until the check run has completed.
         */
        conclusion: webhook_deployment_status_created.conclusion | null;
        details_url: string;
        external_id: string;
        /**
         * The SHA of the commit that is being checked.
         */
        head_sha: string;
        html_url: string;
        /**
         * The id of the check.
         */
        id: number;
        /**
         * The name of the check run.
         */
        name: string;
        node_id: string;
        started_at: string;
        /**
         * The current status of the check run. Can be `queued`, `in_progress`, or `completed`.
         */
        status: webhook_deployment_status_created.status;
        url: string;
    } | null;
    /**
     * The [deployment](https://docs.github.com/rest/deployments/deployments#list-deployments).
     */
    deployment: {
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
            type?: webhook_deployment_status_created.type;
            url?: string;
        } | null;
        description: string | null;
        environment: string;
        id: number;
        node_id: string;
        original_environment: string;
        payload: (string | Record<string, any>) | null;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: {
            created_at: string | null;
            description: string | null;
            /**
             * The list of events for the GitHub app
             */
            events?: Array<'branch_protection_rule' | 'check_run' | 'check_suite' | 'code_scanning_alert' | 'commit_comment' | 'content_reference' | 'create' | 'delete' | 'deployment' | 'deployment_review' | 'deployment_status' | 'deploy_key' | 'discussion' | 'discussion_comment' | 'fork' | 'gollum' | 'issues' | 'issue_comment' | 'label' | 'member' | 'membership' | 'milestone' | 'organization' | 'org_block' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'push' | 'registry_package' | 'release' | 'repository' | 'repository_dispatch' | 'secret_scanning_alert' | 'star' | 'status' | 'team' | 'team_add' | 'watch' | 'workflow_dispatch' | 'workflow_run' | 'merge_queue_entry' | 'workflow_job' | 'pull_request_review_thread' | 'secret_scanning_alert_location' | 'merge_group'>;
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
                type?: webhook_deployment_status_created.type;
                url?: string;
            } | null;
            /**
             * The set of permissions for the GitHub app
             */
            permissions?: {
                actions?: webhook_deployment_status_created.actions;
                administration?: webhook_deployment_status_created.administration;
                checks?: webhook_deployment_status_created.checks;
                content_references?: webhook_deployment_status_created.content_references;
                contents?: webhook_deployment_status_created.contents;
                deployments?: webhook_deployment_status_created.deployments;
                discussions?: webhook_deployment_status_created.discussions;
                emails?: webhook_deployment_status_created.emails;
                environments?: webhook_deployment_status_created.environments;
                issues?: webhook_deployment_status_created.issues;
                keys?: webhook_deployment_status_created.keys;
                members?: webhook_deployment_status_created.members;
                metadata?: webhook_deployment_status_created.metadata;
                organization_administration?: webhook_deployment_status_created.organization_administration;
                organization_hooks?: webhook_deployment_status_created.organization_hooks;
                organization_packages?: webhook_deployment_status_created.organization_packages;
                organization_plan?: webhook_deployment_status_created.organization_plan;
                organization_projects?: webhook_deployment_status_created.organization_projects;
                organization_secrets?: webhook_deployment_status_created.organization_secrets;
                organization_self_hosted_runners?: webhook_deployment_status_created.organization_self_hosted_runners;
                organization_user_blocking?: webhook_deployment_status_created.organization_user_blocking;
                packages?: webhook_deployment_status_created.packages;
                pages?: webhook_deployment_status_created.pages;
                pull_requests?: webhook_deployment_status_created.pull_requests;
                repository_hooks?: webhook_deployment_status_created.repository_hooks;
                repository_projects?: webhook_deployment_status_created.repository_projects;
                secret_scanning_alerts?: webhook_deployment_status_created.secret_scanning_alerts;
                secrets?: webhook_deployment_status_created.secrets;
                security_events?: webhook_deployment_status_created.security_events;
                security_scanning_alert?: webhook_deployment_status_created.security_scanning_alert;
                single_file?: webhook_deployment_status_created.single_file;
                statuses?: webhook_deployment_status_created.statuses;
                team_discussions?: webhook_deployment_status_created.team_discussions;
                vulnerability_alerts?: webhook_deployment_status_created.vulnerability_alerts;
                workflows?: webhook_deployment_status_created.workflows;
            };
            /**
             * The slug name of the GitHub app
             */
            slug?: string;
            updated_at: string | null;
        } | null;
        production_environment?: boolean;
        ref: string;
        repository_url: string;
        sha: string;
        statuses_url: string;
        task: string;
        transient_environment?: boolean;
        updated_at: string;
        url: string;
    };
    /**
     * The [deployment status](https://docs.github.com/rest/deployments/statuses#list-deployment-statuses).
     */
    deployment_status: {
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
            type?: webhook_deployment_status_created.type;
            url?: string;
        } | null;
        deployment_url: string;
        /**
         * The optional human-readable description added to the status.
         */
        description: string;
        environment: string;
        environment_url?: string;
        id: number;
        log_url?: string;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: {
            created_at: string | null;
            description: string | null;
            /**
             * The list of events for the GitHub app
             */
            events?: Array<'branch_protection_rule' | 'check_run' | 'check_suite' | 'code_scanning_alert' | 'commit_comment' | 'content_reference' | 'create' | 'delete' | 'deployment' | 'deployment_review' | 'deployment_status' | 'deploy_key' | 'discussion' | 'discussion_comment' | 'fork' | 'gollum' | 'issues' | 'issue_comment' | 'label' | 'member' | 'membership' | 'milestone' | 'organization' | 'org_block' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'push' | 'registry_package' | 'release' | 'repository' | 'repository_dispatch' | 'secret_scanning_alert' | 'star' | 'status' | 'team' | 'team_add' | 'watch' | 'workflow_dispatch' | 'workflow_run' | 'pull_request_review_thread' | 'merge_queue_entry' | 'workflow_job' | 'merge_group' | 'secret_scanning_alert_location'>;
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
                type?: webhook_deployment_status_created.type;
                url?: string;
            } | null;
            /**
             * The set of permissions for the GitHub app
             */
            permissions?: {
                actions?: webhook_deployment_status_created.actions;
                administration?: webhook_deployment_status_created.administration;
                checks?: webhook_deployment_status_created.checks;
                content_references?: webhook_deployment_status_created.content_references;
                contents?: webhook_deployment_status_created.contents;
                deployments?: webhook_deployment_status_created.deployments;
                discussions?: webhook_deployment_status_created.discussions;
                emails?: webhook_deployment_status_created.emails;
                environments?: webhook_deployment_status_created.environments;
                issues?: webhook_deployment_status_created.issues;
                keys?: webhook_deployment_status_created.keys;
                members?: webhook_deployment_status_created.members;
                metadata?: webhook_deployment_status_created.metadata;
                organization_administration?: webhook_deployment_status_created.organization_administration;
                organization_hooks?: webhook_deployment_status_created.organization_hooks;
                organization_packages?: webhook_deployment_status_created.organization_packages;
                organization_plan?: webhook_deployment_status_created.organization_plan;
                organization_projects?: webhook_deployment_status_created.organization_projects;
                organization_secrets?: webhook_deployment_status_created.organization_secrets;
                organization_self_hosted_runners?: webhook_deployment_status_created.organization_self_hosted_runners;
                organization_user_blocking?: webhook_deployment_status_created.organization_user_blocking;
                packages?: webhook_deployment_status_created.packages;
                pages?: webhook_deployment_status_created.pages;
                pull_requests?: webhook_deployment_status_created.pull_requests;
                repository_hooks?: webhook_deployment_status_created.repository_hooks;
                repository_projects?: webhook_deployment_status_created.repository_projects;
                secret_scanning_alerts?: webhook_deployment_status_created.secret_scanning_alerts;
                secrets?: webhook_deployment_status_created.secrets;
                security_events?: webhook_deployment_status_created.security_events;
                security_scanning_alert?: webhook_deployment_status_created.security_scanning_alert;
                single_file?: webhook_deployment_status_created.single_file;
                statuses?: webhook_deployment_status_created.statuses;
                team_discussions?: webhook_deployment_status_created.team_discussions;
                vulnerability_alerts?: webhook_deployment_status_created.vulnerability_alerts;
                workflows?: webhook_deployment_status_created.workflows;
            };
            /**
             * The slug name of the GitHub app
             */
            slug?: string;
            updated_at: string | null;
        } | null;
        repository_url: string;
        /**
         * The new state. Can be `pending`, `success`, `failure`, or `error`.
         */
        state: string;
        /**
         * The optional link added to the status.
         */
        target_url: string;
        updated_at: string;
        url: string;
    };
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
    workflow?: {
        badge_url: string;
        created_at: string;
        html_url: string;
        id: number;
        name: string;
        node_id: string;
        path: string;
        state: string;
        updated_at: string;
        url: string;
    } | null;
    workflow_run?: {
        actor: {
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
            type?: webhook_deployment_status_created.type;
            url?: string;
        } | null;
        artifacts_url?: string;
        cancel_url?: string;
        check_suite_id: number;
        check_suite_node_id: string;
        check_suite_url?: string;
        conclusion: webhook_deployment_status_created.conclusion | null;
        created_at: string;
        display_title: string;
        event: string;
        head_branch: string;
        head_commit?: any;
        head_repository?: {
            archive_url?: string;
            assignees_url?: string;
            blobs_url?: string;
            branches_url?: string;
            collaborators_url?: string;
            comments_url?: string;
            commits_url?: string;
            compare_url?: string;
            contents_url?: string;
            contributors_url?: string;
            deployments_url?: string;
            description?: any;
            downloads_url?: string;
            events_url?: string;
            fork?: boolean;
            forks_url?: string;
            full_name?: string;
            git_commits_url?: string;
            git_refs_url?: string;
            git_tags_url?: string;
            hooks_url?: string;
            html_url?: string;
            id?: number;
            issue_comment_url?: string;
            issue_events_url?: string;
            issues_url?: string;
            keys_url?: string;
            labels_url?: string;
            languages_url?: string;
            merges_url?: string;
            milestones_url?: string;
            name?: string;
            node_id?: string;
            notifications_url?: string;
            owner?: {
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
            private?: boolean;
            pulls_url?: string;
            releases_url?: string;
            stargazers_url?: string;
            statuses_url?: string;
            subscribers_url?: string;
            subscription_url?: string;
            tags_url?: string;
            teams_url?: string;
            trees_url?: string;
            url?: string;
        };
        head_sha: string;
        html_url: string;
        id: number;
        jobs_url?: string;
        logs_url?: string;
        name: string;
        node_id: string;
        path: string;
        previous_attempt_url?: any;
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
        referenced_workflows?: Array<{
            path: string;
            ref?: string;
            sha: string;
        }> | null;
        repository?: {
            archive_url?: string;
            assignees_url?: string;
            blobs_url?: string;
            branches_url?: string;
            collaborators_url?: string;
            comments_url?: string;
            commits_url?: string;
            compare_url?: string;
            contents_url?: string;
            contributors_url?: string;
            deployments_url?: string;
            description?: any;
            downloads_url?: string;
            events_url?: string;
            fork?: boolean;
            forks_url?: string;
            full_name?: string;
            git_commits_url?: string;
            git_refs_url?: string;
            git_tags_url?: string;
            hooks_url?: string;
            html_url?: string;
            id?: number;
            issue_comment_url?: string;
            issue_events_url?: string;
            issues_url?: string;
            keys_url?: string;
            labels_url?: string;
            languages_url?: string;
            merges_url?: string;
            milestones_url?: string;
            name?: string;
            node_id?: string;
            notifications_url?: string;
            owner?: {
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
            private?: boolean;
            pulls_url?: string;
            releases_url?: string;
            stargazers_url?: string;
            statuses_url?: string;
            subscribers_url?: string;
            subscription_url?: string;
            tags_url?: string;
            teams_url?: string;
            trees_url?: string;
            url?: string;
        };
        rerun_url?: string;
        run_attempt: number;
        run_number: number;
        run_started_at: string;
        status: webhook_deployment_status_created.status;
        triggering_actor: {
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
            type?: webhook_deployment_status_created.type;
            url?: string;
        } | null;
        updated_at: string;
        url: string;
        workflow_id: number;
        workflow_url?: string;
    } | null;
};

export namespace webhook_deployment_status_created {

    export enum action {
        CREATED = 'created',
    }

    /**
     * The result of the completed check run. Can be one of `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` or `stale`. This value will be `null` until the check run has completed.
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
     * The current status of the check run. Can be `queued`, `in_progress`, or `completed`.
     */
    export enum status {
        QUEUED = 'queued',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
        WAITING = 'waiting',
        PENDING = 'pending',
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

