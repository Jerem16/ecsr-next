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
import {
    editorActiveIconButtonClassName,
    editorIconButtonClassName,
} from "../editorClassNames";
import { EditorFieldShell } from "./EditorFieldShell";

interface RichTextFieldProps {
    label: string;
    value: RichContentNode[];
    onChange: (value: RichContentNode[]) => void;
    allowLists?: boolean;
}

export const RichTextField = ({ label, value, onChange, allowLists = true }: RichTextFieldProps) => {
    const htmlValue = useMemo(() => richContentNodesToHtml(value), [value]);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: allowLists ? {} : false,
                orderedList: allowLists ? {} : false,
                listItem: allowLists ? {} : false,
            }),
            Link.configure({
                openOnClick: false,
                autolink: true,
                linkOnPaste: true,
            }),
        ],
        content: htmlValue,
        editorProps: {
            attributes: {
                class: "course-editor-rich__content min-h-[116px] rounded-b-2xl border border-t-0 border-[var(--course-border)] bg-white px-4 py-3.5 text-[var(--course-text)] leading-[1.65] [&_li]:pl-[0.1rem] [&_li::marker]:font-black [&_li::marker]:text-[var(--course-accent)] [&_ol]:my-2 [&_ol]:grid [&_ol]:list-decimal [&_ol]:gap-[0.35rem] [&_ol]:pl-[1.45rem] [&_p]:mb-3 [&_p]:mt-0 [&_ul]:my-2 [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-[0.35rem] [&_ul]:pl-[1.45rem]",
            },
        },
        immediatelyRender: false,
        onUpdate: ({ editor: updatedEditor }) => {
            onChange(htmlToRichContentNodes(updatedEditor.getHTML()));
        },
    });

    useEffect(() => {
        if (!editor || editor.isFocused) {
            return;
        }

        const currentHtml = editor.getHTML();

        if (currentHtml !== htmlValue) {
            editor.commands.setContent(htmlValue, false);
        }
    }, [editor, htmlValue]);

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
        <EditorFieldShell label={label} asLabel={false} className="course-editor-rich mt-4">
            <div className="course-editor-rich__toolbar flex flex-wrap gap-1.5 rounded-t-2xl border border-[var(--course-border)] bg-[var(--course-primary-soft)] p-[7px]" aria-label={`Outils de mise en forme : ${label}`}>
                <button
                    type="button"
                    className={editor?.isActive("bold") ? editorActiveIconButtonClassName : editorIconButtonClassName}
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    aria-label="Gras"
                >
                    <FormatBoldIcon fontSize="small" />
                </button>
                <button
                    type="button"
                    className={editor?.isActive("italic") ? editorActiveIconButtonClassName : editorIconButtonClassName}
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                    aria-label="Italique"
                >
                    <FormatItalicIcon fontSize="small" />
                </button>
                {allowLists ? (
                    <>
                        <button
                            type="button"
                            className={editor?.isActive("bulletList") ? editorActiveIconButtonClassName : editorIconButtonClassName}
                            onClick={() => editor?.chain().focus().toggleBulletList().run()}
                            aria-label="Liste à puces"
                        >
                            <FormatListBulletedIcon fontSize="small" />
                        </button>
                        <button
                            type="button"
                            className={editor?.isActive("orderedList") ? editorActiveIconButtonClassName : editorIconButtonClassName}
                            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                            aria-label="Liste ordonnée"
                        >
                            <FormatListNumberedIcon fontSize="small" />
                        </button>
                    </>
                ) : null}
                <button type="button" className={editor?.isActive("link") ? editorActiveIconButtonClassName : editorIconButtonClassName} onClick={setLink} aria-label="Lien">
                    <LinkIcon fontSize="small" />
                </button>
                <button type="button" className={editorIconButtonClassName} onClick={() => editor?.chain().focus().setParagraph().run()} aria-label="Paragraphe">
                    <NotesIcon fontSize="small" />
                </button>
            </div>
            <EditorContent editor={editor} />
        </EditorFieldShell>
    );
};
