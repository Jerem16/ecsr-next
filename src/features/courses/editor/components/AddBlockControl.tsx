"use client";

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import type { CourseBlockType } from "../../types/course";
import type { SelectOption } from "./fields/SelectField";

interface AddBlockControlProps {
    options: SelectOption<CourseBlockType>[];
    onAdd: (type: CourseBlockType) => void;
}

export const AddBlockControl = ({ options, onAdd }: AddBlockControlProps) => {
    const [selectedType, setSelectedType] = useState<CourseBlockType>("text-card");

    return (
        <div className="course-editor-add-block-control">
            <label className="course-editor-field">
                <span>Type de bloc à ajouter</span>
                <select value={selectedType} onChange={(event) => setSelectedType(event.target.value as CourseBlockType)}>
                    {options.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            <button type="button" className="course-editor-button" onClick={() => onAdd(selectedType)}>
                <AddIcon fontSize="small" /> Ajouter le bloc
            </button>
        </div>
    );
};
