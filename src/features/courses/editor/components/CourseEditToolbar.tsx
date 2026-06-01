"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
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
    return (
        <div className="course-edit-toolbar" role="region" aria-label="Menu d’édition du cours">
            <div>
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
        </div>
    );
};
