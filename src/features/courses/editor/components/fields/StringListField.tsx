"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextInputField } from "./TextInputField";

interface StringListFieldProps {
    label: string;
    values: string[];
    onChange: (values: string[]) => void;
    addLabel?: string;
}

export const StringListField = ({ label, values, onChange, addLabel = "Ajouter" }: StringListFieldProps) => {
    const updateValue = (index: number, value: string) => {
        onChange(values.map((item, itemIndex) => (itemIndex === index ? value : item)));
    };

    const removeValue = (index: number) => {
        onChange(values.filter((_, itemIndex) => itemIndex !== index));
    };

    return (
        <div className="course-editor-group">
            <div className="course-editor-group__header">
                <h4>{label}</h4>
                <button type="button" className="course-editor-button course-editor-button--ghost" onClick={() => onChange([...values, ""])}>
                    <AddIcon fontSize="small" /> {addLabel}
                </button>
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
