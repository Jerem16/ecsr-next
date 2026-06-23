"use client";

import type { TextCardBlock } from "../../../types/course";
import { asRichBlockContent } from "../../utils/contentAdapters";
import { editorGridTwoClassName } from "../editorClassNames";
import { RichTextField } from "../fields/RichTextField";
import { StringListField } from "../fields/StringListField";
import { TextInputField } from "../fields/TextInputField";
import { BlockEditorFrame } from "./BlockEditorFrame";

interface TextCardEditorProps {
    block: TextCardBlock;
    onChange: (block: TextCardBlock) => void;
    onDelete: () => void;
}

export const TextCardEditor = ({ block, onChange, onDelete }: TextCardEditorProps) => {
    return (
        <BlockEditorFrame title={block.title} blockType="Carte texte" onDelete={onDelete}>
            <div className={editorGridTwoClassName}>
                <TextInputField label="ID du bloc" value={block.id ?? ""} onChange={(id) => onChange({ ...block, id })} />
                <TextInputField label="Titre" value={block.title} onChange={(title) => onChange({ ...block, title })} />
            </div>
            <RichTextField label="Contenu" value={asRichBlockContent(block.content)} onChange={(content) => onChange({ ...block, content })} />
            <StringListField label="Mot-clé" values={block.keywords ?? []} onChange={(keywords) => onChange({ ...block, keywords })} />
        </BlockEditorFrame>
    );
};
