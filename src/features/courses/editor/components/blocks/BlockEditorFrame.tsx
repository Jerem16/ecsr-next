"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import type { ReactNode } from "react";

interface BlockEditorFrameProps {
    title: string;
    blockType: string;
    children: ReactNode;
    onDelete: () => void;
}

export const BlockEditorFrame = ({ title, blockType, children, onDelete }: BlockEditorFrameProps) => {
    return (
        <article className="course-editor-block">
            <div className="course-editor-block__header">
                <div>
                    <p>{blockType}</p>
                    <h4>{title}</h4>
                </div>
                <button type="button" className="course-editor-icon-button course-editor-icon-button--danger" onClick={onDelete} aria-label="Supprimer le bloc">
                    <DeleteIcon fontSize="small" />
                </button>
            </div>
            <div className="course-editor-block__body">{children}</div>
        </article>
    );
};
