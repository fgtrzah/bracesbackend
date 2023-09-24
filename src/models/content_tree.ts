/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Content Tree
 */
export type content_tree = {
    type: string;
    size: number;
    name: string;
    path: string;
    sha: string;
    url: string;
    git_url: string | null;
    html_url: string | null;
    download_url: string | null;
    entries?: Array<{
        type: string;
        size: number;
        name: string;
        path: string;
        content?: string;
        sha: string;
        url: string;
        git_url: string | null;
        html_url: string | null;
        download_url: string | null;
        _links: {
            git: string | null;
            html: string | null;
            self: string;
        };
    }>;
    _links: {
        git: string | null;
        html: string | null;
        self: string;
    };
};

