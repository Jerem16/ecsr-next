"use client";

import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SaveIcon from "@mui/icons-material/Save";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
    editorButtonClassName,
    editorGhostButtonClassName,
    editorPrimaryIconButtonClassName,
    editorSoftButtonClassName,
    editorSoftIconButtonClassName,
} from "./editorClassNames";

interface CourseEditToolbarProps {
    isEditing: boolean;
    isSaving?: boolean;
    status?: string;
    onEdit: () => void;
    onCancel: () => void;
    onSave: () => void;
}

export const CourseEditToolbar = ({ isEditing, isSaving = false, status, onEdit, onCancel, onSave }: CourseEditToolbarProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleLabel = isExpanded ? "Réduire le menu d’édition" : "Afficher le menu d’édition";
    const toolbarClassName = isExpanded
        ? "course-edit-toolbar course-edit-toolbar--expanded sticky top-[78px] z-20 mb-[18px] flex w-full max-w-full flex-wrap items-start gap-4 rounded-[22px] border border-[var(--course-border)] bg-white/95 p-3.5 shadow-[var(--course-shadow)] backdrop-blur-xl max-[820px]:rounded-[20px]"
        : "course-edit-toolbar course-edit-toolbar--collapsed sticky top-[78px] z-20 mb-[18px] ml-auto flex w-fit max-w-full items-center justify-end gap-2 rounded-full border border-[var(--course-border)] bg-white/95 p-2 shadow-[var(--course-shadow)] backdrop-blur-xl max-[820px]:ml-0 max-[820px]:w-full max-[820px]:justify-between";

    return (
        <div className={toolbarClassName} role="region" aria-label="Menu d’édition du cours">
            <button
                type="button"
                className={isEditing ? editorSoftButtonClassName : editorGhostButtonClassName}
                onClick={() => setIsExpanded((currentValue) => !currentValue)}
                aria-expanded={isExpanded}
                aria-label={toggleLabel}
                title={toggleLabel}
            >
                {isEditing ? <EditIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                <span>{isEditing ? "Édition" : "Lecture"}</span>
                {isExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
            </button>

            {isExpanded ? (
                <>
                    <div className="course-edit-toolbar__status min-w-[min(260px,100%)]">
                        <p className="m-0 mb-1 text-[0.76rem] font-black uppercase tracking-[0.06em] text-[var(--course-accent)]">Mode édition local</p>
                        <strong className="m-0 block text-[var(--course-primary)]">{isEditing ? "Édition active" : "Lecture"}</strong>
                        {status ? <span className="m-0 block text-[0.92rem] text-[var(--course-muted)]">{status}</span> : null}
                    </div>
                    <div className="course-edit-toolbar__actions flex flex-wrap gap-2 max-[820px]:justify-start">
                        {isEditing ? (
                            <>
                                <button type="button" className={editorGhostButtonClassName} onClick={onCancel}>
                                    <ArrowBackIcon fontSize="small" /> Retour
                                </button>
                                <button type="button" className={editorButtonClassName} onClick={onSave} disabled={isSaving}>
                                    <SaveIcon fontSize="small" /> {isSaving ? "Sauvegarde..." : "Sauvegarder"}
                                </button>
                            </>
                        ) : (
                            <>
                                <button type="button" className={editorGhostButtonClassName} onClick={onEdit}>
                                    <EditIcon fontSize="small" /> Modifier le cours
                                </button>
                                <span className="course-edit-toolbar__preview inline-flex items-center gap-1.5 rounded-full border border-[var(--course-border)] bg-[var(--course-primary-soft)] px-3 py-[9px] font-extrabold text-[var(--course-primary)]">
                                    <VisibilityIcon fontSize="small" /> Aperçu normal
                                </span>
                            </>
                        )}
                    </div>
                </>
            ) : (
                <div className="course-edit-toolbar__compact-actions inline-flex items-center gap-2">
                    {isEditing ? (
                        <>
                            <button type="button" className={editorSoftIconButtonClassName} onClick={onCancel} aria-label="Quitter le mode édition">
                                <ArrowBackIcon fontSize="small" />
                            </button>
                            <button type="button" className={editorPrimaryIconButtonClassName} onClick={onSave} disabled={isSaving} aria-label="Sauvegarder le cours">
                                <SaveIcon fontSize="small" />
                            </button>
                        </>
                    ) : (
                        <button type="button" className={editorPrimaryIconButtonClassName} onClick={onEdit} aria-label="Modifier le cours">
                            <EditIcon fontSize="small" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};
