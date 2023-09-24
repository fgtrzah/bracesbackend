/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_delete = {
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    /**
     * The pusher type for the event. Can be either `user` or a deploy key.
     */
    pusher_type: string;
    /**
     * The [`git ref`](https://docs.github.com/rest/git/refs#get-a-reference) resource.
     */
    ref: string;
    /**
     * The type of Git ref object deleted in the repository.
     */
    ref_type: webhook_delete.ref_type;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_delete {

    /**
     * The type of Git ref object deleted in the repository.
     */
    export enum ref_type {
        TAG = 'tag',
        BRANCH = 'branch',
    }


}

