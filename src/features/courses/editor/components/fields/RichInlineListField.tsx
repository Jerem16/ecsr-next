"use client";

import AddIcon from "@mui/icons-material/Add";
import AddLinkIcon from "@mui/icons-material/AddLink";
import DeleteIcon from "@mui/icons-material/Delete";
import type { RichInlineContent } from "../../../types/course";
import { moveItem } from "../../utils/courseEditorIds";
import { richContentNodesToInlineContent } from "../../utils/richContentHtml";
import { RichTextField } from "./RichTextField";

interface RichInlineListFieldProps {
    label: string;
    values: RichInlineContent[];
    addLabel?: string;
    itemActionLabel?: string;
    onChange: (values: RichInlineContent[]) => void;
    onItemAction?: (item: RichInlineContent, itemIndex: number) => void;
}

const inlineContentToRichNodes = (content: RichInlineContent) => {
    return [{ type: "paragraph" as const, text: content }];
};

export const RichInlineListField = ({
    label,
    values,
    addLabel = "Ajouter un élément",
    itemActionLabel = "Créer une section liée",
    onChange,
    onItemAction,
}: RichInlineListFieldProps) => {
    const updateItem = (index: number, value: RichInlineContent) => {
        onChange(values.map((currentValue, currentIndex) => (currentIndex === index ? value : currentValue)));
    };

    const removeItem = (index: number) => {
        onChange(values.filter((_, currentIndex) => currentIndex !== index));
    };

    const moveRichItem = (index: number, targetIndex: number) => {
        onChange(moveItem(values, index, targetIndex));
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
                    <div className="course-editor-rich-list__side">
                        <label className="course-editor-field course-editor-field--compact">
                            <span>Position</span>
                            <select value={index} onChange={(event) => moveRichItem(index, Number(event.target.value))}>
                                {values.map((_, optionIndex) => (
                                    <option value={optionIndex} key={`${label}-${index}-position-${optionIndex}`}>
                                        {optionIndex + 1}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <div className="course-editor-rich-list__item-actions">
                            {onItemAction ? (
                                <button
                                    type="button"
                                    className="course-editor-button course-editor-button--ghost course-editor-rich-list__link-button"
                                    onClick={() => onItemAction(value, index)}
                                    aria-label={itemActionLabel}
                                    title={itemActionLabel}
                                >
                                    <AddLinkIcon fontSize="small" /> Créer section
                                </button>
                            ) : null}
                            <button type="button" className="course-editor-icon-button course-editor-icon-button--danger" onClick={() => removeItem(index)} aria-label="Supprimer l’élément">
                                <DeleteIcon fontSize="small" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
