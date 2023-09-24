/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { projects_v2_item_content_type } from './projects_v2_item_content_type';
import type { simple_user } from './simple_user';

/**
 * An item belonging to a project
 */
export type projects_v2_item = {
    id: number;
    node_id?: string;
    project_node_id?: string;
    content_node_id: string;
    content_type: projects_v2_item_content_type;
    creator?: simple_user;
    created_at: string;
    updated_at: string;
    archived_at: string | null;
};

