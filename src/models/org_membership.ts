/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_simple_user } from './nullable_simple_user';
import type { organization_simple } from './organization_simple';

/**
 * Org Membership
 */
export type org_membership = {
    url: string;
    /**
     * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
     */
    state: org_membership.state;
    /**
     * The user's membership type in the organization.
     */
    role: org_membership.role;
    organization_url: string;
    organization: organization_simple;
    user: nullable_simple_user;
    permissions?: {
        can_create_repository: boolean;
    };
};

export namespace org_membership {

    /**
     * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
     */
    export enum state {
        ACTIVE = 'active',
        PENDING = 'pending',
    }

    /**
     * The user's membership type in the organization.
     */
    export enum role {
        ADMIN = 'admin',
        MEMBER = 'member',
        BILLING_MANAGER = 'billing_manager',
    }


}

