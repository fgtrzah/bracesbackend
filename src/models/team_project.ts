/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { simple_user } from './simple_user';

/**
 * A team's access to a project.
 */
export type team_project = {
    owner_url: string;
    url: string;
    html_url: string;
    columns_url: string;
    id: number;
    node_id: string;
    name: string;
    body: string | null;
    number: number;
    state: string;
    creator: simple_user;
    created_at: string;
    updated_at: string;
    /**
     * The organization permission for this project. Only present when owner is an organization.
     */
    organization_permission?: string;
    /**
     * Whether the project is private or not. Only present when owner is an organization.
     */
    private?: boolean;
    permissions: {
        read: boolean;
        write: boolean;
        admin: boolean;
    };
};

