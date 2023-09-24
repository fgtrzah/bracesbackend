/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_workflow_dispatch = {
    enterprise?: enterprise_webhooks;
    inputs: Record<string, any> | null;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    ref: string;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
    workflow: string;
};

