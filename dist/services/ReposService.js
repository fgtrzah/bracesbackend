"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReposService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ReposService {
    /**
     * List organization repositories
     * Lists repositories for the specified organization.
     *
     * **Note:** In order to see the `security_and_analysis` block for a repository you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
     * @param org The organization name. The name is not case sensitive.
     * @param type Specifies the types of repositories you want returned.
     * @param sort The property to sort the results by.
     * @param direction The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns minimal_repository Response
     * @throws ApiError
     */
    static reposListForOrg(org, type = 'all', sort = 'created', direction, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/repos',
            path: {
                'org': org,
            },
            query: {
                'type': type,
                'sort': sort,
                'direction': direction,
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Create an organization repository
     * Creates a new repository in the specified organization. The authenticated user must be a member of the organization.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns repository Response
     * @throws ApiError
     */
    static reposCreateInOrg(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/repos',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get all organization repository rulesets
     * Get all the repository rulesets for an organization.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns repository_ruleset Response
     * @throws ApiError
     */
    static reposGetOrgRulesets(org, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/rulesets',
            path: {
                'org': org,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Create an organization repository ruleset
     * Create a repository ruleset for an organization.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody Request body
     * @returns repository_ruleset Response
     * @throws ApiError
     */
    static reposCreateOrgRuleset(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/rulesets',
            path: {
                'org': org,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Get an organization repository ruleset
     * Get a repository ruleset for an organization.
     * @param org The organization name. The name is not case sensitive.
     * @param rulesetId The ID of the ruleset.
     * @returns repository_ruleset Response
     * @throws ApiError
     */
    static reposGetOrgRuleset(org, rulesetId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/rulesets/{ruleset_id}',
            path: {
                'org': org,
                'ruleset_id': rulesetId,
            },
            errors: {
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Update an organization repository ruleset
     * Update a ruleset for an organization.
     * @param org The organization name. The name is not case sensitive.
     * @param rulesetId The ID of the ruleset.
     * @param requestBody Request body
     * @returns repository_ruleset Response
     * @throws ApiError
     */
    static reposUpdateOrgRuleset(org, rulesetId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/rulesets/{ruleset_id}',
            path: {
                'org': org,
                'ruleset_id': rulesetId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Delete an organization repository ruleset
     * Delete a ruleset for an organization.
     * @param org The organization name. The name is not case sensitive.
     * @param rulesetId The ID of the ruleset.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteOrgRuleset(org, rulesetId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/rulesets/{ruleset_id}',
            path: {
                'org': org,
                'ruleset_id': rulesetId,
            },
            errors: {
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Get a repository
     * The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.
     *
     * **Note:** In order to see the `security_and_analysis` block for a repository you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns full_repository Response
     * @throws ApiError
     */
    static reposGet(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                301: `Moved permanently`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a repository
     * **Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/rest/repos/repos#replace-all-repository-topics) endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns full_repository Response
     * @throws ApiError
     */
    static reposUpdate(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                307: `Temporary Redirect`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Delete a repository
     * Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.
     *
     * If an organization owner has configured the organization to prevent members from deleting organization-owned
     * repositories, you will get a `403 Forbidden` response.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    static reposDelete(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                307: `Temporary Redirect`,
                403: `If an organization owner has configured the organization to prevent members from deleting organization-owned repositories, a member will get this response:`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * List repository activities
     * Lists a detailed history of changes to a repository, such as pushes, merges, force pushes, and branch changes, and associates these changes with commits and users.
     *
     * For more information about viewing repository activity,
     * see "[Viewing repository activity](https://docs.github.com/repositories/viewing-activity-and-data-for-your-repository/viewing-repository-activity)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param direction The direction to sort the results by.
     * @param perPage The number of results per page (max 100).
     * @param before A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.
     * @param after A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.
     * @param ref The Git reference for the activities you want to list.
     *
     * The `ref` for a branch can be formatted either as `refs/heads/BRANCH_NAME` or `BRANCH_NAME`, where `BRANCH_NAME` is the name of your branch.
     * @param actor The GitHub username to use to filter by the actor who performed the activity.
     * @param timePeriod The time period to filter by.
     *
     * For example, `day` will filter for activity that occurred in the past 24 hours, and `week` will filter for activity that occurred in the past 7 days (168 hours).
     * @param activityType The activity type to filter by.
     *
     * For example, you can choose to filter by "force_push", to see all force pushes to the repository.
     * @returns activity Response
     * @throws ApiError
     */
    static reposListActivities(owner, repo, direction = 'desc', perPage = 30, before, after, ref, actor, timePeriod, activityType) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/activity',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'direction': direction,
                'per_page': perPage,
                'before': before,
                'after': after,
                'ref': ref,
                'actor': actor,
                'time_period': timePeriod,
                'activity_type': activityType,
            },
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List all autolinks of a repository
     * This returns a list of autolinks configured for the given repository.
     *
     * Information about autolinks are only available to repository administrators.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param page Page number of the results to fetch.
     * @returns autolink Response
     * @throws ApiError
     */
    static reposListAutolinks(owner, repo, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/autolinks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
            },
        });
    }
    /**
     * Create an autolink reference for a repository
     * Users with admin access to the repository can create an autolink.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns autolink response
     * @throws ApiError
     */
    static reposCreateAutolink(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/autolinks',
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
     * Get an autolink reference of a repository
     * This returns a single autolink reference by ID that was configured for the given repository.
     *
     * Information about autolinks are only available to repository administrators.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param autolinkId The unique identifier of the autolink.
     * @returns autolink Response
     * @throws ApiError
     */
    static reposGetAutolink(owner, repo, autolinkId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/autolinks/{autolink_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'autolink_id': autolinkId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Delete an autolink reference from a repository
     * This deletes a single autolink reference by ID that was configured for the given repository.
     *
     * Information about autolinks are only available to repository administrators.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param autolinkId The unique identifier of the autolink.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteAutolink(owner, repo, autolinkId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/autolinks/{autolink_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'autolink_id': autolinkId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Check if automated security fixes are enabled for a repository
     * Shows whether automated security fixes are enabled, disabled or paused for a repository. The authenticated user must have admin read access to the repository. For more information, see "[Configuring automated security fixes](https://docs.github.com/articles/configuring-automated-security-fixes)".
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns check_automated_security_fixes Response if dependabot is enabled
     * @throws ApiError
     */
    static reposCheckAutomatedSecurityFixes(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/automated-security-fixes',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `Not Found if dependabot is not enabled for the repository`,
            },
        });
    }
    /**
     * Enable automated security fixes
     * Enables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://docs.github.com/articles/configuring-automated-security-fixes)".
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    static reposEnableAutomatedSecurityFixes(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/automated-security-fixes',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Disable automated security fixes
     * Disables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://docs.github.com/articles/configuring-automated-security-fixes)".
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    static reposDisableAutomatedSecurityFixes(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/automated-security-fixes',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * List branches
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param _protected Setting to `true` returns only protected branches. When set to `false`, only unprotected branches are returned. Omitting this parameter returns all branches.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns short_branch Response
     * @throws ApiError
     */
    static reposListBranches(owner, repo, _protected, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'protected': _protected,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get a branch
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns branch_with_protection Response
     * @throws ApiError
     */
    static reposGetBranch(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                301: `Moved permanently`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns branch_protection Response
     * @throws ApiError
     */
    static reposGetBranchProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Protecting a branch requires admin or owner permissions to the repository.
     *
     * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
     *
     * **Note**: The list of users, apps, and teams in total is limited to 100 items.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns protected_branch Response
     * @throws ApiError
     */
    static reposUpdateBranchProtection(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
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
     * Delete branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns void
     * @throws ApiError
     */
    static reposDeleteBranchProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get admin branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns protected_branch_admin_enforced Response
     * @throws ApiError
     */
    static reposGetAdminBranchProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
        });
    }
    /**
     * Set admin branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns protected_branch_admin_enforced Response
     * @throws ApiError
     */
    static reposSetAdminBranchProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
        });
    }
    /**
     * Delete admin branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns void
     * @throws ApiError
     */
    static reposDeleteAdminBranchProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get pull request review protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns protected_branch_pull_request_review Response
     * @throws ApiError
     */
    static reposGetPullRequestReviewProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
        });
    }
    /**
     * Update pull request review protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     *
     * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns protected_branch_pull_request_review Response
     * @throws ApiError
     */
    static reposUpdatePullRequestReviewProtection(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Delete pull request review protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns void
     * @throws ApiError
     */
    static reposDeletePullRequestReviewProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get commit signature protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/articles/signing-commits-with-gpg) in GitHub Help.
     *
     * **Note**: You must enable branch protection to require signed commits.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns protected_branch_admin_enforced Response
     * @throws ApiError
     */
    static reposGetCommitSignatureProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Create commit signature protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns protected_branch_admin_enforced Response
     * @throws ApiError
     */
    static reposCreateCommitSignatureProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Delete commit signature protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns void
     * @throws ApiError
     */
    static reposDeleteCommitSignatureProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get status checks protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns status_check_policy Response
     * @throws ApiError
     */
    static reposGetStatusChecksProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update status check protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns status_check_policy Response
     * @throws ApiError
     */
    static reposUpdateStatusCheckProtection(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
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
     * Remove status check protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns void
     * @throws ApiError
     */
    static reposRemoveStatusCheckProtection(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
        });
    }
    /**
     * Get all status check contexts
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns string Response
     * @throws ApiError
     */
    static reposGetAllStatusCheckContexts(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Add status check contexts
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns string Response
     * @throws ApiError
     */
    static reposAddStatusCheckContexts(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
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
     * Set status check contexts
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns string Response
     * @throws ApiError
     */
    static reposSetStatusCheckContexts(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
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
     * Remove status check contexts
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns string Response
     * @throws ApiError
     */
    static reposRemoveStatusCheckContexts(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
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
     * Get access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists who has access to this protected branch.
     *
     * **Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns branch_restriction_policy Response
     * @throws ApiError
     */
    static reposGetAccessRestrictions(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Delete access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Disables the ability to restrict who can push to this branch.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns void
     * @throws ApiError
     */
    static reposDeleteAccessRestrictions(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
        });
    }
    /**
     * Get apps with access to the protected branch
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns integration Response
     * @throws ApiError
     */
    static reposGetAppsWithAccessToProtectedBranch(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Add app access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns integration Response
     * @throws ApiError
     */
    static reposAddAppAccessRestrictions(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Set app access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns integration Response
     * @throws ApiError
     */
    static reposSetAppAccessRestrictions(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Remove app access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns integration Response
     * @throws ApiError
     */
    static reposRemoveAppAccessRestrictions(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get teams with access to the protected branch
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the teams who have push access to this branch. The list includes child teams.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns team Response
     * @throws ApiError
     */
    static reposGetTeamsWithAccessToProtectedBranch(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Add team access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified teams push access for this branch. You can also give push access to child teams.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns team Response
     * @throws ApiError
     */
    static reposAddTeamAccessRestrictions(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Set team access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns team Response
     * @throws ApiError
     */
    static reposSetTeamAccessRestrictions(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Remove team access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of a team to push to this branch. You can also remove push access for child teams.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns team Response
     * @throws ApiError
     */
    static reposRemoveTeamAccessRestrictions(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get users with access to the protected branch
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the people who have push access to this branch.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @returns simple_user Response
     * @throws ApiError
     */
    static reposGetUsersWithAccessToProtectedBranch(owner, repo, branch) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Add user access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified people push access for this branch.
     *
     * | Type    | Description                                                                                                                   |
     * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns simple_user Response
     * @throws ApiError
     */
    static reposAddUserAccessRestrictions(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Set user access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.
     *
     * | Type    | Description                                                                                                                   |
     * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns simple_user Response
     * @throws ApiError
     */
    static reposSetUserAccessRestrictions(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Remove user access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of a user to push to this branch.
     *
     * | Type    | Description                                                                                                                                   |
     * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns simple_user Response
     * @throws ApiError
     */
    static reposRemoveUserAccessRestrictions(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Rename a branch
     * Renames a branch in a repository.
     *
     * **Note:** Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/github/administering-a-repository/renaming-a-branch)".
     *
     * The permissions required to use this endpoint depends on whether you are renaming the default branch.
     *
     * To rename a non-default branch:
     *
     * * Users must have push access.
     * * GitHub Apps must have the `contents:write` repository permission.
     *
     * To rename the default branch:
     *
     * * Users must have admin or owner permissions.
     * * GitHub Apps must have the `administration:write` repository permission.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param requestBody
     * @returns branch_with_protection Response
     * @throws ApiError
     */
    static reposRenameBranch(owner, repo, branch, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/branches/{branch}/rename',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
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
     * List CODEOWNERS errors
     * List any syntax errors that are detected in the CODEOWNERS
     * file.
     *
     * For more information about the correct CODEOWNERS syntax,
     * see "[About code owners](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref A branch, tag or commit name used to determine which version of the CODEOWNERS file to use. Default: the repository's default branch (e.g. `main`)
     * @returns codeowners_errors Response
     * @throws ApiError
     */
    static reposCodeownersErrors(owner, repo, ref) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/codeowners/errors',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * List repository collaborators
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     * Organization members with write, maintain, or admin privileges on the organization-owned repository can use this endpoint.
     *
     * Team members will include the members of child teams.
     *
     * You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
     * endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
     * endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param affiliation Filter collaborators returned by their affiliation. `outside` means all outside collaborators of an organization-owned repository. `direct` means all collaborators with permissions to an organization-owned repository, regardless of organization membership status. `all` means all collaborators the authenticated user can see.
     * @param permission Filter collaborators by the permissions they have on the repository. If not specified, all collaborators will be returned.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns collaborator Response
     * @throws ApiError
     */
    static reposListCollaborators(owner, repo, affiliation = 'all', permission, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/collaborators',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'affiliation': affiliation,
                'permission': permission,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Check if a user is a repository collaborator
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     *
     * Team members will include the members of child teams.
     *
     * You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
     * endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
     * endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    static reposCheckCollaborator(owner, repo, username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/collaborators/{username}',
            path: {
                'owner': owner,
                'repo': repo,
                'username': username,
            },
            errors: {
                404: `Not Found if user is not a collaborator`,
            },
        });
    }
    /**
     * Add a repository collaborator
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     *
     * Adding an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
     *
     * For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the permission being given must be equal to or higher than the org base permission. Otherwise, the request will fail with:
     *
     * ```
     * Cannot assign {member} permission of {role name}
     * ```
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [API](https://docs.github.com/rest/collaborators/invitations).
     *
     * **Updating an existing collaborator's permission level**
     *
     * The endpoint can also be used to change the permissions of an existing collaborator without first removing and re-adding the collaborator. To change the permissions, use the same endpoint and pass a different `permission` parameter. The response will be a `204`, with no other indication that the permission level changed.
     *
     * **Rate limits**
     *
     * You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @param requestBody
     * @returns repository_invitation Response when a new invitation is created
     * @throws ApiError
     */
    static reposAddCollaborator(owner, repo, username, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/collaborators/{username}',
            path: {
                'owner': owner,
                'repo': repo,
                'username': username,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Remove a repository collaborator
     * Removes a collaborator from a repository.
     *
     * To use this endpoint, the authenticated user must either be an administrator of the repository or target themselves for removal.
     *
     * This endpoint also:
     * - Cancels any outstanding invitations
     * - Unasigns the user from any issues
     * - Removes access to organization projects if the user is not an organization member and is not a collaborator on any other organization repositories.
     * - Unstars the repository
     * - Updates access permissions to packages
     *
     * Removing a user as a collaborator has the following effects on forks:
     * - If the user had access to a fork through their membership to this repository, the user will also be removed from the fork.
     * - If the user had their own fork of the repository, the fork will be deleted.
     * - If the user still has read access to the repository, open pull requests by this user from a fork will be denied.
     *
     * **Note**: A user can still have access to the repository through organization permissions like base repository permissions.
     *
     * Although the API responds immediately, the additional permission updates might take some extra time to complete in the background.
     *
     * For more information on fork permissions, see "[About permissions and visibility of forks](https://docs.github.com/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks)".
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    static reposRemoveCollaborator(owner, repo, username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/collaborators/{username}',
            path: {
                'owner': owner,
                'repo': repo,
                'username': username,
            },
            errors: {
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get repository permissions for a user
     * Checks the repository permission of a collaborator. The possible repository
     * permissions are `admin`, `write`, `read`, and `none`.
     *
     * *Note*: The `permission` attribute provides the legacy base roles of `admin`, `write`, `read`, and `none`, where the
     * `maintain` role is mapped to `write` and the `triage` role is mapped to `read`. To determine the role assigned to the
     * collaborator, see the `role_name` attribute, which will provide the full role name, including custom roles. The
     * `permissions` hash can also be used to determine which base level of access the collaborator has to the repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param username The handle for the GitHub user account.
     * @returns repository_collaborator_permission if user has admin permissions
     * @throws ApiError
     */
    static reposGetCollaboratorPermissionLevel(owner, repo, username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/collaborators/{username}/permission',
            path: {
                'owner': owner,
                'repo': repo,
                'username': username,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * List commit comments for a repository
     * Commit Comments use [these custom media types](https://docs.github.com/rest/overview/media-types). You can read more about the use of media types in the API [here](https://docs.github.com/rest/overview/media-types/).
     *
     * Comments are ordered by ascending ID.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns commit_comment Response
     * @throws ApiError
     */
    static reposListCommitCommentsForRepo(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/comments',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Get a commit comment
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @returns commit_comment Response
     * @throws ApiError
     */
    static reposGetCommitComment(owner, repo, commentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/comments/{comment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a commit comment
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @param requestBody
     * @returns commit_comment Response
     * @throws ApiError
     */
    static reposUpdateCommitComment(owner, repo, commentId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/comments/{comment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Delete a commit comment
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commentId The unique identifier of the comment.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteCommitComment(owner, repo, commentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/comments/{comment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'comment_id': commentId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * List commits
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
     * @param sha SHA or branch to start listing commits from. Default: the repository’s default branch (usually `main`).
     * @param path Only commits containing this file path will be returned.
     * @param author GitHub username or email address to use to filter by commit author.
     * @param committer GitHub username or email address to use to filter by commit committer.
     * @param since Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param until Only commits before this date will be returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns commit Response
     * @throws ApiError
     */
    static reposListCommits(owner, repo, sha, path, author, committer, since, until, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'sha': sha,
                'path': path,
                'author': author,
                'committer': committer,
                'since': since,
                'until': until,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                400: `Bad Request`,
                404: `Resource not found`,
                409: `Conflict`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * List branches for HEAD commit
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commitSha The SHA of the commit.
     * @returns branch_short Response
     * @throws ApiError
     */
    static reposListBranchesForHeadCommit(owner, repo, commitSha) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head',
            path: {
                'owner': owner,
                'repo': repo,
                'commit_sha': commitSha,
            },
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List commit comments
     * Use the `:commit_sha` to specify the commit that will have its comments listed.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commitSha The SHA of the commit.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns commit_comment Response
     * @throws ApiError
     */
    static reposListCommentsForCommit(owner, repo, commitSha, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{commit_sha}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'commit_sha': commitSha,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Create a commit comment
     * Create a comment for a commit using its `:commit_sha`.
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commitSha The SHA of the commit.
     * @param requestBody
     * @returns commit_comment Response
     * @throws ApiError
     */
    static reposCreateCommitComment(owner, repo, commitSha, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/commits/{commit_sha}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'commit_sha': commitSha,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List pull requests associated with a commit
     * Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, will only return open pull requests associated with the commit.
     *
     * To list the open or merged pull requests associated with a branch, you can set the `commit_sha` parameter to the branch name.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param commitSha The SHA of the commit.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns pull_request_simple Response
     * @throws ApiError
     */
    static reposListPullRequestsAssociatedWithCommit(owner, repo, commitSha, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{commit_sha}/pulls',
            path: {
                'owner': owner,
                'repo': repo,
                'commit_sha': commitSha,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Get a commit
     * Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.
     *
     * **Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.
     *
     * You can pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.
     *
     * To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.
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
     * @param ref The commit reference. Can be a commit SHA, branch name (`heads/BRANCH_NAME`), or tag name (`tags/TAG_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns commit Response
     * @throws ApiError
     */
    static reposGetCommit(owner, repo, ref, page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{ref}',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                500: `Internal Error`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Get the combined status for a specific reference
     * Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.
     *
     *
     * Additionally, a combined `state` is returned. The `state` is one of:
     *
     * *   **failure** if any of the contexts report as `error` or `failure`
     * *   **pending** if there are no statuses or a context is `pending`
     * *   **success** if the latest status for all contexts is `success`
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref The commit reference. Can be a commit SHA, branch name (`heads/BRANCH_NAME`), or tag name (`tags/TAG_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns combined_commit_status Response
     * @throws ApiError
     */
    static reposGetCombinedStatusForRef(owner, repo, ref, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{ref}/status',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * List commit statuses for a reference
     * Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.
     *
     * This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref The commit reference. Can be a commit SHA, branch name (`heads/BRANCH_NAME`), or tag name (`tags/TAG_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns status Response
     * @throws ApiError
     */
    static reposListCommitStatusesForRef(owner, repo, ref, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{ref}/statuses',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                301: `Moved permanently`,
            },
        });
    }
    /**
     * Get community profile metrics
     * Returns all community profile metrics for a repository. The repository cannot be a fork.
     *
     * The returned metrics include an overall health score, the repository description, the presence of documentation, the
     * detected code of conduct, the detected license, and the presence of ISSUE\_TEMPLATE, PULL\_REQUEST\_TEMPLATE,
     * README, and CONTRIBUTING files.
     *
     * The `health_percentage` score is defined as a percentage of how many of
     * these four documents are present: README, CONTRIBUTING, LICENSE, and
     * CODE_OF_CONDUCT. For example, if all four documents are present, then
     * the `health_percentage` is `100`. If only one is present, then the
     * `health_percentage` is `25`.
     *
     * `content_reports_enabled` is only returned for organization-owned repositories.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns community_profile Response
     * @throws ApiError
     */
    static reposGetCommunityProfileMetrics(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/community/profile',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Compare two commits
     * Compares two commits against one another. You can compare branches in the same repository, or you can compare branches that exist in different repositories within the same repository network, including fork branches. For more information about how to view a repository's network, see "[Understanding connections between repositories](https://docs.github.com/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories)."
     *
     * This endpoint is equivalent to running the `git log BASE..HEAD` command, but it returns commits in a different order. The `git log BASE..HEAD` command returns commits in reverse chronological order, whereas the API returns commits in chronological order. You can pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     *
     * The API response includes details about the files that were changed between the two commits. This includes the status of the change (if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.
     *
     * When calling this endpoint without any paging parameter (`per_page` or `page`), the returned list is limited to 250 commits, and the last commit in the list is the most recent of the entire comparison.
     *
     * **Working with large comparisons**
     *
     * To process a response with a large number of commits, use a query parameter (`per_page` or `page`) to paginate the results. When using pagination:
     *
     * - The list of changed files is only shown on the first page of results, but it includes all changed files for the entire comparison.
     * - The results are returned in chronological order, but the last commit in the returned list may not be the most recent one in the entire set if there are more pages of results.
     *
     * For more information on working with pagination, see "[Using pagination in the REST API](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api)."
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The `verification` object includes the following fields:
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
     * @param basehead The base branch and head branch to compare. This parameter expects the format `BASE...HEAD`. Both must be branch names in `repo`. To compare with a branch that exists in a different repository in the same network as `repo`, the `basehead` parameter expects the format `USERNAME:BASE...USERNAME:HEAD`.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns commit_comparison Response
     * @throws ApiError
     */
    static reposCompareCommits(owner, repo, basehead, page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/compare/{basehead}',
            path: {
                'owner': owner,
                'repo': repo,
                'basehead': basehead,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                404: `Resource not found`,
                500: `Internal Error`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * Get repository content
     * Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
     * `:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories.
     *
     * Files and symlinks support [a custom media type](https://docs.github.com/rest/overview/media-types) for
     * retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
     * type](https://docs.github.com/rest/overview/media-types) to ensure the content is returned in a consistent
     * object format.
     *
     * **Notes**:
     * *   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/rest/git/trees#get-a-tree).
     * *   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
     * API](https://docs.github.com/rest/git/trees#get-a-tree).
     * *  Download URLs expire and are meant to be used just once. To ensure the download URL does not expire, please use the contents API to obtain a fresh download URL for each download.
     * Size limits:
     * If the requested file's size is:
     * * 1 MB or smaller: All features of this endpoint are supported.
     * * Between 1-100 MB: Only the `raw` or `object` [custom media types](https://docs.github.com/rest/repos/contents#custom-media-types-for-repository-contents) are supported. Both will work as normal, except that when using the `object` media type, the `content` field will be an empty string and the `encoding` field will be `"none"`. To get the contents of these larger files, use the `raw` media type.
     * * Greater than 100 MB: This endpoint is not supported.
     *
     * If the content is a directory:
     * The response will be an array of objects, one object for each item in the directory.
     * When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value
     * _should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
     * In the next major version of the API, the type will be returned as "submodule".
     *
     * If the content is a symlink:
     * If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
     * API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object
     * describing the symlink itself.
     *
     * If the content is a submodule:
     * The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
     * commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
     * the submodule at that specific commit.
     *
     * If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the
     * github.com URLs (`html_url` and `_links["html"]`) will have null values.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param path path parameter
     * @param ref The name of the commit/branch/tag. Default: the repository’s default branch.
     * @returns any Response
     * @throws ApiError
     */
    static reposGetContent(owner, repo, path, ref) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/contents/{path}',
            path: {
                'owner': owner,
                'repo': repo,
                'path': path,
            },
            query: {
                'ref': ref,
            },
            errors: {
                302: `Found`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Create or update file contents
     * Creates a new file or replaces an existing file in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint. If you want to modify files in the `.github/workflows` directory, you must authenticate using an access token with the `workflow` scope.
     *
     * **Note:** If you use this endpoint and the "[Delete a file](https://docs.github.com/rest/repos/contents/#delete-a-file)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param path path parameter
     * @param requestBody
     * @returns file_commit Response
     * @throws ApiError
     */
    static reposCreateOrUpdateFileContents(owner, repo, path, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/contents/{path}',
            path: {
                'owner': owner,
                'repo': repo,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                409: `Conflict`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Delete a file
     * Deletes a file in a repository.
     *
     * You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.
     *
     * The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.
     *
     * You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.
     *
     * **Note:** If you use this endpoint and the "[Create or update file contents](https://docs.github.com/rest/repos/contents/#create-or-update-file-contents)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param path path parameter
     * @param requestBody
     * @returns file_commit Response
     * @throws ApiError
     */
    static reposDeleteFile(owner, repo, path, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/contents/{path}',
            path: {
                'owner': owner,
                'repo': repo,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                409: `Conflict`,
                422: `Validation failed, or the endpoint has been spammed.`,
                503: `Service unavailable`,
            },
        });
    }
    /**
     * List repository contributors
     * Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API caches contributor data to improve performance.
     *
     * GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param anon Set to `1` or `true` to include anonymous contributors in results.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns contributor If repository contains content
     * @throws ApiError
     */
    static reposListContributors(owner, repo, anon, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/contributors',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'anon': anon,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * List deployments
     * Simple filtering of deployments is available via query parameters:
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param sha The SHA recorded at creation time.
     * @param ref The name of the ref. This can be a branch, tag, or SHA.
     * @param task The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).
     * @param environment The name of the environment that was deployed to (e.g., `staging` or `production`).
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns deployment Response
     * @throws ApiError
     */
    static reposListDeployments(owner, repo, sha = 'none', ref = 'none', task = 'none', environment = 'none', perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/deployments',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'sha': sha,
                'ref': ref,
                'task': task,
                'environment': environment,
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Create a deployment
     * Deployments offer a few configurable parameters with certain defaults.
     *
     * The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them
     * before we merge a pull request.
     *
     * The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
     * multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
     * makes it easier to track which environments have requested deployments. The default environment is `production`.
     *
     * The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
     * the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
     * the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
     * return a failure response.
     *
     * By default, [commit statuses](https://docs.github.com/rest/commits/statuses) for every submitted context must be in a `success`
     * state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
     * specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
     * not require any contexts or create any commit statuses, the deployment will always succeed.
     *
     * The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
     * field that will be passed on when a deployment event is dispatched.
     *
     * The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
     * be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
     * application with debugging enabled.
     *
     * Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.
     *
     * Merged branch response:
     *
     * You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
     * a deployment. This auto-merge happens when:
     * *   Auto-merge option is enabled in the repository
     * *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
     * *   There are no merge conflicts
     *
     * If there are no new commits in the base branch, a new request to create a deployment should give a successful
     * response.
     *
     * Merge conflict response:
     *
     * This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
     * be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.
     *
     * Failed commit status checks:
     *
     * This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
     * status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns deployment Response
     * @returns any Merged branch response
     * @throws ApiError
     */
    static reposCreateDeployment(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/deployments',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Conflict when there is a merge conflict or the commit's status checks failed`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a deployment
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param deploymentId deployment_id parameter
     * @returns deployment Response
     * @throws ApiError
     */
    static reposGetDeployment(owner, repo, deploymentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/deployments/{deployment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'deployment_id': deploymentId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Delete a deployment
     * If the repository only has one deployment, you can delete the deployment regardless of its status. If the repository has more than one deployment, you can only delete inactive deployments. This ensures that repositories with multiple deployments will always have an active deployment. Anyone with `repo` or `repo_deployment` scopes can delete a deployment.
     *
     * To set a deployment as inactive, you must:
     *
     * *   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
     * *   Mark the active deployment as inactive by adding any non-successful deployment status.
     *
     * For more information, see "[Create a deployment](https://docs.github.com/rest/deployments/deployments/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/rest/deployments/statuses#create-a-deployment-status)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param deploymentId deployment_id parameter
     * @returns void
     * @throws ApiError
     */
    static reposDeleteDeployment(owner, repo, deploymentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/deployments/{deployment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'deployment_id': deploymentId,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List deployment statuses
     * Users with pull access can view deployment statuses for a deployment:
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param deploymentId deployment_id parameter
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns deployment_status Response
     * @throws ApiError
     */
    static reposListDeploymentStatuses(owner, repo, deploymentId, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/deployments/{deployment_id}/statuses',
            path: {
                'owner': owner,
                'repo': repo,
                'deployment_id': deploymentId,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Create a deployment status
     * Users with `push` access can create deployment statuses for a given deployment.
     *
     * GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth apps require the `repo_deployment` scope.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param deploymentId deployment_id parameter
     * @param requestBody
     * @returns deployment_status Response
     * @throws ApiError
     */
    static reposCreateDeploymentStatus(owner, repo, deploymentId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/deployments/{deployment_id}/statuses',
            path: {
                'owner': owner,
                'repo': repo,
                'deployment_id': deploymentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a deployment status
     * Users with pull access can view a deployment status for a deployment:
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param deploymentId deployment_id parameter
     * @param statusId
     * @returns deployment_status Response
     * @throws ApiError
     */
    static reposGetDeploymentStatus(owner, repo, deploymentId, statusId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'deployment_id': deploymentId,
                'status_id': statusId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Create a repository dispatch event
     * You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/webhooks/event-payloads/#repository_dispatch)."
     *
     * The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.
     *
     * This endpoint requires write access to the repository by providing either:
     *
     * - Personal access tokens with `repo` scope. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
     * - GitHub Apps with both `metadata:read` and `contents:read&write` permissions.
     *
     * This input example shows how you can use the `client_payload` as a test to debug your workflow.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static reposCreateDispatchEvent(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/dispatches',
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
     * List environments
     * Lists the environments for a repository.
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    static reposGetAllEnvironments(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/environments',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Get an environment
     * **Note:** To get information about name patterns that branches must match in order to deploy to this environment, see "[Get a deployment branch policy](/rest/deployments/branch-policies#get-a-deployment-branch-policy)."
     *
     * Anyone with read access to the repository can use this endpoint. If the
     * repository is private, you must use an access token with the `repo` scope. GitHub
     * Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param environmentName The name of the environment.
     * @returns environment Response
     * @throws ApiError
     */
    static reposGetEnvironment(owner, repo, environmentName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/environments/{environment_name}',
            path: {
                'owner': owner,
                'repo': repo,
                'environment_name': environmentName,
            },
        });
    }
    /**
     * Create or update an environment
     * Create or update an environment with protection rules, such as required reviewers. For more information about environment protection rules, see "[Environments](/actions/reference/environments#environment-protection-rules)."
     *
     * **Note:** To create or update name patterns that branches must match in order to deploy to this environment, see "[Deployment branch policies](/rest/deployments/branch-policies)."
     *
     * **Note:** To create or update secrets for an environment, see "[GitHub Actions secrets](/rest/actions/secrets)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param environmentName The name of the environment.
     * @param requestBody
     * @returns environment Response
     * @throws ApiError
     */
    static reposCreateOrUpdateEnvironment(owner, repo, environmentName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/environments/{environment_name}',
            path: {
                'owner': owner,
                'repo': repo,
                'environment_name': environmentName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation error when the environment name is invalid or when \`protected_branches\` and \`custom_branch_policies\` in \`deployment_branch_policy\` are set to the same value`,
            },
        });
    }
    /**
     * Delete an environment
     * You must authenticate using an access token with the repo scope to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param environmentName The name of the environment.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteAnEnvironment(owner, repo, environmentName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/environments/{environment_name}',
            path: {
                'owner': owner,
                'repo': repo,
                'environment_name': environmentName,
            },
        });
    }
    /**
     * List deployment branch policies
     * Lists the deployment branch policies for an environment.
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param environmentName The name of the environment.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    static reposListDeploymentBranchPolicies(owner, repo, environmentName, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies',
            path: {
                'owner': owner,
                'repo': repo,
                'environment_name': environmentName,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Create a deployment branch policy
     * Creates a deployment branch policy for an environment.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param environmentName The name of the environment.
     * @param requestBody
     * @returns deployment_branch_policy Response
     * @throws ApiError
     */
    static reposCreateDeploymentBranchPolicy(owner, repo, environmentName, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies',
            path: {
                'owner': owner,
                'repo': repo,
                'environment_name': environmentName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                303: `Response if the same branch name pattern already exists`,
                404: `Not Found or \`deployment_branch_policy.custom_branch_policies\` property for the environment is set to false`,
            },
        });
    }
    /**
     * Get a deployment branch policy
     * Gets a deployment branch policy for an environment.
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param environmentName The name of the environment.
     * @param branchPolicyId The unique identifier of the branch policy.
     * @returns deployment_branch_policy Response
     * @throws ApiError
     */
    static reposGetDeploymentBranchPolicy(owner, repo, environmentName, branchPolicyId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'environment_name': environmentName,
                'branch_policy_id': branchPolicyId,
            },
        });
    }
    /**
     * Update a deployment branch policy
     * Updates a deployment branch policy for an environment.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param environmentName The name of the environment.
     * @param branchPolicyId The unique identifier of the branch policy.
     * @param requestBody
     * @returns deployment_branch_policy Response
     * @throws ApiError
     */
    static reposUpdateDeploymentBranchPolicy(owner, repo, environmentName, branchPolicyId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'environment_name': environmentName,
                'branch_policy_id': branchPolicyId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a deployment branch policy
     * Deletes a deployment branch policy for an environment.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param environmentName The name of the environment.
     * @param branchPolicyId The unique identifier of the branch policy.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteDeploymentBranchPolicy(owner, repo, environmentName, branchPolicyId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'environment_name': environmentName,
                'branch_policy_id': branchPolicyId,
            },
        });
    }
    /**
     * Get all deployment protection rules for an environment
     * Gets all custom deployment protection rules that are enabled for an environment. Anyone with read access to the repository can use this endpoint. If the repository is private and you want to use a personal access token (classic), you must use an access token with the `repo` scope. GitHub Apps and fine-grained personal access tokens must have the `actions:read` permission to use this endpoint. For more information about environments, see "[Using environments for deployment](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)."
     *
     * For more information about the app that is providing this custom deployment rule, see the [documentation for the `GET /apps/{app_slug}` endpoint](https://docs.github.com/rest/apps/apps#get-an-app).
     * @param environmentName The name of the environment.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @returns any List of deployment protection rules
     * @throws ApiError
     */
    static reposGetAllDeploymentProtectionRules(environmentName, repo, owner) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules',
            path: {
                'environment_name': environmentName,
                'repo': repo,
                'owner': owner,
            },
        });
    }
    /**
     * Create a custom deployment protection rule on an environment
     * Enable a custom deployment protection rule for an environment.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. Enabling a custom protection rule requires admin or owner permissions to the repository. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * For more information about the app that is providing this custom deployment rule, see the [documentation for the `GET /apps/{app_slug}` endpoint](https://docs.github.com/rest/apps/apps#get-an-app).
     * @param environmentName The name of the environment.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param requestBody
     * @returns deployment_protection_rule The enabled custom deployment protection rule
     * @throws ApiError
     */
    static reposCreateDeploymentProtectionRule(environmentName, repo, owner, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules',
            path: {
                'environment_name': environmentName,
                'repo': repo,
                'owner': owner,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List custom deployment rule integrations available for an environment
     * Gets all custom deployment protection rule integrations that are available for an environment. Anyone with read access to the repository can use this endpoint. If the repository is private and you want to use a personal access token (classic), you must use an access token with the `repo` scope. GitHub Apps and fine-grained personal access tokens must have the `actions:read` permission to use this endpoint.
     *
     * For more information about environments, see "[Using environments for deployment](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)."
     *
     * For more information about the app that is providing this custom deployment rule, see "[GET an app](https://docs.github.com/rest/apps/apps#get-an-app)".
     * @param environmentName The name of the environment.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns any A list of custom deployment rule integrations available for this environment.
     * @throws ApiError
     */
    static reposListCustomDeploymentRuleIntegrations(environmentName, repo, owner, page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps',
            path: {
                'environment_name': environmentName,
                'repo': repo,
                'owner': owner,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Get a custom deployment protection rule
     * Gets an enabled custom deployment protection rule for an environment. Anyone with read access to the repository can use this endpoint. If the repository is private and you want to use a personal access token (classic), you must use an access token with the `repo` scope. GitHub Apps and fine-grained personal access tokens must have the `actions:read` permission to use this endpoint. For more information about environments, see "[Using environments for deployment](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)."
     *
     * For more information about the app that is providing this custom deployment rule, see [`GET /apps/{app_slug}`](https://docs.github.com/rest/apps/apps#get-an-app).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param environmentName The name of the environment.
     * @param protectionRuleId The unique identifier of the protection rule.
     * @returns deployment_protection_rule Response
     * @throws ApiError
     */
    static reposGetCustomDeploymentProtectionRule(owner, repo, environmentName, protectionRuleId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'environment_name': environmentName,
                'protection_rule_id': protectionRuleId,
            },
        });
    }
    /**
     * Disable a custom protection rule for an environment
     * Disables a custom deployment protection rule for an environment.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. Removing a custom protection rule requires admin or owner permissions to the repository. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Get an app](https://docs.github.com/rest/apps/apps#get-an-app)".
     * @param environmentName The name of the environment.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param protectionRuleId The unique identifier of the protection rule.
     * @returns void
     * @throws ApiError
     */
    static reposDisableDeploymentProtectionRule(environmentName, repo, owner, protectionRuleId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}',
            path: {
                'environment_name': environmentName,
                'repo': repo,
                'owner': owner,
                'protection_rule_id': protectionRuleId,
            },
        });
    }
    /**
     * List forks
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param sort The sort order. `stargazers` will sort by star count.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns minimal_repository Response
     * @throws ApiError
     */
    static reposListForks(owner, repo, sort = 'newest', perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/forks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'sort': sort,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Create a fork
     * Create a fork for the authenticated user.
     *
     * **Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api).
     *
     * **Note**: Although this endpoint works with GitHub Apps, the GitHub App must be installed on the destination account with access to all repositories and on the source account with access to the source repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns full_repository Response
     * @throws ApiError
     */
    static reposCreateFork(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/forks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List repository webhooks
     * Lists webhooks for a repository. `last response` may return null if there have not been any deliveries within 30 days.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns hook Response
     * @throws ApiError
     */
    static reposListWebhooks(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Create a repository webhook
     * Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
     * share the same `config` as long as those webhooks do not have any `events` that overlap.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns hook Response
     * @throws ApiError
     */
    static reposCreateWebhook(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/hooks',
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
     * Get a repository webhook
     * Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @returns hook Response
     * @throws ApiError
     */
    static reposGetWebhook(owner, repo, hookId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks/{hook_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'hook_id': hookId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a repository webhook
     * Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @param requestBody
     * @returns hook Response
     * @throws ApiError
     */
    static reposUpdateWebhook(owner, repo, hookId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/hooks/{hook_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'hook_id': hookId,
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
     * Delete a repository webhook
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteWebhook(owner, repo, hookId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/hooks/{hook_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'hook_id': hookId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get a webhook configuration for a repository
     * Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](/rest/webhooks/repos#get-a-repository-webhook)."
     *
     * Access tokens must have the `read:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:read` permission.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @returns webhook_config Response
     * @throws ApiError
     */
    static reposGetWebhookConfigForRepo(owner, repo, hookId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks/{hook_id}/config',
            path: {
                'owner': owner,
                'repo': repo,
                'hook_id': hookId,
            },
        });
    }
    /**
     * Update a webhook configuration for a repository
     * Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/webhooks/repos#update-a-repository-webhook)."
     *
     * Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @param requestBody
     * @returns webhook_config Response
     * @throws ApiError
     */
    static reposUpdateWebhookConfigForRepo(owner, repo, hookId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/hooks/{hook_id}/config',
            path: {
                'owner': owner,
                'repo': repo,
                'hook_id': hookId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List deliveries for a repository webhook
     * Returns a list of webhook deliveries for a webhook configured in a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @param perPage The number of results per page (max 100).
     * @param cursor Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.
     * @param redelivery
     * @returns hook_delivery_item Response
     * @throws ApiError
     */
    static reposListWebhookDeliveries(owner, repo, hookId, perPage = 30, cursor, redelivery) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks/{hook_id}/deliveries',
            path: {
                'owner': owner,
                'repo': repo,
                'hook_id': hookId,
            },
            query: {
                'per_page': perPage,
                'cursor': cursor,
                'redelivery': redelivery,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a delivery for a repository webhook
     * Returns a delivery for a webhook configured in a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @param deliveryId
     * @returns hook_delivery Response
     * @throws ApiError
     */
    static reposGetWebhookDelivery(owner, repo, hookId, deliveryId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'hook_id': hookId,
                'delivery_id': deliveryId,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Redeliver a delivery for a repository webhook
     * Redeliver a webhook delivery for a webhook configured in a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @param deliveryId
     * @returns any Accepted
     * @throws ApiError
     */
    static reposRedeliverWebhookDelivery(owner, repo, hookId, deliveryId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts',
            path: {
                'owner': owner,
                'repo': repo,
                'hook_id': hookId,
                'delivery_id': deliveryId,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Ping a repository webhook
     * This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @returns void
     * @throws ApiError
     */
    static reposPingWebhook(owner, repo, hookId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/hooks/{hook_id}/pings',
            path: {
                'owner': owner,
                'repo': repo,
                'hook_id': hookId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Test the push repository webhook
     * This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.
     *
     * **Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param hookId The unique identifier of the hook.
     * @returns void
     * @throws ApiError
     */
    static reposTestPushWebhook(owner, repo, hookId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/hooks/{hook_id}/tests',
            path: {
                'owner': owner,
                'repo': repo,
                'hook_id': hookId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * List repository invitations
     * When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns repository_invitation Response
     * @throws ApiError
     */
    static reposListInvitations(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/invitations',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Update a repository invitation
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param invitationId The unique identifier of the invitation.
     * @param requestBody
     * @returns repository_invitation Response
     * @throws ApiError
     */
    static reposUpdateInvitation(owner, repo, invitationId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/invitations/{invitation_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'invitation_id': invitationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a repository invitation
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param invitationId The unique identifier of the invitation.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteInvitation(owner, repo, invitationId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/invitations/{invitation_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'invitation_id': invitationId,
            },
        });
    }
    /**
     * List deploy keys
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns deploy_key Response
     * @throws ApiError
     */
    static reposListDeployKeys(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/keys',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Create a deploy key
     * You can create a read-only deploy key.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns deploy_key Response
     * @throws ApiError
     */
    static reposCreateDeployKey(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/keys',
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
     * Get a deploy key
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param keyId The unique identifier of the key.
     * @returns deploy_key Response
     * @throws ApiError
     */
    static reposGetDeployKey(owner, repo, keyId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/keys/{key_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'key_id': keyId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Delete a deploy key
     * Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param keyId The unique identifier of the key.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteDeployKey(owner, repo, keyId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/keys/{key_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'key_id': keyId,
            },
        });
    }
    /**
     * List repository languages
     * Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns language Response
     * @throws ApiError
     */
    static reposListLanguages(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/languages',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Sync a fork branch with the upstream repository
     * Sync a branch of a forked repository to keep it up-to-date with the upstream repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns merged_upstream The branch has been successfully synced with the upstream repository
     * @throws ApiError
     */
    static reposMergeUpstream(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/merge-upstream',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `The branch could not be synced because of a merge conflict`,
                422: `The branch could not be synced for some other reason`,
            },
        });
    }
    /**
     * Merge a branch
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns commit Successful Response (The resulting merge commit)
     * @throws ApiError
     */
    static reposMerge(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/merges',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not Found when the base or head does not exist`,
                409: `Conflict when there is a merge conflict`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a GitHub Pages site
     * Gets information about a GitHub Pages site.
     *
     * A token with the `repo` scope is required. GitHub Apps must have the `pages:read` permission.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns page Response
     * @throws ApiError
     */
    static reposGetPages(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pages',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Create a GitHub Pages site
     * Configures a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."
     *
     * To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns page Response
     * @throws ApiError
     */
    static reposCreatePagesSite(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pages',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Conflict`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Update information about a GitHub Pages site
     * Updates information for a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).
     *
     * To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static reposUpdateInformationAboutPagesSite(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/pages',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                409: `Conflict`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Delete a GitHub Pages site
     * Deletes a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).
     *
     * To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    static reposDeletePagesSite(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pages',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `Resource not found`,
                409: `Conflict`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List GitHub Pages builds
     * Lists builts of a GitHub Pages site.
     *
     * A token with the `repo` scope is required. GitHub Apps must have the `pages:read` permission.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns page_build Response
     * @throws ApiError
     */
    static reposListPagesBuilds(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pages/builds',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Request a GitHub Pages build
     * You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.
     *
     * Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns page_build_status Response
     * @throws ApiError
     */
    static reposRequestPagesBuild(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pages/builds',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Get latest Pages build
     * Gets information about the single most recent build of a GitHub Pages site.
     *
     * A token with the `repo` scope is required. GitHub Apps must have the `pages:read` permission.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns page_build Response
     * @throws ApiError
     */
    static reposGetLatestPagesBuild(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pages/builds/latest',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Get GitHub Pages build
     * Gets information about a GitHub Pages build.
     *
     * A token with the `repo` scope is required. GitHub Apps must have the `pages:read` permission.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param buildId
     * @returns page_build Response
     * @throws ApiError
     */
    static reposGetPagesBuild(owner, repo, buildId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pages/builds/{build_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'build_id': buildId,
            },
        });
    }
    /**
     * Create a GitHub Pages deployment
     * Create a GitHub Pages deployment for a repository.
     *
     * Users must have write permissions. GitHub Apps must have the `pages:write` permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns page_deployment Response
     * @throws ApiError
     */
    static reposCreatePagesDeployment(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pages/deployment',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a DNS health check for GitHub Pages
     * Gets a health check of the DNS settings for the `CNAME` record configured for a repository's GitHub Pages.
     *
     * The first request to this endpoint returns a `202 Accepted` status and starts an asynchronous background task to get the results for the domain. After the background task completes, subsequent requests to this endpoint return a `200 OK` status with the health check results in the response.
     *
     * To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administrative:write` and `pages:write` permissions.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns pages_health_check Response
     * @returns empty_object Empty response
     * @throws ApiError
     */
    static reposGetPagesHealthCheck(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pages/health',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                400: `Custom domains are not available for GitHub Pages`,
                404: `Resource not found`,
                422: `There isn't a CNAME for this page`,
            },
        });
    }
    /**
     * Enable private vulnerability reporting for a repository
     * Enables private vulnerability reporting for a repository. The authenticated user must have admin access to the repository. For more information, see "[Privately reporting a security vulnerability](https://docs.github.com/code-security/security-advisories/guidance-on-reporting-and-writing/privately-reporting-a-security-vulnerability)."
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    static reposEnablePrivateVulnerabilityReporting(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/private-vulnerability-reporting',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                422: `Bad Request`,
            },
        });
    }
    /**
     * Disable private vulnerability reporting for a repository
     * Disables private vulnerability reporting for a repository. The authenticated user must have admin access to the repository. For more information, see "[Privately reporting a security vulnerability](https://docs.github.com/code-security/security-advisories/guidance-on-reporting-and-writing/privately-reporting-a-security-vulnerability)".
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    static reposDisablePrivateVulnerabilityReporting(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/private-vulnerability-reporting',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                422: `Bad Request`,
            },
        });
    }
    /**
     * Get a repository README
     * Gets the preferred README for a repository.
     *
     * READMEs support [custom media types](https://docs.github.com/rest/overview/media-types) for retrieving the raw content or rendered HTML.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref The name of the commit/branch/tag. Default: the repository’s default branch.
     * @returns content_file Response
     * @throws ApiError
     */
    static reposGetReadme(owner, repo, ref) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/readme',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a repository README for a directory
     * Gets the README from a repository directory.
     *
     * READMEs support [custom media types](https://docs.github.com/rest/overview/media-types) for retrieving the raw content or rendered HTML.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param dir The alternate path to look for a README file
     * @param ref The name of the commit/branch/tag. Default: the repository’s default branch.
     * @returns content_file Response
     * @throws ApiError
     */
    static reposGetReadmeInDirectory(owner, repo, dir, ref) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/readme/{dir}',
            path: {
                'owner': owner,
                'repo': repo,
                'dir': dir,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List releases
     * This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/rest/repos/repos#list-repository-tags).
     *
     * Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns release Response
     * @throws ApiError
     */
    static reposListReleases(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Create a release
     * Users with push access to the repository can create a release.
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns release Response
     * @throws ApiError
     */
    static reposCreateRelease(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/releases',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found if the discussion category name is invalid`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a release asset
     * To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param assetId The unique identifier of the asset.
     * @returns release_asset Response
     * @throws ApiError
     */
    static reposGetReleaseAsset(owner, repo, assetId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/assets/{asset_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'asset_id': assetId,
            },
            errors: {
                302: `Found`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a release asset
     * Users with push access to the repository can edit a release asset.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param assetId The unique identifier of the asset.
     * @param requestBody
     * @returns release_asset Response
     * @throws ApiError
     */
    static reposUpdateReleaseAsset(owner, repo, assetId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/releases/assets/{asset_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'asset_id': assetId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a release asset
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param assetId The unique identifier of the asset.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteReleaseAsset(owner, repo, assetId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/releases/assets/{asset_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'asset_id': assetId,
            },
        });
    }
    /**
     * Generate release notes content for a release
     * Generate a name and body describing a [release](https://docs.github.com/rest/releases/releases#get-a-release). The body content will be markdown formatted and contain information like the changes since last release and users who contributed. The generated release notes are not saved anywhere. They are intended to be generated and used when creating a new release.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns release_notes_content Name and body of generated release notes
     * @throws ApiError
     */
    static reposGenerateReleaseNotes(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/releases/generate-notes',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get the latest release
     * View the latest published full release for the repository.
     *
     * The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns release Response
     * @throws ApiError
     */
    static reposGetLatestRelease(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/latest',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Get a release by tag name
     * Get a published release with the specified tag.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param tag tag parameter
     * @returns release Response
     * @throws ApiError
     */
    static reposGetReleaseByTag(owner, repo, tag) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/tags/{tag}',
            path: {
                'owner': owner,
                'repo': repo,
                'tag': tag,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get a release
     * **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia).
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param releaseId The unique identifier of the release.
     * @returns release **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia).
     * @throws ApiError
     */
    static reposGetRelease(owner, repo, releaseId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/{release_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'release_id': releaseId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Update a release
     * Users with push access to the repository can edit a release.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param releaseId The unique identifier of the release.
     * @param requestBody
     * @returns release Response
     * @throws ApiError
     */
    static reposUpdateRelease(owner, repo, releaseId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/releases/{release_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'release_id': releaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found if the discussion category name is invalid`,
            },
        });
    }
    /**
     * Delete a release
     * Users with push access to the repository can delete a release.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param releaseId The unique identifier of the release.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteRelease(owner, repo, releaseId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/releases/{release_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'release_id': releaseId,
            },
        });
    }
    /**
     * List release assets
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param releaseId The unique identifier of the release.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns release_asset Response
     * @throws ApiError
     */
    static reposListReleaseAssets(owner, repo, releaseId, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/{release_id}/assets',
            path: {
                'owner': owner,
                'repo': repo,
                'release_id': releaseId,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Upload a release asset
     * This endpoint makes use of [a Hypermedia relation](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
     * the response of the [Create a release endpoint](https://docs.github.com/rest/releases/releases#create-a-release) to upload a release asset.
     *
     * You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.
     *
     * Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:
     *
     * `application/zip`
     *
     * GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
     * you'll still need to pass your authentication to be able to upload an asset.
     *
     * When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.
     *
     * **Notes:**
     * *   GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List release assets](https://docs.github.com/rest/releases/assets#list-release-assets)"
     * endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api).
     * *   To find the `release_id` query the [`GET /repos/{owner}/{repo}/releases/latest` endpoint](https://docs.github.com/rest/releases/releases#get-the-latest-release).
     * *   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param releaseId The unique identifier of the release.
     * @param name
     * @param label
     * @param requestBody
     * @returns release_asset Response for successful upload
     * @throws ApiError
     */
    static reposUploadReleaseAsset(owner, repo, releaseId, name, label, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/releases/{release_id}/assets',
            path: {
                'owner': owner,
                'repo': repo,
                'release_id': releaseId,
            },
            query: {
                'name': name,
                'label': label,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
            errors: {
                422: `Response if you upload an asset with the same filename as another uploaded asset`,
            },
        });
    }
    /**
     * Get rules for a branch
     * Returns all active rules that apply to the specified branch. The branch does not need to exist; rules that would apply
     * to a branch with that name will be returned. All active rules that apply will be returned, regardless of the level
     * at which they are configured (e.g. repository or organization). Rules in rulesets with "evaluate" or "disabled"
     * enforcement statuses are not returned.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param branch The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns repository_rule_detailed Response
     * @throws ApiError
     */
    static reposGetBranchRules(owner, repo, branch, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/rules/branches/{branch}',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Get all repository rulesets
     * Get all the rulesets for a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param includesParents Include rulesets configured at higher levels that apply to this repository
     * @returns repository_ruleset Response
     * @throws ApiError
     */
    static reposGetRepoRulesets(owner, repo, perPage = 30, page = 1, includesParents = true) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/rulesets',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
                'includes_parents': includesParents,
            },
            errors: {
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Create a repository ruleset
     * Create a ruleset for a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody Request body
     * @returns repository_ruleset Response
     * @throws ApiError
     */
    static reposCreateRepoRuleset(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/rulesets',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Get a repository ruleset
     * Get a ruleset for a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param rulesetId The ID of the ruleset.
     * @param includesParents Include rulesets configured at higher levels that apply to this repository
     * @returns repository_ruleset Response
     * @throws ApiError
     */
    static reposGetRepoRuleset(owner, repo, rulesetId, includesParents = true) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/rulesets/{ruleset_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'ruleset_id': rulesetId,
            },
            query: {
                'includes_parents': includesParents,
            },
            errors: {
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Update a repository ruleset
     * Update a ruleset for a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param rulesetId The ID of the ruleset.
     * @param requestBody Request body
     * @returns repository_ruleset Response
     * @throws ApiError
     */
    static reposUpdateRepoRuleset(owner, repo, rulesetId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/rulesets/{ruleset_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'ruleset_id': rulesetId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Delete a repository ruleset
     * Delete a ruleset for a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param rulesetId The ID of the ruleset.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteRepoRuleset(owner, repo, rulesetId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/rulesets/{ruleset_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'ruleset_id': rulesetId,
            },
            errors: {
                404: `Resource not found`,
                500: `Internal Error`,
            },
        });
    }
    /**
     * Get the weekly commit activity
     * Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns code_frequency_stat Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
     * @returns any Accepted
     * @throws ApiError
     */
    static reposGetCodeFrequencyStats(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/stats/code_frequency',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Get the last year of commit activity
     * Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns commit_activity Response
     * @returns any Accepted
     * @throws ApiError
     */
    static reposGetCommitActivityStats(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/stats/commit_activity',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Get all contributor commit activity
     *
     * Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:
     *
     * *   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
     * *   `a` - Number of additions
     * *   `d` - Number of deletions
     * *   `c` - Number of commits
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns contributor_activity Response
     * @returns any Accepted
     * @throws ApiError
     */
    static reposGetContributorsStats(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/stats/contributors',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Get the weekly commit count
     * Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.
     *
     * The array order is oldest week (index 0) to most recent week.
     *
     * The most recent week is seven days ago at UTC midnight to today at UTC midnight.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns participation_stats The array order is oldest week (index 0) to most recent week.
     * @throws ApiError
     */
    static reposGetParticipationStats(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/stats/participation',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get the hourly commit count for each day
     * Each array contains the day number, hour number, and number of commits:
     *
     * *   `0-6`: Sunday - Saturday
     * *   `0-23`: Hour of day
     * *   Number of commits
     *
     * For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns code_frequency_stat For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
     * @throws ApiError
     */
    static reposGetPunchCardStats(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/stats/punch_card',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Create a commit status
     * Users with push access in a repository can create commit statuses for a given SHA.
     *
     * Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param sha
     * @param requestBody
     * @returns status Response
     * @throws ApiError
     */
    static reposCreateCommitStatus(owner, repo, sha, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/statuses/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List repository tags
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns tag Response
     * @throws ApiError
     */
    static reposListTags(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/tags',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * List tag protection states for a repository
     * This returns the tag protection states of a repository.
     *
     * This information is only available to repository administrators.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns tag_protection Response
     * @throws ApiError
     */
    static reposListTagProtection(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/tags/protection',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Create a tag protection state for a repository
     * This creates a tag protection state for a repository.
     * This endpoint is only available to repository administrators.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns tag_protection Response
     * @throws ApiError
     */
    static reposCreateTagProtection(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/tags/protection',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Delete a tag protection state for a repository
     * This deletes a tag protection state for a repository.
     * This endpoint is only available to repository administrators.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param tagProtectionId The unique identifier of the tag protection.
     * @returns void
     * @throws ApiError
     */
    static reposDeleteTagProtection(owner, repo, tagProtectionId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/tags/protection/{tag_protection_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'tag_protection_id': tagProtectionId,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Download a repository archive (tar)
     * Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
     * `main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
     * the `Location` header to make a second `GET` request.
     * **Note**: For private repositories, these links are temporary and expire after five minutes.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref
     * @returns void
     * @throws ApiError
     */
    static reposDownloadTarballArchive(owner, repo, ref) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/tarball/{ref}',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            errors: {
                302: `Response`,
            },
        });
    }
    /**
     * List repository teams
     * Lists the teams that have access to the specified repository and that are also visible to the authenticated user.
     *
     * For a public repository, a team is listed only if that team added the public repository explicitly.
     *
     * Personal access tokens require the following scopes:
     * * `public_repo` to call this endpoint on a public repository
     * * `repo` to call this endpoint on a private repository (this scope also includes public repositories)
     *
     * This endpoint is not compatible with fine-grained personal access tokens.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns team Response
     * @throws ApiError
     */
    static reposListTeams(owner, repo, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/teams',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get all repository topics
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns topic Response
     * @throws ApiError
     */
    static reposGetAllTopics(owner, repo, page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/topics',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replace all repository topics
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns topic Response
     * @throws ApiError
     */
    static reposReplaceAllTopics(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/topics',
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
     * Get repository clones
     * Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param per The time frame to display results for.
     * @returns clone_traffic Response
     * @throws ApiError
     */
    static reposGetClones(owner, repo, per = 'day') {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/traffic/clones',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per': per,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get top referral paths
     * Get the top 10 popular contents over the last 14 days.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns content_traffic Response
     * @throws ApiError
     */
    static reposGetTopPaths(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/traffic/popular/paths',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get top referral sources
     * Get the top 10 referrers over the last 14 days.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns referrer_traffic Response
     * @throws ApiError
     */
    static reposGetTopReferrers(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/traffic/popular/referrers',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get page views
     * Get the total number of views and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param per The time frame to display results for.
     * @returns view_traffic Response
     * @throws ApiError
     */
    static reposGetViews(owner, repo, per = 'day') {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/traffic/views',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'per': per,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Transfer a repository
     * A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://docs.github.com/articles/about-repository-transfers/).
     * You must use a personal access token (classic) or an OAuth token for this endpoint. An installation access token or a fine-grained personal access token cannot be used because they are only granted access to a single account.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns minimal_repository Response
     * @throws ApiError
     */
    static reposTransfer(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/transfer',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Check if vulnerability alerts are enabled for a repository
     * Shows whether dependency alerts are enabled or disabled for a repository. The authenticated user must have admin read access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://docs.github.com/articles/about-security-alerts-for-vulnerable-dependencies)".
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    static reposCheckVulnerabilityAlerts(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/vulnerability-alerts',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `Not Found if repository is not enabled with vulnerability alerts`,
            },
        });
    }
    /**
     * Enable vulnerability alerts
     * Enables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://docs.github.com/articles/about-security-alerts-for-vulnerable-dependencies)".
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    static reposEnableVulnerabilityAlerts(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/vulnerability-alerts',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Disable vulnerability alerts
     * Disables dependency alerts and the dependency graph for a repository.
     * The authenticated user must have admin access to the repository. For more information,
     * see "[About security alerts for vulnerable dependencies](https://docs.github.com/articles/about-security-alerts-for-vulnerable-dependencies)".
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    static reposDisableVulnerabilityAlerts(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/vulnerability-alerts',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Download a repository archive (zip)
     * Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
     * `main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
     * the `Location` header to make a second `GET` request.
     *
     * **Note**: For private repositories, these links are temporary and expire after five minutes. If the repository is empty, you will receive a 404 when you follow the redirect.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param ref
     * @returns void
     * @throws ApiError
     */
    static reposDownloadZipballArchive(owner, repo, ref) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/zipball/{ref}',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            errors: {
                302: `Response`,
            },
        });
    }
    /**
     * Create a repository using a template
     * Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. If the repository is not public, the authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/rest/repos/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository
     * @param templateOwner The account owner of the template repository. The name is not case sensitive.
     * @param templateRepo The name of the template repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns repository Response
     * @throws ApiError
     */
    static reposCreateUsingTemplate(templateOwner, templateRepo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/repos/{template_owner}/{template_repo}/generate',
            path: {
                'template_owner': templateOwner,
                'template_repo': templateRepo,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List public repositories
     * Lists all public repositories in the order that they were created.
     *
     * Note:
     * - For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
     * - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers) to get the URL for the next page of repositories.
     * @param since A repository ID. Only return repositories with an ID greater than this ID.
     * @returns minimal_repository Response
     * @throws ApiError
     */
    static reposListPublic(since) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repositories',
            query: {
                'since': since,
            },
            errors: {
                304: `Not modified`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List repositories for the authenticated user
     * Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     * @param visibility Limit results to repositories with the specified visibility.
     * @param affiliation Comma-separated list of values. Can include:
     * * `owner`: Repositories that are owned by the authenticated user.
     * * `collaborator`: Repositories that the user has been added to as a collaborator.
     * * `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
     * @param type Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
     * @param sort The property to sort the results by.
     * @param direction The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param since Only show repositories updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param before Only show repositories updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @returns repository Response
     * @throws ApiError
     */
    static reposListForAuthenticatedUser(visibility = 'all', affiliation = 'owner,collaborator,organization_member', type = 'all', sort = 'full_name', direction, perPage = 30, page = 1, since, before) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/repos',
            query: {
                'visibility': visibility,
                'affiliation': affiliation,
                'type': type,
                'sort': sort,
                'direction': direction,
                'per_page': perPage,
                'page': page,
                'since': since,
                'before': before,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Create a repository for the authenticated user
     * Creates a new repository for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository.
     * @param requestBody
     * @returns repository Response
     * @throws ApiError
     */
    static reposCreateForAuthenticatedUser(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/user/repos',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                400: `Bad Request`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * List repository invitations for the authenticated user
     * When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns repository_invitation Response
     * @throws ApiError
     */
    static reposListInvitationsForAuthenticatedUser(perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/repository_invitations',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Accept a repository invitation
     * @param invitationId The unique identifier of the invitation.
     * @returns void
     * @throws ApiError
     */
    static reposAcceptInvitationForAuthenticatedUser(invitationId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/user/repository_invitations/{invitation_id}',
            path: {
                'invitation_id': invitationId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Decline a repository invitation
     * @param invitationId The unique identifier of the invitation.
     * @returns void
     * @throws ApiError
     */
    static reposDeclineInvitationForAuthenticatedUser(invitationId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/user/repository_invitations/{invitation_id}',
            path: {
                'invitation_id': invitationId,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * List repositories for a user
     * Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.
     * @param username The handle for the GitHub user account.
     * @param type Limit results to repositories of the specified type.
     * @param sort The property to sort the results by.
     * @param direction The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns minimal_repository Response
     * @throws ApiError
     */
    static reposListForUser(username, type = 'owner', sort = 'full_name', direction, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{username}/repos',
            path: {
                'username': username,
            },
            query: {
                'type': type,
                'sort': sort,
                'direction': direction,
                'per_page': perPage,
                'page': page,
            },
        });
    }
}
exports.ReposService = ReposService;
//# sourceMappingURL=ReposService.js.map