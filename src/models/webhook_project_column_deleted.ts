/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { nullable_repository_webhooks } from './nullable_repository_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_project_column_deleted = {
    action: webhook_project_column_deleted.action;
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
    repository?: nullable_repository_webhooks;
    sender?: simple_user_webhooks;
};

export namespace webhook_project_column_deleted {

    export enum action {
        DELETED = 'deleted',
    }


}

