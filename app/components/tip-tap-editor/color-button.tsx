import { useCurrentEditor } from "@tiptap/react";
import { ChangeEvent, useRef, useState } from "react";
import { ButtonIcon } from "~/components/button";
import { TextColorIcon } from "~/components/tip-tap-editor/editor-icons";
import { cn } from "~/utils";

const ColorButton = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedColor, setSelectedColor] = useState("");

    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const color = e.target.value;
        setSelectedColor(color);
        editor.chain().focus().setColor(color).run();
    };

    return (
        <div className={"relative w-fit "}>
            <input
                ref={inputRef}
                type={"color"}
                className={"size-0 inset-0 pointer-events-none absolute"}
                onChange={handleInputChange}
            />
            <ButtonIcon
                style={{
                    color: selectedColor,
                }}
                Icon={TextColorIcon}
                onClick={() => inputRef.current?.click()}
                className={cn("text-dark-green rounded-md ")}
            />
        </div>
    );
};
export default ColorButton;
