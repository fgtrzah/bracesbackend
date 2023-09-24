/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { secret_scanning_location_commit } from './secret_scanning_location_commit';
import type { secret_scanning_location_issue_body } from './secret_scanning_location_issue_body';
import type { secret_scanning_location_issue_comment } from './secret_scanning_location_issue_comment';
import type { secret_scanning_location_issue_title } from './secret_scanning_location_issue_title';

export type secret_scanning_location = {
    /**
     * The location type. Because secrets may be found in different types of resources (ie. code, comments, issues), this field identifies the type of resource where the secret was found.
     */
    type: secret_scanning_location.type;
    details: (secret_scanning_location_commit | secret_scanning_location_issue_title | secret_scanning_location_issue_body | secret_scanning_location_issue_comment);
};

export namespace secret_scanning_location {

    /**
     * The location type. Because secrets may be found in different types of resources (ie. code, comments, issues), this field identifies the type of resource where the secret was found.
     */
    export enum type {
        COMMIT = 'commit',
        ISSUE_TITLE = 'issue_title',
        ISSUE_BODY = 'issue_body',
        ISSUE_COMMENT = 'issue_comment',
    }


}

