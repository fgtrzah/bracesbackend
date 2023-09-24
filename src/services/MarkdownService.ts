/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MarkdownService {

    /**
     * Render a Markdown document
     * @param requestBody
     * @returns string Response
     * @throws ApiError
     */
    public static markdownRender(
        requestBody: {
            /**
             * The Markdown text to render in HTML.
             */
            text: string;
            /**
             * The rendering mode.
             */
            mode?: 'markdown' | 'gfm';
            /**
             * The repository context to use when creating references in `gfm` mode.  For example, setting `context` to `octo-org/octo-repo` will change the text `#42` into an HTML link to issue 42 in the `octo-org/octo-repo` repository.
             */
            context?: string;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/markdown',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
            },
        });
    }

    /**
     * Render a Markdown document in raw mode
     * You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
     * @param requestBody
     * @returns string Response
     * @throws ApiError
     */
    public static markdownRenderRaw(
        requestBody?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/markdown/raw',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                304: `Not modified`,
            },
        });
    }

}
