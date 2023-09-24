"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OidcService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class OidcService {
    /**
     * Get the customization template for an OIDC subject claim for an organization
     * Gets the customization template for an OpenID Connect (OIDC) subject claim.
     * You must authenticate using an access token with the `read:org` scope to use this endpoint.
     * GitHub Apps must have the `organization_administration:write` permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @returns oidc_custom_sub A JSON serialized template for OIDC subject claim customization
     * @throws ApiError
     */
    static oidcGetOidcCustomSubTemplateForOrg(org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/oidc/customization/sub',
            path: {
                'org': org,
            },
        });
    }
    /**
     * Set the customization template for an OIDC subject claim for an organization
     * Creates or updates the customization template for an OpenID Connect (OIDC) subject claim.
     * You must authenticate using an access token with the `write:org` scope to use this endpoint.
     * GitHub Apps must have the `admin:org` permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns empty_object Empty response
     * @throws ApiError
     */
    static oidcUpdateOidcCustomSubTemplateForOrg(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/oidc/customization/sub',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
}
exports.OidcService = OidcService;
//# sourceMappingURL=OidcService.js.map