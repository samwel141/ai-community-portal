/**
 * Retrieves the query parameters from a given URL request.
 *
 * @param {Request} request - The URL request object.
 * @returns {Partial<T>} - The query parameters as an object.
 *
 * @template T - The type of the query parameters object. Defaults to unknown.
 */

const getSearchParams = <T = unknown>(request: Request): Partial<T> => {
    return Object.fromEntries(new URL(request.url).searchParams) as Partial<T>;
};
export default getSearchParams;
