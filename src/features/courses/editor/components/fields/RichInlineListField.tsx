"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import type { RichInlineContent } from "../../../types/course";
import { richContentNodesToInlineContent } from "../../utils/richContentHtml";
import { RichTextField } from "./RichTextField";

interface RichInlineListFieldProps {
    label: string;
    values: RichInlineContent[];
    addLabel?: string;
    onChange: (values: RichInlineContent[]) => void;
}

const inlineContentToRichNodes = (content: RichInlineContent) => {
    return [{ type: "paragraph" as const, text: content }];
};

export const RichInlineListField = ({
    label,
    values,
    addLabel = "Ajouter un élément",
    onChange,
}: RichInlineListFieldProps) => {
    const updateItem = (index: number, value: RichInlineContent) => {
        onChange(values.map((currentValue, currentIndex) => (currentIndex === index ? value : currentValue)));
    };

    const removeItem = (index: number) => {
        onChange(values.filter((_, currentIndex) => currentIndex !== index));
    };

    return (
        <div className="course-editor-rich-list">
            <div className="course-editor-rich-list__header">
                <span>{label}</span>
                <button type="button" className="course-editor-button course-editor-button--ghost" onClick={() => onChange([...values, ""])}>
                    <AddIcon fontSize="small" /> {addLabel}
                </button>
            </div>
            {values.map((value, index) => (
                <div className="course-editor-rich-list__item" key={`${label}-${index}`}>
                    <RichTextField
                        label={`${label} ${index + 1}`}
                        value={inlineContentToRichNodes(value)}
                        allowLists={false}
                        onChange={(nodes) => updateItem(index, richContentNodesToInlineContent(nodes))}
                    />
                    <button type="button" className="course-editor-icon-button course-editor-icon-button--danger" onClick={() => removeItem(index)} aria-label="Supprimer l’élément">
                        <DeleteIcon fontSize="small" />
                    </button>
                </div>
            ))}
        </div>
    );
};
