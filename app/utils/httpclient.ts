import axios from "axios";
import { env } from "~/utils/env.server";
import safeExecute from "~/utils/safe-execute.server";

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

interface Config {
    method: HttpMethod;
    url: string;
    headers: {
        Authorization: string;
        "Content-Type"?: "application/json" | "multipart/form-data";
    };
    data: undefined | object | FormData;
}

export const request = async (
    type: HttpMethod,
    endpoint: string,
    data?: object,
    token?: string
) => {
    const config: Config = {
        method: type,
        url: env.API_BASE_URL + endpoint,
        headers: {
            Authorization: `Bearer ${token ?? ""}`,
        },
        data: undefined,
    };

    if (data) {
        config.data = data;
        console.log("[Sent-Data]", data);
        if (data instanceof FormData) {
            config.headers["Content-Type"] = "multipart/form-data";
        }
    }

    console.log("[token]", token);
    console.log(`${type.toLocaleUpperCase()}`, `${config.url}`);
    return axios(config).then((response) => response.data);
};

export const get = safeExecute(async (endpoint: string, token?: string) => {
    return await request("get", endpoint, undefined, token);
});

export const post = safeExecute(
    async (endpoint: string, data: object, token?: string) => {
        return await request("post", endpoint, data, token);
    }
);

export const remove = safeExecute(async (endpoint: string, token?: string) => {
    return await request("delete", endpoint, undefined, token);
});

export const put = safeExecute(
    async (endpoint: string, data: object, token?: string) => {
        return await request("put", endpoint, data, token);
    }
);

export const patch = safeExecute(
    async (endpoint: string, data: object, token?: string) => {
        return await request("patch", endpoint, data, token);
    }
);
