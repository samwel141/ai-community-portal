import { FC, forwardRef, ReactNode } from "react";
import { cn } from "~/utils";

interface Props {
    className?: string;
    children: ReactNode;
}

const PageContainer: FC<Props> = forwardRef<HTMLElement, Props>(
    ({ className, children }, ref) => {
        return (
            <section ref={ref} className={cn("px-1 md:px-6 pt-6 pb-2 ", className)}>
                {children}
            </section>
        );
    }
);

PageContainer.displayName = "PageContainer";

export default PageContainer;
