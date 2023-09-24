/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Secrets for GitHub Dependabot for an organization.
 */
export type organization_dependabot_secret = {
    /**
     * The name of the secret.
     */
    name: string;
    created_at: string;
    updated_at: string;
    /**
     * Visibility of a secret
     */
    visibility: organization_dependabot_secret.visibility;
    selected_repositories_url?: string;
};

export namespace organization_dependabot_secret {

    /**
     * Visibility of a secret
     */
    export enum visibility {
        ALL = 'all',
        PRIVATE = 'private',
        SELECTED = 'selected',
    }


}

