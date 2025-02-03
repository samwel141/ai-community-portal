import { FC } from "react";
import { ParsedSearchParams } from "~/utils/url-search-params";

export interface IconProps {
    className?: string;
    strokeWidth?: string | number | undefined;
}

export type IconType = FC<IconProps>;

export interface FormErrorType<T = unknown> {
    formData?: T;
    errorMessage?: string;
}

export interface Color {
    color: string;
    opacity?: number;
}

export type LongLat = { lat: number; lng: number };

export type BadgeType =
    | "warning"
    | "danger"
    | "success"
    | "info"
    | "disabled"
    | "primary";

export type EnumLabelValueMap = Record<
    number,
    {
        label: string;
        badgeType: BadgeType;
        value: number;
    }
>;

export interface QueryOptions extends ParsedSearchParams {
    /**
     * The search query string to filter results.
     */
    q?: string;

    /**
     * The page number for pagination.
     */
    page?: number;
}
