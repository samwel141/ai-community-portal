import SkeletonLoader from "~/components/skeleton-loader";
import Table from "~/components/table";

export const SessionListLoading = () => {
    return (
        <>
            {[...Array(11)].map((_, index) => (
                <Table.Row className={"text-muted "} key={index}>
                    <Table.Cell>
                        <SkeletonLoader className="w-20 py-2" />
                    </Table.Cell>

                    <Table.Cell>
                        <SkeletonLoader className="w-10 py-2" />
                    </Table.Cell>
                    <Table.Cell>
                        <SkeletonLoader className="w-24 py-2" />
                    </Table.Cell>
                    <Table.Cell>
                        <SkeletonLoader className="w-24 py-2" />
                    </Table.Cell>
                    <Table.Cell>
                        <SkeletonLoader className="w-16 py-2" />
                    </Table.Cell>
                    <Table.Cell>
                        <SkeletonLoader className="w-28 h-6 rounded-xl" />
                    </Table.Cell>
                </Table.Row>
            ))}
        </>
    );
};
