"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_issue_comment_deleted = void 0;
var webhook_issue_comment_deleted;
(function (webhook_issue_comment_deleted) {
    let action;
    (function (action) {
        action["DELETED"] = "deleted";
    })(action = webhook_issue_comment_deleted.action || (webhook_issue_comment_deleted.action = {}));
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
    })(author_association = webhook_issue_comment_deleted.author_association || (webhook_issue_comment_deleted.author_association = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
        type["MANNEQUIN"] = "Mannequin";
    })(type = webhook_issue_comment_deleted.type || (webhook_issue_comment_deleted.type = {}));
    let active_lock_reason;
    (function (active_lock_reason) {
        active_lock_reason["RESOLVED"] = "resolved";
        active_lock_reason["OFF_TOPIC"] = "off-topic";
        active_lock_reason["TOO_HEATED"] = "too heated";
        active_lock_reason["SPAM"] = "spam";
    })(active_lock_reason = webhook_issue_comment_deleted.active_lock_reason || (webhook_issue_comment_deleted.active_lock_reason = {}));
    /**
     * The state of the milestone.
     */
    let state;
    (function (state) {
        state["OPEN"] = "open";
        state["CLOSED"] = "closed";
    })(state = webhook_issue_comment_deleted.state || (webhook_issue_comment_deleted.state = {}));
    let actions;
    (function (actions) {
        actions["READ"] = "read";
        actions["WRITE"] = "write";
    })(actions = webhook_issue_comment_deleted.actions || (webhook_issue_comment_deleted.actions = {}));
    let administration;
    (function (administration) {
        administration["READ"] = "read";
        administration["WRITE"] = "write";
    })(administration = webhook_issue_comment_deleted.administration || (webhook_issue_comment_deleted.administration = {}));
    let checks;
    (function (checks) {
        checks["READ"] = "read";
        checks["WRITE"] = "write";
    })(checks = webhook_issue_comment_deleted.checks || (webhook_issue_comment_deleted.checks = {}));
    let content_references;
    (function (content_references) {
        content_references["READ"] = "read";
        content_references["WRITE"] = "write";
    })(content_references = webhook_issue_comment_deleted.content_references || (webhook_issue_comment_deleted.content_references = {}));
    let contents;
    (function (contents) {
        contents["READ"] = "read";
        contents["WRITE"] = "write";
    })(contents = webhook_issue_comment_deleted.contents || (webhook_issue_comment_deleted.contents = {}));
    let deployments;
    (function (deployments) {
        deployments["READ"] = "read";
        deployments["WRITE"] = "write";
    })(deployments = webhook_issue_comment_deleted.deployments || (webhook_issue_comment_deleted.deployments = {}));
    let discussions;
    (function (discussions) {
        discussions["READ"] = "read";
        discussions["WRITE"] = "write";
    })(discussions = webhook_issue_comment_deleted.discussions || (webhook_issue_comment_deleted.discussions = {}));
    let emails;
    (function (emails) {
        emails["READ"] = "read";
        emails["WRITE"] = "write";
    })(emails = webhook_issue_comment_deleted.emails || (webhook_issue_comment_deleted.emails = {}));
    let environments;
    (function (environments) {
        environments["READ"] = "read";
        environments["WRITE"] = "write";
    })(environments = webhook_issue_comment_deleted.environments || (webhook_issue_comment_deleted.environments = {}));
    let issues;
    (function (issues) {
        issues["READ"] = "read";
        issues["WRITE"] = "write";
    })(issues = webhook_issue_comment_deleted.issues || (webhook_issue_comment_deleted.issues = {}));
    let keys;
    (function (keys) {
        keys["READ"] = "read";
        keys["WRITE"] = "write";
    })(keys = webhook_issue_comment_deleted.keys || (webhook_issue_comment_deleted.keys = {}));
    let members;
    (function (members) {
        members["READ"] = "read";
        members["WRITE"] = "write";
    })(members = webhook_issue_comment_deleted.members || (webhook_issue_comment_deleted.members = {}));
    let metadata;
    (function (metadata) {
        metadata["READ"] = "read";
        metadata["WRITE"] = "write";
    })(metadata = webhook_issue_comment_deleted.metadata || (webhook_issue_comment_deleted.metadata = {}));
    let organization_administration;
    (function (organization_administration) {
        organization_administration["READ"] = "read";
        organization_administration["WRITE"] = "write";
    })(organization_administration = webhook_issue_comment_deleted.organization_administration || (webhook_issue_comment_deleted.organization_administration = {}));
    let organization_hooks;
    (function (organization_hooks) {
        organization_hooks["READ"] = "read";
        organization_hooks["WRITE"] = "write";
    })(organization_hooks = webhook_issue_comment_deleted.organization_hooks || (webhook_issue_comment_deleted.organization_hooks = {}));
    let organization_packages;
    (function (organization_packages) {
        organization_packages["READ"] = "read";
        organization_packages["WRITE"] = "write";
    })(organization_packages = webhook_issue_comment_deleted.organization_packages || (webhook_issue_comment_deleted.organization_packages = {}));
    let organization_plan;
    (function (organization_plan) {
        organization_plan["READ"] = "read";
        organization_plan["WRITE"] = "write";
    })(organization_plan = webhook_issue_comment_deleted.organization_plan || (webhook_issue_comment_deleted.organization_plan = {}));
    let organization_projects;
    (function (organization_projects) {
        organization_projects["READ"] = "read";
        organization_projects["WRITE"] = "write";
    })(organization_projects = webhook_issue_comment_deleted.organization_projects || (webhook_issue_comment_deleted.organization_projects = {}));
    let organization_secrets;
    (function (organization_secrets) {
        organization_secrets["READ"] = "read";
        organization_secrets["WRITE"] = "write";
    })(organization_secrets = webhook_issue_comment_deleted.organization_secrets || (webhook_issue_comment_deleted.organization_secrets = {}));
    let organization_self_hosted_runners;
    (function (organization_self_hosted_runners) {
        organization_self_hosted_runners["READ"] = "read";
        organization_self_hosted_runners["WRITE"] = "write";
    })(organization_self_hosted_runners = webhook_issue_comment_deleted.organization_self_hosted_runners || (webhook_issue_comment_deleted.organization_self_hosted_runners = {}));
    let organization_user_blocking;
    (function (organization_user_blocking) {
        organization_user_blocking["READ"] = "read";
        organization_user_blocking["WRITE"] = "write";
    })(organization_user_blocking = webhook_issue_comment_deleted.organization_user_blocking || (webhook_issue_comment_deleted.organization_user_blocking = {}));
    let packages;
    (function (packages) {
        packages["READ"] = "read";
        packages["WRITE"] = "write";
    })(packages = webhook_issue_comment_deleted.packages || (webhook_issue_comment_deleted.packages = {}));
    let pages;
    (function (pages) {
        pages["READ"] = "read";
        pages["WRITE"] = "write";
    })(pages = webhook_issue_comment_deleted.pages || (webhook_issue_comment_deleted.pages = {}));
    let pull_requests;
    (function (pull_requests) {
        pull_requests["READ"] = "read";
        pull_requests["WRITE"] = "write";
    })(pull_requests = webhook_issue_comment_deleted.pull_requests || (webhook_issue_comment_deleted.pull_requests = {}));
    let repository_hooks;
    (function (repository_hooks) {
        repository_hooks["READ"] = "read";
        repository_hooks["WRITE"] = "write";
    })(repository_hooks = webhook_issue_comment_deleted.repository_hooks || (webhook_issue_comment_deleted.repository_hooks = {}));
    let repository_projects;
    (function (repository_projects) {
        repository_projects["READ"] = "read";
        repository_projects["WRITE"] = "write";
    })(repository_projects = webhook_issue_comment_deleted.repository_projects || (webhook_issue_comment_deleted.repository_projects = {}));
    let secret_scanning_alerts;
    (function (secret_scanning_alerts) {
        secret_scanning_alerts["READ"] = "read";
        secret_scanning_alerts["WRITE"] = "write";
    })(secret_scanning_alerts = webhook_issue_comment_deleted.secret_scanning_alerts || (webhook_issue_comment_deleted.secret_scanning_alerts = {}));
    let secrets;
    (function (secrets) {
        secrets["READ"] = "read";
        secrets["WRITE"] = "write";
    })(secrets = webhook_issue_comment_deleted.secrets || (webhook_issue_comment_deleted.secrets = {}));
    let security_events;
    (function (security_events) {
        security_events["READ"] = "read";
        security_events["WRITE"] = "write";
    })(security_events = webhook_issue_comment_deleted.security_events || (webhook_issue_comment_deleted.security_events = {}));
    let security_scanning_alert;
    (function (security_scanning_alert) {
        security_scanning_alert["READ"] = "read";
        security_scanning_alert["WRITE"] = "write";
    })(security_scanning_alert = webhook_issue_comment_deleted.security_scanning_alert || (webhook_issue_comment_deleted.security_scanning_alert = {}));
    let single_file;
    (function (single_file) {
        single_file["READ"] = "read";
        single_file["WRITE"] = "write";
    })(single_file = webhook_issue_comment_deleted.single_file || (webhook_issue_comment_deleted.single_file = {}));
    let statuses;
    (function (statuses) {
        statuses["READ"] = "read";
        statuses["WRITE"] = "write";
    })(statuses = webhook_issue_comment_deleted.statuses || (webhook_issue_comment_deleted.statuses = {}));
    let team_discussions;
    (function (team_discussions) {
        team_discussions["READ"] = "read";
        team_discussions["WRITE"] = "write";
    })(team_discussions = webhook_issue_comment_deleted.team_discussions || (webhook_issue_comment_deleted.team_discussions = {}));
    let vulnerability_alerts;
    (function (vulnerability_alerts) {
        vulnerability_alerts["READ"] = "read";
        vulnerability_alerts["WRITE"] = "write";
    })(vulnerability_alerts = webhook_issue_comment_deleted.vulnerability_alerts || (webhook_issue_comment_deleted.vulnerability_alerts = {}));
    let workflows;
    (function (workflows) {
        workflows["READ"] = "read";
        workflows["WRITE"] = "write";
    })(workflows = webhook_issue_comment_deleted.workflows || (webhook_issue_comment_deleted.workflows = {}));
})(webhook_issue_comment_deleted || (exports.webhook_issue_comment_deleted = webhook_issue_comment_deleted = {}));
//# sourceMappingURL=webhook_issue_comment_deleted.js.map