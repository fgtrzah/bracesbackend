/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { nullable_repository_webhooks } from './nullable_repository_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_meta_deleted = {
    action: webhook_meta_deleted.action;
    enterprise?: enterprise_webhooks;
    /**
     * The modified webhook. This will contain different keys based on the type of webhook it is: repository, organization, business, app, or GitHub Marketplace.
     */
    hook: {
        active: boolean;
        config: {
            content_type: webhook_meta_deleted.content_type;
            insecure_ssl: string;
            secret?: string;
            url: string;
        };
        created_at: string;
        events: Array<'*' | 'branch_protection_rule' | 'check_run' | 'check_suite' | 'code_scanning_alert' | 'commit_comment' | 'create' | 'delete' | 'deployment' | 'deployment_status' | 'deploy_key' | 'discussion' | 'discussion_comment' | 'fork' | 'gollum' | 'issues' | 'issue_comment' | 'label' | 'member' | 'membership' | 'meta' | 'milestone' | 'organization' | 'org_block' | 'package' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'pull_request_review_thread' | 'push' | 'registry_package' | 'release' | 'repository' | 'repository_import' | 'repository_vulnerability_alert' | 'secret_scanning_alert' | 'secret_scanning_alert_location' | 'security_and_analysis' | 'star' | 'status' | 'team' | 'team_add' | 'watch' | 'workflow_job' | 'workflow_run' | 'repository_dispatch' | 'projects_v2_item'>;
        id: number;
        name: string;
        type: string;
        updated_at: string;
    };
    /**
     * The id of the modified webhook.
     */
    hook_id: number;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository?: nullable_repository_webhooks;
    sender?: simple_user_webhooks;
};

export namespace webhook_meta_deleted {

    export enum action {
        DELETED = 'deleted',
    }

    export enum content_type {
        JSON = 'json',
        FORM = 'form',
    }


}

