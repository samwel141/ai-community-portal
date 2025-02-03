import { useNavigation } from "@remix-run/react";

/**
 * Returns an object with properties related to pending state.
 *
 */
export const useNavigationState = <T = unknown>() => {
    const navigation = useNavigation();

    const formData = navigation.formData
        ? (Object.fromEntries(navigation.formData) as T)
        : undefined;

    const isSubmitting = navigation.state === "submitting";
    const isLoading = navigation.state === "loading";
    return {
        formData,
        requestMethod: navigation.formMethod,
        isSubmitting,
        isLoading,
        isBusy: navigation.state !== "idle",
        headingLocation: navigation.location?.pathname,
    };
};
