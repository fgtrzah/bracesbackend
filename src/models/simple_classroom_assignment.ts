/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { simple_classroom } from './simple_classroom';

/**
 * A GitHub Classroom assignment
 */
export type simple_classroom_assignment = {
    /**
     * Unique identifier of the repository.
     */
    id: number;
    /**
     * Whether an accepted assignment creates a public repository.
     */
    public_repo: boolean;
    /**
     * Assignment title.
     */
    title: string;
    /**
     * Whether it's a Group Assignment or Individual Assignment.
     */
    type: simple_classroom_assignment.type;
    /**
     * The link that a student can use to accept the assignment.
     */
    invite_link: string;
    /**
     * Whether the invitation link is enabled. Visiting an enabled invitation link will accept the assignment.
     */
    invitations_enabled: boolean;
    /**
     * Sluggified name of the assignment.
     */
    slug: string;
    /**
     * Whether students are admins on created repository on accepted assignment.
     */
    students_are_repo_admins: boolean;
    /**
     * Whether feedback pull request will be created on assignment acceptance.
     */
    feedback_pull_requests_enabled: boolean;
    /**
     * The maximum allowable teams for the assignment.
     */
    max_teams?: number | null;
    /**
     * The maximum allowable members per team.
     */
    max_members?: number | null;
    /**
     * The selected editor for the assignment.
     */
    editor: string;
    /**
     * The number of students that have accepted the assignment.
     */
    accepted: number;
    /**
     * The number of students that have submitted the assignment.
     */
    submitted: number;
    /**
     * The number of students that have passed the assignment.
     */
    passing: number;
    /**
     * The programming language used in the assignment.
     */
    language: string;
    /**
     * The time at which the assignment is due.
     */
    deadline: string | null;
    classroom: simple_classroom;
};

export namespace simple_classroom_assignment {

    /**
     * Whether it's a Group Assignment or Individual Assignment.
     */
    export enum type {
        INDIVIDUAL = 'individual',
        GROUP = 'group',
    }


}

