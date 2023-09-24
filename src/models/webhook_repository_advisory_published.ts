/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_advisory } from './repository_advisory';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_repository_advisory_published = {
    action: webhook_repository_advisory_published.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    repository_advisory: repository_advisory;
    sender?: simple_user_webhooks;
};

export namespace webhook_repository_advisory_published {

    export enum action {
        PUBLISHED = 'published',
    }


}

