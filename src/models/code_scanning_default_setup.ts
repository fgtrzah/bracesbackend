/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Configuration for code scanning default setup.
 */
export type code_scanning_default_setup = {
    /**
     * Code scanning default setup has been configured or not.
     */
    state?: code_scanning_default_setup.state;
    /**
     * Languages to be analysed.
     */
    languages?: Array<'c-cpp' | 'csharp' | 'go' | 'java-kotlin' | 'javascript-typescript' | 'javascript' | 'python' | 'ruby' | 'typescript' | 'swift'>;
    /**
     * CodeQL query suite to be used.
     */
    query_suite?: code_scanning_default_setup.query_suite;
    /**
     * Timestamp of latest configuration update.
     */
    updated_at?: string | null;
    /**
     * The frequency of the periodic analysis.
     */
    schedule?: code_scanning_default_setup.schedule | null;
};

export namespace code_scanning_default_setup {

    /**
     * Code scanning default setup has been configured or not.
     */
    export enum state {
        CONFIGURED = 'configured',
        NOT_CONFIGURED = 'not-configured',
    }

    /**
     * CodeQL query suite to be used.
     */
    export enum query_suite {
        DEFAULT = 'default',
        EXTENDED = 'extended',
    }

    /**
     * The frequency of the periodic analysis.
     */
    export enum schedule {
        WEEKLY = 'weekly',
    }


}

