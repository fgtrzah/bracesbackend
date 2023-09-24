"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_permissions = void 0;
var app_permissions;
(function (app_permissions) {
    /**
     * The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts.
     */
    let actions;
    (function (actions) {
        actions["READ"] = "read";
        actions["WRITE"] = "write";
    })(actions = app_permissions.actions || (app_permissions.actions = {}));
    /**
     * The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation.
     */
    let administration;
    (function (administration) {
        administration["READ"] = "read";
        administration["WRITE"] = "write";
    })(administration = app_permissions.administration || (app_permissions.administration = {}));
    /**
     * The level of permission to grant the access token for checks on code.
     */
    let checks;
    (function (checks) {
        checks["READ"] = "read";
        checks["WRITE"] = "write";
    })(checks = app_permissions.checks || (app_permissions.checks = {}));
    /**
     * The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges.
     */
    let contents;
    (function (contents) {
        contents["READ"] = "read";
        contents["WRITE"] = "write";
    })(contents = app_permissions.contents || (app_permissions.contents = {}));
    /**
     * The level of permission to grant the access token for deployments and deployment statuses.
     */
    let deployments;
    (function (deployments) {
        deployments["READ"] = "read";
        deployments["WRITE"] = "write";
    })(deployments = app_permissions.deployments || (app_permissions.deployments = {}));
    /**
     * The level of permission to grant the access token for managing repository environments.
     */
    let environments;
    (function (environments) {
        environments["READ"] = "read";
        environments["WRITE"] = "write";
    })(environments = app_permissions.environments || (app_permissions.environments = {}));
    /**
     * The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones.
     */
    let issues;
    (function (issues) {
        issues["READ"] = "read";
        issues["WRITE"] = "write";
    })(issues = app_permissions.issues || (app_permissions.issues = {}));
    /**
     * The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata.
     */
    let metadata;
    (function (metadata) {
        metadata["READ"] = "read";
        metadata["WRITE"] = "write";
    })(metadata = app_permissions.metadata || (app_permissions.metadata = {}));
    /**
     * The level of permission to grant the access token for packages published to GitHub Packages.
     */
    let packages;
    (function (packages) {
        packages["READ"] = "read";
        packages["WRITE"] = "write";
    })(packages = app_permissions.packages || (app_permissions.packages = {}));
    /**
     * The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds.
     */
    let pages;
    (function (pages) {
        pages["READ"] = "read";
        pages["WRITE"] = "write";
    })(pages = app_permissions.pages || (app_permissions.pages = {}));
    /**
     * The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges.
     */
    let pull_requests;
    (function (pull_requests) {
        pull_requests["READ"] = "read";
        pull_requests["WRITE"] = "write";
    })(pull_requests = app_permissions.pull_requests || (app_permissions.pull_requests = {}));
    /**
     * The level of permission to grant the access token to manage the post-receive hooks for a repository.
     */
    let repository_hooks;
    (function (repository_hooks) {
        repository_hooks["READ"] = "read";
        repository_hooks["WRITE"] = "write";
    })(repository_hooks = app_permissions.repository_hooks || (app_permissions.repository_hooks = {}));
    /**
     * The level of permission to grant the access token to manage repository projects, columns, and cards.
     */
    let repository_projects;
    (function (repository_projects) {
        repository_projects["READ"] = "read";
        repository_projects["WRITE"] = "write";
        repository_projects["ADMIN"] = "admin";
    })(repository_projects = app_permissions.repository_projects || (app_permissions.repository_projects = {}));
    /**
     * The level of permission to grant the access token to view and manage secret scanning alerts.
     */
    let secret_scanning_alerts;
    (function (secret_scanning_alerts) {
        secret_scanning_alerts["READ"] = "read";
        secret_scanning_alerts["WRITE"] = "write";
    })(secret_scanning_alerts = app_permissions.secret_scanning_alerts || (app_permissions.secret_scanning_alerts = {}));
    /**
     * The level of permission to grant the access token to manage repository secrets.
     */
    let secrets;
    (function (secrets) {
        secrets["READ"] = "read";
        secrets["WRITE"] = "write";
    })(secrets = app_permissions.secrets || (app_permissions.secrets = {}));
    /**
     * The level of permission to grant the access token to view and manage security events like code scanning alerts.
     */
    let security_events;
    (function (security_events) {
        security_events["READ"] = "read";
        security_events["WRITE"] = "write";
    })(security_events = app_permissions.security_events || (app_permissions.security_events = {}));
    /**
     * The level of permission to grant the access token to manage just a single file.
     */
    let single_file;
    (function (single_file) {
        single_file["READ"] = "read";
        single_file["WRITE"] = "write";
    })(single_file = app_permissions.single_file || (app_permissions.single_file = {}));
    /**
     * The level of permission to grant the access token for commit statuses.
     */
    let statuses;
    (function (statuses) {
        statuses["READ"] = "read";
        statuses["WRITE"] = "write";
    })(statuses = app_permissions.statuses || (app_permissions.statuses = {}));
    /**
     * The level of permission to grant the access token to manage Dependabot alerts.
     */
    let vulnerability_alerts;
    (function (vulnerability_alerts) {
        vulnerability_alerts["READ"] = "read";
        vulnerability_alerts["WRITE"] = "write";
    })(vulnerability_alerts = app_permissions.vulnerability_alerts || (app_permissions.vulnerability_alerts = {}));
    /**
     * The level of permission to grant the access token to update GitHub Actions workflow files.
     */
    let workflows;
    (function (workflows) {
        workflows["WRITE"] = "write";
    })(workflows = app_permissions.workflows || (app_permissions.workflows = {}));
    /**
     * The level of permission to grant the access token for organization teams and members.
     */
    let members;
    (function (members) {
        members["READ"] = "read";
        members["WRITE"] = "write";
    })(members = app_permissions.members || (app_permissions.members = {}));
    /**
     * The level of permission to grant the access token to manage access to an organization.
     */
    let organization_administration;
    (function (organization_administration) {
        organization_administration["READ"] = "read";
        organization_administration["WRITE"] = "write";
    })(organization_administration = app_permissions.organization_administration || (app_permissions.organization_administration = {}));
    /**
     * The level of permission to grant the access token for custom repository roles management. This property is in beta and is subject to change.
     */
    let organization_custom_roles;
    (function (organization_custom_roles) {
        organization_custom_roles["READ"] = "read";
        organization_custom_roles["WRITE"] = "write";
    })(organization_custom_roles = app_permissions.organization_custom_roles || (app_permissions.organization_custom_roles = {}));
    /**
     * The level of permission to grant the access token to view and manage announcement banners for an organization.
     */
    let organization_announcement_banners;
    (function (organization_announcement_banners) {
        organization_announcement_banners["READ"] = "read";
        organization_announcement_banners["WRITE"] = "write";
    })(organization_announcement_banners = app_permissions.organization_announcement_banners || (app_permissions.organization_announcement_banners = {}));
    /**
     * The level of permission to grant the access token to manage the post-receive hooks for an organization.
     */
    let organization_hooks;
    (function (organization_hooks) {
        organization_hooks["READ"] = "read";
        organization_hooks["WRITE"] = "write";
    })(organization_hooks = app_permissions.organization_hooks || (app_permissions.organization_hooks = {}));
    /**
     * The level of permission to grant the access token for viewing and managing fine-grained personal access token requests to an organization.
     */
    let organization_personal_access_tokens;
    (function (organization_personal_access_tokens) {
        organization_personal_access_tokens["READ"] = "read";
        organization_personal_access_tokens["WRITE"] = "write";
    })(organization_personal_access_tokens = app_permissions.organization_personal_access_tokens || (app_permissions.organization_personal_access_tokens = {}));
    /**
     * The level of permission to grant the access token for viewing and managing fine-grained personal access tokens that have been approved by an organization.
     */
    let organization_personal_access_token_requests;
    (function (organization_personal_access_token_requests) {
        organization_personal_access_token_requests["READ"] = "read";
        organization_personal_access_token_requests["WRITE"] = "write";
    })(organization_personal_access_token_requests = app_permissions.organization_personal_access_token_requests || (app_permissions.organization_personal_access_token_requests = {}));
    /**
     * The level of permission to grant the access token for viewing an organization's plan.
     */
    let organization_plan;
    (function (organization_plan) {
        organization_plan["READ"] = "read";
    })(organization_plan = app_permissions.organization_plan || (app_permissions.organization_plan = {}));
    /**
     * The level of permission to grant the access token to manage organization projects and projects beta (where available).
     */
    let organization_projects;
    (function (organization_projects) {
        organization_projects["READ"] = "read";
        organization_projects["WRITE"] = "write";
        organization_projects["ADMIN"] = "admin";
    })(organization_projects = app_permissions.organization_projects || (app_permissions.organization_projects = {}));
    /**
     * The level of permission to grant the access token for organization packages published to GitHub Packages.
     */
    let organization_packages;
    (function (organization_packages) {
        organization_packages["READ"] = "read";
        organization_packages["WRITE"] = "write";
    })(organization_packages = app_permissions.organization_packages || (app_permissions.organization_packages = {}));
    /**
     * The level of permission to grant the access token to manage organization secrets.
     */
    let organization_secrets;
    (function (organization_secrets) {
        organization_secrets["READ"] = "read";
        organization_secrets["WRITE"] = "write";
    })(organization_secrets = app_permissions.organization_secrets || (app_permissions.organization_secrets = {}));
    /**
     * The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization.
     */
    let organization_self_hosted_runners;
    (function (organization_self_hosted_runners) {
        organization_self_hosted_runners["READ"] = "read";
        organization_self_hosted_runners["WRITE"] = "write";
    })(organization_self_hosted_runners = app_permissions.organization_self_hosted_runners || (app_permissions.organization_self_hosted_runners = {}));
    /**
     * The level of permission to grant the access token to view and manage users blocked by the organization.
     */
    let organization_user_blocking;
    (function (organization_user_blocking) {
        organization_user_blocking["READ"] = "read";
        organization_user_blocking["WRITE"] = "write";
    })(organization_user_blocking = app_permissions.organization_user_blocking || (app_permissions.organization_user_blocking = {}));
    /**
     * The level of permission to grant the access token to manage team discussions and related comments.
     */
    let team_discussions;
    (function (team_discussions) {
        team_discussions["READ"] = "read";
        team_discussions["WRITE"] = "write";
    })(team_discussions = app_permissions.team_discussions || (app_permissions.team_discussions = {}));
})(app_permissions || (exports.app_permissions = app_permissions = {}));
//# sourceMappingURL=app_permissions.js.map