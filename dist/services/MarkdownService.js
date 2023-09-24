"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class MarkdownService {
    /**
     * Render a Markdown document
     * @param requestBody
     * @returns string Response
     * @throws ApiError
     */
    static markdownRender(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static markdownRenderRaw(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.MarkdownService = MarkdownService;
//# sourceMappingURL=MarkdownService.js.map