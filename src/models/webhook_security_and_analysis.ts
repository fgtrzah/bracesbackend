/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { full_repository } from './full_repository';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { security_and_analysis } from './security_and_analysis';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_security_and_analysis = {
    changes: {
        from?: {
            security_and_analysis?: security_and_analysis;
        };
    };
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: full_repository;
    sender?: simple_user_webhooks;
};

