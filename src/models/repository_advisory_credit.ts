/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { security_advisory_credit_types } from './security_advisory_credit_types';
import type { simple_user } from './simple_user';

/**
 * A credit given to a user for a repository security advisory.
 */
export type repository_advisory_credit = {
    user: simple_user;
    type: security_advisory_credit_types;
    /**
     * The state of the user's acceptance of the credit.
     */
    state: repository_advisory_credit.state;
};

export namespace repository_advisory_credit {

    /**
     * The state of the user's acceptance of the credit.
     */
    export enum state {
        ACCEPTED = 'accepted',
        DECLINED = 'declined',
        PENDING = 'pending',
    }


}

