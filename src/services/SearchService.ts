/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { code_search_result_item } from '../models/code_search_result_item';
import type { commit_search_result_item } from '../models/commit_search_result_item';
import type { issue_search_result_item } from '../models/issue_search_result_item';
import type { label_search_result_item } from '../models/label_search_result_item';
import type { repo_search_result_item } from '../models/repo_search_result_item';
import type { topic_search_result_item } from '../models/topic_search_result_item';
import type { user_search_result_item } from '../models/user_search_result_item';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SearchService {

    /**
     * Search code
     * Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).
     *
     * For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:
     *
     * `q=addClass+in:file+language:js+repo:jquery/jquery`
     *
     * This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.
     *
     * Considerations for code search:
     *
     * Due to the complexity of searching code, there are a few restrictions on how searches are performed:
     *
     * *   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
     * *   Only files smaller than 384 KB are searchable.
     * *   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing
     * language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.
     *
     * This endpoint requires you to authenticate and limits you to 10 requests per minute.
     * @param q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See "[Searching code](https://docs.github.com/search-github/searching-on-github/searching-code)" for a detailed list of qualifiers.
     * @param sort **This field is deprecated.** Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)
     * @param order **This field is deprecated.** Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static searchCode(
        q: string,
        sort?: 'indexed',
        order: 'desc' | 'asc' = 'desc',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        incomplete_results: boolean;
        items: Array<code_search_result_item>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/code',
            query: {
                'q': q,
                'sort': sort,
                'order': order,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
                503: `Service unavailable`,
            },
        });
    }

    /**
     * Search commits
     * Find commits via various criteria on the default branch (usually `main`). This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match
     * metadata](https://docs.github.com/rest/search/search#text-match-metadata).
     *
     * For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:
     *
     * `q=repo:octocat/Spoon-Knife+css`
     * @param q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See "[Searching commits](https://docs.github.com/search-github/searching-on-github/searching-commits)" for a detailed list of qualifiers.
     * @param sort Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)
     * @param order Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static searchCommits(
        q: string,
        sort?: 'author-date' | 'committer-date',
        order: 'desc' | 'asc' = 'desc',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        incomplete_results: boolean;
        items: Array<commit_search_result_item>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/commits',
            query: {
                'q': q,
                'sort': sort,
                'order': order,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
            },
        });
    }

    /**
     * Search issues and pull requests
     * Find issues by state and keyword. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted
     * search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).
     *
     * For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.
     *
     * `q=windows+label:bug+language:python+state:open&sort=created&order=asc`
     *
     * This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, which means the oldest issues appear first in the search results.
     *
     * **Note:** For requests made by GitHub Apps with a user access token, you can't retrieve a combination of issues and pull requests in a single query. Requests that don't include the `is:issue` or `is:pull-request` qualifier will receive an HTTP `422 Unprocessable Entity` response. To get results for both issues and pull requests, you must send separate queries for issues and pull requests. For more information about the `is` qualifier, see "[Searching only issues or pull requests](https://docs.github.com/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests)."
     * @param q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See "[Searching issues and pull requests](https://docs.github.com/search-github/searching-on-github/searching-issues-and-pull-requests)" for a detailed list of qualifiers.
     * @param sort Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)
     * @param order Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static searchIssuesAndPullRequests(
        q: string,
        sort?: 'comments' | 'reactions' | 'reactions-+1' | 'reactions--1' | 'reactions-smile' | 'reactions-thinking_face' | 'reactions-heart' | 'reactions-tada' | 'interactions' | 'created' | 'updated',
        order: 'desc' | 'asc' = 'desc',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        incomplete_results: boolean;
        items: Array<issue_search_result_item>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/issues',
            query: {
                'q': q,
                'sort': sort,
                'order': order,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                422: `Validation failed, or the endpoint has been spammed.`,
                503: `Service unavailable`,
            },
        });
    }

    /**
     * Search labels
     * Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).
     *
     * For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:
     *
     * `q=bug+defect+enhancement&repository_id=64778136`
     *
     * The labels that best match the query appear first in the search results.
     * @param repositoryId The id of the repository.
     * @param q The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query).
     * @param sort Sorts the results of your query by when the label was `created` or `updated`. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)
     * @param order Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static searchLabels(
        repositoryId: number,
        q: string,
        sort?: 'created' | 'updated',
        order: 'desc' | 'asc' = 'desc',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        incomplete_results: boolean;
        items: Array<label_search_result_item>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/labels',
            query: {
                'repository_id': repositoryId,
                'q': q,
                'sort': sort,
                'order': order,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                403: `Forbidden`,
                404: `Resource not found`,
                422: `Validation failed, or the endpoint has been spammed.`,
            },
        });
    }

    /**
     * Search repositories
     * Find repositories via various criteria. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).
     *
     * For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:
     *
     * `q=tetris+language:assembly&sort=stars&order=desc`
     *
     * This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.
     * @param q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See "[Searching for repositories](https://docs.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.
     * @param sort Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)
     * @param order Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static searchRepos(
        q: string,
        sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated',
        order: 'desc' | 'asc' = 'desc',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        incomplete_results: boolean;
        items: Array<repo_search_result_item>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/repositories',
            query: {
                'q': q,
                'sort': sort,
                'order': order,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                422: `Validation failed, or the endpoint has been spammed.`,
                503: `Service unavailable`,
            },
        });
    }

    /**
     * Search topics
     * Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination). See "[Searching topics](https://docs.github.com/articles/searching-topics/)" for a detailed list of qualifiers.
     *
     * When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).
     *
     * For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this:
     *
     * `q=ruby+is:featured`
     *
     * This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.
     * @param q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query).
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static searchTopics(
        q: string,
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        incomplete_results: boolean;
        items: Array<topic_search_result_item>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/topics',
            query: {
                'q': q,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
            },
        });
    }

    /**
     * Search users
     * Find users via various criteria. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for users, you can get text match metadata for the issue **login**, public **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).
     *
     * For example, if you're looking for a list of popular users, you might try this query:
     *
     * `q=tom+repos:%3E42+followers:%3E1000`
     *
     * This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers.
     *
     * This endpoint does not accept authentication and will only include publicly visible users. As an alternative, you can use the GraphQL API. The GraphQL API requires authentication and will return private users, including Enterprise Managed Users (EMUs), that you are authorized to view. For more information, see "[GraphQL Queries](https://docs.github.com/graphql/reference/queries#search)."
     * @param q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See "[Searching users](https://docs.github.com/search-github/searching-on-github/searching-users)" for a detailed list of qualifiers.
     * @param sort Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)
     * @param order Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
     * @param perPage The number of results per page (max 100).
     * @param page Page number of the results to fetch.
     * @returns any Response
     * @throws ApiError
     */
    public static searchUsers(
        q: string,
        sort?: 'followers' | 'repositories' | 'joined',
        order: 'desc' | 'asc' = 'desc',
        perPage: number = 30,
        page: number = 1,
    ): CancelablePromise<{
        total_count: number;
        incomplete_results: boolean;
        items: Array<user_search_result_item>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/users',
            query: {
                'q': q,
                'sort': sort,
                'order': order,
                'per_page': perPage,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                422: `Validation failed, or the endpoint has been spammed.`,
                503: `Service unavailable`,
            },
        });
    }

}
