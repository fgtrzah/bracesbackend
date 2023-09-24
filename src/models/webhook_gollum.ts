/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_gollum = {
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    /**
     * The pages that were updated.
     */
    pages: Array<{
        /**
         * The action that was performed on the page. Can be `created` or `edited`.
         */
        action: 'created' | 'edited';
        /**
         * Points to the HTML wiki page.
         */
        html_url: string;
        /**
         * The name of the page.
         */
        page_name: string;
        /**
         * The latest commit SHA of the page.
         */
        sha: string;
        summary: string | null;
        /**
         * The current page title.
         */
        title: string;
    }>;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
};

