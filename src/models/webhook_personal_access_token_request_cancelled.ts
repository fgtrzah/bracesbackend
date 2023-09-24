/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { personal_access_token_request } from './personal_access_token_request';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_personal_access_token_request_cancelled = {
    action: webhook_personal_access_token_request_cancelled.action;
    personal_access_token_request: personal_access_token_request;
    organization: organization_simple_webhooks;
    sender: simple_user_webhooks;
    installation: simple_installation;
};

export namespace webhook_personal_access_token_request_cancelled {

    export enum action {
        CANCELLED = 'cancelled',
    }


}

