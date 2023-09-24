/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Organization Full
 */
export type organization_full = {
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
    /**
     * Whether GitHub Advanced Security is enabled for new repositories and repositories transferred to this organization.
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    advanced_security_enabled_for_new_repositories?: boolean;
    /**
     * Whether GitHub Advanced Security is automatically enabled for new repositories and repositories transferred to
     * this organization.
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    dependabot_alerts_enabled_for_new_repositories?: boolean;
    /**
     * Whether dependabot security updates are automatically enabled for new repositories and repositories transferred
     * to this organization.
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    dependabot_security_updates_enabled_for_new_repositories?: boolean;
    /**
     * Whether dependency graph is automatically enabled for new repositories and repositories transferred to this
     * organization.
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    dependency_graph_enabled_for_new_repositories?: boolean;
    /**
     * Whether secret scanning is automatically enabled for new repositories and repositories transferred to this
     * organization.
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    secret_scanning_enabled_for_new_repositories?: boolean;
    /**
     * Whether secret scanning push protection is automatically enabled for new repositories and repositories
     * transferred to this organization.
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    secret_scanning_push_protection_enabled_for_new_repositories?: boolean;
    /**
     * Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection.
     */
    secret_scanning_push_protection_custom_link_enabled?: boolean;
    /**
     * An optional URL string to display to contributors who are blocked from pushing a secret.
     */
    secret_scanning_push_protection_custom_link?: string | null;
    created_at: string;
    updated_at: string;
    archived_at: string | null;
};

