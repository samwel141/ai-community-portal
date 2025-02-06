import { Color } from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import { TextAlign } from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { Youtube } from "@tiptap/extension-youtube";
import StarterKit from "@tiptap/starter-kit";

export const editorExtensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle,
    Youtube.configure({
        nocookie: true,
    }),
    Underline,
    Image,
    Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
    }),
    TextAlign.configure({
        types: ["heading", "paragraph"],
    }),
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false,
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false,
        },
    }),
];
