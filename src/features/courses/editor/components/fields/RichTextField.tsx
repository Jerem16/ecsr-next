"use client";

import { useEffect, useMemo } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import LinkIcon from "@mui/icons-material/Link";
import NotesIcon from "@mui/icons-material/Notes";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import type { RichContentNode } from "../../../types/course";
import { htmlToRichContentNodes, richContentNodesToHtml } from "../../utils/richContentHtml";

interface RichTextFieldProps {
    label: string;
    value: RichContentNode[];
    onChange: (value: RichContentNode[]) => void;
}

export const RichTextField = ({ label, value, onChange }: RichTextFieldProps) => {
    const initialHtml = useMemo(() => richContentNodesToHtml(value), []);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                autolink: true,
                linkOnPaste: true,
            }),
        ],
        content: initialHtml,
        editorProps: {
            attributes: {
                class: "course-editor-rich__content",
            },
        },
        onUpdate: ({ editor: updatedEditor }) => {
            onChange(htmlToRichContentNodes(updatedEditor.getHTML()));
        },
    });

    useEffect(() => {
        if (!editor) {
            return;
        }

        const currentHtml = editor.getHTML();
        const nextHtml = richContentNodesToHtml(value);

        if (currentHtml !== nextHtml && currentHtml === "<p></p>") {
            editor.commands.setContent(nextHtml);
        }
    }, [editor, value]);

    const setLink = () => {
        if (!editor) {
            return;
        }

        const previousUrl = editor.getAttributes("link").href;
        const url = window.prompt("Adresse du lien", typeof previousUrl === "string" ? previousUrl : "https://");

        if (url === null) {
            return;
        }

        if (url.trim() === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange("link").setLink({ href: url.trim() }).run();
    };

    return (
        <div className="course-editor-rich">
            <span className="course-editor-rich__label">{label}</span>
            <div className="course-editor-rich__toolbar" aria-label={`Outils de mise en forme : ${label}`}>
                <button type="button" onClick={() => editor?.chain().focus().toggleBold().run()} aria-label="Gras">
                    <FormatBoldIcon fontSize="small" />
                </button>
                <button type="button" onClick={() => editor?.chain().focus().toggleItalic().run()} aria-label="Italique">
                    <FormatItalicIcon fontSize="small" />
                </button>
                <button type="button" onClick={() => editor?.chain().focus().toggleBulletList().run()} aria-label="Liste à puces">
                    <FormatListBulletedIcon fontSize="small" />
                </button>
                <button type="button" onClick={() => editor?.chain().focus().toggleOrderedList().run()} aria-label="Liste ordonnée">
                    <FormatListNumberedIcon fontSize="small" />
                </button>
                <button type="button" onClick={setLink} aria-label="Lien">
                    <LinkIcon fontSize="small" />
                </button>
                <button type="button" onClick={() => editor?.chain().focus().setParagraph().run()} aria-label="Paragraphe">
                    <NotesIcon fontSize="small" />
                </button>
            </div>
            <EditorContent editor={editor} />
        </div>
    );
};
