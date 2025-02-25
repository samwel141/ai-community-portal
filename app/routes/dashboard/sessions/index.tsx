import { Outlet } from "@remix-run/react";
import GeneralErrorBoundary from "~/components/error-boundary";
import ExcludeRouteFromLayout from "~/components/exclude-route-from-layout";
import { UserProfileGroupIcon } from "~/components/icons";
import InsureData from "~/components/insure-data";
import PageContainer from "~/components/page-container";
import PageHeader from "~/components/page-header";
import Pagination from "~/components/pagination";
import Table from "~/components/table";
import { useEmptyState } from "~/hooks/useEmptyState";
import useSearchParamsState from "~/hooks/useSearchParamsState";
import { useGetVotingSessions } from "~/routes/dashboard/sessions/resources/index";
import { SessionListLoading } from "~/routes/dashboard/sessions/loading";
import VotingSessionList from "~/routes/dashboard/sessions/session-list";


const tableHeaders: string[] = [
    "Title",
    "Start Date",
    "End date",
    "Number Of Teams",
    "Status",
    "Action",
];

export const BASE_URL = "/dashboard/sessions";

function Sessions() {
    const [searchParams] = useSearchParamsState<{ q: string; page: number }>();

    const { data: sessions, isLoading } = useGetVotingSessions({
        q: searchParams.q,
        page: searchParams.page,
    });

    const EmptyState = useEmptyState({
        NoDataIcon: UserProfileGroupIcon,
        noDataText:
            "There are no sessions the moment. All sessions will be listed here.",
        noDataTitle: "No sessions Found",
        searchNotFoundText: "No sessions found for your search query.",
        shouldShow: sessions?.data?.length !== 0 || isLoading,
    });

    return (
        <>
            <Outlet />
            <div className={"space-y-5"}>
                <PageHeader
                    loading={false}
                    searchPlaceholder={"Search by session title..."} 
                    ctaLink="new"
                    ctaText="Create Session"
                    title={""} 
                    />
                <Table>
                    <Table.Header>
                        <Table.Row className={"odd:bg-white"}>
                            {tableHeaders.map((header) => (
                                <Table.Head key={header}>{header}</Table.Head>
                            ))}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <InsureData
                            data={sessions}
                            loading={isLoading}
                            loadingElement={<SessionListLoading />}
                        >
                            {sessions?.data.map((session) => (
                                <VotingSessionList
                                    key={session.id}
                                    session={session}
                                />
                            ))}
                        </InsureData>
                    </Table.Body>
                </Table>

                <EmptyState />
                {sessions && (
                    <Pagination
                        totalPages={sessions.pagination.totalPages}
                    />
                )}
            </div>
        </>
    );
}

const InventoryReceiveLayout = () => {
    return (
        <ExcludeRouteFromLayout layout={Sessions} route={"view-session"} />
    );
};

export default InventoryReceiveLayout;

export const ErrorBoundary = () => {
    return (
        <>
            <GeneralErrorBoundary />
        </>
    );
};
