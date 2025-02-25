import { useNavigation, useSubmit } from "@remix-run/react";
import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { SearchIcon } from "~/components/icons";
import useDebounce from "~/hooks/useDebounce";
import useSearchParamsState from "~/hooks/useSearchParamsState";
import { cn } from "~/utils";

// Todo: Make it comp]around component and add filter feature
export interface SearchBoxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    debounce?: number;
    className?: string;
    placeholder?: string;
    wrapperClass?: string;
}

const SearchBox: FC<SearchBoxProps> = ({
    debounce = 300,
    className,
    placeholder,
    wrapperClass,
    ...rest
}) => {
    const navigation = useNavigation();
    const submit = useSubmit();

    const [searchParams] = useSearchParamsState<{ q: string; page: number }>();

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has("q");

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isFirstSearch = searchParams.q === null;
        const { page, ...rest } = searchParams;

        const updatedParams = {
            // ℹ️ Always reset the page to 1 when searching
            ...(page && { page: 1 }),
            ...rest,
            q: e.target.value,
        };

        submit(updatedParams, {
            replace: !isFirstSearch,
        });
    };

    const handleChange = useDebounce<ChangeEvent<HTMLInputElement>>(
        handleOnChange,
        debounce
    );

    return (
        <div className={cn("relative w-80", wrapperClass)}>
            <input
                {...rest}
                onChange={handleChange}
                defaultValue={searchParams.q}
                className={cn(
                    `w-full 
                    rounded-full border-none bg-secondary border-westar
                     py-2  pl-10 pr-2 text-sm tracking-wide text-gray-400 outline-none ring-2 ring-transparent 
                    placeholder:text-gray-400 focus:border-secondary w-[10rem] sm:w-[33rem]  focus:ring-secondary/40 2xl:focus:ring-4
                `,
                    className
                )}
                type="search"
                placeholder={placeholder ?? "Search.."}
            />
            <p
                className={
                    "absolute left-0 p-2 top-0 flex h-full items-center pl-2"
                }
            >
                {searching ? (
                    <svg
                        className={"h-4 w-4 animate-spin text-gray-400"}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.75517 10.0589C5.82723 6.0579 9.93976 3.68353 13.9408 4.75559C15.2617 5.10955 16.4035 5.79374 17.3034 6.69528L19.2065 8.59835H16.0228C15.6085 8.59835 15.2728 8.93414 15.2728 9.34835C15.2728 9.76256 15.6085 10.0984 16.0228 10.0984H21.0154C21.2143 10.0984 21.4051 10.0193 21.5457 9.87864C21.6864 9.73797 21.7654 9.54717 21.7654 9.34824V4.35575C21.7654 3.94153 21.4296 3.60575 21.0154 3.60575C20.6011 3.60575 20.2654 3.94153 20.2654 4.35575V7.53591L18.3651 5.63561C17.2839 4.55253 15.9114 3.73071 14.329 3.3067C9.52779 2.02023 4.59276 4.86947 3.30628 9.67067C3.19908 10.0708 3.43651 10.482 3.83661 10.5892C4.23671 10.6964 4.64796 10.459 4.75517 10.0589ZM20.1626 13.4108C19.7625 13.3036 19.3513 13.5411 19.2441 13.9412C18.172 17.9422 14.0595 20.3165 10.0585 19.2445C8.73749 18.8905 7.5957 18.2063 6.69585 17.3048L4.79396 15.4017H7.97677C8.39099 15.4017 8.72677 15.0659 8.72677 14.6517C8.72677 14.2375 8.39099 13.9017 7.97677 13.9017L2.98413 13.9017C2.56992 13.9017 2.23413 14.2375 2.23413 14.6517V19.6443C2.23413 20.0585 2.56992 20.3943 2.98413 20.3943C3.39834 20.3943 3.73413 20.0585 3.73413 19.6443V16.4632L5.6342 18.3645C6.71539 19.4477 8.08772 20.2693 9.67024 20.6934C14.4714 21.9798 19.4065 19.1306 20.6929 14.3294C20.8001 13.9293 20.5627 13.5181 20.1626 13.4108Z"
                            fill="#0F172A"
                        />
                    </svg>
                ) : (
                    <SearchIcon
                        strokeWidth={1.5}
                        className={"h-5 text-gray-200"}
                    />
                )}
            </p>
        </div>
    );
};
export default SearchBox;
