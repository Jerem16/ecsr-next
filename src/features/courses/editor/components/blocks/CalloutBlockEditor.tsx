"use client";

import type { CalloutBlock } from "../../../types/course";
import { asRichSingleContent } from "../../utils/contentAdapters";
import { RichTextField } from "../fields/RichTextField";
import { SelectField, type SelectOption } from "../fields/SelectField";
import { TextInputField } from "../fields/TextInputField";
import { BlockEditorFrame } from "./BlockEditorFrame";

interface CalloutBlockEditorProps {
    block: CalloutBlock;
    onChange: (block: CalloutBlock) => void;
    onDelete: () => void;
}

const toneOptions: SelectOption<NonNullable<CalloutBlock["tone"]>>[] = [
    { value: "info", label: "Information" },
    { value: "warning", label: "Alerte" },
    { value: "success", label: "Réussite" },
];

export const CalloutBlockEditor = ({ block, onChange, onDelete }: CalloutBlockEditorProps) => {
    return (
        <BlockEditorFrame title={block.title} blockType="Encadré" onDelete={onDelete}>
            <div className="course-editor-grid course-editor-grid--2">
                <TextInputField label="ID du bloc" value={block.id ?? ""} onChange={(id) => onChange({ ...block, id })} />
                <TextInputField label="Titre" value={block.title} onChange={(title) => onChange({ ...block, title })} />
                <SelectField label="Ton" value={block.tone ?? "info"} options={toneOptions} onChange={(tone) => onChange({ ...block, tone })} />
            </div>
            <RichTextField label="Contenu" value={asRichSingleContent(block.content)} onChange={(content) => onChange({ ...block, content })} />
        </BlockEditorFrame>
    );
};
