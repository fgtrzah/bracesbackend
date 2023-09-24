/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_github_app_authorization_revoked = {
    action: webhook_github_app_authorization_revoked.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository?: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_github_app_authorization_revoked {

    export enum action {
        REVOKED = 'revoked',
    }


}

