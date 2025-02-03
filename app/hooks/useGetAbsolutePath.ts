import { useResolvedPath } from "@remix-run/react";

/**
 * Converts a relative path to an absolute path using the {@link useResolvedPath} function and returns the absolute path.
 *
 * @param {string} relativePath - The relative path to be converted to an absolute path.
 * @returns {string} - The absolute path obtained from the conversion.
 */
export const useGetAbsolutePath = (relativePath = ".") => {
    const { pathname } = useResolvedPath(relativePath);
    return pathname;
};
