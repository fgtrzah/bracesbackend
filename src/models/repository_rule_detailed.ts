/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { repository_rule_branch_name_pattern } from './repository_rule_branch_name_pattern';
import type { repository_rule_commit_author_email_pattern } from './repository_rule_commit_author_email_pattern';
import type { repository_rule_commit_message_pattern } from './repository_rule_commit_message_pattern';
import type { repository_rule_committer_email_pattern } from './repository_rule_committer_email_pattern';
import type { repository_rule_creation } from './repository_rule_creation';
import type { repository_rule_deletion } from './repository_rule_deletion';
import type { repository_rule_non_fast_forward } from './repository_rule_non_fast_forward';
import type { repository_rule_pull_request } from './repository_rule_pull_request';
import type { repository_rule_required_deployments } from './repository_rule_required_deployments';
import type { repository_rule_required_linear_history } from './repository_rule_required_linear_history';
import type { repository_rule_required_signatures } from './repository_rule_required_signatures';
import type { repository_rule_required_status_checks } from './repository_rule_required_status_checks';
import type { repository_rule_ruleset_info } from './repository_rule_ruleset_info';
import type { repository_rule_tag_name_pattern } from './repository_rule_tag_name_pattern';
import type { repository_rule_update } from './repository_rule_update';

/**
 * A repository rule with ruleset details.
 */
export type repository_rule_detailed = ((repository_rule_creation & repository_rule_ruleset_info) | (repository_rule_update & repository_rule_ruleset_info) | (repository_rule_deletion & repository_rule_ruleset_info) | (repository_rule_required_linear_history & repository_rule_ruleset_info) | (repository_rule_required_deployments & repository_rule_ruleset_info) | (repository_rule_required_signatures & repository_rule_ruleset_info) | (repository_rule_pull_request & repository_rule_ruleset_info) | (repository_rule_required_status_checks & repository_rule_ruleset_info) | (repository_rule_non_fast_forward & repository_rule_ruleset_info) | (repository_rule_commit_message_pattern & repository_rule_ruleset_info) | (repository_rule_commit_author_email_pattern & repository_rule_ruleset_info) | (repository_rule_committer_email_pattern & repository_rule_ruleset_info) | (repository_rule_branch_name_pattern & repository_rule_ruleset_info) | (repository_rule_tag_name_pattern & repository_rule_ruleset_info));

