import SimpleDB from "@bonnykato/simple-db";
import {
    AuthUserSchemaWithRoleType,
    AuthUserType,
} from "~/api/login/auth-user-schema";

export const db = new SimpleDB<AuthUserSchemaWithRoleType["data"]>(
    "db.json",
    "users"
);

/**
 * Asynchronously saves or updates a user in the database.
 *
 * This function checks if the user already exists in the database by their ID.
 * If the user exists, it updates their information; otherwise, it creates a new
 * user entry with the provided data.
 *
 * @param {AuthUserType} userData - The user data to be saved or updated.
 * @returns {Promise<AuthUserType>} A promise that resolves to the result of the database operation.
 */
export const saveOrUpdateUser = async (
    userData: AuthUserSchemaWithRoleType["data"]
): Promise<AuthUserType> => {
    const userExists = await db.getByID(userData.id);

    if (userExists) {
        return (await db.update(userData.id, userData)) as AuthUserType;
    }
    return db.create(userData);
};
