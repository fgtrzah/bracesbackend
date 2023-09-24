"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pull_request_review_comment = void 0;
var pull_request_review_comment;
(function (pull_request_review_comment) {
    /**
     * The side of the first line of the range for a multi-line comment.
     */
    let start_side;
    (function (start_side) {
        start_side["LEFT"] = "LEFT";
        start_side["RIGHT"] = "RIGHT";
    })(start_side = pull_request_review_comment.start_side || (pull_request_review_comment.start_side = {}));
    /**
     * The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment
     */
    let side;
    (function (side) {
        side["LEFT"] = "LEFT";
        side["RIGHT"] = "RIGHT";
    })(side = pull_request_review_comment.side || (pull_request_review_comment.side = {}));
    /**
     * The level at which the comment is targeted, can be a diff line or a file.
     */
    let subject_type;
    (function (subject_type) {
        subject_type["LINE"] = "line";
        subject_type["FILE"] = "file";
    })(subject_type = pull_request_review_comment.subject_type || (pull_request_review_comment.subject_type = {}));
})(pull_request_review_comment || (exports.pull_request_review_comment = pull_request_review_comment = {}));
//# sourceMappingURL=pull_request_review_comment.js.map