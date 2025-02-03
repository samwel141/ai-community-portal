import { useRouteError } from "@remix-run/react";
import { memo } from "react";
import { GeneralFallbackUI } from "~/components/general-fallback-ui";
import { IconType } from "~/types";
import { cn } from "~/utils";
import getErrorMessage from "~/utils/get-error-message";
import { isCustomErrorResponse, parseErrorResponse } from "~/utils/parse-error";

const renderError = (error: unknown) => {
    if (isCustomErrorResponse(error)) {
        const parseError = parseErrorResponse(error);
        return parseError.data.message;
    }
    return getErrorMessage(error);
};

export interface UseFallbackUIProps {
    Icon: IconType;
    title: string;
    ctaLink?: string;
    ctaLabel?: string;
    description?: string;
}

export const useFallbackUI = ({
    Icon,
    title,
    ctaLink = ".",
    ctaLabel = "Reload",
    description,
}: UseFallbackUIProps) => {
    const error = useRouteError();
    const message = renderError(error);

    const FallbackUIComponent = memo(
        ({ className }: { className?: string }) => (
            <GeneralFallbackUI
                Illustrations={Icon}
                illustrationsClassName={"size-8 text-dark-green"}
                description={description ?? message}
                title={title}
                ctaLink={ctaLink}
                ctaLabel={ctaLabel}
                wrapperClassName={cn("space-y-4", className)}
            />
        )
    );

    FallbackUIComponent.displayName = "FallbackUI";

    return FallbackUIComponent;
};
