"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class MetaService {
    /**
     * GitHub API Root
     * Get Hypermedia links to resources accessible in GitHub's REST API
     * @returns root Response
     * @throws ApiError
     */
    static metaRoot() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }
    /**
     * Get GitHub meta information
     * Returns meta information about GitHub, including a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://docs.github.com/articles/about-github-s-ip-addresses/)."
     *
     * The API's response also includes a list of GitHub's domain names.
     *
     * The values shown in the documentation's response are example values. You must always query the API directly to get the latest values.
     *
     * **Note:** This endpoint returns both IPv4 and IPv6 addresses. However, not all features support IPv6. You should refer to the specific documentation for each feature to determine if IPv6 is supported.
     * @returns api_overview Response
     * @throws ApiError
     */
    static metaGet() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/meta',
            errors: {
                304: `Not modified`,
            },
        });
    }
    /**
     * Get Octocat
     * Get the octocat as ASCII art
     * @param s The words to show in Octocat's speech bubble
     * @returns string Response
     * @throws ApiError
     */
    static metaGetOctocat(s) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/octocat',
            query: {
                's': s,
            },
        });
    }
    /**
     * Get all API versions
     * Get all supported GitHub API versions.
     * @returns string Response
     * @throws ApiError
     */
    static metaGetAllVersions() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/versions',
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get the Zen of GitHub
     * Get a random sentence from the Zen of GitHub
     * @returns string Response
     * @throws ApiError
     */
    static metaGetZen() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/zen',
        });
    }
}
exports.MetaService = MetaService;
//# sourceMappingURL=MetaService.js.map