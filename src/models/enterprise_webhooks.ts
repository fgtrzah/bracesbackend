/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An enterprise on GitHub. Webhook payloads contain the `enterprise` property when the webhook is configured
 * on an enterprise account or an organization that's part of an enterprise account. For more information,
 * see "[About enterprise accounts](https://docs.github.com/admin/overview/about-enterprise-accounts)."
 *
 */
export type enterprise_webhooks = {
    /**
     * A short description of the enterprise.
     */
    description?: string | null;
    html_url: string;
    /**
     * The enterprise's website URL.
     */
    website_url?: string | null;
    /**
     * Unique identifier of the enterprise
     */
    id: number;
    node_id: string;
    /**
     * The name of the enterprise.
     */
    name: string;
    /**
     * The slug url identifier for the enterprise.
     */
    slug: string;
    created_at: string | null;
    updated_at: string | null;
    avatar_url: string;
};

