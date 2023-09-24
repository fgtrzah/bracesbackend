/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { deployment } from './deployment';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { pull_request } from './pull_request';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_deployment_protection_rule_requested = {
    action?: webhook_deployment_protection_rule_requested.action;
    /**
     * The name of the environment that has the deployment protection rule.
     */
    environment?: string;
    /**
     * The event that triggered the deployment protection rule.
     */
    event?: string;
    /**
     * The URL to review the deployment protection rule.
     */
    deployment_callback_url?: string;
    deployment?: deployment;
    pull_requests?: Array<pull_request>;
    repository?: repository_webhooks;
    organization?: organization_simple_webhooks;
    installation?: simple_installation;
    sender?: simple_user_webhooks;
};

export namespace webhook_deployment_protection_rule_requested {

    export enum action {
        REQUESTED = 'requested',
    }


}

