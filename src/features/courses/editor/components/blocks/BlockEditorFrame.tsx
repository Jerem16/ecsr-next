"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import type { ReactNode } from "react";
import {
    editorBlockClassName,
    editorDangerIconButtonClassName,
    editorKickerClassName,
    editorTitleClassName,
} from "../editorClassNames";

interface BlockEditorFrameProps {
    title: string;
    blockType: string;
    children: ReactNode;
    onDelete: () => void;
}

export const BlockEditorFrame = ({ title, blockType, children, onDelete }: BlockEditorFrameProps) => {
    return (
        <article className={`course-editor-block ${editorBlockClassName}`}>
            <div className="course-editor-block__header mb-3.5 flex items-start justify-between gap-3">
                <div>
                    <p className={editorKickerClassName}>{blockType}</p>
                    <h4 className={editorTitleClassName}>{title}</h4>
                </div>
                <button type="button" className={editorDangerIconButtonClassName} onClick={onDelete} aria-label="Supprimer le bloc">
                    <DeleteIcon fontSize="small" />
                </button>
            </div>
            <div className="course-editor-block__body grid gap-3.5">{children}</div>
        </article>
    );
};
