import { ReactNode } from "react";

interface InsureDataProps<TData = unknown> {
    data: TData | undefined;
    loading?: boolean;
    loadingElement?: ReactNode;
    children: ReactNode | ((data: Required<TData>) => ReactNode);
}

const InsureData = <TData,>({
    data,
    children,
    loading,
    loadingElement = null,
}: InsureDataProps<TData>) => {
    if (loading) return loadingElement;

    if (!data) return null;

    return typeof children === "function"
        ? children(data as Required<TData>)
        : children;
};

export default InsureData;
