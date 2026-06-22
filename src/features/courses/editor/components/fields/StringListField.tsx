"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { TextInputField } from "./TextInputField";

interface StringListFieldProps {
    label: string;
    values: string[];
    onChange: (values: string[]) => void;
    addLabel?: string;
    ordered?: boolean;
    onOrderedChange?: (ordered: boolean) => void;
}

export const StringListField = ({
    label,
    values,
    onChange,
    addLabel = "Ajouter",
    ordered,
    onOrderedChange,
}: StringListFieldProps) => {
    const updateValue = (index: number, value: string) => {
        onChange(values.map((item, itemIndex) => (itemIndex === index ? value : item)));
    };

    const removeValue = (index: number) => {
        onChange(values.filter((_, itemIndex) => itemIndex !== index));
    };

    return (
        <div className="course-editor-group">
            <div className="course-editor-group__header">
                <div>
                    <h4>{label}</h4>
                    {onOrderedChange ? (
                        <p className="course-editor-group__hint">Choisis le type de liste affiché dans le cours.</p>
                    ) : null}
                </div>
                <div className="course-editor-actions-inline">
                    {onOrderedChange ? (
                        <div className="course-editor-list-type" aria-label={`Type de liste : ${label}`}>
                            <button
                                type="button"
                                className={!ordered ? "is-active" : undefined}
                                onClick={() => onOrderedChange(false)}
                                aria-pressed={!ordered}
                            >
                                <FormatListBulletedIcon fontSize="small" /> Puces
                            </button>
                            <button
                                type="button"
                                className={ordered ? "is-active" : undefined}
                                onClick={() => onOrderedChange(true)}
                                aria-pressed={Boolean(ordered)}
                            >
                                <FormatListNumberedIcon fontSize="small" /> Numérotée
                            </button>
                        </div>
                    ) : null}
                    <button type="button" className="course-editor-button course-editor-button--ghost" onClick={() => onChange([...values, ""])}>
                        <AddIcon fontSize="small" /> {addLabel}
                    </button>
                </div>
            </div>
            <div className="course-editor-list">
                {values.map((value, index) => (
                    <div className="course-editor-list__row" key={`${label}-${index}`}>
                        <TextInputField label={`${label} ${index + 1}`} value={value} onChange={(nextValue) => updateValue(index, nextValue)} />
                        <button type="button" className="course-editor-icon-button" onClick={() => removeValue(index)} aria-label="Supprimer">
                            <DeleteIcon fontSize="small" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
