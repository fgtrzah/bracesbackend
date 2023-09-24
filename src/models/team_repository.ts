/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_license_simple } from './nullable_license_simple';
import type { nullable_repository } from './nullable_repository';
import type { nullable_simple_user } from './nullable_simple_user';

/**
 * A team's access to a repository.
 */
export type team_repository = {
    /**
     * Unique identifier of the repository
     */
    id: number;
    node_id: string;
    /**
     * The name of the repository.
     */
    name: string;
    full_name: string;
    license: nullable_license_simple;
    forks: number;
    permissions?: {
        admin: boolean;
        pull: boolean;
        triage?: boolean;
        push: boolean;
        maintain?: boolean;
    };
    role_name?: string;
    owner: nullable_simple_user;
    /**
     * Whether the repository is private or public.
     */
    private: boolean;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
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
    downloads_url: string;
    events_url: string;
    forks_url: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url: string;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    languages_url: string;
    merges_url: string;
    milestones_url: string;
    notifications_url: string;
    pulls_url: string;
    releases_url: string;
    ssh_url: string;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    tags_url: string;
    teams_url: string;
    trees_url: string;
    clone_url: string;
    mirror_url: string | null;
    hooks_url: string;
    svn_url: string;
    homepage: string | null;
    language: string | null;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    size: number;
    /**
     * The default branch of the repository.
     */
    default_branch: string;
    open_issues_count: number;
    /**
     * Whether this repository acts as a template that can be used to generate new repositories.
     */
    is_template?: boolean;
    topics?: Array<string>;
    /**
     * Whether issues are enabled.
     */
    has_issues: boolean;
    /**
     * Whether projects are enabled.
     */
    has_projects: boolean;
    /**
     * Whether the wiki is enabled.
     */
    has_wiki: boolean;
    has_pages: boolean;
    /**
     * Whether downloads are enabled.
     */
    has_downloads: boolean;
    /**
     * Whether the repository is archived.
     */
    archived: boolean;
    /**
     * Returns whether or not this repository disabled.
     */
    disabled: boolean;
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?: string;
    pushed_at: string | null;
    created_at: string | null;
    updated_at: string | null;
    /**
     * Whether to allow rebase merges for pull requests.
     */
    allow_rebase_merge?: boolean;
    template_repository?: nullable_repository;
    temp_clone_token?: string;
    /**
     * Whether to allow squash merges for pull requests.
     */
    allow_squash_merge?: boolean;
    /**
     * Whether to allow Auto-merge to be used on pull requests.
     */
    allow_auto_merge?: boolean;
    /**
     * Whether to delete head branches when pull requests are merged
     */
    delete_branch_on_merge?: boolean;
    /**
     * Whether to allow merge commits for pull requests.
     */
    allow_merge_commit?: boolean;
    /**
     * Whether to allow forking this repo
     */
    allow_forking?: boolean;
    /**
     * Whether to require contributors to sign off on web-based commits
     */
    web_commit_signoff_required?: boolean;
    subscribers_count?: number;
    network_count?: number;
    open_issues: number;
    watchers: number;
    master_branch?: string;
};

