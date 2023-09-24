/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An actor that can bypass rules in a ruleset
 */
export type repository_ruleset_bypass_actor = {
    /**
     * The ID of the actor that can bypass a ruleset
     */
    actor_id: number;
    /**
     * The type of actor that can bypass a ruleset
     */
    actor_type: repository_ruleset_bypass_actor.actor_type;
    /**
     * When the specified actor can bypass the ruleset. `pull_request` means that an actor can only bypass rules on pull requests.
     */
    bypass_mode: repository_ruleset_bypass_actor.bypass_mode;
};

export namespace repository_ruleset_bypass_actor {

    /**
     * The type of actor that can bypass a ruleset
     */
    export enum actor_type {
        REPOSITORY_ROLE = 'RepositoryRole',
        TEAM = 'Team',
        INTEGRATION = 'Integration',
        ORGANIZATION_ADMIN = 'OrganizationAdmin',
    }

    /**
     * When the specified actor can bypass the ruleset. `pull_request` means that an actor can only bypass rules on pull requests.
     */
    export enum bypass_mode {
        ALWAYS = 'always',
        PULL_REQUEST = 'pull_request',
    }


}

