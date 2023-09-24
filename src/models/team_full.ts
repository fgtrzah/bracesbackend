/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_team_simple } from './nullable_team_simple';
import type { team_organization } from './team_organization';

/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export type team_full = {
    /**
     * Unique identifier of the team
     */
    id: number;
    node_id: string;
    /**
     * URL for the team
     */
    url: string;
    html_url: string;
    /**
     * Name of the team
     */
    name: string;
    slug: string;
    description: string | null;
    /**
     * The level of privacy this team should have
     */
    privacy?: team_full.privacy;
    /**
     * The notification setting the team has set
     */
    notification_setting?: team_full.notification_setting;
    /**
     * Permission that the team will have for its repositories
     */
    permission: string;
    members_url: string;
    repositories_url: string;
    parent?: nullable_team_simple;
    members_count: number;
    repos_count: number;
    created_at: string;
    updated_at: string;
    organization: team_organization;
    /**
     * Distinguished Name (DN) that team maps to within LDAP environment
     */
    ldap_dn?: string;
};

export namespace team_full {

    /**
     * The level of privacy this team should have
     */
    export enum privacy {
        CLOSED = 'closed',
        SECRET = 'secret',
    }

    /**
     * The notification setting the team has set
     */
    export enum notification_setting {
        NOTIFICATIONS_ENABLED = 'notifications_enabled',
        NOTIFICATIONS_DISABLED = 'notifications_disabled',
    }


}

