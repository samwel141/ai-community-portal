import { forwardRef, Fragment } from "react";
import { type ButtonProps, generateButtonClasses } from "~/components/button/common";
import { LoadingCircle } from "~/components/icons";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        className,
        children,
        outline,
        loadingText = "Please wait...",
        loading,
        loadingIconClassName,
        ...rest
    } = props;

    return (
        <button
            ref={ref}
            disabled={loading}
            {...rest}
            aria-disabled={loading}
            className={generateButtonClasses({ className, outline, loading })}
        >
            {loading ? (
                <Fragment>
                    <LoadingCircle className={loadingIconClassName} />

                    {loadingText.length ? (
                        <span className={"pl-1 tracking-wide"}>
                            {loadingText}
                        </span>
                    ) : null}
                </Fragment>
            ) : (
                children
            )}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
