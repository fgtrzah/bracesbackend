/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { projects_v2_item } from './projects_v2_item';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_projects_v2_item_deleted = {
    action: webhook_projects_v2_item_deleted.action;
    installation?: simple_installation;
    organization: organization_simple_webhooks;
    projects_v2_item: projects_v2_item;
    sender: simple_user_webhooks;
};

export namespace webhook_projects_v2_item_deleted {

    export enum action {
        DELETED = 'deleted',
    }


}

