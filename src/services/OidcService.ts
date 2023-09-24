/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { empty_object } from '../models/empty_object';
import type { oidc_custom_sub } from '../models/oidc_custom_sub';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OidcService {

    /**
     * Get the customization template for an OIDC subject claim for an organization
     * Gets the customization template for an OpenID Connect (OIDC) subject claim.
     * You must authenticate using an access token with the `read:org` scope to use this endpoint.
     * GitHub Apps must have the `organization_administration:write` permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @returns oidc_custom_sub A JSON serialized template for OIDC subject claim customization
     * @throws ApiError
     */
    public static oidcGetOidcCustomSubTemplateForOrg(
        org: string,
    ): CancelablePromise<oidc_custom_sub> {
        return __request(OpenAPI, {
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
    public static oidcUpdateOidcCustomSubTemplateForOrg(
        org: string,
        requestBody: oidc_custom_sub,
    ): CancelablePromise<empty_object> {
        return __request(OpenAPI, {
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
