/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_scoped_installation } from './nullable_scoped_installation';
import type { nullable_simple_user } from './nullable_simple_user';

/**
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
 */
export type authorization = {
    id: number;
    url: string;
    /**
     * A list of scopes that this authorization is in.
     */
    scopes: Array<string> | null;
    token: string;
    token_last_eight: string | null;
    hashed_token: string | null;
    app: {
        client_id: string;
        name: string;
        url: string;
    };
    note: string | null;
    note_url: string | null;
    updated_at: string;
    created_at: string;
    fingerprint: string | null;
    user?: nullable_simple_user;
    installation?: nullable_scoped_installation;
    expires_at: string | null;
};

