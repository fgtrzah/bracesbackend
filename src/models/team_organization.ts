/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Team Organization
 */
export type team_organization = {
    login: string;
    id: number;
    node_id: string;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description: string | null;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    twitter_username?: string | null;
    is_verified?: boolean;
    has_organization_projects: boolean;
    has_repository_projects: boolean;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    html_url: string;
    created_at: string;
    type: string;
    total_private_repos?: number;
    owned_private_repos?: number;
    private_gists?: number | null;
    disk_usage?: number | null;
    collaborators?: number | null;
    billing_email?: string | null;
    plan?: {
        name: string;
        space: number;
        private_repos: number;
        filled_seats?: number;
        seats?: number;
    };
    default_repository_permission?: string | null;
    members_can_create_repositories?: boolean | null;
    two_factor_requirement_enabled?: boolean | null;
    members_allowed_repository_creation_type?: string;
    members_can_create_public_repositories?: boolean;
    members_can_create_private_repositories?: boolean;
    members_can_create_internal_repositories?: boolean;
    members_can_create_pages?: boolean;
    members_can_create_public_pages?: boolean;
    members_can_create_private_pages?: boolean;
    members_can_fork_private_repositories?: boolean | null;
    web_commit_signoff_required?: boolean;
    updated_at: string;
    archived_at: string | null;
};

