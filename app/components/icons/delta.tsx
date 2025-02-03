import {
    ArrowDownRightIcon,
    ArrowTrendingDownIcon,
    ArrowTrendingUpIcon,
    ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { FC } from "react";
import Avatar from "~/components/avatar/avatar";

import Badge from "~/components/badge";
import { cn } from "~/utils";

export interface DeltaProps {
    delta: "high" | "low";
    deltaPercentage?: string;
    deltaLabel?: string;
    reverse?: boolean;
    className?: string;
}

const Delta: FC<DeltaProps> = ({
    delta,
    deltaLabel,
    deltaPercentage,
    reverse,
    className,
}) => {
    const Icon = delta === "low" ? ArrowTrendingDownIcon : ArrowTrendingUpIcon;
    return (
        <div className={cn("flex items-center gap-2 text-xs", className)}>
            <Badge
                type={delta === "low" ? "danger" : "success"}
                className={"gap-2 text-[12px] bg-transparent font-medium"}
            >
                <Icon className={"size-4"} strokeWidth={2} />
                <span className={cn({ "order-first": reverse })}>
                    {deltaPercentage}
                </span>
            </Badge>
            <p className={` text-muted`}>{deltaLabel}</p>
        </div>
    );
};
export default Delta;

interface Props {
    delta: "high" | "low";
    deltaPercentage?: string;
    deltaLabel?: string;
}

export const DeltaWithoutTrending: FC<Props> = ({
    delta,
    deltaLabel,
    deltaPercentage,
}) => {
    const Icon = delta === "low" ? ArrowDownRightIcon : ArrowUpRightIcon;
    return (
        <div className={" item-center flex gap-2 "}>
            <div className={"flex items-center gap-2"}>
                <Avatar
                    Icon={Icon}
                    iconClassName={"size-3"}
                    className={cn("size-5 bg-green-100 text-green-600", {
                        " bg-red-100 text-red-600": delta === "low",
                    })}
                />
                <p
                    className={cn("text-sm text-green-600", {
                        "text-red-600": delta === "low",
                    })}
                >
                    {deltaPercentage}
                </p>
            </div>

            <p className={"center text-xs/none font-light text-muted"}>
                {deltaLabel}
            </p>
        </div>
    );
};
