"use client";

import AddIcon from "@mui/icons-material/Add";
import AddLinkIcon from "@mui/icons-material/AddLink";
import DeleteIcon from "@mui/icons-material/Delete";
import type { RichInlineContent } from "../../../types/course";
import { moveItem } from "../../utils/courseEditorIds";
import { richContentNodesToInlineContent } from "../../utils/richContentHtml";
import {
    editorCompactSelectClassName,
    editorDangerIconButtonClassName,
    editorGhostButtonClassName,
    editorListRowClassName,
} from "../editorClassNames";
import { EditorFieldShell } from "./EditorFieldShell";
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
        <div className="course-editor-rich-list mt-4 grid gap-3.5">
            <div className="course-editor-rich-list__header flex flex-wrap items-center justify-between gap-3">
                <span className="text-[0.9rem] font-black text-[var(--course-primary)]">{label}</span>
                <button type="button" className={editorGhostButtonClassName} onClick={() => onChange([...values, ""])}>
                    <AddIcon fontSize="small" /> {addLabel}
                </button>
            </div>
            {values.map((value, index) => (
                <div className={`course-editor-rich-list__item grid grid-cols-[minmax(0,1fr)_minmax(150px,auto)] items-start gap-3.5 max-[820px]:grid-cols-1 ${editorListRowClassName}`} key={`${label}-${index}`}>
                    <RichTextField
                        label={`${label} ${index + 1}`}
                        value={inlineContentToRichNodes(value)}
                        allowLists={false}
                        onChange={(nodes) => updateItem(index, richContentNodesToInlineContent(nodes))}
                    />
                    <div className="course-editor-rich-list__side grid content-start gap-2">
                        <EditorFieldShell label="Position" compact className="course-editor-field--compact min-w-[min(260px,100%)]">
                            <select className={editorCompactSelectClassName} value={index} onChange={(event) => moveRichItem(index, Number(event.target.value))}>
                                {values.map((_, optionIndex) => (
                                    <option value={optionIndex} key={`${label}-${index}-position-${optionIndex}`}>
                                        {optionIndex + 1}
                                    </option>
                                ))}
                            </select>
                        </EditorFieldShell>
                        <div className="course-editor-rich-list__item-actions flex items-start gap-2 max-[820px]:justify-start">
                            {onItemAction ? (
                                <button
                                    type="button"
                                    className={`${editorGhostButtonClassName} course-editor-rich-list__link-button whitespace-nowrap`}
                                    onClick={() => onItemAction(value, index)}
                                    aria-label={itemActionLabel}
                                    title={itemActionLabel}
                                >
                                    <AddLinkIcon fontSize="small" /> Créer section
                                </button>
                            ) : null}
                            <button type="button" className={editorDangerIconButtonClassName} onClick={() => removeItem(index)} aria-label="Supprimer l’élément">
                                <DeleteIcon fontSize="small" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
