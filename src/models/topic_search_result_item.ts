/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { search_result_text_matches } from './search_result_text_matches';

/**
 * Topic Search Result Item
 */
export type topic_search_result_item = {
    name: string;
    display_name: string | null;
    short_description: string | null;
    description: string | null;
    created_by: string | null;
    released: string | null;
    created_at: string;
    updated_at: string;
    featured: boolean;
    curated: boolean;
    score: number;
    repository_count?: number | null;
    logo_url?: string | null;
    text_matches?: search_result_text_matches;
    related?: Array<{
        topic_relation?: {
            id?: number;
            name?: string;
            topic_id?: number;
            relation_type?: string;
        };
    }> | null;
    aliases?: Array<{
        topic_relation?: {
            id?: number;
            name?: string;
            topic_id?: number;
            relation_type?: string;
        };
    }> | null;
};

