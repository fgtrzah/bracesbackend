/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_rule } from './repository_rule';
import type { repository_ruleset } from './repository_ruleset';
import type { repository_ruleset_conditions } from './repository_ruleset_conditions';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_repository_ruleset_edited = {
    action: webhook_repository_ruleset_edited.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository?: repository_webhooks;
    repository_ruleset: repository_ruleset;
    changes?: {
        name?: {
            from?: string;
        };
        enforcement?: {
            from?: string;
        };
        conditions?: {
            added?: Array<repository_ruleset_conditions>;
            deleted?: Array<repository_ruleset_conditions>;
            updated?: Array<{
                condition?: repository_ruleset_conditions;
                changes?: {
                    condition_type?: {
                        from?: string;
                    };
                    target?: {
                        from?: string;
                    };
                    include?: {
                        from?: Array<string>;
                    };
                    exclude?: {
                        from?: Array<string>;
                    };
                };
            }>;
        };
        rules?: {
            added?: Array<repository_rule>;
            deleted?: Array<repository_rule>;
            updated?: Array<{
                rule?: repository_rule;
                changes?: {
                    configuration?: {
                        from?: string;
                    };
                    rule_type?: {
                        from?: string;
                    };
                    pattern?: {
                        from?: string;
                    };
                };
            }>;
        };
    };
    sender: simple_user_webhooks;
};

export namespace webhook_repository_ruleset_edited {

    export enum action {
        EDITED = 'edited',
    }


}

