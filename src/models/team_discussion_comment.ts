/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_simple_user } from './nullable_simple_user';
import type { reaction_rollup } from './reaction_rollup';

/**
 * A reply to a discussion within a team.
 */
export type team_discussion_comment = {
    author: nullable_simple_user;
    /**
     * The main text of the comment.
     */
    body: string;
    body_html: string;
    /**
     * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
     */
    body_version: string;
    created_at: string;
    last_edited_at: string | null;
    discussion_url: string;
    html_url: string;
    node_id: string;
    /**
     * The unique sequence number of a team discussion comment.
     */
    number: number;
    updated_at: string;
    url: string;
    reactions?: reaction_rollup;
};

