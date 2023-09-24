"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_issues_unlabeled = void 0;
var webhook_issues_unlabeled;
(function (webhook_issues_unlabeled) {
    let action;
    (function (action) {
        action["UNLABELED"] = "unlabeled";
    })(action = webhook_issues_unlabeled.action || (webhook_issues_unlabeled.action = {}));
    let active_lock_reason;
    (function (active_lock_reason) {
        active_lock_reason["RESOLVED"] = "resolved";
        active_lock_reason["OFF_TOPIC"] = "off-topic";
        active_lock_reason["TOO_HEATED"] = "too heated";
        active_lock_reason["SPAM"] = "spam";
    })(active_lock_reason = webhook_issues_unlabeled.active_lock_reason || (webhook_issues_unlabeled.active_lock_reason = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
        type["MANNEQUIN"] = "Mannequin";
    })(type = webhook_issues_unlabeled.type || (webhook_issues_unlabeled.type = {}));
    /**
     * How the author is associated with the repository.
     */
    let author_association;
    (function (author_association) {
        author_association["COLLABORATOR"] = "COLLABORATOR";
        author_association["CONTRIBUTOR"] = "CONTRIBUTOR";
        author_association["FIRST_TIMER"] = "FIRST_TIMER";
        author_association["FIRST_TIME_CONTRIBUTOR"] = "FIRST_TIME_CONTRIBUTOR";
        author_association["MANNEQUIN"] = "MANNEQUIN";
        author_association["MEMBER"] = "MEMBER";
        author_association["NONE"] = "NONE";
        author_association["OWNER"] = "OWNER";
    })(author_association = webhook_issues_unlabeled.author_association || (webhook_issues_unlabeled.author_association = {}));
    /**
     * The state of the milestone.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_issues_unlabeled.state || (webhook_issues_unlabeled.state = {}));
    let actions;
    (function (actions) {
        actions["READ"] = "read";
        actions["WRITE"] = "write";
    })(actions = webhook_issues_unlabeled.actions || (webhook_issues_unlabeled.actions = {}));
    let administration;
    (function (administration) {
        administration["READ"] = "read";
        administration["WRITE"] = "write";
    })(administration = webhook_issues_unlabeled.administration || (webhook_issues_unlabeled.administration = {}));
    let checks;
    (function (checks) {
        checks["READ"] = "read";
        checks["WRITE"] = "write";
    })(checks = webhook_issues_unlabeled.checks || (webhook_issues_unlabeled.checks = {}));
    let content_references;
    (function (content_references) {
        content_references["READ"] = "read";
        content_references["WRITE"] = "write";
    })(content_references = webhook_issues_unlabeled.content_references || (webhook_issues_unlabeled.content_references = {}));
    let contents;
    (function (contents) {
        contents["READ"] = "read";
        contents["WRITE"] = "write";
    })(contents = webhook_issues_unlabeled.contents || (webhook_issues_unlabeled.contents = {}));
    let deployments;
    (function (deployments) {
        deployments["READ"] = "read";
        deployments["WRITE"] = "write";
    })(deployments = webhook_issues_unlabeled.deployments || (webhook_issues_unlabeled.deployments = {}));
    let discussions;
    (function (discussions) {
        discussions["READ"] = "read";
        discussions["WRITE"] = "write";
    })(discussions = webhook_issues_unlabeled.discussions || (webhook_issues_unlabeled.discussions = {}));
    let emails;
    (function (emails) {
        emails["READ"] = "read";
        emails["WRITE"] = "write";
    })(emails = webhook_issues_unlabeled.emails || (webhook_issues_unlabeled.emails = {}));
    let environments;
    (function (environments) {
        environments["READ"] = "read";
        environments["WRITE"] = "write";
    })(environments = webhook_issues_unlabeled.environments || (webhook_issues_unlabeled.environments = {}));
    let issues;
    (function (issues) {
        issues["READ"] = "read";
        issues["WRITE"] = "write";
    })(issues = webhook_issues_unlabeled.issues || (webhook_issues_unlabeled.issues = {}));
    let keys;
    (function (keys) {
        keys["READ"] = "read";
        keys["WRITE"] = "write";
    })(keys = webhook_issues_unlabeled.keys || (webhook_issues_unlabeled.keys = {}));
    let members;
    (function (members) {
        members["READ"] = "read";
        members["WRITE"] = "write";
    })(members = webhook_issues_unlabeled.members || (webhook_issues_unlabeled.members = {}));
    let metadata;
    (function (metadata) {
        metadata["READ"] = "read";
        metadata["WRITE"] = "write";
    })(metadata = webhook_issues_unlabeled.metadata || (webhook_issues_unlabeled.metadata = {}));
    let organization_administration;
    (function (organization_administration) {
        organization_administration["READ"] = "read";
        organization_administration["WRITE"] = "write";
    })(organization_administration = webhook_issues_unlabeled.organization_administration || (webhook_issues_unlabeled.organization_administration = {}));
    let organization_hooks;
    (function (organization_hooks) {
        organization_hooks["READ"] = "read";
        organization_hooks["WRITE"] = "write";
    })(organization_hooks = webhook_issues_unlabeled.organization_hooks || (webhook_issues_unlabeled.organization_hooks = {}));
    let organization_packages;
    (function (organization_packages) {
        organization_packages["READ"] = "read";
        organization_packages["WRITE"] = "write";
    })(organization_packages = webhook_issues_unlabeled.organization_packages || (webhook_issues_unlabeled.organization_packages = {}));
    let organization_plan;
    (function (organization_plan) {
        organization_plan["READ"] = "read";
        organization_plan["WRITE"] = "write";
    })(organization_plan = webhook_issues_unlabeled.organization_plan || (webhook_issues_unlabeled.organization_plan = {}));
    let organization_projects;
    (function (organization_projects) {
        organization_projects["READ"] = "read";
        organization_projects["WRITE"] = "write";
        organization_projects["ADMIN"] = "admin";
    })(organization_projects = webhook_issues_unlabeled.organization_projects || (webhook_issues_unlabeled.organization_projects = {}));
    let organization_secrets;
    (function (organization_secrets) {
        organization_secrets["READ"] = "read";
        organization_secrets["WRITE"] = "write";
    })(organization_secrets = webhook_issues_unlabeled.organization_secrets || (webhook_issues_unlabeled.organization_secrets = {}));
    let organization_self_hosted_runners;
    (function (organization_self_hosted_runners) {
        organization_self_hosted_runners["READ"] = "read";
        organization_self_hosted_runners["WRITE"] = "write";
    })(organization_self_hosted_runners = webhook_issues_unlabeled.organization_self_hosted_runners || (webhook_issues_unlabeled.organization_self_hosted_runners = {}));
    let organization_user_blocking;
    (function (organization_user_blocking) {
        organization_user_blocking["READ"] = "read";
        organization_user_blocking["WRITE"] = "write";
    })(organization_user_blocking = webhook_issues_unlabeled.organization_user_blocking || (webhook_issues_unlabeled.organization_user_blocking = {}));
    let packages;
    (function (packages) {
        packages["READ"] = "read";
        packages["WRITE"] = "write";
    })(packages = webhook_issues_unlabeled.packages || (webhook_issues_unlabeled.packages = {}));
    let pages;
    (function (pages) {
        pages["READ"] = "read";
        pages["WRITE"] = "write";
    })(pages = webhook_issues_unlabeled.pages || (webhook_issues_unlabeled.pages = {}));
    let pull_requests;
    (function (pull_requests) {
        pull_requests["READ"] = "read";
        pull_requests["WRITE"] = "write";
    })(pull_requests = webhook_issues_unlabeled.pull_requests || (webhook_issues_unlabeled.pull_requests = {}));
    let repository_hooks;
    (function (repository_hooks) {
        repository_hooks["READ"] = "read";
        repository_hooks["WRITE"] = "write";
    })(repository_hooks = webhook_issues_unlabeled.repository_hooks || (webhook_issues_unlabeled.repository_hooks = {}));
    let repository_projects;
    (function (repository_projects) {
        repository_projects["READ"] = "read";
        repository_projects["WRITE"] = "write";
    })(repository_projects = webhook_issues_unlabeled.repository_projects || (webhook_issues_unlabeled.repository_projects = {}));
    let secret_scanning_alerts;
    (function (secret_scanning_alerts) {
        secret_scanning_alerts["READ"] = "read";
        secret_scanning_alerts["WRITE"] = "write";
    })(secret_scanning_alerts = webhook_issues_unlabeled.secret_scanning_alerts || (webhook_issues_unlabeled.secret_scanning_alerts = {}));
    let secrets;
    (function (secrets) {
        secrets["READ"] = "read";
        secrets["WRITE"] = "write";
    })(secrets = webhook_issues_unlabeled.secrets || (webhook_issues_unlabeled.secrets = {}));
    let security_events;
    (function (security_events) {
        security_events["READ"] = "read";
        security_events["WRITE"] = "write";
    })(security_events = webhook_issues_unlabeled.security_events || (webhook_issues_unlabeled.security_events = {}));
    let security_scanning_alert;
    (function (security_scanning_alert) {
        security_scanning_alert["READ"] = "read";
        security_scanning_alert["WRITE"] = "write";
    })(security_scanning_alert = webhook_issues_unlabeled.security_scanning_alert || (webhook_issues_unlabeled.security_scanning_alert = {}));
    let single_file;
    (function (single_file) {
        single_file["READ"] = "read";
        single_file["WRITE"] = "write";
    })(single_file = webhook_issues_unlabeled.single_file || (webhook_issues_unlabeled.single_file = {}));
    let statuses;
    (function (statuses) {
        statuses["READ"] = "read";
        statuses["WRITE"] = "write";
    })(statuses = webhook_issues_unlabeled.statuses || (webhook_issues_unlabeled.statuses = {}));
    let team_discussions;
    (function (team_discussions) {
        team_discussions["READ"] = "read";
        team_discussions["WRITE"] = "write";
    })(team_discussions = webhook_issues_unlabeled.team_discussions || (webhook_issues_unlabeled.team_discussions = {}));
    let vulnerability_alerts;
    (function (vulnerability_alerts) {
        vulnerability_alerts["READ"] = "read";
        vulnerability_alerts["WRITE"] = "write";
    })(vulnerability_alerts = webhook_issues_unlabeled.vulnerability_alerts || (webhook_issues_unlabeled.vulnerability_alerts = {}));
    let workflows;
    (function (workflows) {
        workflows["READ"] = "read";
        workflows["WRITE"] = "write";
    })(workflows = webhook_issues_unlabeled.workflows || (webhook_issues_unlabeled.workflows = {}));
})(webhook_issues_unlabeled || (exports.webhook_issues_unlabeled = webhook_issues_unlabeled = {}));
//# sourceMappingURL=webhook_issues_unlabeled.js.map