import { faker } from "@faker-js/faker";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { z } from "zod";
import { useGetAbsolutePath } from "~/hooks/useGetAbsolutePath";
import { EnumLabelValueMap, QueryOptions } from "~/types";
import { ApiRequest } from "~/utils/api-request";
import {
    FetchOptionsWithoutResource,
    useCachedFetcher,
} from "~/utils/cache/components";
import { generateURLSearchParams } from "~/utils/url-search-params";
import {
    ApiListSchema,
    DateSchema,
    EntityIdSchema,
    NoneEmptyStringSchema,
    PositiveNumberSchema,
} from "~/utils/zod-common";




 enum VotingSessionStatusType {
    ACTIVE = 1,
    INACTIVE,
    UPCOMING,
}

export const votingSessionStatusTypeMap: EnumLabelValueMap = {
    [VotingSessionStatusType.ACTIVE]: {
        label: "Active",
        value: VotingSessionStatusType.ACTIVE,
        badgeType: "success",
    },

    [VotingSessionStatusType.INACTIVE]: {
        label: "InActive",
        value: VotingSessionStatusType.INACTIVE,
        badgeType: "disabled",
    },
    [VotingSessionStatusType.UPCOMING]: {
        label: "Upcoming",
        value: VotingSessionStatusType.UPCOMING,
        badgeType: "warning",
    },
};



const VotingSessionSchema = z.object({
    id: EntityIdSchema,
    title: NoneEmptyStringSchema("title"),
    startDate: DateSchema("startDate"),
    endDate: DateSchema("endDate"),
    numberOfTeams: PositiveNumberSchema("numberOfTeams"),
    status: z
        .nativeEnum(VotingSessionStatusType)
        .transform((type) => votingSessionStatusTypeMap[type]),
});

export type VotingSessionType = z.infer<typeof VotingSessionSchema>;
export const VotingSessionListSchema = ApiListSchema(VotingSessionSchema);

type VotingSessionListType = z.infer<typeof VotingSessionListSchema>;

// -------- validation schema ends here ---------------------



const generateFakeVotingSession = () => ({
    id: faker.number.int({ min: 1 }),
    title: faker.lorem.words(3),
    startDate: faker.date.past().toISOString(),
    endDate: faker.date.future().toISOString(),
    numberOfTeams: faker.number.int({ min: 1, max: 10 }),
    status: faker.number.int({ min: 1, max: 3 }),
});


export const loader = async ({ request }: LoaderFunctionArgs) => {
    const apiRequest = await ApiRequest.init(request);

    const votingSessions =
        await apiRequest.mockList<VotingSessionType>(
            generateFakeVotingSession,
            VotingSessionListSchema
        );

    return json({ votingSessions });
};

type UseGetVotingSessionProps = FetchOptionsWithoutResource & QueryOptions;

export const useGetVotingSessions = (
    options?: UseGetVotingSessionProps
) => {
    const { q, page, ...fetchOptions } = options ?? {};

    const pathname = useGetAbsolutePath("resources");
    const urlSearchParams = generateURLSearchParams({ q, page });

    const { data, ...rest } = useCachedFetcher<typeof loader>({
        ...fetchOptions,
        resource: `${pathname}?${urlSearchParams}`,
    });

    console.log(["-----------data"], data);
    

    return { data: data?.votingSessions, ...rest };
};
