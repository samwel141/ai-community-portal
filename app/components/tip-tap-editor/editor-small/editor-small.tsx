import { EditorProvider } from "@tiptap/react";
import { FC } from "react";
import Card from "~/components/card";
import { editorExtensions } from "~/components/tip-tap-editor/editor-extensions";
import EditorSmallMenu from "~/components/tip-tap-editor/editor-small/editor-small-menu";
import { cn } from "~/utils";

export interface EditorSmallProps {
    defaultContents?: string;
    className?: string;
    onChange?: (content: string) => void;
}

export const EditorSmall: FC<EditorSmallProps> = ({
    defaultContents,
    className,
    onChange: handleContentChange,
}) => {
    return (
        <Card
            className={cn(
                "border rounded-xl w-full p-0 h-40 overflow-y-auto no-scrollbar ",
                className
            )}
        >
            <EditorProvider
                extensions={editorExtensions}
                slotBefore={<EditorSmallMenu />}
                content={defaultContents}
                onUpdate={({ editor }) =>
                    handleContentChange?.(editor.getHTML())
                }
                editorContainerProps={{
                    className: `p-2 [&_strong]:font-medium 
                    [&_ul]:list-disc 
                    [&_ul]:pl-4 
                    [&_ul:list-inside 
                    [&_ol]:list-decimal 
                    [&_ol]:pl-4 
                    [&_ol:list-inside 
                    
                    `,
                }}
            ></EditorProvider>
        </Card>
    );
};
