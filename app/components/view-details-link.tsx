import { EyeIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { ButtonLink } from "~/components/button";
import { cn } from "~/utils";

interface Props {
    iconClassName?: string;
    className?: string;
    to: string;
}

const ViewDetailsLink: FC<Props> = ({ iconClassName, className, to }) => {
    return (
        <ButtonLink
            to={to}
            className={cn(
                "w-fit py-1 bg-white text-[13.5px] text-accent gap-1 border border-westar/50 font-normal px-3 tracking-wide",
                className
            )}
            outline
        >
            <EyeIcon
                className={cn("size-4 text-dark-green", iconClassName)}
                strokeWidth={2}
            />
            <span className={"whitespace-nowrap"}>View details</span>
        </ButtonLink>
    );
};
export default ViewDetailsLink;
