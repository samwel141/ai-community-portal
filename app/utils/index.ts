import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and merges tailwind classes using twMerge.
 *
 * @param {...ClassValue[]} input - List of class names or expressions.
 * @returns {string} - A single merged string with unique class names.
 */
export const cn = (...input: ClassValue[]): string => {
    return twMerge(clsx(input));
};

// /**
//  * Adds an object to a collection if a condition is met.
//  * @param condition - The expression to evaluate.
//  * @param objectToAdd - The object to add to the collection.
//  * @return array of an object to be added or empty array
//  */
// export const addObjectIfConditionMet = <T>(
//     condition: boolean,
//     objectToAdd: T | T[]
// ): T[] => {
//     if (condition) {
//         return Array.isArray(objectToAdd) ? objectToAdd : [objectToAdd];
//     }
//     return [];
// };

// /**
//  * Converts a hexadecimal color code to an RGB color string.
//  *
//  * @param {string} hexColor - The hexadecimal color code to convert.
//  * @param {number} [alpha=1] - Optional alpha value for the RGB color string.
//  * @returns {string} The RGB color string.
//  */
// export const hexToRgb = (hexColor: string, alpha?: number): string => {
//     // Remove '#' symbol if present
//     hexColor = hexColor.replace("#", "");

//     // Parse hexadecimal components
//     const r = parseInt(hexColor.substring(0, 2), 16);
//     const g = parseInt(hexColor.substring(2, 4), 16);
//     const b = parseInt(hexColor.substring(4, 6), 16);

//     // Return RGB color string
//     return `rgb(${r}, ${g}, ${b},${alpha ?? 1})`;
// };

// /**
//  * Formats a given date string or the current date to "MMMM DD, YYYY" format or its specified format.
//  *
//  * @param  [date] - The date string to be formatted. If not provided, the current date will be used.
//  * @param format
//  * @returns {string} The formatted date string.
//  */
// export const formatDate = (
//     date: string,
//     format: string = "MMM DD, YYYY"
// ): string => {
//     if (!date) throw new Error("Date is required");
//     return dayjs(date).format(format);
// };
