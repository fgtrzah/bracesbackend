/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { secret_scanning_alert_webhook } from './secret_scanning_alert_webhook';
import type { secret_scanning_location } from './secret_scanning_location';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_secret_scanning_alert_location_created = {
    action?: webhook_secret_scanning_alert_location_created.action;
    alert: secret_scanning_alert_webhook;
    installation?: simple_installation;
    location: secret_scanning_location;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_secret_scanning_alert_location_created {

    export enum action {
        CREATED = 'created',
    }


}

