import { FC } from "react";
import Table from "~/components/table/index";

interface Proos {
    headers: string[];
    className?: string;
}

export const TableHeaders: FC<Proos> = ({ headers, className }) => {
    return (
        <Table.Header className={className}>
            <Table.Row className={"odd:bg-white"}>
                {headers.map((header) => (
                    <Table.Head key={header}>{header}</Table.Head>
                ))}
            </Table.Row>
        </Table.Header>
    );
};
