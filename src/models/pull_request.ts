/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { author_association } from './author_association';
import type { auto_merge } from './auto_merge';
import type { link } from './link';
import type { nullable_license_simple } from './nullable_license_simple';
import type { nullable_milestone } from './nullable_milestone';
import type { nullable_simple_user } from './nullable_simple_user';
import type { simple_user } from './simple_user';
import type { team_simple } from './team_simple';

/**
 * Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
 */
export type pull_request = {
    url: string;
    id: number;
    node_id: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    issue_url: string;
    commits_url: string;
    review_comments_url: string;
    review_comment_url: string;
    comments_url: string;
    statuses_url: string;
    /**
     * Number uniquely identifying the pull request within its repository.
     */
    number: number;
    /**
     * State of this Pull Request. Either `open` or `closed`.
     */
    state: pull_request.state;
    locked: boolean;
    /**
     * The title of the pull request.
     */
    title: string;
    user: simple_user;
    body: string | null;
    labels: Array<{
        id: number;
        node_id: string;
        url: string;
        name: string;
        description: string | null;
        color: string;
        default: boolean;
    }>;
    milestone: nullable_milestone;
    active_lock_reason?: string | null;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    merged_at: string | null;
    merge_commit_sha: string | null;
    assignee: nullable_simple_user;
    assignees?: Array<simple_user> | null;
    requested_reviewers?: Array<simple_user> | null;
    requested_teams?: Array<team_simple> | null;
    head: {
        label: string;
        ref: string;
        repo: {
            archive_url: string;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            contributors_url: string;
            deployments_url: string;
            description: string | null;
            downloads_url: string;
            events_url: string;
            fork: boolean;
            forks_url: string;
            full_name: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            hooks_url: string;
            html_url: string;
            id: number;
            node_id: string;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            languages_url: string;
            merges_url: string;
            milestones_url: string;
            name: string;
            notifications_url: string;
            owner: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string | null;
                html_url: string;
                id: number;
                node_id: string;
                login: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            private: boolean;
            pulls_url: string;
            releases_url: string;
            stargazers_url: string;
            statuses_url: string;
            subscribers_url: string;
            subscription_url: string;
            tags_url: string;
            teams_url: string;
            trees_url: string;
            url: string;
            clone_url: string;
            default_branch: string;
            forks: number;
            forks_count: number;
            git_url: string;
            has_downloads: boolean;
            has_issues: boolean;
            has_projects: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            has_discussions: boolean;
            homepage: string | null;
            language: string | null;
            master_branch?: string;
            archived: boolean;
            disabled: boolean;
            /**
             * The repository visibility: public, private, or internal.
             */
            visibility?: string;
            mirror_url: string | null;
            open_issues: number;
            open_issues_count: number;
            permissions?: {
                admin: boolean;
                maintain?: boolean;
                push: boolean;
                triage?: boolean;
                pull: boolean;
            };
            temp_clone_token?: string;
            allow_merge_commit?: boolean;
            allow_squash_merge?: boolean;
            allow_rebase_merge?: boolean;
            license: {
                key: string;
                name: string;
                url: string | null;
                spdx_id: string | null;
                node_id: string;
            } | null;
            pushed_at: string;
            size: number;
            ssh_url: string;
            stargazers_count: number;
            svn_url: string;
            topics?: Array<string>;
            watchers: number;
            watchers_count: number;
            created_at: string;
            updated_at: string;
            allow_forking?: boolean;
            is_template?: boolean;
            web_commit_signoff_required?: boolean;
        } | null;
        sha: string;
        user: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string | null;
            html_url: string;
            id: number;
            node_id: string;
            login: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        };
    };
    base: {
        label: string;
        ref: string;
        repo: {
            archive_url: string;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            contributors_url: string;
            deployments_url: string;
            description: string | null;
            downloads_url: string;
            events_url: string;
            fork: boolean;
            forks_url: string;
            full_name: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            hooks_url: string;
            html_url: string;
            id: number;
            is_template?: boolean;
            node_id: string;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            languages_url: string;
            merges_url: string;
            milestones_url: string;
            name: string;
            notifications_url: string;
            owner: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string | null;
                html_url: string;
                id: number;
                node_id: string;
                login: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            private: boolean;
            pulls_url: string;
            releases_url: string;
            stargazers_url: string;
            statuses_url: string;
            subscribers_url: string;
            subscription_url: string;
            tags_url: string;
            teams_url: string;
            trees_url: string;
            url: string;
            clone_url: string;
            default_branch: string;
            forks: number;
            forks_count: number;
            git_url: string;
            has_downloads: boolean;
            has_issues: boolean;
            has_projects: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            has_discussions: boolean;
            homepage: string | null;
            language: string | null;
            master_branch?: string;
            archived: boolean;
            disabled: boolean;
            /**
             * The repository visibility: public, private, or internal.
             */
            visibility?: string;
            mirror_url: string | null;
            open_issues: number;
            open_issues_count: number;
            permissions?: {
                admin: boolean;
                maintain?: boolean;
                push: boolean;
                triage?: boolean;
                pull: boolean;
            };
            temp_clone_token?: string;
            allow_merge_commit?: boolean;
            allow_squash_merge?: boolean;
            allow_rebase_merge?: boolean;
            license: nullable_license_simple;
            pushed_at: string;
            size: number;
            ssh_url: string;
            stargazers_count: number;
            svn_url: string;
            topics?: Array<string>;
            watchers: number;
            watchers_count: number;
            created_at: string;
            updated_at: string;
            allow_forking?: boolean;
            web_commit_signoff_required?: boolean;
        };
        sha: string;
        user: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string | null;
            html_url: string;
            id: number;
            node_id: string;
            login: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        };
    };
    _links: {
        comments: link;
        commits: link;
        statuses: link;
        html: link;
        issue: link;
        review_comments: link;
        review_comment: link;
        self: link;
    };
    author_association: author_association;
    auto_merge: auto_merge;
    /**
     * Indicates whether or not the pull request is a draft.
     */
    draft?: boolean;
    merged: boolean;
    mergeable: boolean | null;
    rebaseable?: boolean | null;
    mergeable_state: string;
    merged_by: nullable_simple_user;
    comments: number;
    review_comments: number;
    /**
     * Indicates whether maintainers can modify the pull request.
     */
    maintainer_can_modify: boolean;
    commits: number;
    additions: number;
    deletions: number;
    changed_files: number;
};

export namespace pull_request {

    /**
     * State of this Pull Request. Either `open` or `closed`.
     */
    export enum state {
        OPEN = 'open',
        CLOSED = 'closed',
    }


}

