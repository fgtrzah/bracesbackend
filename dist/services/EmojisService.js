"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmojisService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class EmojisService {
    /**
     * Get emojis
     * Lists all the emojis available to use on GitHub.
     * @returns string Response
     * @throws ApiError
     */
    static emojisGet() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/emojis',
            errors: {
                304: `Not modified`,
            },
        });
    }
}
exports.EmojisService = EmojisService;
//# sourceMappingURL=EmojisService.js.map