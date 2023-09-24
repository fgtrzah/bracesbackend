/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { verification } from './verification';

/**
 * Metadata for a Git tag
 */
export type git_tag = {
    node_id: string;
    /**
     * Name of the tag
     */
    tag: string;
    sha: string;
    /**
     * URL for the tag
     */
    url: string;
    /**
     * Message describing the purpose of the tag
     */
    message: string;
    tagger: {
        date: string;
        email: string;
        name: string;
    };
    object: {
        sha: string;
        type: string;
        url: string;
    };
    verification?: verification;
};

