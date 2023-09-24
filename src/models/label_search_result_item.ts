/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { search_result_text_matches } from './search_result_text_matches';

/**
 * Label Search Result Item
 */
export type label_search_result_item = {
    id: number;
    node_id: string;
    url: string;
    name: string;
    color: string;
    default: boolean;
    description: string | null;
    score: number;
    text_matches?: search_result_text_matches;
};

