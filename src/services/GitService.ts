/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { blob } from '../models/blob';
import type { git_commit } from '../models/git_commit';
import type { git_ref } from '../models/git_ref';
import type { git_tag } from '../models/git_tag';
import type { git_tree } from '../models/git_tree';
import type { short_blob } from '../models/short_blob';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GitService {

    /**
     * Create a blob
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns short_blob Response
     * @throws ApiError
     */
    public static gitCreateBlob(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * The new blob's content.
             */
            content: string;
            /**
             * The encoding used for `content`. Currently, `"utf-8"` and `"base64"` are supported.
             */
            encoding?: string;
        },
    ): CancelablePromise<short_blob> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/git/blobs',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                409: `Conflict`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get a blob
     * The `content` in the response will always be Base64 encoded.
     *
     * _Note_: This API supports blobs up to 100 megabytes in size.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param fileSha
     * @returns blob Response
     * @throws ApiError
     */
    public static gitGetBlob(
        owner: string,
        repo: string,
        fileSha: string,
    ): CancelablePromise<blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/blobs/{file_sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'file_sha': fileSha,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Create a commit
     * Creates a new Git [commit object](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects).
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns git_commit Response
     * @throws ApiError
     */
    public static gitCreateCommit(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * The commit message
             */
            message: string;
            /**
             * The SHA of the tree object this commit points to
             */
            tree: string;
            /**
             * The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.
             */
            parents?: Array<string>;
            /**
             * Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
             */
            author?: {
                /**
                 * The name of the author (or committer) of the commit
                 */
                name: string;
                /**
                 * The email of the author (or committer) of the commit
                 */
                email: string;
                /**
                 * Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
                 */
                date?: string;
            };
            /**
             * Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
             */
            committer?: {
                /**
                 * The name of the author (or committer) of the commit
                 */
                name?: string;
                /**
                 * The email of the author (or committer) of the commit
                 */
                email?: string;
                /**
                 * Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
                 */
                date?: string;
            };
            /**
             * The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. GitHub adds the signature to the `gpgsig` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. To pass a `signature` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits.
             */
            signature?: string;
        },
    ): CancelablePromise<git_commit> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/git/commits',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get a commit object
     * Gets a Git [commit object](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects).
     *
     * To get the contents of a commit, see "[Get a commit](/rest/commits/commits#get-a-commit)."
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commitSha The SHA of the commit.
     * @returns git_commit Response
     * @throws ApiError
     */
    public static gitGetCommit(
        owner: string,
        repo: string,
        commitSha: string,
    ): CancelablePromise<git_commit> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/commits/{commit_sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'commit_sha': commitSha,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * List matching references
     * Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.
     *
     * When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.
     *
     * **Note:** You need to explicitly [request a pull request](https://docs.github.com/rest/pulls/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
     *
     * If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref The commit reference. Can be a commit SHA, branch name (`heads/BRANCH_NAME`), or tag name (`tags/TAG_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
     * @returns git_ref Response
     * @throws ApiError
     */
    public static gitListMatchingRefs(
        owner: string,
        repo: string,
        ref: string,
    ): CancelablePromise<Array<git_ref>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/matching-refs/{ref}',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
        });
    }

    /**
     * Get a reference
     * Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.
     *
     * **Note:** You need to explicitly [request a pull request](https://docs.github.com/rest/pulls/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref The commit reference. Can be a commit SHA, branch name (`heads/BRANCH_NAME`), or tag name (`tags/TAG_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
     * @returns git_ref Response
     * @throws ApiError
     */
    public static gitGetRef(
        owner: string,
        repo: string,
        ref: string,
    ): CancelablePromise<git_ref> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/ref/{ref}',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create a reference
     * Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns git_ref Response
     * @throws ApiError
     */
    public static gitCreateRef(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
             */
            ref: string;
            /**
             * The SHA1 value for this reference.
             */
            sha: string;
        },
    ): CancelablePromise<git_ref> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/git/refs',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Update a reference
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref The name of the reference to update (for example, `heads/featureA`). Can be a branch name (`heads/BRANCH_NAME`) or tag name (`tags/TAG_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
     * @param requestBody
     * @returns git_ref Response
     * @throws ApiError
     */
    public static gitUpdateRef(
        owner: string,
        repo: string,
        ref: string,
        requestBody: {
            /**
             * The SHA1 value to set this reference to
             */
            sha: string;
            /**
             * Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work.
             */
            force?: boolean;
        },
    ): CancelablePromise<git_ref> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/git/refs/{ref}',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Delete a reference
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref The commit reference. Can be a commit SHA, branch name (`heads/BRANCH_NAME`), or tag name (`tags/TAG_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
     * @returns void
     * @throws ApiError
     */
    public static gitDeleteRef(
        owner: string,
        repo: string,
        ref: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/git/refs/{ref}',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Create a tag object
     * Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/rest/git/refs#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/rest/git/refs#create-a-reference) the tag reference - this call would be unnecessary.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns git_tag Response
     * @throws ApiError
     */
    public static gitCreateTag(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * The tag's name. This is typically a version (e.g., "v0.0.1").
             */
            tag: string;
            /**
             * The tag message.
             */
            message: string;
            /**
             * The SHA of the git object this is tagging.
             */
            object: string;
            /**
             * The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
             */
            type: 'commit' | 'tree' | 'blob';
            /**
             * An object with information about the individual creating the tag.
             */
            tagger?: {
                /**
                 * The name of the author of the tag
                 */
                name: string;
                /**
                 * The email of the author of the tag
                 */
                email: string;
                /**
                 * When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
                 */
                date?: string;
            };
        },
    ): CancelablePromise<git_tag> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/git/tags',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get a tag
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param tagSha
     * @returns git_tag Response
     * @throws ApiError
     */
    public static gitGetTag(
        owner: string,
        repo: string,
        tagSha: string,
    ): CancelablePromise<git_tag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/tags/{tag_sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'tag_sha': tagSha,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create a tree
     * The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.
     *
     * If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/rest/git/commits#create-a-commit)" and "[Update a reference](https://docs.github.com/rest/git/refs#update-a-reference)."
     *
     * Returns an error if you try to delete a file that does not exist.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns git_tree Response
     * @throws ApiError
     */
    public static gitCreateTree(
        owner: string,
        repo: string,
        requestBody: {
            /**
             * Objects (of `path`, `mode`, `type`, and `sha`) specifying a tree structure.
             */
            tree: Array<{
                /**
                 * The file referenced in the tree.
                 */
                path?: string;
                /**
                 * The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.
                 */
                mode?: '100644' | '100755' | '040000' | '160000' | '120000';
                /**
                 * Either `blob`, `tree`, or `commit`.
                 */
                type?: 'blob' | 'tree' | 'commit';
                /**
                 * The SHA1 checksum ID of the object in the tree. Also called `tree.sha`. If the value is `null` then the file will be deleted.
                 *
                 * **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
                 */
                sha?: string | null;
                /**
                 * The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or `tree.sha`.
                 *
                 * **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
                 */
                content?: string;
            }>;
            /**
             * The SHA1 of an existing Git tree object which will be used as the base for the new tree. If provided, a new Git tree object will be created from entries in the Git tree object pointed to by `base_tree` and entries defined in the `tree` parameter. Entries defined in the `tree` parameter will overwrite items from `base_tree` with the same `path`. If you're creating new changes on a branch, then normally you'd set `base_tree` to the SHA1 of the Git tree object of the current latest commit on the branch you're working on.
             * If not provided, GitHub will create a new Git tree object from only the entries defined in the `tree` parameter. If you create a new commit pointing to such a tree, then all files which were a part of the parent commit's tree and were not defined in the `tree` parameter will be listed as deleted by the new commit.
             *
             */
            base_tree?: string;
        },
    ): CancelablePromise<git_tree> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/git/trees',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Get a tree
     * Returns a single tree using the SHA1 value or ref name for that tree.
     *
     * If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.
     *
     *
     * **Note**: The limit for the `tree` array is 100,000 entries with a maximum size of 7 MB when using the `recursive` parameter.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param treeSha The SHA1 value or ref (branch or tag) name of the tree.
     * @param recursive Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `"true"`, and `"false"`. Omit this parameter to prevent recursively returning objects or subtrees.
     * @returns git_tree Response
     * @throws ApiError
     */
    public static gitGetTree(
        owner: string,
        repo: string,
        treeSha: string,
        recursive?: string,
    ): CancelablePromise<git_tree> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/trees/{tree_sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'tree_sha': treeSha,
            },
            query: {
                'recursive': recursive,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

}
