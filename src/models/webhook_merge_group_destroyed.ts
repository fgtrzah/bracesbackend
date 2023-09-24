/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { merge_group } from './merge_group';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_merge_group_destroyed = {
    action: webhook_merge_group_destroyed.action;
    /**
     * Explains why the merge group is being destroyed. The group could have been merged, removed from the queue (dequeued), or invalidated by an earlier queue entry being dequeued (invalidated).
     */
    reason?: webhook_merge_group_destroyed.reason;
    installation?: simple_installation;
    merge_group: merge_group;
    organization?: organization_simple_webhooks;
    repository?: repository_webhooks;
    sender?: simple_user_webhooks;
};

export namespace webhook_merge_group_destroyed {

    export enum action {
        DESTROYED = 'destroyed',
    }

    /**
     * Explains why the merge group is being destroyed. The group could have been merged, removed from the queue (dequeued), or invalidated by an earlier queue entry being dequeued (invalidated).
     */
    export enum reason {
        MERGED = 'merged',
        INVALIDATED = 'invalidated',
        DEQUEUED = 'dequeued',
    }


}

