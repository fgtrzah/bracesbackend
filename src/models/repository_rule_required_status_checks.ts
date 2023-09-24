/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { repository_rule_params_status_check_configuration } from './repository_rule_params_status_check_configuration';

/**
 * Choose which status checks must pass before branches can be merged into a branch that matches this rule. When enabled, commits must first be pushed to another branch, then merged or pushed directly to a branch that matches this rule after status checks have passed.
 */
export type repository_rule_required_status_checks = {
    type: repository_rule_required_status_checks.type;
    parameters?: {
        /**
         * Status checks that are required.
         */
        required_status_checks: Array<repository_rule_params_status_check_configuration>;
        /**
         * Whether pull requests targeting a matching branch must be tested with the latest code. This setting will not take effect unless at least one status check is enabled.
         */
        strict_required_status_checks_policy: boolean;
    };
};

export namespace repository_rule_required_status_checks {

    export enum type {
        REQUIRED_STATUS_CHECKS = 'required_status_checks',
    }


}

