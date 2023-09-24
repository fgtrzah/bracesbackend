/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a 'commit' secret scanning location type. This location type shows that a secret was detected inside a commit to a repository.
 */
export type secret_scanning_location_commit = {
    /**
     * The file path in the repository
     */
    path: string;
    /**
     * Line number at which the secret starts in the file
     */
    start_line: number;
    /**
     * Line number at which the secret ends in the file
     */
    end_line: number;
    /**
     * The column at which the secret starts within the start line when the file is interpreted as 8BIT ASCII
     */
    start_column: number;
    /**
     * The column at which the secret ends within the end line when the file is interpreted as 8BIT ASCII
     */
    end_column: number;
    /**
     * SHA-1 hash ID of the associated blob
     */
    blob_sha: string;
    /**
     * The API URL to get the associated blob resource
     */
    blob_url: string;
    /**
     * SHA-1 hash ID of the associated commit
     */
    commit_sha: string;
    /**
     * The API URL to get the associated commit resource
     */
    commit_url: string;
};

