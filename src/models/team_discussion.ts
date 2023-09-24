/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_simple_user } from './nullable_simple_user';
import type { reaction_rollup } from './reaction_rollup';

/**
 * A team discussion is a persistent record of a free-form conversation within a team.
 */
export type team_discussion = {
    author: nullable_simple_user;
    /**
     * The main text of the discussion.
     */
    body: string;
    body_html: string;
    /**
     * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
     */
    body_version: string;
    comments_count: number;
    comments_url: string;
    created_at: string;
    last_edited_at: string | null;
    html_url: string;
    node_id: string;
    /**
     * The unique sequence number of a team discussion.
     */
    number: number;
    /**
     * Whether or not this discussion should be pinned for easy retrieval.
     */
    pinned: boolean;
    /**
     * Whether or not this discussion should be restricted to team members and organization administrators.
     */
    private: boolean;
    team_url: string;
    /**
     * The title of the discussion.
     */
    title: string;
    updated_at: string;
    url: string;
    reactions?: reaction_rollup;
};

