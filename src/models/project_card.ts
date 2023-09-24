/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_simple_user } from './nullable_simple_user';

/**
 * Project cards represent a scope of work.
 */
export type project_card = {
    url: string;
    /**
     * The project card's ID
     */
    id: number;
    node_id: string;
    note: string | null;
    creator: nullable_simple_user;
    created_at: string;
    updated_at: string;
    /**
     * Whether or not the card is archived
     */
    archived?: boolean;
    column_name?: string;
    project_id?: string;
    column_url: string;
    content_url?: string;
    project_url: string;
};

