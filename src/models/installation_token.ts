/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { app_permissions } from './app_permissions';
import type { repository } from './repository';

/**
 * Authentication token for a GitHub App installed on a user or org.
 */
export type installation_token = {
    token: string;
    expires_at: string;
    permissions?: app_permissions;
    repository_selection?: installation_token.repository_selection;
    repositories?: Array<repository>;
    single_file?: string;
    has_multiple_single_files?: boolean;
    single_file_paths?: Array<string>;
};

export namespace installation_token {

    export enum repository_selection {
        ALL = 'all',
        SELECTED = 'selected',
    }


}

