/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { minimal_repository } from './minimal_repository';
import type { search_result_text_matches } from './search_result_text_matches';

/**
 * Code Search Result Item
 */
export type code_search_result_item = {
    name: string;
    path: string;
    sha: string;
    url: string;
    git_url: string;
    html_url: string;
    repository: minimal_repository;
    score: number;
    file_size?: number;
    language?: string | null;
    last_modified_at?: string;
    line_numbers?: Array<string>;
    text_matches?: search_result_text_matches;
};

