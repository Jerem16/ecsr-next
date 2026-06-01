"use client";

import type { ImageCardBlock } from "../../../types/course";
import { asRichBlockContent } from "../../utils/contentAdapters";
import { ImageFields } from "../fields/ImageFields";
import { RichTextField } from "../fields/RichTextField";
import { SelectField, type SelectOption } from "../fields/SelectField";
import { TextInputField } from "../fields/TextInputField";
import { BlockEditorFrame } from "./BlockEditorFrame";

interface ImageCardEditorProps {
    block: ImageCardBlock;
    onChange: (block: ImageCardBlock) => void;
    onDelete: () => void;
}

const imagePositionOptions: SelectOption<NonNullable<ImageCardBlock["imagePosition"]>>[] = [
    { value: "left", label: "Image à gauche" },
    { value: "right", label: "Image à droite" },
];

export const ImageCardEditor = ({ block, onChange, onDelete }: ImageCardEditorProps) => {
    return (
        <BlockEditorFrame title={block.title} blockType="Image" onDelete={onDelete}>
            <div className="course-editor-grid course-editor-grid--2">
                <TextInputField label="ID du bloc" value={block.id ?? ""} onChange={(id) => onChange({ ...block, id })} />
                <TextInputField label="Titre" value={block.title} onChange={(title) => onChange({ ...block, title })} />
                <SelectField
                    label="Position"
                    value={block.imagePosition ?? "right"}
                    options={imagePositionOptions}
                    onChange={(imagePosition) => onChange({ ...block, imagePosition })}
                />
            </div>
            <ImageFields image={block.image} onChange={(image) => onChange({ ...block, image })} />
            <RichTextField label="Contenu" value={asRichBlockContent(block.content)} onChange={(content) => onChange({ ...block, content })} />
        </BlockEditorFrame>
    );
};
