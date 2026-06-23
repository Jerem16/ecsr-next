"use client";

import type { ListCardBlock, RichInlineContent } from "../../../types/course";
import { asRichSingleContent } from "../../utils/contentAdapters";
import { editorGridTwoClassName } from "../editorClassNames";
import { CheckboxField } from "../fields/CheckboxField";
import { RichInlineListField } from "../fields/RichInlineListField";
import { RichTextField } from "../fields/RichTextField";
import { StringListField } from "../fields/StringListField";
import { TextInputField } from "../fields/TextInputField";
import { BlockEditorFrame } from "./BlockEditorFrame";

interface ListCardEditorProps {
    block: ListCardBlock;
    onChange: (block: ListCardBlock) => void;
    onDelete: () => void;
    onCreateSectionFromItem?: (item: RichInlineContent, itemIndex: number) => void;
}

export const ListCardEditor = ({ block, onChange, onDelete, onCreateSectionFromItem }: ListCardEditorProps) => {
    return (
        <BlockEditorFrame title={block.title} blockType="Liste" onDelete={onDelete}>
            <div className={editorGridTwoClassName}>
                <TextInputField label="ID du bloc" value={block.id ?? ""} onChange={(id) => onChange({ ...block, id })} />
                <TextInputField label="Titre" value={block.title} onChange={(title) => onChange({ ...block, title })} />
            </div>
            <CheckboxField label="Liste ordonnée" checked={Boolean(block.ordered)} onChange={(ordered) => onChange({ ...block, ordered })} />
            <RichTextField label="Introduction" value={asRichSingleContent(block.intro)} onChange={(intro) => onChange({ ...block, intro })} />
            <RichInlineListField
                label="Élément"
                values={block.items}
                addLabel="Ajouter un élément"
                itemActionLabel="Créer une section liée depuis cet élément"
                onChange={(items) => onChange({ ...block, items })}
                onItemAction={onCreateSectionFromItem}
            />
            <StringListField label="Mot-clé" values={block.keywords ?? []} onChange={(keywords) => onChange({ ...block, keywords })} />
        </BlockEditorFrame>
    );
};
