import { useCurrentEditor } from "@tiptap/react";
import { ButtonIcon } from "~/components/button";
import {
    BoldIcon,
    ItalicIcon,
    OrderedListIcon,
    UnderlineIcon,
    UnorderedListIcon,
} from "~/components/tip-tap-editor/editor-icons";
import { cn } from "~/utils";

const EditorSmallMenu = () => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    const textFormattingGroup = [
        {
            Icon: BoldIcon,
            onClick: () => editor.chain().focus().toggleBold().run(),
            className: cn({
                "bg-black/10": editor.isActive("bold"),
            }),
        },
        {
            Icon: ItalicIcon,
            onClick: () => editor.chain().focus().toggleItalic().run(),
            className: cn({
                "bg-black/10": editor.isActive("italic"),
            }),
        },

        {
            Icon: UnderlineIcon,
            onClick: () => editor.chain().focus().toggleUnderline().run(),
            className: cn({
                "bg-black/10": editor.isActive("underline"),
            }),
        },
        {
            Icon: UnorderedListIcon,
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            className: cn({
                "bg-black/10": editor.isActive("bulletList"),
            }),
        },
        {
            Icon: OrderedListIcon,
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            className: cn({
                "bg-black/10": editor.isActive("orderedList"),
            }),
        },
    ];

    return (
        <div
            className={
                "border-b sticky top-0 gap-2 bg-white z-10 flex items-center px-2 py-1.5"
            }
        >
            {textFormattingGroup.map((menu, index) => (
                <ButtonIcon
                    key={index}
                    Icon={menu.Icon}
                    onClick={menu.onClick}
                    className={cn("text-[#6B7280] rounded-md", menu.className)}
                />
            ))}
        </div>
    );
};
export default EditorSmallMenu;
