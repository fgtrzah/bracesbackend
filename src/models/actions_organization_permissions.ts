/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allowed_actions } from './allowed_actions';
import type { enabled_repositories } from './enabled_repositories';
import type { selected_actions_url } from './selected_actions_url';

export type actions_organization_permissions = {
    enabled_repositories: enabled_repositories;
    /**
     * The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`.
     */
    selected_repositories_url?: string;
    allowed_actions?: allowed_actions;
    selected_actions_url?: selected_actions_url;
};

