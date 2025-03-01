import { FC } from "react";
import { Button } from "~/components/button";
import AccessControl from "~/providers/access-control/access-control";
import { UserAccessControl } from "~/providers/access-control/use-has-access";
import { IconType } from "~/types";
import { cn } from "~/utils";

export interface SlideOverActionType {
    label: string;
    icon: IconType;
    danger?: boolean;
    accessControl: UserAccessControl;
    onClick: VoidFunction;
    loading?: boolean;
}

export const SliderOverActions: FC<{
    className?: string;
    actions: SlideOverActionType[];
}> = ({ className, actions }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            {actions.map(
                ({
                    icon: ActionIcon,
                    label,
                    onClick: handleClick,
                    danger,
                    accessControl,
                    loading,
                }) => (
                    <AccessControl key={label} {...accessControl}>
                        <Button
                            onClick={handleClick}
                            loading={loading}
                            className={cn(
                                "flex gap-2 py-2 pl-3 disabled:opacity-100 border border-westar/50 text-xs bg-gray-700 text-dark-green",
                                { "text-red-500": danger }
                            )}
                        >
                            <ActionIcon className={"size-4"} />

                            <h2 className={"font-medium"}>{label}</h2>
                        </Button>
                    </AccessControl>
                )
            )}
        </div>
    );
};
