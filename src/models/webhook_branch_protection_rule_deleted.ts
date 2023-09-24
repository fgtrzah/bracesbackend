/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_branch_protection_rule_deleted = {
    action: webhook_branch_protection_rule_deleted.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    /**
     * The branch protection rule. Includes a `name` and all the [branch protection settings](https://docs.github.com/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-settings) applied to branches that match the name. Binary settings are boolean. Multi-level configurations are one of `off`, `non_admins`, or `everyone`. Actor and build lists are arrays of strings.
     */
    rule: {
        admin_enforced: boolean;
        allow_deletions_enforcement_level: webhook_branch_protection_rule_deleted.allow_deletions_enforcement_level;
        allow_force_pushes_enforcement_level: webhook_branch_protection_rule_deleted.allow_force_pushes_enforcement_level;
        authorized_actor_names: Array<string>;
        authorized_actors_only: boolean;
        authorized_dismissal_actors_only: boolean;
        create_protected?: boolean;
        created_at: string;
        dismiss_stale_reviews_on_push: boolean;
        id: number;
        ignore_approvals_from_contributors: boolean;
        linear_history_requirement_enforcement_level: webhook_branch_protection_rule_deleted.linear_history_requirement_enforcement_level;
        merge_queue_enforcement_level: webhook_branch_protection_rule_deleted.merge_queue_enforcement_level;
        name: string;
        pull_request_reviews_enforcement_level: webhook_branch_protection_rule_deleted.pull_request_reviews_enforcement_level;
        repository_id: number;
        require_code_owner_review: boolean;
        /**
         * Whether the most recent push must be approved by someone other than the person who pushed it
         */
        require_last_push_approval?: boolean;
        required_approving_review_count: number;
        required_conversation_resolution_level: webhook_branch_protection_rule_deleted.required_conversation_resolution_level;
        required_deployments_enforcement_level: webhook_branch_protection_rule_deleted.required_deployments_enforcement_level;
        required_status_checks: Array<string>;
        required_status_checks_enforcement_level: webhook_branch_protection_rule_deleted.required_status_checks_enforcement_level;
        signature_requirement_enforcement_level: webhook_branch_protection_rule_deleted.signature_requirement_enforcement_level;
        strict_required_status_checks_policy: boolean;
        updated_at: string;
    };
    sender: simple_user_webhooks;
};

export namespace webhook_branch_protection_rule_deleted {

    export enum action {
        DELETED = 'deleted',
    }

    export enum allow_deletions_enforcement_level {
        OFF = 'off',
        NON_ADMINS = 'non_admins',
        EVERYONE = 'everyone',
    }

    export enum allow_force_pushes_enforcement_level {
        OFF = 'off',
        NON_ADMINS = 'non_admins',
        EVERYONE = 'everyone',
    }

    export enum linear_history_requirement_enforcement_level {
        OFF = 'off',
        NON_ADMINS = 'non_admins',
        EVERYONE = 'everyone',
    }

    export enum merge_queue_enforcement_level {
        OFF = 'off',
        NON_ADMINS = 'non_admins',
        EVERYONE = 'everyone',
    }

    export enum pull_request_reviews_enforcement_level {
        OFF = 'off',
        NON_ADMINS = 'non_admins',
        EVERYONE = 'everyone',
    }

    export enum required_conversation_resolution_level {
        OFF = 'off',
        NON_ADMINS = 'non_admins',
        EVERYONE = 'everyone',
    }

    export enum required_deployments_enforcement_level {
        OFF = 'off',
        NON_ADMINS = 'non_admins',
        EVERYONE = 'everyone',
    }

    export enum required_status_checks_enforcement_level {
        OFF = 'off',
        NON_ADMINS = 'non_admins',
        EVERYONE = 'everyone',
    }

    export enum signature_requirement_enforcement_level {
        OFF = 'off',
        NON_ADMINS = 'non_admins',
        EVERYONE = 'everyone',
    }


}

