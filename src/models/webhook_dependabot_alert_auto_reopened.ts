/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { dependabot_alert } from './dependabot_alert';
import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_dependabot_alert_auto_reopened = {
    action: webhook_dependabot_alert_auto_reopened.action;
    alert: dependabot_alert;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    enterprise?: enterprise_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_dependabot_alert_auto_reopened {

    export enum action {
        AUTO_REOPENED = 'auto_reopened',
    }


}

