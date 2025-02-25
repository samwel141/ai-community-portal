import { FC } from "react";
import Badge from "~/components/badge";
import Table from "~/components/table";
import ViewDetailsLink from "~/components/view-details-link";
import { formatDate } from "~/utils";
import { VotingSessionType } from "~/routes/dashboard/sessions/resources";
import { formatTitle } from "~/utils/format-title";

const VotingSessionList: FC<{
    session: VotingSessionType;
}> = ({ session }) => {
    return (
        <Table.Row className={"text-muted "}>
            <Table.Cell className={"flex items-center font-medium"}>
              {formatTitle(session?.title)}
            </Table.Cell>
            <Table.Cell>{formatDate(session?.startDate)}</Table.Cell>
            <Table.Cell>{session?.endDate}</Table.Cell>
            <Table.Cell>{session?.numberOfTeams}</Table.Cell>
            <Table.Cell>
                <Badge type={session.status.badgeType}>
                    {session.status.label}
                </Badge> 
            </Table.Cell>
            <Table.Cell>
                <ViewDetailsLink
                    to={`${session.id}`}
                />
            </Table.Cell>
        </Table.Row>
    );
};
export default VotingSessionList;
