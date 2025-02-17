import type { ActionFunctionArgs } from "@remix-run/node";
import { db } from "~/utils/db.server";

import { logout, requireUser } from "~/utils/session.server";

export const loader = async ({ request }: ActionFunctionArgs) => {
    const user = await requireUser(request);
    await db.delete(user?.id!); 
    return await logout(request);
};
