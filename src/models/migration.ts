/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_simple_user } from './nullable_simple_user';
import type { repository } from './repository';

/**
 * A migration.
 */
export type migration = {
    id: number;
    owner: nullable_simple_user;
    guid: string;
    state: string;
    lock_repositories: boolean;
    exclude_metadata: boolean;
    exclude_git_data: boolean;
    exclude_attachments: boolean;
    exclude_releases: boolean;
    exclude_owner_projects: boolean;
    org_metadata_only: boolean;
    /**
     * The repositories included in the migration. Only returned for export migrations.
     */
    repositories: Array<repository>;
    url: string;
    created_at: string;
    updated_at: string;
    node_id: string;
    archive_url?: string;
    /**
     * Exclude related items from being returned in the response in order to improve performance of the request. The array can include any of: `"repositories"`.
     */
    exclude?: Array<string>;
};

