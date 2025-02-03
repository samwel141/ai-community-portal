import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useMemo } from "react";
import { generateURLSearchParams } from "~/utils/url-search-params";

const useSearchParamsState = <TData>(
    defaultParams?: TData
): [TData, (p: TData) => void] => {
    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const params = useMemo(() => {
        return Object.fromEntries(new URLSearchParams(search)) as TData;
    }, [search]);

    const setParams = (p: TData) => {
        if (p) {
            const queryParams = generateURLSearchParams({ ...params, ...p });
            navigate(`${pathname}?${queryParams}`, { replace: true });
        }
    };

    useEffect(() => {
        if (defaultParams) setParams(defaultParams);
    }, []);

    return [params, setParams];
};

export default useSearchParamsState;
