/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A GitHub organization. Webhook payloads contain the `organization` property when the webhook is configured for an
 * organization, or when the event occurs from activity in a repository owned by an organization.
 */
export type organization_simple_webhooks = {
    login: string;
    id: number;
    node_id: string;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description: string | null;
};

