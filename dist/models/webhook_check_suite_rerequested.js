"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook_check_suite_rerequested = void 0;
var webhook_check_suite_rerequested;
(function (webhook_check_suite_rerequested) {
    let action;
    (function (action) {
        action["REREQUESTED"] = "rerequested";
    })(action = webhook_check_suite_rerequested.action || (webhook_check_suite_rerequested.action = {}));
    let type;
    (function (type) {
        type["BOT"] = "Bot";
        type["USER"] = "User";
        type["ORGANIZATION"] = "Organization";
    })(type = webhook_check_suite_rerequested.type || (webhook_check_suite_rerequested.type = {}));
    let actions;
    (function (actions) {
        actions["READ"] = "read";
        actions["WRITE"] = "write";
    })(actions = webhook_check_suite_rerequested.actions || (webhook_check_suite_rerequested.actions = {}));
    let administration;
    (function (administration) {
        administration["READ"] = "read";
        administration["WRITE"] = "write";
    })(administration = webhook_check_suite_rerequested.administration || (webhook_check_suite_rerequested.administration = {}));
    let checks;
    (function (checks) {
        checks["READ"] = "read";
        checks["WRITE"] = "write";
    })(checks = webhook_check_suite_rerequested.checks || (webhook_check_suite_rerequested.checks = {}));
    let content_references;
    (function (content_references) {
        content_references["READ"] = "read";
        content_references["WRITE"] = "write";
    })(content_references = webhook_check_suite_rerequested.content_references || (webhook_check_suite_rerequested.content_references = {}));
    let contents;
    (function (contents) {
        contents["READ"] = "read";
        contents["WRITE"] = "write";
    })(contents = webhook_check_suite_rerequested.contents || (webhook_check_suite_rerequested.contents = {}));
    let deployments;
    (function (deployments) {
        deployments["READ"] = "read";
        deployments["WRITE"] = "write";
    })(deployments = webhook_check_suite_rerequested.deployments || (webhook_check_suite_rerequested.deployments = {}));
    let discussions;
    (function (discussions) {
        discussions["READ"] = "read";
        discussions["WRITE"] = "write";
    })(discussions = webhook_check_suite_rerequested.discussions || (webhook_check_suite_rerequested.discussions = {}));
    let emails;
    (function (emails) {
        emails["READ"] = "read";
        emails["WRITE"] = "write";
    })(emails = webhook_check_suite_rerequested.emails || (webhook_check_suite_rerequested.emails = {}));
    let environments;
    (function (environments) {
        environments["READ"] = "read";
        environments["WRITE"] = "write";
    })(environments = webhook_check_suite_rerequested.environments || (webhook_check_suite_rerequested.environments = {}));
    let issues;
    (function (issues) {
        issues["READ"] = "read";
        issues["WRITE"] = "write";
    })(issues = webhook_check_suite_rerequested.issues || (webhook_check_suite_rerequested.issues = {}));
    let keys;
    (function (keys) {
        keys["READ"] = "read";
        keys["WRITE"] = "write";
    })(keys = webhook_check_suite_rerequested.keys || (webhook_check_suite_rerequested.keys = {}));
    let members;
    (function (members) {
        members["READ"] = "read";
        members["WRITE"] = "write";
    })(members = webhook_check_suite_rerequested.members || (webhook_check_suite_rerequested.members = {}));
    let metadata;
    (function (metadata) {
        metadata["READ"] = "read";
        metadata["WRITE"] = "write";
    })(metadata = webhook_check_suite_rerequested.metadata || (webhook_check_suite_rerequested.metadata = {}));
    let organization_administration;
    (function (organization_administration) {
        organization_administration["READ"] = "read";
        organization_administration["WRITE"] = "write";
    })(organization_administration = webhook_check_suite_rerequested.organization_administration || (webhook_check_suite_rerequested.organization_administration = {}));
    let organization_hooks;
    (function (organization_hooks) {
        organization_hooks["READ"] = "read";
        organization_hooks["WRITE"] = "write";
    })(organization_hooks = webhook_check_suite_rerequested.organization_hooks || (webhook_check_suite_rerequested.organization_hooks = {}));
    let organization_packages;
    (function (organization_packages) {
        organization_packages["READ"] = "read";
        organization_packages["WRITE"] = "write";
    })(organization_packages = webhook_check_suite_rerequested.organization_packages || (webhook_check_suite_rerequested.organization_packages = {}));
    let organization_plan;
    (function (organization_plan) {
        organization_plan["READ"] = "read";
        organization_plan["WRITE"] = "write";
    })(organization_plan = webhook_check_suite_rerequested.organization_plan || (webhook_check_suite_rerequested.organization_plan = {}));
    let organization_projects;
    (function (organization_projects) {
        organization_projects["READ"] = "read";
        organization_projects["WRITE"] = "write";
        organization_projects["ADMIN"] = "admin";
    })(organization_projects = webhook_check_suite_rerequested.organization_projects || (webhook_check_suite_rerequested.organization_projects = {}));
    let organization_secrets;
    (function (organization_secrets) {
        organization_secrets["READ"] = "read";
        organization_secrets["WRITE"] = "write";
    })(organization_secrets = webhook_check_suite_rerequested.organization_secrets || (webhook_check_suite_rerequested.organization_secrets = {}));
    let organization_self_hosted_runners;
    (function (organization_self_hosted_runners) {
        organization_self_hosted_runners["READ"] = "read";
        organization_self_hosted_runners["WRITE"] = "write";
    })(organization_self_hosted_runners = webhook_check_suite_rerequested.organization_self_hosted_runners || (webhook_check_suite_rerequested.organization_self_hosted_runners = {}));
    let organization_user_blocking;
    (function (organization_user_blocking) {
        organization_user_blocking["READ"] = "read";
        organization_user_blocking["WRITE"] = "write";
    })(organization_user_blocking = webhook_check_suite_rerequested.organization_user_blocking || (webhook_check_suite_rerequested.organization_user_blocking = {}));
    let packages;
    (function (packages) {
        packages["READ"] = "read";
        packages["WRITE"] = "write";
    })(packages = webhook_check_suite_rerequested.packages || (webhook_check_suite_rerequested.packages = {}));
    let pages;
    (function (pages) {
        pages["READ"] = "read";
        pages["WRITE"] = "write";
    })(pages = webhook_check_suite_rerequested.pages || (webhook_check_suite_rerequested.pages = {}));
    let pull_requests;
    (function (pull_requests) {
        pull_requests["READ"] = "read";
        pull_requests["WRITE"] = "write";
    })(pull_requests = webhook_check_suite_rerequested.pull_requests || (webhook_check_suite_rerequested.pull_requests = {}));
    let repository_hooks;
    (function (repository_hooks) {
        repository_hooks["READ"] = "read";
        repository_hooks["WRITE"] = "write";
    })(repository_hooks = webhook_check_suite_rerequested.repository_hooks || (webhook_check_suite_rerequested.repository_hooks = {}));
    let repository_projects;
    (function (repository_projects) {
        repository_projects["READ"] = "read";
        repository_projects["WRITE"] = "write";
        repository_projects["ADMIN"] = "admin";
    })(repository_projects = webhook_check_suite_rerequested.repository_projects || (webhook_check_suite_rerequested.repository_projects = {}));
    let secret_scanning_alerts;
    (function (secret_scanning_alerts) {
        secret_scanning_alerts["READ"] = "read";
        secret_scanning_alerts["WRITE"] = "write";
    })(secret_scanning_alerts = webhook_check_suite_rerequested.secret_scanning_alerts || (webhook_check_suite_rerequested.secret_scanning_alerts = {}));
    let secrets;
    (function (secrets) {
        secrets["READ"] = "read";
        secrets["WRITE"] = "write";
    })(secrets = webhook_check_suite_rerequested.secrets || (webhook_check_suite_rerequested.secrets = {}));
    let security_events;
    (function (security_events) {
        security_events["READ"] = "read";
        security_events["WRITE"] = "write";
    })(security_events = webhook_check_suite_rerequested.security_events || (webhook_check_suite_rerequested.security_events = {}));
    let security_scanning_alert;
    (function (security_scanning_alert) {
        security_scanning_alert["READ"] = "read";
        security_scanning_alert["WRITE"] = "write";
    })(security_scanning_alert = webhook_check_suite_rerequested.security_scanning_alert || (webhook_check_suite_rerequested.security_scanning_alert = {}));
    let single_file;
    (function (single_file) {
        single_file["READ"] = "read";
        single_file["WRITE"] = "write";
    })(single_file = webhook_check_suite_rerequested.single_file || (webhook_check_suite_rerequested.single_file = {}));
    let statuses;
    (function (statuses) {
        statuses["READ"] = "read";
        statuses["WRITE"] = "write";
    })(statuses = webhook_check_suite_rerequested.statuses || (webhook_check_suite_rerequested.statuses = {}));
    let team_discussions;
    (function (team_discussions) {
        team_discussions["READ"] = "read";
        team_discussions["WRITE"] = "write";
    })(team_discussions = webhook_check_suite_rerequested.team_discussions || (webhook_check_suite_rerequested.team_discussions = {}));
    let vulnerability_alerts;
    (function (vulnerability_alerts) {
        vulnerability_alerts["READ"] = "read";
        vulnerability_alerts["WRITE"] = "write";
    })(vulnerability_alerts = webhook_check_suite_rerequested.vulnerability_alerts || (webhook_check_suite_rerequested.vulnerability_alerts = {}));
    let workflows;
    (function (workflows) {
        workflows["READ"] = "read";
        workflows["WRITE"] = "write";
    })(workflows = webhook_check_suite_rerequested.workflows || (webhook_check_suite_rerequested.workflows = {}));
    /**
     * The summary conclusion for all check runs that are part of the check suite. Can be one of `success`, `failure`,` neutral`, `cancelled`, `timed_out`, `action_required` or `stale`. This value will be `null` until the check run has completed.
     */
    let conclusion;
    (function (conclusion) {
        conclusion["SUCCESS"] = "success";
        conclusion["FAILURE"] = "failure";
        conclusion["NEUTRAL"] = "neutral";
        conclusion["CANCELLED"] = "cancelled";
        conclusion["TIMED_OUT"] = "timed_out";
        conclusion["ACTION_REQUIRED"] = "action_required";
        conclusion["STALE"] = "stale";
    })(conclusion = webhook_check_suite_rerequested.conclusion || (webhook_check_suite_rerequested.conclusion = {}));
    /**
     * The summary status for all check runs that are part of the check suite. Can be `requested`, `in_progress`, or `completed`.
     */
    let status;
    (function (status) {
        status["REQUESTED"] = "requested";
        status["IN_PROGRESS"] = "in_progress";
        status["COMPLETED"] = "completed";
        status["QUEUED"] = "queued";
    })(status = webhook_check_suite_rerequested.status || (webhook_check_suite_rerequested.status = {}));
})(webhook_check_suite_rerequested || (exports.webhook_check_suite_rerequested = webhook_check_suite_rerequested = {}));
//# sourceMappingURL=webhook_check_suite_rerequested.js.map