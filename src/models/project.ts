/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_simple_user } from './nullable_simple_user';

/**
 * Projects are a way to organize columns and cards of work.
 */
export type project = {
    owner_url: string;
    url: string;
    html_url: string;
    columns_url: string;
    id: number;
    node_id: string;
    /**
     * Name of the project
     */
    name: string;
    /**
     * Body of the project
     */
    body: string | null;
    number: number;
    /**
     * State of the project; either 'open' or 'closed'
     */
    state: string;
    creator: nullable_simple_user;
    created_at: string;
    updated_at: string;
    /**
     * The baseline permission that all organization members have on this project. Only present if owner is an organization.
     */
    organization_permission?: project.organization_permission;
    /**
     * Whether or not this project can be seen by everyone. Only present if owner is an organization.
     */
    private?: boolean;
};

export namespace project {

    /**
     * The baseline permission that all organization members have on this project. Only present if owner is an organization.
     */
    export enum organization_permission {
        READ = 'read',
        WRITE = 'write',
        ADMIN = 'admin',
        NONE = 'none',
    }


}

