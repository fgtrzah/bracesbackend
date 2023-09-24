/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_license_simple } from './nullable_license_simple';

/**
 * License Content
 */
export type license_content = {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string | null;
    git_url: string | null;
    download_url: string | null;
    type: string;
    content: string;
    encoding: string;
    _links: {
        git: string | null;
        html: string | null;
        self: string;
    };
    license: nullable_license_simple;
};

