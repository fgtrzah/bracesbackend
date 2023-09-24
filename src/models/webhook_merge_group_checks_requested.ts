/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { merge_group } from './merge_group';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_merge_group_checks_requested = {
    action: webhook_merge_group_checks_requested.action;
    installation?: simple_installation;
    merge_group: merge_group;
    organization?: organization_simple_webhooks;
    repository?: repository_webhooks;
    sender?: simple_user_webhooks;
};

export namespace webhook_merge_group_checks_requested {

    export enum action {
        CHECKS_REQUESTED = 'checks_requested',
    }


}

