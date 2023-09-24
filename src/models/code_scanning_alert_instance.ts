/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { code_scanning_alert_classification } from './code_scanning_alert_classification';
import type { code_scanning_alert_environment } from './code_scanning_alert_environment';
import type { code_scanning_alert_location } from './code_scanning_alert_location';
import type { code_scanning_alert_state } from './code_scanning_alert_state';
import type { code_scanning_analysis_analysis_key } from './code_scanning_analysis_analysis_key';
import type { code_scanning_analysis_category } from './code_scanning_analysis_category';
import type { code_scanning_ref } from './code_scanning_ref';

export type code_scanning_alert_instance = {
    ref?: code_scanning_ref;
    analysis_key?: code_scanning_analysis_analysis_key;
    environment?: code_scanning_alert_environment;
    category?: code_scanning_analysis_category;
    state?: code_scanning_alert_state;
    commit_sha?: string;
    message?: {
        text?: string;
    };
    location?: code_scanning_alert_location;
    html_url?: string;
    /**
     * Classifications that have been applied to the file that triggered the alert.
     * For example identifying it as documentation, or a generated file.
     */
    classifications?: Array<code_scanning_alert_classification>;
};

