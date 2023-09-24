/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { simple_classroom_assignment } from './simple_classroom_assignment';
import type { simple_classroom_repository } from './simple_classroom_repository';
import type { simple_classroom_user } from './simple_classroom_user';

/**
 * A GitHub Classroom accepted assignment
 */
export type classroom_accepted_assignment = {
    /**
     * Unique identifier of the repository.
     */
    id: number;
    /**
     * Whether an accepted assignment has been submitted.
     */
    submitted: boolean;
    /**
     * Whether a submission passed.
     */
    passing: boolean;
    /**
     * Count of student commits.
     */
    commit_count: number;
    /**
     * Most recent grade.
     */
    grade: string;
    students: Array<simple_classroom_user>;
    repository: simple_classroom_repository;
    assignment: simple_classroom_assignment;
};

