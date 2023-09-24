/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The GitHub App installation. Webhook payloads contain the `installation` property when the event is configured
 * for and sent to a GitHub App. For more information,
 * see "[Using webhooks with GitHub Apps](https://docs.github.com/apps/creating-github-apps/registering-a-github-app/using-webhooks-with-github-apps)."
 */
export type simple_installation = {
    /**
     * The ID of the installation.
     */
    id: number;
    /**
     * The global node ID of the installation.
     */
    node_id: string;
};

