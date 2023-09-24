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

export type webhook_workflow_job_completed = {
    action: webhook_workflow_job_completed.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository: repository_webhooks;
    sender: simple_user_webhooks;
    workflow_job: ({
        check_run_url: string;
        completed_at: string | null;
        conclusion: webhook_workflow_job_completed.conclusion | null;
        /**
         * The time that the job created.
         */
        created_at: string;
        head_sha: string;
        html_url: string;
        id: number;
        /**
         * Custom labels for the job. Specified by the [`"runs-on"` attribute](https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) in the workflow YAML.
         */
        labels: Array<string>;
        name: string;
        node_id: string;
        run_attempt: number;
        run_id: number;
        run_url: string;
        /**
         * The ID of the runner group that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
         */
        runner_group_id: number | null;
        /**
         * The name of the runner group that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
         */
        runner_group_name: string | null;
        /**
         * The ID of the runner that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
         */
        runner_id: number | null;
        /**
         * The name of the runner that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
         */
        runner_name: string | null;
        started_at: string;
        /**
         * The current status of the job. Can be `queued`, `in_progress`, `waiting`, or `completed`.
         */
        status: webhook_workflow_job_completed.status;
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
            status: 'in_progress' | 'completed' | 'queued';
        }>;
        url: string;
    } & {
        check_run_url?: string;
        completed_at?: string;
        conclusion: webhook_workflow_job_completed.conclusion;
        /**
         * The time that the job created.
         */
        created_at?: string;
        head_sha?: string;
        html_url?: string;
        id?: number;
        labels?: Array<string | null>;
        name?: string;
        node_id?: string;
        run_attempt?: number;
        run_id?: number;
        run_url?: string;
        runner_group_id?: number | null;
        runner_group_name?: string | null;
        runner_id?: number | null;
        runner_name?: string | null;
        started_at?: string;
        status?: string;
        /**
         * The name of the current branch.
         */
        head_branch?: string | null;
        /**
         * The name of the workflow.
         */
        workflow_name?: string | null;
        steps?: Array<Record<string, any> | null>;
        url?: string;
    });
    deployment?: deployment;
};

export namespace webhook_workflow_job_completed {

    export enum action {
        COMPLETED = 'completed',
    }

    export enum conclusion {
        SUCCESS = 'success',
        FAILURE = 'failure',
        SKIPPED = 'skipped',
        CANCELLED = 'cancelled',
        ACTION_REQUIRED = 'action_required',
        NEUTRAL = 'neutral',
        TIMED_OUT = 'timed_out',
    }

    /**
     * The current status of the job. Can be `queued`, `in_progress`, `waiting`, or `completed`.
     */
    export enum status {
        QUEUED = 'queued',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
        WAITING = 'waiting',
    }


}

