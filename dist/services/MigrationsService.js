"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class MigrationsService {
    /**
     * List organization migrations
     * Lists the most recent migrations, including both exports (which can be started through the REST API) and imports (which cannot be started using the REST API).
     *
     * A list of `repositories` is only returned for export migrations.
     * @param org The organization name. The name is not case sensitive.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @param exclude Exclude attributes from the API response to improve performance
     * @returns migration Response
     * @throws ApiError
     */
    static migrationsListForOrg(org, perPage = 30, page = 1, exclude) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/migrations',
            path: {
                'org': org,
            },
            query: {
                'per_page': perPage,
                'page': page,
                'exclude': exclude,
            },
        });
    }
    /**
     * Start an organization migration
     * Initiates the generation of a migration archive.
     * @param org The organization name. The name is not case sensitive.
     * @param requestBody
     * @returns migration Response
     * @throws ApiError
     */
    static migrationsStartForOrg(org, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/migrations',
            path: {
                'org': org,
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
     * Get an organization migration status
     * Fetches the status of a migration.
     *
     * The `state` of a migration can be one of the following values:
     *
     * *   `pending`, which means the migration hasn't started yet.
     * *   `exporting`, which means the migration is in progress.
     * *   `exported`, which means the migration finished successfully.
     * *   `failed`, which means the migration failed.
     * @param org The organization name. The name is not case sensitive.
     * @param migrationId The unique identifier of the migration.
     * @param exclude Exclude attributes from the API response to improve performance
     * @returns migration *   `pending`, which means the migration hasn't started yet.
     * *   `exporting`, which means the migration is in progress.
     * *   `exported`, which means the migration finished successfully.
     * *   `failed`, which means the migration failed.
     * @throws ApiError
     */
    static migrationsGetStatusForOrg(org, migrationId, exclude) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/migrations/{migration_id}',
            path: {
                'org': org,
                'migration_id': migrationId,
            },
            query: {
                'exclude': exclude,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Download an organization migration archive
     * Fetches the URL to a migration archive.
     * @param org The organization name. The name is not case sensitive.
     * @param migrationId The unique identifier of the migration.
     * @returns void
     * @throws ApiError
     */
    static migrationsDownloadArchiveForOrg(org, migrationId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/migrations/{migration_id}/archive',
            path: {
                'org': org,
                'migration_id': migrationId,
            },
            errors: {
                302: `Response`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Delete an organization migration archive
     * Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
     * @param org The organization name. The name is not case sensitive.
     * @param migrationId The unique identifier of the migration.
     * @returns void
     * @throws ApiError
     */
    static migrationsDeleteArchiveForOrg(org, migrationId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/migrations/{migration_id}/archive',
            path: {
                'org': org,
                'migration_id': migrationId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Unlock an organization repository
     * Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/rest/repos/repos#delete-a-repository) when the migration is complete and you no longer need the source data.
     * @param org The organization name. The name is not case sensitive.
     * @param migrationId The unique identifier of the migration.
     * @param repoName repo_name parameter
     * @returns void
     * @throws ApiError
     */
    static migrationsUnlockRepoForOrg(org, migrationId, repoName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock',
            path: {
                'org': org,
                'migration_id': migrationId,
                'repo_name': repoName,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * List repositories in an organization migration
     * List all the repositories for this organization migration.
     * @param org The organization name. The name is not case sensitive.
     * @param migrationId The unique identifier of the migration.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns minimal_repository Response
     * @throws ApiError
     */
    static migrationsListReposForOrg(org, migrationId, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/migrations/{migration_id}/repositories',
            path: {
                'org': org,
                'migration_id': migrationId,
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
     * Get an import status
     * View the progress of an import.
     *
     * **Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end
     * on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update
     * these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.
     *
     * **Import status**
     *
     * This section includes details about the possible values of the `status` field of the Import Progress response.
     *
     * An import that does not have errors will progress through these steps:
     *
     * *   `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
     * *   `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
     * *   `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
     * *   `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".
     * *   `complete` - the import is complete, and the repository is ready on GitHub.
     *
     * If there are problems, you will see one of these in the `status` field:
     *
     * *   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.
     * *   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api) for more information.
     * *   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.
     * *   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://docs.github.com/rest/migrations/source-imports#cancel-an-import) and [retry](https://docs.github.com/rest/migrations/source-imports#start-an-import) with the correct URL.
     * *   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.
     *
     * **The project_choices field**
     *
     * When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.
     *
     * **Git LFS related fields**
     *
     * This section includes details about Git LFS related fields that may be present in the Import Progress response.
     *
     * *   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
     * *   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
     * *   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
     * *   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns import Response
     * @throws ApiError
     */
    static migrationsGetImportStatus(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/import',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `Resource not found`,
                503: `Unavailable due to service under maintenance.`,
            },
        });
    }
    /**
     * Start an import
     * Start a source import to a GitHub repository using GitHub Importer. Importing into a GitHub repository with GitHub Actions enabled is not supported and will return a status `422 Unprocessable Entity` response.
     * **Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns import Response
     * @throws ApiError
     */
    static migrationsStartImport(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/import',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                503: `Unavailable due to service under maintenance.`,
            },
        });
    }
    /**
     * Update an import
     * An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API
     * request. If no parameters are provided, the import will be restarted.
     *
     * Some servers (e.g. TFS servers) can have several projects at a single URL. In those cases the import progress will
     * have the status `detection_found_multiple` and the Import Progress response will include a `project_choices` array.
     * You can select the project to import by providing one of the objects in the `project_choices` array in the update request.
     *
     * **Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end
     * on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update
     * these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns import Response
     * @throws ApiError
     */
    static migrationsUpdateImport(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/import',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Unavailable due to service under maintenance.`,
            },
        });
    }
    /**
     * Cancel an import
     * Stop an import for a repository.
     *
     * **Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end
     * on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update
     * these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.
     *
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    static migrationsCancelImport(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/import',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                503: `Unavailable due to service under maintenance.`,
            },
        });
    }
    /**
     * Get commit authors
     * Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.
     *
     * This endpoint and the [Map a commit author](https://docs.github.com/rest/migrations/source-imports#map-a-commit-author) endpoint allow you to provide correct Git author information.
     *
     * **Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end
     * on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update
     * these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param since A user ID. Only return users with an ID greater than this ID.
     * @returns porter_author Response
     * @throws ApiError
     */
    static migrationsGetCommitAuthors(owner, repo, since) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/import/authors',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'since': since,
            },
            errors: {
                404: `Resource not found`,
                503: `Unavailable due to service under maintenance.`,
            },
        });
    }
    /**
     * Map a commit author
     * Update an author's identity for the import. Your application can continue updating authors any time before you push
     * new commits to the repository.
     *
     * **Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end
     * on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update
     * these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.
     *
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param authorId
     * @param requestBody
     * @returns porter_author Response
     * @throws ApiError
     */
    static migrationsMapCommitAuthor(owner, repo, authorId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/import/authors/{author_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'author_id': authorId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
                503: `Unavailable due to service under maintenance.`,
            },
        });
    }
    /**
     * Get large files
     * List files larger than 100MB found during the import
     *
     * **Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end
     * on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update
     * these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.
     *
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @returns porter_large_file Response
     * @throws ApiError
     */
    static migrationsGetLargeFiles(owner, repo) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/import/large_files',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                503: `Unavailable due to service under maintenance.`,
            },
        });
    }
    /**
     * Update Git LFS preference
     * You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability
     * is powered by [Git LFS](https://git-lfs.com).
     *
     * You can learn more about our LFS feature and working with large files [on our help
     * site](https://docs.github.com/repositories/working-with-files/managing-large-files).
     *
     * **Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end
     * on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update
     * these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.
     *
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param requestBody
     * @returns import Response
     * @throws ApiError
     */
    static migrationsSetLfsPreference(owner, repo, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/import/lfs',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation failed, or the endpoint has been spammed.`,
                503: `Unavailable due to service under maintenance.`,
            },
        });
    }
    /**
     * List user migrations
     * Lists all migrations a user has started.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns migration Response
     * @throws ApiError
     */
    static migrationsListForAuthenticatedUser(perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/migrations',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Start a user migration
     * Initiates the generation of a user migration archive.
     * @param requestBody
     * @returns migration Response
     * @throws ApiError
     */
    static migrationsStartForAuthenticatedUser(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/user/migrations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }
    /**
     * Get a user migration status
     * Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:
     *
     * *   `pending` - the migration hasn't started yet.
     * *   `exporting` - the migration is in progress.
     * *   `exported` - the migration finished successfully.
     * *   `failed` - the migration failed.
     *
     * Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/migrations/users#download-a-user-migration-archive).
     * @param migrationId The unique identifier of the migration.
     * @param exclude
     * @returns migration Response
     * @throws ApiError
     */
    static migrationsGetStatusForAuthenticatedUser(migrationId, exclude) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/migrations/{migration_id}',
            path: {
                'migration_id': migrationId,
            },
            query: {
                'exclude': exclude,
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
     * Download a user migration archive
     * Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:
     *
     * *   attachments
     * *   bases
     * *   commit\_comments
     * *   issue\_comments
     * *   issue\_events
     * *   issues
     * *   milestones
     * *   organizations
     * *   projects
     * *   protected\_branches
     * *   pull\_request\_reviews
     * *   pull\_requests
     * *   releases
     * *   repositories
     * *   review\_comments
     * *   schema
     * *   users
     *
     * The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.
     * @param migrationId The unique identifier of the migration.
     * @returns void
     * @throws ApiError
     */
    static migrationsGetArchiveForAuthenticatedUser(migrationId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/migrations/{migration_id}/archive',
            path: {
                'migration_id': migrationId,
            },
            errors: {
                302: `Response`,
                304: `Not modified`,
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Delete a user migration archive
     * Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://docs.github.com/rest/migrations/users#list-user-migrations) and [Get a user migration status](https://docs.github.com/rest/migrations/users#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.
     * @param migrationId The unique identifier of the migration.
     * @returns void
     * @throws ApiError
     */
    static migrationsDeleteArchiveForAuthenticatedUser(migrationId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/user/migrations/{migration_id}/archive',
            path: {
                'migration_id': migrationId,
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
     * Unlock a user repository
     * Unlocks a repository. You can lock repositories when you [start a user migration](https://docs.github.com/rest/migrations/users#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://docs.github.com/rest/repos/repos#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.
     * @param migrationId The unique identifier of the migration.
     * @param repoName repo_name parameter
     * @returns void
     * @throws ApiError
     */
    static migrationsUnlockRepoForAuthenticatedUser(migrationId, repoName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/user/migrations/{migration_id}/repos/{repo_name}/lock',
            path: {
                'migration_id': migrationId,
                'repo_name': repoName,
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
     * List repositories for a user migration
     * Lists all the repositories for this user migration.
     * @param migrationId The unique identifier of the migration.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns minimal_repository Response
     * @throws ApiError
     */
    static migrationsListReposForAuthenticatedUser(migrationId, perPage = 30, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/migrations/{migration_id}/repositories',
            path: {
                'migration_id': migrationId,
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
}
exports.MigrationsService = MigrationsService;
//# sourceMappingURL=MigrationsService.js.map