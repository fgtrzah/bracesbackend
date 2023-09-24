/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { repository_ruleset_conditions } from './repository_ruleset_conditions';
import type { repository_ruleset_conditions_repository_id_target } from './repository_ruleset_conditions_repository_id_target';
import type { repository_ruleset_conditions_repository_name_target } from './repository_ruleset_conditions_repository_name_target';

/**
 * Conditions for an organization ruleset. The conditions object should contain both `repository_name` and `ref_name` properties or both `repository_id` and `ref_name` properties.
 *
 */
export type org_ruleset_conditions = ((repository_ruleset_conditions & repository_ruleset_conditions_repository_name_target) | (repository_ruleset_conditions & repository_ruleset_conditions_repository_id_target));

