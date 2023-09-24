/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * GitHub account for managing multiple users, teams, and repositories
 */
export type organization = {
    /**
     * Unique login name of the organization
     */
    login: string;
    /**
     * URL for the organization
     */
    url: string;
    id: number;
    node_id: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description: string | null;
    /**
     * Display blog url for the organization
     */
    blog?: string;
    html_url: string;
    /**
     * Display name for the organization
     */
    name?: string;
    /**
     * Display company name for the organization
     */
    company?: string;
    /**
     * Display location for the organization
     */
    location?: string;
    /**
     * Display email for the organization
     */
    email?: string;
    /**
     * Specifies if organization projects are enabled for this org
     */
    has_organization_projects: boolean;
    /**
     * Specifies if repository projects are enabled for repositories that belong to this org
     */
    has_repository_projects: boolean;
    is_verified?: boolean;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    type: string;
    created_at: string;
    updated_at: string;
    plan?: {
        name?: string;
        space?: number;
        private_repos?: number;
        filled_seats?: number;
        seats?: number;
    };
};

