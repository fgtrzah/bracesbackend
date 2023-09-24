/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { simple_classroom_organization } from './simple_classroom_organization';

/**
 * A GitHub Classroom classroom
 */
export type classroom = {
    /**
     * Unique identifier of the classroom.
     */
    id: number;
    /**
     * The name of the classroom.
     */
    name: string;
    /**
     * Whether classroom is archived.
     */
    archived: boolean;
    organization: simple_classroom_organization;
    /**
     * The URL of the classroom on GitHub Classroom.
     */
    url: string;
};

