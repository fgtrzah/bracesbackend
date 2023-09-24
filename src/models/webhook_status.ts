/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_status = {
    avatar_url?: string | null;
    /**
     * An array of branch objects containing the status' SHA. Each branch contains the given SHA, but the SHA may or may not be the head of the branch. The array includes a maximum of 10 branches.
     */
    branches: Array<{
        commit: {
            sha: string | null;
            url: string | null;
        };
        name: string;
        protected: boolean;
    }>;
    commit: {
        author: {
            avatar_url?: string;
            deleted?: boolean;
            email?: string | null;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id?: number;
            login?: string;
            name?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: webhook_status.type;
            url?: string;
        } | null;
        comments_url: string;
        commit: {
            author: ({
                date?: string;
                email: string | null;
                /**
                 * The git author's name.
                 */
                name: string;
                username?: string;
            } & {
                date: string;
                email?: string;
                name?: string;
            });
            comment_count: number;
            committer: ({
                date?: string;
                email: string | null;
                /**
                 * The git author's name.
                 */
                name: string;
                username?: string;
            } & {
                date: string;
                email?: string;
                name?: string;
            });
            message: string;
            tree: {
                sha: string;
                url: string;
            };
            url: string;
            verification: {
                payload: string | null;
                reason: webhook_status.reason;
                signature: string | null;
                verified: boolean;
            };
        };
        committer: {
            avatar_url?: string;
            deleted?: boolean;
            email?: string | null;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id?: number;
            login?: string;
            name?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: webhook_status.type;
            url?: string;
        } | null;
        html_url: string;
        node_id: string;
        parents: Array<{
            html_url: string;
            sha: string;
            url: string;
        }>;
        sha: string;
        url: string;
    };
    context: string;
    created_at: string;
    /**
     * The optional human-readable description added to the status.
     */
    description: string | null;
    enterprise?: enterprise_webhooks;
    /**
     * The unique identifier of the status.
     */
    id: number;
    installation?: simple_installation;
    name: string;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
    /**
     * The Commit SHA.
     */
    sha: string;
    /**
     * The new state. Can be `pending`, `success`, `failure`, or `error`.
     */
    state: webhook_status.state;
    /**
     * The optional link added to the status.
     */
    target_url: string | null;
    updated_at: string;
};

export namespace webhook_status {

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
    }

    export enum reason {
        EXPIRED_KEY = 'expired_key',
        NOT_SIGNING_KEY = 'not_signing_key',
        GPGVERIFY_ERROR = 'gpgverify_error',
        GPGVERIFY_UNAVAILABLE = 'gpgverify_unavailable',
        UNSIGNED = 'unsigned',
        UNKNOWN_SIGNATURE_TYPE = 'unknown_signature_type',
        NO_USER = 'no_user',
        UNVERIFIED_EMAIL = 'unverified_email',
        BAD_EMAIL = 'bad_email',
        UNKNOWN_KEY = 'unknown_key',
        MALFORMED_SIGNATURE = 'malformed_signature',
        INVALID = 'invalid',
        VALID = 'valid',
        BAD_CERT = 'bad_cert',
        OCSP_PENDING = 'ocsp_pending',
    }

    /**
     * The new state. Can be `pending`, `success`, `failure`, or `error`.
     */
    export enum state {
        PENDING = 'pending',
        SUCCESS = 'success',
        FAILURE = 'failure',
        ERROR = 'error',
    }


}

