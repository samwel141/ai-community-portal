import { useEffect } from "react";
import { toast } from "sonner";
import { OFFLINE_ERROR_CODE } from "~/constants";
import { throwCustomError } from "~/utils/throw-custom-error";
import { useEventListener } from "./useEventListener";

interface Options {
    disabled?: boolean;
}

export const useOfflineCheck = (options?: Options) => {
    const handleOnlineStatus = () => {
        if (!navigator.onLine && !options?.disabled) {
            toast.error("You are offline");
            throwCustomError(
                "We're unable to connect to the server, please check your internet connection",
                OFFLINE_ERROR_CODE
            );
        }
    };

    useEffect(() => {
        handleOnlineStatus();
    }, []);

    useEventListener("online", handleOnlineStatus);
    useEventListener("offline", handleOnlineStatus);
};
