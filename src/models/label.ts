/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
 */
export type label = {
    id: number;
    node_id: string;
    /**
     * URL for the label
     */
    url: string;
    /**
     * The name of the label.
     */
    name: string;
    description: string | null;
    /**
     * 6-character hex code, without the leading #, identifying the color
     */
    color: string;
    default: boolean;
};

