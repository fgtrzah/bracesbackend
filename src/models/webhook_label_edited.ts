/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_label_edited = {
    action: webhook_label_edited.action;
    /**
     * The changes to the label if the action was `edited`.
     */
    changes?: {
        color?: {
            /**
             * The previous version of the color if the action was `edited`.
             */
            from: string;
        };
        description?: {
            /**
             * The previous version of the description if the action was `edited`.
             */
            from: string;
        };
        name?: {
            /**
             * The previous version of the name if the action was `edited`.
             */
            from: string;
        };
    };
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    label: {
        /**
         * 6-character hex code, without the leading #, identifying the color
         */
        color: string;
        default: boolean;
        description: string | null;
        id: number;
        /**
         * The name of the label.
         */
        name: string;
        node_id: string;
        /**
         * URL for the label
         */
        url: string;
    };
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

export namespace webhook_label_edited {

    export enum action {
        EDITED = 'edited',
    }


}

