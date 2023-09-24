/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { app_permissions } from './app_permissions';
import type { simple_user } from './simple_user';

export type nullable_scoped_installation = {
    permissions: app_permissions;
    /**
     * Describe whether all repositories have been selected or there's a selection involved
     */
    repository_selection: nullable_scoped_installation.repository_selection;
    single_file_name: string | null;
    has_multiple_single_files?: boolean;
    single_file_paths?: Array<string>;
    repositories_url: string;
    account: simple_user;
};

export namespace nullable_scoped_installation {

    /**
     * Describe whether all repositories have been selected or there's a selection involved
     */
    export enum repository_selection {
        ALL = 'all',
        SELECTED = 'selected',
    }


}

