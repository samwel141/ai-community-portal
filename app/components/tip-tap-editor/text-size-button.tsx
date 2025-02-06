import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useCurrentEditor } from "@tiptap/react";
import { FC } from "react";
import { DropdownMenu } from "~/components/dropdown-menu";
import { cn } from "~/utils";

interface HeadingProps {
    label: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    onSelect: () => void;
}

const HeadingsButton = () => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    const sizes: HeadingProps[] = [
        {
            label: "H1",
            level: 1,
            onSelect: () =>
                editor.chain().focus().toggleHeading({ level: 1 }).run(),
        },
        {
            label: "H2",
            level: 2,
            onSelect: () =>
                editor.chain().focus().toggleHeading({ level: 2 }).run(),
        },
        {
            label: "H3",
            level: 3,
            onSelect: () =>
                editor.chain().focus().toggleHeading({ level: 3 }).run(),
        },
        {
            label: "H4",
            level: 4,
            onSelect: () =>
                editor.chain().focus().toggleHeading({ level: 4 }).run(),
        },
        {
            label: "H5",
            level: 5,
            onSelect: () =>
                editor.chain().focus().toggleHeading({ level: 5 }).run(),
        },
        {
            label: "H6",
            level: 6,
            onSelect: () =>
                editor.chain().focus().toggleHeading({ level: 6 }).run(),
        },
    ];
    return (
        <DropdownMenu>
            <DropdownMenu.Trigger asChild>
                <div
                    className={
                        "flex items-center gap-1 hover:bg-black/10 p-1 pl-1.5 rounded-lg"
                    }
                >
                    <p className={"text-[14.5px]"}>Headings</p>
                    <ChevronUpDownIcon className={"size-5"} strokeWidth={1.5} />
                </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content>
                {sizes.map((heading) => (
                    <HeadingListItem {...heading} key={heading.label} />
                ))}
            </DropdownMenu.Content>
        </DropdownMenu>
    );
};
export default HeadingsButton;

const HeadingListItem: FC<HeadingProps> = ({
    label,
    onSelect: handleSelect,
    level,
}) => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <DropdownMenu.Item
            key={label}
            onSelect={handleSelect}
            className={"flex items-center gap-3"}
        >
            <CheckIcon
                strokeWidth={2.5}
                className={cn(
                    "size-5 rotate-12 opacity-0 pointer-events-none",
                    {
                        "opacity-100": editor.isActive("heading", {
                            level,
                        }),
                    }
                )}
            />

            <p>{label}</p>
        </DropdownMenu.Item>
    );
};
