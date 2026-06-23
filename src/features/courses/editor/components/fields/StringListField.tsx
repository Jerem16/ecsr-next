"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { moveItem } from "../../utils/courseEditorIds";
import {
    editorCompactSelectClassName,
    editorDangerIconButtonClassName,
    editorGhostButtonClassName,
    editorGroupCardClassName,
    editorGroupHeaderClassName,
    editorInlineActionsClassName,
    editorListRowClassName,
} from "../editorClassNames";
import { EditorFieldShell } from "./EditorFieldShell";
import { EditorSegmentedControl } from "./EditorSegmentedControl";
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

    const moveValue = (index: number, targetIndex: number) => {
        onChange(moveItem(values, index, targetIndex));
    };

    return (
        <div className={editorGroupCardClassName}>
            <div className={`course-editor-group__header ${editorGroupHeaderClassName}`}>
                <div>
                    <h4 className="m-0 text-[var(--course-primary)]">{label}</h4>
                    {onOrderedChange ? (
                        <p className="course-editor-group__hint mt-1.5 mb-0 text-[0.88rem] leading-[1.4] text-[var(--course-muted)]">Choisis le type de liste affiché dans le cours.</p>
                    ) : null}
                </div>
                <div className={editorInlineActionsClassName}>
                    {onOrderedChange ? (
                        <EditorSegmentedControl
                            label="Mode"
                            value={ordered ? "ordered" : "unordered"}
                            options={[
                                { value: "unordered", label: "Puces", icon: <FormatListBulletedIcon fontSize="small" /> },
                                { value: "ordered", label: "Numérotée", icon: <FormatListNumberedIcon fontSize="small" /> },
                            ]}
                            onChange={(value) => onOrderedChange(value === "ordered")}
                        />
                    ) : null}
                    <button type="button" className={editorGhostButtonClassName} onClick={() => onChange([...values, ""])}>
                        <AddIcon fontSize="small" /> {addLabel}
                    </button>
                </div>
            </div>
            <div className="course-editor-list grid gap-3">
                {values.map((value, index) => (
                    <div className={`course-editor-list__row grid grid-cols-[minmax(0,1fr)_minmax(130px,180px)_auto] items-end gap-3 max-[820px]:grid-cols-1 ${editorListRowClassName}`} key={`${label}-${index}`}>
                        <TextInputField label={`${label} ${index + 1}`} value={value} onChange={(nextValue) => updateValue(index, nextValue)} />
                        <EditorFieldShell label="Position" compact className="course-editor-field--compact min-w-[min(260px,100%)]">
                            <select className={editorCompactSelectClassName} value={index} onChange={(event) => moveValue(index, Number(event.target.value))}>
                                {values.map((_, optionIndex) => (
                                    <option value={optionIndex} key={`${label}-${index}-position-${optionIndex}`}>
                                        {optionIndex + 1}
                                    </option>
                                ))}
                            </select>
                        </EditorFieldShell>
                        <button type="button" className={editorDangerIconButtonClassName} onClick={() => removeValue(index)} aria-label="Supprimer">
                            <DeleteIcon fontSize="small" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
