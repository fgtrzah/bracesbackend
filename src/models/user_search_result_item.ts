/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { search_result_text_matches } from './search_result_text_matches';

/**
 * User Search Result Item
 */
export type user_search_result_item = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    url: string;
    html_url: string;
    followers_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    received_events_url: string;
    type: string;
    score: number;
    following_url: string;
    gists_url: string;
    starred_url: string;
    events_url: string;
    public_repos?: number;
    public_gists?: number;
    followers?: number;
    following?: number;
    created_at?: string;
    updated_at?: string;
    name?: string | null;
    bio?: string | null;
    email?: string | null;
    location?: string | null;
    site_admin: boolean;
    hireable?: boolean | null;
    text_matches?: search_result_text_matches;
    blog?: string | null;
    company?: string | null;
    suspended_at?: string | null;
};

