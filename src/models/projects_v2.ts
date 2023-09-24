/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_simple_user } from './nullable_simple_user';
import type { simple_user } from './simple_user';

/**
 * A projects v2 project
 */
export type projects_v2 = {
    id: number;
    node_id: string;
    owner: simple_user;
    creator: simple_user;
    title: string;
    description: string | null;
    public: boolean;
    closed_at: string | null;
    created_at: string;
    updated_at: string;
    number: number;
    short_description: string | null;
    deleted_at: string | null;
    deleted_by: nullable_simple_user;
};

