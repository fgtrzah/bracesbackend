/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_team_simple } from './nullable_team_simple';

/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export type team = {
    id: number;
    node_id: string;
    name: string;
    slug: string;
    description: string | null;
    privacy?: string;
    notification_setting?: string;
    permission: string;
    permissions?: {
        pull: boolean;
        triage: boolean;
        push: boolean;
        maintain: boolean;
        admin: boolean;
    };
    url: string;
    html_url: string;
    members_url: string;
    repositories_url: string;
    parent: nullable_team_simple;
};

