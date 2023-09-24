/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Secrets for a GitHub Codespace.
 */
export type codespaces_org_secret = {
    /**
     * The name of the secret
     */
    name: string;
    /**
     * The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    created_at: string;
    /**
     * The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    updated_at: string;
    /**
     * The type of repositories in the organization that the secret is visible to
     */
    visibility: codespaces_org_secret.visibility;
    /**
     * The API URL at which the list of repositories this secret is visible to can be retrieved
     */
    selected_repositories_url?: string;
};

export namespace codespaces_org_secret {

    /**
     * The type of repositories in the organization that the secret is visible to
     */
    export enum visibility {
        ALL = 'all',
        PRIVATE = 'private',
        SELECTED = 'selected',
    }


}

