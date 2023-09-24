/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_simple_user } from './nullable_simple_user';

/**
 * Reactions to conversations provide a way to help people express their feelings more simply and effectively.
 */
export type reaction = {
    id: number;
    node_id: string;
    user: nullable_simple_user;
    /**
     * The reaction to use
     */
    content: reaction.content;
    created_at: string;
};

export namespace reaction {

    /**
     * The reaction to use
     */
    export enum content {
        _1 = '+1',
        _1 = '-1',
        LAUGH = 'laugh',
        CONFUSED = 'confused',
        HEART = 'heart',
        HOORAY = 'hooray',
        ROCKET = 'rocket',
        EYES = 'eyes',
    }


}

