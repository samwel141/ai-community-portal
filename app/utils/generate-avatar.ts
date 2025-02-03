/**
 * Generates a URL for an avatar image based on the given name.
 *
 * @param {string} name - The name to use as a seed for generating the avatar.
 * @returns {string} A URL pointing to the generated avatar image.
 */
export const generateAvatar = (name: string): string => {
    const colorParam = ["0d47a1", "d1d4f9", "c0aede", "b6e3f4"].join(",");

    const baseUrl = "https://api.dicebear.com/9.x/lorelei/svg";
    return `${baseUrl}?backgroundColor=${colorParam}&seed=${name}`;
};
