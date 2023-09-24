/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_deploy_key_deleted = {
    action: webhook_deploy_key_deleted.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    /**
     * The [`deploy key`](https://docs.github.com/rest/deploy-keys/deploy-keys#get-a-deploy-key) resource.
     */
    key: {
        added_by?: string | null;
        created_at: string;
        id: number;
        key: string;
        last_used?: string | null;
        read_only: boolean;
        title: string;
        url: string;
        verified: boolean;
    };
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_deploy_key_deleted {

    export enum action {
        DELETED = 'deleted',
    }


}

