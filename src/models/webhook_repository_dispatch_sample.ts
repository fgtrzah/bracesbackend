/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_repository_dispatch_sample = {
    action: webhook_repository_dispatch_sample.action;
    branch: string;
    client_payload: Record<string, any> | null;
    enterprise?: enterprise_webhooks;
    installation: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_repository_dispatch_sample {

    export enum action {
        SAMPLE_COLLECTED = 'sample.collected',
    }


}

