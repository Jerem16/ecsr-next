"use client";

import type { ListCardBlock } from "../../../types/course";
import { asRichSingleContent, richInlineContentToText, textToRichInlineContent } from "../../utils/contentAdapters";
import { CheckboxField } from "../fields/CheckboxField";
import { RichTextField } from "../fields/RichTextField";
import { StringListField } from "../fields/StringListField";
import { TextInputField } from "../fields/TextInputField";
import { BlockEditorFrame } from "./BlockEditorFrame";

interface ListCardEditorProps {
    block: ListCardBlock;
    onChange: (block: ListCardBlock) => void;
    onDelete: () => void;
}

export const ListCardEditor = ({ block, onChange, onDelete }: ListCardEditorProps) => {
    const itemTexts = block.items.map(richInlineContentToText);

    return (
        <BlockEditorFrame title={block.title} blockType="Liste" onDelete={onDelete}>
            <div className="course-editor-grid course-editor-grid--2">
                <TextInputField label="ID du bloc" value={block.id ?? ""} onChange={(id) => onChange({ ...block, id })} />
                <TextInputField label="Titre" value={block.title} onChange={(title) => onChange({ ...block, title })} />
            </div>
            <CheckboxField label="Liste ordonnée" checked={Boolean(block.ordered)} onChange={(ordered) => onChange({ ...block, ordered })} />
            <RichTextField label="Introduction" value={asRichSingleContent(block.intro)} onChange={(intro) => onChange({ ...block, intro })} />
            <StringListField
                label="Élément"
                values={itemTexts}
                addLabel="Ajouter un élément"
                onChange={(items) => onChange({ ...block, items: items.map(textToRichInlineContent) })}
            />
            <StringListField label="Mot-clé" values={block.keywords ?? []} onChange={(keywords) => onChange({ ...block, keywords })} />
        </BlockEditorFrame>
    );
};
