/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_project_column_moved = {
    action: webhook_project_column_moved.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    project_column: {
        after_id?: number | null;
        cards_url: string;
        created_at: string;
        /**
         * The unique identifier of the project column
         */
        id: number;
        /**
         * Name of the project column
         */
        name: string;
        node_id: string;
        project_url: string;
        updated_at: string;
        url: string;
    };
    repository?: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_project_column_moved {

    export enum action {
        MOVED = 'moved',
    }


}

