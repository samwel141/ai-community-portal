import { UIMatch, useMatches } from "@remix-run/react";

/**
 * A custom hook that returns the current route match.
 *
 * This hook uses the useMatches() function to get all route matches
 * and returns the last match in the array, which represents the current route.
 *
 * @returns {UIMatch} The current route match.
 */
export const useCurrentRoute = () => {
    const matches = useMatches();
    return matches.at(-1) as UIMatch;
};
