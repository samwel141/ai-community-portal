/**
 * A boolean variable indicating whether the application is running in development mode.
 *
 * It is set based on the value of the environment variable `NODE_ENV`.
 * If `NODE_ENV` is equal to "development", `isDevMode` will be `true`; otherwise, it will be `false`.
 */

export const isDevMode = process.env.NODE_ENV === "development";
