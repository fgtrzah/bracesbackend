/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { alert_created_at } from './alert_created_at';
import type { alert_dismissed_at } from './alert_dismissed_at';
import type { alert_fixed_at } from './alert_fixed_at';
import type { alert_html_url } from './alert_html_url';
import type { alert_instances_url } from './alert_instances_url';
import type { alert_number } from './alert_number';
import type { alert_updated_at } from './alert_updated_at';
import type { alert_url } from './alert_url';
import type { code_scanning_alert_dismissed_comment } from './code_scanning_alert_dismissed_comment';
import type { code_scanning_alert_dismissed_reason } from './code_scanning_alert_dismissed_reason';
import type { code_scanning_alert_instance } from './code_scanning_alert_instance';
import type { code_scanning_alert_rule } from './code_scanning_alert_rule';
import type { code_scanning_alert_state } from './code_scanning_alert_state';
import type { code_scanning_analysis_tool } from './code_scanning_analysis_tool';
import type { nullable_simple_user } from './nullable_simple_user';

export type code_scanning_alert = {
    number: alert_number;
    created_at: alert_created_at;
    updated_at?: alert_updated_at;
    url: alert_url;
    html_url: alert_html_url;
    instances_url: alert_instances_url;
    state: code_scanning_alert_state;
    fixed_at?: alert_fixed_at;
    dismissed_by: nullable_simple_user;
    dismissed_at: alert_dismissed_at;
    dismissed_reason: code_scanning_alert_dismissed_reason;
    dismissed_comment?: code_scanning_alert_dismissed_comment;
    rule: code_scanning_alert_rule;
    tool: code_scanning_analysis_tool;
    most_recent_instance: code_scanning_alert_instance;
};

