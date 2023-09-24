/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { simple_user } from './simple_user';

/**
 * A CodeQL database.
 */
export type code_scanning_codeql_database = {
    /**
     * The ID of the CodeQL database.
     */
    id: number;
    /**
     * The name of the CodeQL database.
     */
    name: string;
    /**
     * The language of the CodeQL database.
     */
    language: string;
    uploader: simple_user;
    /**
     * The MIME type of the CodeQL database file.
     */
    content_type: string;
    /**
     * The size of the CodeQL database file in bytes.
     */
    size: number;
    /**
     * The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    created_at: string;
    /**
     * The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    updated_at: string;
    /**
     * The URL at which to download the CodeQL database. The `Accept` header must be set to the value of the `content_type` property.
     */
    url: string;
};

