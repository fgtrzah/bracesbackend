/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { projects_v2 } from './projects_v2';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_projects_v2_project_edited = {
    action: webhook_projects_v2_project_edited.action;
    changes: {
        description?: {
            from?: string | null;
            to?: string | null;
        };
        public?: {
            from?: boolean;
            to?: boolean;
        };
        short_description?: {
            from?: string | null;
            to?: string | null;
        };
        title?: {
            from?: string;
            to?: string;
        };
    };
    installation?: simple_installation;
    organization: organization_simple_webhooks;
    projects_v2: projects_v2;
    sender: simple_user_webhooks;
};

export namespace webhook_projects_v2_project_edited {

    export enum action {
        EDITED = 'edited',
    }


}

