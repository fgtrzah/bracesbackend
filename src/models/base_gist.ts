/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_simple_user } from './nullable_simple_user';
import type { simple_user } from './simple_user';

/**
 * Base Gist
 */
export type base_gist = {
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    files: Record<string, {
        filename?: string;
        type?: string;
        language?: string;
        raw_url?: string;
        size?: number;
    }>;
    public: boolean;
    created_at: string;
    updated_at: string;
    description: string | null;
    comments: number;
    user: nullable_simple_user;
    comments_url: string;
    owner?: simple_user;
    truncated?: boolean;
    forks?: Array<any>;
    history?: Array<any>;
};

