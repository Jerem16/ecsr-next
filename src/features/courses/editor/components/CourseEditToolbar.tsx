"use client";

import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SaveIcon from "@mui/icons-material/Save";
import VisibilityIcon from "@mui/icons-material/Visibility";

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

    return (
        <div
            className={`course-edit-toolbar${isExpanded ? " course-edit-toolbar--expanded" : " course-edit-toolbar--collapsed"}`}
            role="region"
            aria-label="Menu d’édition du cours"
        >
            <button
                type="button"
                className="course-edit-toolbar__toggle"
                onClick={() => setIsExpanded((currentValue) => !currentValue)}
                aria-expanded={isExpanded}
                aria-label={toggleLabel}
                title={toggleLabel}
            >
                <EditIcon fontSize="small" />
                <span>{isEditing ? "Édition" : "Lecture"}</span>
                {isExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
            </button>

            {isExpanded ? (
                <>
                    <div className="course-edit-toolbar__status">
                        <p>Mode édition local</p>
                        <strong>{isEditing ? "Édition active" : "Lecture"}</strong>
                        {status ? <span>{status}</span> : null}
                    </div>
                    <div className="course-edit-toolbar__actions">
                        {isEditing ? (
                            <>
                                <button type="button" className="course-editor-button course-editor-button--ghost" onClick={onCancel}>
                                    <ArrowBackIcon fontSize="small" /> Retour
                                </button>
                                <button type="button" className="course-editor-button" onClick={onSave} disabled={isSaving}>
                                    <SaveIcon fontSize="small" /> {isSaving ? "Sauvegarde..." : "Sauvegarder"}
                                </button>
                            </>
                        ) : (
                            <>
                                <button type="button" className="course-editor-button course-editor-button--ghost" onClick={onEdit}>
                                    <EditIcon fontSize="small" /> Modifier le cours
                                </button>
                                <span className="course-edit-toolbar__preview"><VisibilityIcon fontSize="small" /> Aperçu normal</span>
                            </>
                        )}
                    </div>
                </>
            ) : (
                <div className="course-edit-toolbar__compact-actions">
                    {isEditing ? (
                        <>
                            <button type="button" className="course-editor-icon-button course-editor-icon-button--soft" onClick={onCancel} aria-label="Quitter le mode édition">
                                <ArrowBackIcon fontSize="small" />
                            </button>
                            <button type="button" className="course-editor-icon-button course-editor-icon-button--primary" onClick={onSave} disabled={isSaving} aria-label="Sauvegarder le cours">
                                <SaveIcon fontSize="small" />
                            </button>
                        </>
                    ) : (
                        <button type="button" className="course-editor-icon-button course-editor-icon-button--primary" onClick={onEdit} aria-label="Modifier le cours">
                            <EditIcon fontSize="small" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};
