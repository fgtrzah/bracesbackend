/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { interaction_expiry } from './interaction_expiry';
import type { interaction_group } from './interaction_group';

/**
 * Limit interactions to a specific type of user for a specified duration
 */
export type interaction_limit = {
    limit: interaction_group;
    expiry?: interaction_expiry;
};

