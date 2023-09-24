/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { secret_scanning_alert_webhook } from './secret_scanning_alert_webhook';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_secret_scanning_alert_reopened = {
    action: webhook_secret_scanning_alert_reopened.action;
    alert: secret_scanning_alert_webhook;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender?: simple_user_webhooks;
};

export namespace webhook_secret_scanning_alert_reopened {

    export enum action {
        REOPENED = 'reopened',
    }


}

