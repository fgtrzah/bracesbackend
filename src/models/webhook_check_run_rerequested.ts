/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { check_run_with_simple_check_suite } from './check_run_with_simple_check_suite';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_check_run_rerequested = {
    action?: webhook_check_run_rerequested.action;
    check_run: check_run_with_simple_check_suite;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_check_run_rerequested {

    export enum action {
        REREQUESTED = 'rerequested',
    }


}

