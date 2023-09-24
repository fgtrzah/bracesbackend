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
import type { simple_user } from './simple_user';

/**
 * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
 */
export type issue = {
    id: number;
    node_id: string;
    /**
     * URL for the issue
     */
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    /**
     * Number uniquely identifying the issue within its repository
     */
    number: number;
    /**
     * State of the issue; either 'open' or 'closed'
     */
    state: string;
    /**
     * The reason for the current state
     */
    state_reason?: issue.state_reason | null;
    /**
     * Title of the issue
     */
    title: string;
    /**
     * Contents of the issue
     */
    body?: string | null;
    user: nullable_simple_user;
    /**
     * Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository
     */
    labels: Array<(string | {
        id?: number;
        node_id?: string;
        url?: string;
        name?: string;
        description?: string | null;
        color?: string | null;
        default?: boolean;
    })>;
    assignee: nullable_simple_user;
    assignees?: Array<simple_user> | null;
    milestone: nullable_milestone;
    locked: boolean;
    active_lock_reason?: string | null;
    comments: number;
    pull_request?: {
        merged_at?: string | null;
        diff_url: string | null;
        html_url: string | null;
        patch_url: string | null;
        url: string | null;
    };
    closed_at: string | null;
    created_at: string;
    updated_at: string;
    draft?: boolean;
    closed_by?: nullable_simple_user;
    body_html?: string;
    body_text?: string;
    timeline_url?: string;
    repository?: repository;
    performed_via_github_app?: nullable_integration;
    author_association: author_association;
    reactions?: reaction_rollup;
};

export namespace issue {

    /**
     * The reason for the current state
     */
    export enum state_reason {
        COMPLETED = 'completed',
        REOPENED = 'reopened',
        NOT_PLANNED = 'not_planned',
    }


}

