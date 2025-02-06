import { EditorProvider } from "@tiptap/react";
import { FC } from "react";
import { editorExtensions } from "~/components/tip-tap-editor/editor-extensions";
import EditorMenu from "~/components/tip-tap-editor/editor-menu";

interface Props {
    onChange?: (content: string) => void;
    defaultContent?: string;
    editable?: boolean;
}

const TipTapEditor: FC<Props> = ({
    onChange: handleContentChange,
    editable = true,
    defaultContent,
}) => {
    return (
        <EditorProvider
            extensions={editorExtensions}
            slotBefore={editable ? <EditorMenu /> : undefined}
            editable={editable}
            content={defaultContent}
            onUpdate={({ editor }) => handleContentChange?.(editor.getHTML())}
            editorContainerProps={{
                className: ` pt-2.5
                    [&_a]:text-gray-500 [&_a]:underline 
                    [&_h1]:text-5xl [&_h1]:font-bold
                    [&_h2]:text-4xl [&_h2]:font-bold
                    [&_h3]:text-3xl [&_h3]:font-bold
                    [&_h4]:text-2xl [&_h4]:font-bold
                    [&_h5]:text-xl [&_h5]:font-bold
                    [&_h6]:text-lg [&_h6]:font-bold
                    
                    [&_img]:w-full [&_img]:rounded-lg [&_img]:h-96 
                    [&_img]:object-cover 
                    
                    [&_iframe]:w-full [&_iframe]:rounded-lg [&_iframe]:h-96 
                    [&_iframe]:object-cover 
                    `,
            }}
        ></EditorProvider>
    );
};
export default TipTapEditor;
