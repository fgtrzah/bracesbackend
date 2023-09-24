"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodesOfConductService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CodesOfConductService {
    /**
     * Get all codes of conduct
     * Returns array of all GitHub's codes of conduct.
     * @returns code_of_conduct Response
     * @throws ApiError
     */
    static codesOfConductGetAllCodesOfConduct() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/codes_of_conduct',
            errors: {
                304: `Not modified`,
            },
        });
    }
    /**
     * Get a code of conduct
     * Returns information about the specified GitHub code of conduct.
     * @param key
     * @returns code_of_conduct Response
     * @throws ApiError
     */
    static codesOfConductGetConductCode(key) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/codes_of_conduct/{key}',
            path: {
                'key': key,
            },
            errors: {
                304: `Not modified`,
                404: `Resource not found`,
            },
        });
    }
}
exports.CodesOfConductService = CodesOfConductService;
//# sourceMappingURL=CodesOfConductService.js.map