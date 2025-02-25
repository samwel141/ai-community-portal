import { useNavigate } from "@remix-run/react";
import { FC } from "react";
import { GeneralFallbackUI } from "~/components/general-fallback-ui";
import useRefreshDetector from "~/hooks/useRefreshDictator";

import PageNotFoundIllustrations from "~/routes/$/page-not-found-illustrations";
import { cn } from "~/utils";

const PageNotFound: FC<{ className?: string }> = ({ className }) => {
    const navigate = useNavigate();
    useRefreshDetector(() => {
        navigate(-1);
    });

    return (
        <section
            className={cn(" h-[95vh] bg-textColor", className)}
        >
            <div className={" center bg-primary h-full flex-1"}>
                <GeneralFallbackUI
                    Illustrations={PageNotFoundIllustrations}
                    title={"Page not found"}
                    description={`Sorry, we couldn’t find the page you’re looking for`}
                />
            </div>

            <div className={"text-center text-textColor bg-primary text-xs"}>
                @Elimelech Virtuosos International {new Date().getFullYear()}, all rights reserved
            </div>
        </section>
    );
};
export default PageNotFound;
