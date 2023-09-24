/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A description of the machine powering a codespace.
 */
export type codespace_machine = {
    /**
     * The name of the machine.
     */
    name: string;
    /**
     * The display name of the machine includes cores, memory, and storage.
     */
    display_name: string;
    /**
     * The operating system of the machine.
     */
    operating_system: string;
    /**
     * How much storage is available to the codespace.
     */
    storage_in_bytes: number;
    /**
     * How much memory is available to the codespace.
     */
    memory_in_bytes: number;
    /**
     * How many cores are available to the codespace.
     */
    cpus: number;
    /**
     * Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
     */
    prebuild_availability: codespace_machine.prebuild_availability | null;
};

export namespace codespace_machine {

    /**
     * Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
     */
    export enum prebuild_availability {
        NONE = 'none',
        READY = 'ready',
        IN_PROGRESS = 'in_progress',
    }


}

