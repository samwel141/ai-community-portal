import { faker } from "@faker-js/faker";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { z } from "zod";
import { useGetAbsolutePath } from "~/hooks/useGetAbsolutePath";
import { QueryOptions } from "~/types";
import { ApiRequest } from "~/utils/api-request";
import {
    FetchOptionsWithoutResource,
    useCachedFetcher,
} from "~/utils/cache/components";
import { generateURLSearchParams } from "~/utils/url-search-params";
import {
    EntityIdSchema,
    NoneEmptyStringSchema,
    OptionalEmailSchema,
    PhoneNumberSchema,
} from "~/utils/zod-common";


export const ProfileDetailsFormSchema = z.object({
    data: z.object({
        name: NoneEmptyStringSchema("name"),
        email: OptionalEmailSchema,
        phone: PhoneNumberSchema,
        bio: NoneEmptyStringSchema("bio"),
        profileImage: NoneEmptyStringSchema("profileImage").url({
            message: "profileImage must be a url",
        }),
        tabContent: z.object({
            Education: NoneEmptyStringSchema("Education"),
            Achievements: NoneEmptyStringSchema("Achievements"),
            Saves: NoneEmptyStringSchema("Saves"),
        }),
    }),
});

export type ProfileDetailsFormType = z.infer<typeof ProfileDetailsFormSchema>;

export const ProfileDetailsSchema = z.object({
    data: z.object({
        id: EntityIdSchema,
        name: NoneEmptyStringSchema("name"),
        email: OptionalEmailSchema,
        phone: PhoneNumberSchema,
        bio: NoneEmptyStringSchema("bio"),
        profileImage: NoneEmptyStringSchema("profileImage").url({
            message: "profileImage must be a url",
        }),
        tabContent: z.object({
            Education: NoneEmptyStringSchema("Education"),
            Achievements: NoneEmptyStringSchema("Achievements"),
            Saves: NoneEmptyStringSchema("Saves"),
        }),
    }),
});

export const generateProfileDetails = (): ProfileDetailsType => ({
    data: {
        id: faker.number.int({ min: 1, max: 10 }),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        bio: faker.lorem.paragraph(),
        profileImage: faker.internet.url(),
        tabContent: {
            Education: faker.lorem.paragraph(),
            Achievements: faker.lorem.paragraph(),
            Saves: faker.lorem.paragraph(),
        },
    },
});

export type ProfileDetailsType = z.infer<typeof ProfileDetailsSchema>;

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
    const apiRequest = await ApiRequest.init(request);
    const { profileId } = params;
    const ProfileDetails = await apiRequest.mockDetails<ProfileDetailsType>(
        generateProfileDetails(),
        ProfileDetailsSchema
    );
    return json(ProfileDetails);
};

type UseGetProfileDetailsProps = FetchOptionsWithoutResource & QueryOptions;

export const useGetProfileDetails = (options?: UseGetProfileDetailsProps) => {
    const { profileId } = useParams();
    const { q, page, ...fetchOptions } = options ?? {};

    // const pathname = useGetAbsolutePath("resources");
    const pathname = `/portal/home/profile/${profileId}/resources`;
    const urlSearchParams = generateURLSearchParams({ q, page });

    const { data, ...rest } = useCachedFetcher<typeof loader>({
        ...fetchOptions,
        resource: `${pathname}?${urlSearchParams}`,
    });
    return { data, ...rest };
};
