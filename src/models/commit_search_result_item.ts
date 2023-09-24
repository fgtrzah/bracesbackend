/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { minimal_repository } from './minimal_repository';
import type { nullable_git_user } from './nullable_git_user';
import type { nullable_simple_user } from './nullable_simple_user';
import type { search_result_text_matches } from './search_result_text_matches';
import type { verification } from './verification';

/**
 * Commit Search Result Item
 */
export type commit_search_result_item = {
    url: string;
    sha: string;
    html_url: string;
    comments_url: string;
    commit: {
        author: {
            name: string;
            email: string;
            date: string;
        };
        committer: nullable_git_user;
        comment_count: number;
        message: string;
        tree: {
            sha: string;
            url: string;
        };
        url: string;
        verification?: verification;
    };
    author: nullable_simple_user;
    committer: nullable_git_user;
    parents: Array<{
        url?: string;
        html_url?: string;
        sha?: string;
    }>;
    repository: minimal_repository;
    score: number;
    node_id: string;
    text_matches?: search_result_text_matches;
};

