/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A repository import from an external source.
 */
export type _import = {
    vcs: string | null;
    use_lfs?: boolean;
    /**
     * The URL of the originating repository.
     */
    vcs_url: string;
    svc_root?: string;
    tfvc_project?: string;
    status: _import.status;
    status_text?: string | null;
    failed_step?: string | null;
    error_message?: string | null;
    import_percent?: number | null;
    commit_count?: number | null;
    push_percent?: number | null;
    has_large_files?: boolean;
    large_files_size?: number;
    large_files_count?: number;
    project_choices?: Array<{
        vcs?: string;
        tfvc_project?: string;
        human_name?: string;
    }>;
    message?: string;
    authors_count?: number | null;
    url: string;
    html_url: string;
    authors_url: string;
    repository_url: string;
    svn_root?: string;
};

export namespace _import {

    export enum status {
        AUTH = 'auth',
        ERROR = 'error',
        NONE = 'none',
        DETECTING = 'detecting',
        CHOOSE = 'choose',
        AUTH_FAILED = 'auth_failed',
        IMPORTING = 'importing',
        MAPPING = 'mapping',
        WAITING_TO_PUSH = 'waiting_to_push',
        PUSHING = 'pushing',
        COMPLETE = 'complete',
        SETUP = 'setup',
        UNKNOWN = 'unknown',
        DETECTION_FOUND_MULTIPLE = 'detection_found_multiple',
        DETECTION_FOUND_NOTHING = 'detection_found_nothing',
        DETECTION_NEEDS_AUTH = 'detection_needs_auth',
    }


}

