"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ClassroomService {
    /**
     * Get an assignment
     * Gets a GitHub Classroom assignment. Assignment will only be returned if the current user is an administrator of the GitHub Classroom for the assignment.
     * @param assignmentId The unique identifier of the classroom assignment.
     * @returns classroom_assignment Response
     * @throws ApiError
     */
    static classroomGetAnAssignment(assignmentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static classroomListAcceptedAssigmentsForAnAssignment(assignmentId, page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static classroomGetAssignmentGrades(assignmentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static classroomListClassrooms(page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static classroomGetAClassroom(classroomId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static classroomListAssignmentsForAClassroom(classroomId, page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.ClassroomService = ClassroomService;
//# sourceMappingURL=ClassroomService.js.map