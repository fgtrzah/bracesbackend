"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PackagesService {
    /**
     * Get list of conflicting packages during Docker migration for organization
     * Lists all packages that are in a specific organization, are readable by the requesting user, and that encountered a conflict during a Docker migration.
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope.
     * @param org The organization name. The name is not case sensitive.
     * @returns package Response
     * @throws ApiError
     */
    static packagesListDockerMigrationConflictingPackagesForOrganization(org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/docker/conflicts',
            path: {
                'org': org,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * List packages for an organization
     * Lists packages in an organization readable by the user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param org The organization name. The name is not case sensitive.
     * @param visibility The selected visibility of the packages.  This parameter is optional and only filters an existing result set.
     *
     * The `internal` visibility is only supported for GitHub Packages registries that allow for granular permissions. For other ecosystems `internal` is synonymous with `private`.
     * For the list of GitHub Packages registries that support granular permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns package Response
     * @throws ApiError
     */
    static packagesListPackagesForOrganization(packageType, org, visibility, page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/packages',
            path: {
                'org': org,
            },
            query: {
                'package_type': packageType,
                'visibility': visibility,
                'page': page,
                'per_page': perPage,
            },
            errors: {
                400: `The value of \`per_page\` multiplied by \`page\` cannot be greater than 10000.`,
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get a package for an organization
     * Gets a specific package in an organization.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param org The organization name. The name is not case sensitive.
     * @returns package Response
     * @throws ApiError
     */
    static packagesGetPackageForOrganization(packageType, packageName, org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/packages/{package_type}/{package_name}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'org': org,
            },
        });
    }
    /**
     * Delete a package for an organization
     * Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param org The organization name. The name is not case sensitive.
     * @returns void
     * @throws ApiError
     */
    static packagesDeletePackageForOrg(packageType, packageName, org) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/packages/{package_type}/{package_name}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'org': org,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Restore a package for an organization
     * Restores an entire package in an organization.
     *
     * You can restore a deleted package under the following conditions:
     * - The package was deleted within the last 30 days.
     * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param org The organization name. The name is not case sensitive.
     * @param token package token
     * @returns void
     * @throws ApiError
     */
    static packagesRestorePackageForOrg(packageType, packageName, org, token) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/packages/{package_type}/{package_name}/restore',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'org': org,
            },
            query: {
                'token': token,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * List package versions for a package owned by an organization
     * Lists package versions for a package owned by an organization.
     *
     * If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param org The organization name. The name is not case sensitive.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @param state The state of the package, either active or deleted.
     * @returns package_version Response
     * @throws ApiError
     */
    static packagesGetAllPackageVersionsForPackageOwnedByOrg(packageType, packageName, org, page = 1, perPage = 30, state = 'active') {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/packages/{package_type}/{package_name}/versions',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'org': org,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'state': state,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get a package version for an organization
     * Gets a specific package version in an organization.
     *
     * You must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param org The organization name. The name is not case sensitive.
     * @param packageVersionId Unique identifier of the package version.
     * @returns package_version Response
     * @throws ApiError
     */
    static packagesGetPackageVersionForOrganization(packageType, packageName, org, packageVersionId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'org': org,
                'package_version_id': packageVersionId,
            },
        });
    }
    /**
     * Delete package version for an organization
     * Deletes a specific package version in an organization. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param org The organization name. The name is not case sensitive.
     * @param packageVersionId Unique identifier of the package version.
     * @returns void
     * @throws ApiError
     */
    static packagesDeletePackageVersionForOrg(packageType, packageName, org, packageVersionId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'org': org,
                'package_version_id': packageVersionId,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Restore package version for an organization
     * Restores a specific package version in an organization.
     *
     * You can restore a deleted package under the following conditions:
     * - The package was deleted within the last 30 days.
     * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param org The organization name. The name is not case sensitive.
     * @param packageVersionId Unique identifier of the package version.
     * @returns void
     * @throws ApiError
     */
    static packagesRestorePackageVersionForOrg(packageType, packageName, org, packageVersionId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'org': org,
                'package_version_id': packageVersionId,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get list of conflicting packages during Docker migration for authenticated-user
     * Lists all packages that are owned by the authenticated user within the user's namespace, and that encountered a conflict during a Docker migration.
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope.
     * @returns package Response
     * @throws ApiError
     */
    static packagesListDockerMigrationConflictingPackagesForAuthenticatedUser() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/docker/conflicts',
        });
    }
    /**
     * List packages for the authenticated user's namespace
     * Lists packages owned by the authenticated user within the user's namespace.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param visibility The selected visibility of the packages.  This parameter is optional and only filters an existing result set.
     *
     * The `internal` visibility is only supported for GitHub Packages registries that allow for granular permissions. For other ecosystems `internal` is synonymous with `private`.
     * For the list of GitHub Packages registries that support granular permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns package Response
     * @throws ApiError
     */
    static packagesListPackagesForAuthenticatedUser(packageType, visibility, page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/packages',
            query: {
                'package_type': packageType,
                'visibility': visibility,
                'page': page,
                'per_page': perPage,
            },
            errors: {
                400: `The value of \`per_page\` multiplied by \`page\` cannot be greater than 10000.`,
            },
        });
    }
    /**
     * Get a package for the authenticated user
     * Gets a specific package for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @returns package Response
     * @throws ApiError
     */
    static packagesGetPackageForAuthenticatedUser(packageType, packageName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/packages/{package_type}/{package_name}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
            },
        });
    }
    /**
     * Delete a package for the authenticated user
     * Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes.
     * If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @returns void
     * @throws ApiError
     */
    static packagesDeletePackageForAuthenticatedUser(packageType, packageName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/user/packages/{package_type}/{package_name}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Restore a package for the authenticated user
     * Restores a package owned by the authenticated user.
     *
     * You can restore a deleted package under the following conditions:
     * - The package was deleted within the last 30 days.
     * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param token package token
     * @returns void
     * @throws ApiError
     */
    static packagesRestorePackageForAuthenticatedUser(packageType, packageName, token) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/user/packages/{package_type}/{package_name}/restore',
            path: {
                'package_type': packageType,
                'package_name': packageName,
            },
            query: {
                'token': token,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * List package versions for a package owned by the authenticated user
     * Lists package versions for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @param state The state of the package, either active or deleted.
     * @returns package_version Response
     * @throws ApiError
     */
    static packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser(packageType, packageName, page = 1, perPage = 30, state = 'active') {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/packages/{package_type}/{package_name}/versions',
            path: {
                'package_type': packageType,
                'package_name': packageName,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'state': state,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get a package version for the authenticated user
     * Gets a specific package version for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param packageVersionId Unique identifier of the package version.
     * @returns package_version Response
     * @throws ApiError
     */
    static packagesGetPackageVersionForAuthenticatedUser(packageType, packageName, packageVersionId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/packages/{package_type}/{package_name}/versions/{package_version_id}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'package_version_id': packageVersionId,
            },
        });
    }
    /**
     * Delete a package version for the authenticated user
     * Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes.
     * If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param packageVersionId Unique identifier of the package version.
     * @returns void
     * @throws ApiError
     */
    static packagesDeletePackageVersionForAuthenticatedUser(packageType, packageName, packageVersionId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/user/packages/{package_type}/{package_name}/versions/{package_version_id}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'package_version_id': packageVersionId,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Restore a package version for the authenticated user
     * Restores a package version owned by the authenticated user.
     *
     * You can restore a deleted package version under the following conditions:
     * - The package was deleted within the last 30 days.
     * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param packageVersionId Unique identifier of the package version.
     * @returns void
     * @throws ApiError
     */
    static packagesRestorePackageVersionForAuthenticatedUser(packageType, packageName, packageVersionId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'package_version_id': packageVersionId,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get list of conflicting packages during Docker migration for user
     * Lists all packages that are in a specific user's namespace, that the requesting user has access to, and that encountered a conflict during Docker migration.
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope.
     * @param username The handle for the GitHub user account.
     * @returns package Response
     * @throws ApiError
     */
    static packagesListDockerMigrationConflictingPackagesForUser(username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{username}/docker/conflicts',
            path: {
                'username': username,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * List packages for a user
     * Lists all packages in a user's namespace for which the requesting user has access.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param username The handle for the GitHub user account.
     * @param visibility The selected visibility of the packages.  This parameter is optional and only filters an existing result set.
     *
     * The `internal` visibility is only supported for GitHub Packages registries that allow for granular permissions. For other ecosystems `internal` is synonymous with `private`.
     * For the list of GitHub Packages registries that support granular permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns package Response
     * @throws ApiError
     */
    static packagesListPackagesForUser(packageType, username, visibility, page = 1, perPage = 30) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{username}/packages',
            path: {
                'username': username,
            },
            query: {
                'package_type': packageType,
                'visibility': visibility,
                'page': page,
                'per_page': perPage,
            },
            errors: {
                400: `The value of \`per_page\` multiplied by \`page\` cannot be greater than 10000.`,
                401: `Requires authentication`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get a package for a user
     * Gets a specific package metadata for a public package owned by a user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param username The handle for the GitHub user account.
     * @returns package Response
     * @throws ApiError
     */
    static packagesGetPackageForUser(packageType, packageName, username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{username}/packages/{package_type}/{package_name}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'username': username,
            },
        });
    }
    /**
     * Delete a package for a user
     * Deletes an entire package for a user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param username The handle for the GitHub user account.
     * @returns void
     * @throws ApiError
     */
    static packagesDeletePackageForUser(packageType, packageName, username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/users/{username}/packages/{package_type}/{package_name}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'username': username,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Restore a package for a user
     * Restores an entire package for a user.
     *
     * You can restore a deleted package under the following conditions:
     * - The package was deleted within the last 30 days.
     * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param username The handle for the GitHub user account.
     * @param token package token
     * @returns void
     * @throws ApiError
     */
    static packagesRestorePackageForUser(packageType, packageName, username, token) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/users/{username}/packages/{package_type}/{package_name}/restore',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'username': username,
            },
            query: {
                'token': token,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * List package versions for a package owned by a user
     * Lists package versions for a public package owned by a specified user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param username The handle for the GitHub user account.
     * @returns package_version Response
     * @throws ApiError
     */
    static packagesGetAllPackageVersionsForPackageOwnedByUser(packageType, packageName, username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{username}/packages/{package_type}/{package_name}/versions',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'username': username,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Get a package version for a user
     * Gets a specific package version for a public package owned by a specified user.
     *
     * At this time, to use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param packageVersionId Unique identifier of the package version.
     * @param username The handle for the GitHub user account.
     * @returns package_version Response
     * @throws ApiError
     */
    static packagesGetPackageVersionForUser(packageType, packageName, packageVersionId, username) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'package_version_id': packageVersionId,
                'username': username,
            },
        });
    }
    /**
     * Delete package version for a user
     * Deletes a specific package version for a user. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param username The handle for the GitHub user account.
     * @param packageVersionId Unique identifier of the package version.
     * @returns void
     * @throws ApiError
     */
    static packagesDeletePackageVersionForUser(packageType, packageName, username, packageVersionId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'username': username,
                'package_version_id': packageVersionId,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Restore package version for a user
     * Restores a specific package version for a user.
     *
     * You can restore a deleted package under the following conditions:
     * - The package was deleted within the last 30 days.
     * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     * @param packageType The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     * @param packageName The name of the package.
     * @param username The handle for the GitHub user account.
     * @param packageVersionId Unique identifier of the package version.
     * @returns void
     * @throws ApiError
     */
    static packagesRestorePackageVersionForUser(packageType, packageName, username, packageVersionId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore',
            path: {
                'package_type': packageType,
                'package_name': packageName,
                'username': username,
                'package_version_id': packageVersionId,
            },
            errors: {
                401: `Requires authentication`,
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
}
exports.PackagesService = PackagesService;
//# sourceMappingURL=PackagesService.js.map