/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_deployment_review_rejected = {
    action: webhook_deployment_review_rejected.action;
    approver?: {
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
    comment?: string;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization: organization_simple_webhooks;
    repository: repository_webhooks;
    reviewers?: Array<{
        reviewer?: {
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
        type?: 'User';
    }>;
    sender: simple_user_webhooks;
    since: string;
    workflow_job_run?: {
        conclusion: any;
        created_at: string;
        environment: string;
        html_url: string;
        id: number;
        name: any;
        status: string;
        updated_at: string;
    };
    workflow_job_runs?: Array<{
        conclusion?: string | null;
        created_at?: string;
        environment?: string;
        html_url?: string;
        id?: number;
        name?: string | null;
        status?: string;
        updated_at?: string;
    }>;
    workflow_run: {
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
            type?: webhook_deployment_review_rejected.type;
            url?: string;
        } | null;
        artifacts_url?: string;
        cancel_url?: string;
        check_suite_id: number;
        check_suite_node_id: string;
        check_suite_url?: string;
        conclusion: webhook_deployment_review_rejected.conclusion | null;
        created_at: string;
        event: string;
        head_branch: string;
        head_commit?: Record<string, any> | null;
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
            description?: string | null;
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
        previous_attempt_url?: string | null;
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
            description?: string | null;
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
        status: webhook_deployment_review_rejected.status;
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
            type?: webhook_deployment_review_rejected.type;
            url?: string;
        } | null;
        updated_at: string;
        url: string;
        workflow_id: number;
        workflow_url?: string;
        display_title: string;
    } | null;
};

export namespace webhook_deployment_review_rejected {

    export enum action {
        REJECTED = 'rejected',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }

    export enum conclusion {
        SUCCESS = 'success',
        FAILURE = 'failure',
        NEUTRAL = 'neutral',
        CANCELLED = 'cancelled',
        TIMED_OUT = 'timed_out',
        ACTION_REQUIRED = 'action_required',
        STALE = 'stale',
    }

    export enum status {
        REQUESTED = 'requested',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
        QUEUED = 'queued',
        WAITING = 'waiting',
    }


}

