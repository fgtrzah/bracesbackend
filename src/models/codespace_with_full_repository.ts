/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { full_repository } from './full_repository';
import type { nullable_codespace_machine } from './nullable_codespace_machine';
import type { simple_user } from './simple_user';

/**
 * A codespace.
 */
export type codespace_with_full_repository = {
    id: number;
    /**
     * Automatically generated name of this codespace.
     */
    name: string;
    /**
     * Display name for this codespace.
     */
    display_name?: string | null;
    /**
     * UUID identifying this codespace's environment.
     */
    environment_id: string | null;
    owner: simple_user;
    billable_owner: simple_user;
    repository: full_repository;
    machine: nullable_codespace_machine;
    /**
     * Path to devcontainer.json from repo root used to create Codespace.
     */
    devcontainer_path?: string | null;
    /**
     * Whether the codespace was created from a prebuild.
     */
    prebuild: boolean | null;
    created_at: string;
    updated_at: string;
    /**
     * Last known time this codespace was started.
     */
    last_used_at: string;
    /**
     * State of this codespace.
     */
    state: codespace_with_full_repository.state;
    /**
     * API URL for this codespace.
     */
    url: string;
    /**
     * Details about the codespace's git repository.
     */
    git_status: {
        /**
         * The number of commits the local repository is ahead of the remote.
         */
        ahead?: number;
        /**
         * The number of commits the local repository is behind the remote.
         */
        behind?: number;
        /**
         * Whether the local repository has unpushed changes.
         */
        has_unpushed_changes?: boolean;
        /**
         * Whether the local repository has uncommitted changes.
         */
        has_uncommitted_changes?: boolean;
        /**
         * The current branch (or SHA if in detached HEAD state) of the local repository.
         */
        ref?: string;
    };
    /**
     * The initally assigned location of a new codespace.
     */
    location: codespace_with_full_repository.location;
    /**
     * The number of minutes of inactivity after which this codespace will be automatically stopped.
     */
    idle_timeout_minutes: number | null;
    /**
     * URL to access this codespace on the web.
     */
    web_url: string;
    /**
     * API URL to access available alternate machine types for this codespace.
     */
    machines_url: string;
    /**
     * API URL to start this codespace.
     */
    start_url: string;
    /**
     * API URL to stop this codespace.
     */
    stop_url: string;
    /**
     * API URL to publish this codespace to a new repository.
     */
    publish_url?: string | null;
    /**
     * API URL for the Pull Request associated with this codespace, if any.
     */
    pulls_url: string | null;
    recent_folders: Array<string>;
    runtime_constraints?: {
        /**
         * The privacy settings a user can select from when forwarding a port.
         */
        allowed_port_privacy_settings?: Array<string> | null;
    };
    /**
     * Whether or not a codespace has a pending async operation. This would mean that the codespace is temporarily unavailable. The only thing that you can do with a codespace in this state is delete it.
     */
    pending_operation?: boolean | null;
    /**
     * Text to show user when codespace is disabled by a pending operation
     */
    pending_operation_disabled_reason?: string | null;
    /**
     * Text to show user when codespace idle timeout minutes has been overriden by an organization policy
     */
    idle_timeout_notice?: string | null;
    /**
     * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
     */
    retention_period_minutes?: number | null;
    /**
     * When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at"
     */
    retention_expires_at?: string | null;
};

export namespace codespace_with_full_repository {

    /**
     * State of this codespace.
     */
    export enum state {
        UNKNOWN = 'Unknown',
        CREATED = 'Created',
        QUEUED = 'Queued',
        PROVISIONING = 'Provisioning',
        AVAILABLE = 'Available',
        AWAITING = 'Awaiting',
        UNAVAILABLE = 'Unavailable',
        DELETED = 'Deleted',
        MOVED = 'Moved',
        SHUTDOWN = 'Shutdown',
        ARCHIVED = 'Archived',
        STARTING = 'Starting',
        SHUTTING_DOWN = 'ShuttingDown',
        FAILED = 'Failed',
        EXPORTING = 'Exporting',
        UPDATING = 'Updating',
        REBUILDING = 'Rebuilding',
    }

    /**
     * The initally assigned location of a new codespace.
     */
    export enum location {
        EAST_US = 'EastUs',
        SOUTH_EAST_ASIA = 'SouthEastAsia',
        WEST_EUROPE = 'WestEurope',
        WEST_US2 = 'WestUs2',
    }


}

