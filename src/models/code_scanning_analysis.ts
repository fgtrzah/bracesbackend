/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { code_scanning_analysis_analysis_key } from './code_scanning_analysis_analysis_key';
import type { code_scanning_analysis_category } from './code_scanning_analysis_category';
import type { code_scanning_analysis_commit_sha } from './code_scanning_analysis_commit_sha';
import type { code_scanning_analysis_created_at } from './code_scanning_analysis_created_at';
import type { code_scanning_analysis_environment } from './code_scanning_analysis_environment';
import type { code_scanning_analysis_sarif_id } from './code_scanning_analysis_sarif_id';
import type { code_scanning_analysis_tool } from './code_scanning_analysis_tool';
import type { code_scanning_analysis_url } from './code_scanning_analysis_url';
import type { code_scanning_ref } from './code_scanning_ref';

export type code_scanning_analysis = {
    ref: code_scanning_ref;
    commit_sha: code_scanning_analysis_commit_sha;
    analysis_key: code_scanning_analysis_analysis_key;
    environment: code_scanning_analysis_environment;
    category?: code_scanning_analysis_category;
    error: string;
    created_at: code_scanning_analysis_created_at;
    /**
     * The total number of results in the analysis.
     */
    results_count: number;
    /**
     * The total number of rules used in the analysis.
     */
    rules_count: number;
    /**
     * Unique identifier for this analysis.
     */
    id: number;
    url: code_scanning_analysis_url;
    sarif_id: code_scanning_analysis_sarif_id;
    tool: code_scanning_analysis_tool;
    deletable: boolean;
    /**
     * Warning generated when processing the analysis
     */
    warning: string;
};

