/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { deployment } from './deployment';
import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_workflow_job_queued = {
    action: webhook_workflow_job_queued.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
    workflow_job: {
        check_run_url: string;
        completed_at: string | null;
        conclusion: string | null;
        /**
         * The time that the job created.
         */
        created_at: string;
        head_sha: string;
        html_url: string;
        id: number;
        labels: Array<string>;
        name: string;
        node_id: string;
        run_attempt: number;
        run_id: number;
        run_url: string;
        runner_group_id: number | null;
        runner_group_name: string | null;
        runner_id: number | null;
        runner_name: string | null;
        started_at: string;
        status: webhook_workflow_job_queued.status;
        /**
         * The name of the current branch.
         */
        head_branch: string | null;
        /**
         * The name of the workflow.
         */
        workflow_name: string | null;
        steps: Array<{
            completed_at: string | null;
            conclusion: 'failure' | 'skipped' | 'success' | 'cancelled' | null;
            name: string;
            number: number;
            started_at: string | null;
            status: 'completed' | 'in_progress' | 'queued' | 'pending';
        }>;
        url: string;
    };
    deployment?: deployment;
};

export namespace webhook_workflow_job_queued {

    export enum action {
        QUEUED = 'queued',
    }

    export enum status {
        QUEUED = 'queued',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
        WAITING = 'waiting',
    }


}

