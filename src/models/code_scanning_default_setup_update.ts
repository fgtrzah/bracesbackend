/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Configuration for code scanning default setup.
 */
export type code_scanning_default_setup_update = {
    /**
     * Whether code scanning default setup has been configured or not.
     */
    state: code_scanning_default_setup_update.state;
    /**
     * CodeQL query suite to be used.
     */
    query_suite?: code_scanning_default_setup_update.query_suite;
    /**
     * CodeQL languages to be analyzed. Supported values are: `c-cpp`, `csharp`, `go`, `java-kotlin`, `javascript-typescript`, `python`, `ruby`, and `swift`.
     */
    languages?: Array<'c-cpp' | 'csharp' | 'go' | 'java-kotlin' | 'javascript-typescript' | 'python' | 'ruby' | 'swift'>;
};

export namespace code_scanning_default_setup_update {

    /**
     * Whether code scanning default setup has been configured or not.
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


}

