"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitignoreService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class GitignoreService {
    /**
     * Get all gitignore templates
     * List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/repos/repos#create-a-repository-for-the-authenticated-user).
     * @returns string Response
     * @throws ApiError
     */
    static gitignoreGetAllTemplates() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gitignore/templates',
            errors: {
                304: `Not modified`,
            },
        });
    }
    /**
     * Get a gitignore template
     * The API also allows fetching the source of a single template.
     * Use the raw [media type](https://docs.github.com/rest/overview/media-types/) to get the raw contents.
     * @param name
     * @returns gitignore_template Response
     * @throws ApiError
     */
    static gitignoreGetTemplate(name) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/gitignore/templates/{name}',
            path: {
                'name': name,
            },
            errors: {
                304: `Not modified`,
            },
        });
    }
}
exports.GitignoreService = GitignoreService;
//# sourceMappingURL=GitignoreService.js.map