/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { projects_v2_item } from './projects_v2_item';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_projects_v2_item_edited = {
    action: webhook_projects_v2_item_edited.action;
    changes?: ({
        field_value: {
            field_node_id?: string;
            field_type?: string;
        };
    } | {
        body: {
            from?: string | null;
            to?: string | null;
        };
    });
    installation?: simple_installation;
    organization: organization_simple_webhooks;
    projects_v2_item: projects_v2_item;
    sender: simple_user_webhooks;
};

export namespace webhook_projects_v2_item_edited {

    export enum action {
        EDITED = 'edited',
    }


}

