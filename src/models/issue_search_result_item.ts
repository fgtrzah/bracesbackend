/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { author_association } from './author_association';
import type { nullable_integration } from './nullable_integration';
import type { nullable_milestone } from './nullable_milestone';
import type { nullable_simple_user } from './nullable_simple_user';
import type { reaction_rollup } from './reaction_rollup';
import type { repository } from './repository';
import type { search_result_text_matches } from './search_result_text_matches';
import type { simple_user } from './simple_user';

/**
 * Issue Search Result Item
 */
export type issue_search_result_item = {
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    locked: boolean;
    active_lock_reason?: string | null;
    assignees?: Array<simple_user> | null;
    user: nullable_simple_user;
    labels: Array<{
        id?: number;
        node_id?: string;
        url?: string;
        name?: string;
        color?: string;
        default?: boolean;
        description?: string | null;
    }>;
    state: string;
    state_reason?: string | null;
    assignee: nullable_simple_user;
    milestone: nullable_milestone;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    text_matches?: search_result_text_matches;
    pull_request?: {
        merged_at?: string | null;
        diff_url: string | null;
        html_url: string | null;
        patch_url: string | null;
        url: string | null;
    };
    body?: string;
    score: number;
    author_association: author_association;
    draft?: boolean;
    repository?: repository;
    body_html?: string;
    body_text?: string;
    timeline_url?: string;
    performed_via_github_app?: nullable_integration;
    reactions?: reaction_rollup;
};

