"use client";

import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import NotesIcon from "@mui/icons-material/Notes";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import type { CourseBlockType } from "../../types/course";
import type { SelectOption } from "./fields/SelectField";

interface AddBlockControlProps {
    options: SelectOption<CourseBlockType>[];
    blockCount: number;
    onAdd: (type: CourseBlockType, position: number) => void;
}

const quickActions: Array<{ type: CourseBlockType; label: string; icon: "text" | "image" | "list" }> = [
    { type: "text-card", label: "Carte texte", icon: "text" },
    { type: "image-card", label: "Image", icon: "image" },
    { type: "list-card", label: "Liste", icon: "list" },
];

export const AddBlockControl = ({ options, blockCount, onAdd }: AddBlockControlProps) => {
    const [selectedType, setSelectedType] = useState<CourseBlockType>("text-card");
    const [position, setPosition] = useState(blockCount);
    const insertionOptions = Array.from({ length: blockCount + 1 }, (_, index) => ({
        value: index,
        label: index === blockCount ? "À la fin" : `Avant le bloc ${index + 1}`,
    }));

    useEffect(() => {
        setPosition((currentPosition) => Math.min(currentPosition, blockCount));
    }, [blockCount]);

    const addSelectedBlock = (type: CourseBlockType = selectedType) => {
        const safePosition = Math.min(Math.max(position, 0), blockCount);
        onAdd(type, safePosition);
        setPosition(safePosition + 1);
    };

    return (
        <div className="course-editor-add-block-control">
            <div className="course-editor-quick-add" aria-label="Ajout rapide de carte">
                {quickActions.map((action) => (
                    <button
                        type="button"
                        className="course-editor-button course-editor-button--ghost"
                        key={action.type}
                        onClick={() => addSelectedBlock(action.type)}
                    >
                        {action.icon === "text" ? <NotesIcon fontSize="small" /> : null}
                        {action.icon === "image" ? <AddPhotoAlternateIcon fontSize="small" /> : null}
                        {action.icon === "list" ? <FormatListBulletedIcon fontSize="small" /> : null}
                        {action.label}
                    </button>
                ))}
            </div>
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
            <label className="course-editor-field">
                <span>Position</span>
                <select value={position} onChange={(event) => setPosition(Number(event.target.value))}>
                    {insertionOptions.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            <button type="button" className="course-editor-button" onClick={() => addSelectedBlock()}>
                <AddIcon fontSize="small" /> Ajouter le bloc
            </button>
        </div>
    );
};
