/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { classroom } from '../models/classroom';
import type { classroom_accepted_assignment } from '../models/classroom_accepted_assignment';
import type { classroom_assignment } from '../models/classroom_assignment';
import type { classroom_assignment_grade } from '../models/classroom_assignment_grade';
import type { simple_classroom } from '../models/simple_classroom';
import type { simple_classroom_assignment } from '../models/simple_classroom_assignment';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClassroomService {

    /**
     * Get an assignment
     * Gets a GitHub Classroom assignment. Assignment will only be returned if the current user is an administrator of the GitHub Classroom for the assignment.
     * @param assignmentId The unique identifier of the classroom assignment.
     * @returns classroom_assignment Response
     * @throws ApiError
     */
    public static classroomGetAnAssignment(
        assignmentId: number,
    ): CancelablePromise<classroom_assignment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assignments/{assignment_id}',
            path: {
                'assignment_id': assignmentId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * List accepted assignments for an assignment
     * Lists any assignment repositories that have been created by students accepting a GitHub Classroom assignment. Accepted assignments will only be returned if the current user is an administrator of the GitHub Classroom for the assignment.
     * @param assignmentId The unique identifier of the classroom assignment.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns classroom_accepted_assignment Response
     * @throws ApiError
     */
    public static classroomListAcceptedAssigmentsForAnAssignment(
        assignmentId: number,
        page: number = 1,
        perPage: number = 30,
    ): CancelablePromise<Array<classroom_accepted_assignment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assignments/{assignment_id}/accepted_assignments',
            path: {
                'assignment_id': assignmentId,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Get assignment grades
     * Gets grades for a GitHub Classroom assignment. Grades will only be returned if the current user is an administrator of the GitHub Classroom for the assignment.
     * @param assignmentId The unique identifier of the classroom assignment.
     * @returns classroom_assignment_grade Response
     * @throws ApiError
     */
    public static classroomGetAssignmentGrades(
        assignmentId: number,
    ): CancelablePromise<Array<classroom_assignment_grade>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assignments/{assignment_id}/grades',
            path: {
                'assignment_id': assignmentId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * List classrooms
     * Lists GitHub Classroom classrooms for the current user. Classrooms will only be returned if the current user is an administrator of one or more GitHub Classrooms.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns simple_classroom Response
     * @throws ApiError
     */
    public static classroomListClassrooms(
        page: number = 1,
        perPage: number = 30,
    ): CancelablePromise<Array<simple_classroom>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/classrooms',
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Get a classroom
     * Gets a GitHub Classroom classroom for the current user. Classroom will only be returned if the current user is an administrator of the GitHub Classroom.
     * @param classroomId The unique identifier of the classroom.
     * @returns classroom Response
     * @throws ApiError
     */
    public static classroomGetAClassroom(
        classroomId: number,
    ): CancelablePromise<classroom> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/classrooms/{classroom_id}',
            path: {
                'classroom_id': classroomId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * List assignments for a classroom
     * Lists GitHub Classroom assignments for a classroom. Assignments will only be returned if the current user is an administrator of the GitHub Classroom.
     * @param classroomId The unique identifier of the classroom.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns simple_classroom_assignment Response
     * @throws ApiError
     */
    public static classroomListAssignmentsForAClassroom(
        classroomId: number,
        page: number = 1,
        perPage: number = 30,
    ): CancelablePromise<Array<simple_classroom_assignment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/classrooms/{classroom_id}/assignments',
            path: {
                'classroom_id': classroomId,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

}
