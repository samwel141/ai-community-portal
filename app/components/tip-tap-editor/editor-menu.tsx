import { useCurrentEditor } from "@tiptap/react";
import { ButtonIcon } from "~/components/button";
import { AlignLeftIcon } from "~/components/icons";
import ColorButton from "~/components/tip-tap-editor/color-button";
import {
    AlightCenterIcon,
    AlightJustifyIcon,
    AlightRightIcon,
    BoldIcon,
    ItalicIcon,
    RedoIcon,
    UnderlineIcon,
    UndoIcon,
} from "~/components/tip-tap-editor/editor-icons";
import InsertImageButton from "~/components/tip-tap-editor/insert-image-button";
import InsertLinkButton from "~/components/tip-tap-editor/insert-url-button";
import InsertYoutubeVideoUrlButton from "~/components/tip-tap-editor/insert-youtube-video-url-button";
import HeadingsButton from "~/components/tip-tap-editor/text-size-button";
import { cn } from "~/utils";

const EditorMenu = () => {
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
    ];

    const textAlignmentGroup = [
        {
            Icon: AlignLeftIcon,
            onClick: () => editor.chain().focus().setTextAlign("left").run(),
            className: cn({
                "bg-black/10": editor.isActive({ textAlign: "left" }),
            }),
        },
        {
            Icon: AlightCenterIcon,
            onClick: () => editor.chain().focus().setTextAlign("center").run(),
            className: cn({
                "bg-black/10": editor.isActive({ textAlign: "center" }),
            }),
        },
        {
            Icon: AlightRightIcon,
            onClick: () => editor.chain().focus().setTextAlign("right").run(),
            className: cn({
                "bg-black/10": editor.isActive({ textAlign: "right" }),
            }),
        },
        {
            Icon: AlightJustifyIcon,
            onClick: () => editor.chain().focus().setTextAlign("justify").run(),
            className: cn({
                "bg-black/10": editor.isActive({ textAlign: "justify" }),
            }),
        },
    ];

    const undoRedoGroups = [
        { Icon: UndoIcon, onClick: () => editor.chain().focus().undo().run() },
        {
            Icon: RedoIcon,
            onClick: () => editor.chain().focus().redo().run(),
        },
    ];

    return (
        <header
            className={
                "bg-[#EEF5DF] p-2 pl-5 items-between gap-5 item sticky top-0 z-10"
            }
        >
            <HeadingsButton />

            <div className={"flex items-center gap-1"}>
                {textFormattingGroup.map((menu, index) => (
                    <ButtonIcon
                        key={index}
                        Icon={menu.Icon}
                        onClick={menu.onClick}
                        className={cn(
                            "text-dark-green rounded-md",
                            menu.className
                        )}
                    />
                ))}
                <ColorButton />
            </div>

            <div className={"flex items-center gap-1"}>
                {textAlignmentGroup.map((menu, index) => (
                    <ButtonIcon
                        key={index}
                        Icon={menu.Icon}
                        onClick={menu.onClick}
                        className={cn(
                            "text-dark-green rounded-md",
                            menu.className
                        )}
                    />
                ))}
            </div>

            <div className={"flex items-center gap-1"}>
                <InsertLinkButton />
                <InsertYoutubeVideoUrlButton />
                <InsertImageButton />
            </div>

            <div className={"flex items-center gap-1"}>
                {undoRedoGroups.map((menu, index) => (
                    <ButtonIcon
                        key={index}
                        Icon={menu.Icon}
                        onClick={menu.onClick}
                        className={cn("text-dark-green rounded-md")}
                    />
                ))}
            </div>
        </header>
    );
};
export default EditorMenu;
