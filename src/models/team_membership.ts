/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Team Membership
 */
export type team_membership = {
    url: string;
    /**
     * The role of the user in the team.
     */
    role: team_membership.role;
    /**
     * The state of the user's membership in the team.
     */
    state: team_membership.state;
};

export namespace team_membership {

    /**
     * The role of the user in the team.
     */
    export enum role {
        MEMBER = 'member',
        MAINTAINER = 'maintainer',
    }

    /**
     * The state of the user's membership in the team.
     */
    export enum state {
        ACTIVE = 'active',
        PENDING = 'pending',
    }


}

