"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import type { ComparisonCardBlock, ComparisonItem } from "../../../types/course";
import { asRichSingleContent } from "../../utils/contentAdapters";
import { ImageFields } from "../fields/ImageFields";
import { RichTextField } from "../fields/RichTextField";
import { TextInputField } from "../fields/TextInputField";
import { BlockEditorFrame } from "./BlockEditorFrame";

interface ComparisonCardEditorProps {
    block: ComparisonCardBlock;
    onChange: (block: ComparisonCardBlock) => void;
    onDelete: () => void;
}

const createComparisonItem = (): ComparisonItem => ({
    title: "Nouvelle comparaison",
    content: "",
    image: {
        src: "",
        alt: "",
        caption: "",
        role: "comparaison",
    },
});

export const ComparisonCardEditor = ({ block, onChange, onDelete }: ComparisonCardEditorProps) => {
    const updateItem = (index: number, item: ComparisonItem) => {
        onChange({ ...block, items: block.items.map((currentItem, itemIndex) => (itemIndex === index ? item : currentItem)) });
    };

    const removeItem = (index: number) => {
        onChange({ ...block, items: block.items.filter((_, itemIndex) => itemIndex !== index) });
    };

    return (
        <BlockEditorFrame title={block.title} blockType="Comparaison" onDelete={onDelete}>
            <div className="course-editor-grid course-editor-grid--2">
                <TextInputField label="ID du bloc" value={block.id ?? ""} onChange={(id) => onChange({ ...block, id })} />
                <TextInputField label="Titre" value={block.title} onChange={(title) => onChange({ ...block, title })} />
            </div>
            <RichTextField label="Introduction" value={asRichSingleContent(block.intro)} onChange={(intro) => onChange({ ...block, intro })} />
            <div className="course-editor-group">
                <div className="course-editor-group__header">
                    <h4>Éléments comparés</h4>
                    <button type="button" className="course-editor-button course-editor-button--ghost" onClick={() => onChange({ ...block, items: [...block.items, createComparisonItem()] })}>
                        <AddIcon fontSize="small" /> Ajouter
                    </button>
                </div>
                {block.items.map((item, index) => (
                    <section className="course-editor-subcard" key={`${block.id ?? block.title}-comparison-${index}`}>
                        <div className="course-editor-subcard__header">
                            <h5>Élément {index + 1}</h5>
                            <button type="button" className="course-editor-icon-button" onClick={() => removeItem(index)} aria-label="Supprimer l’élément">
                                <DeleteIcon fontSize="small" />
                            </button>
                        </div>
                        <TextInputField label="Titre" value={item.title} onChange={(title) => updateItem(index, { ...item, title })} />
                        <ImageFields image={item.image} onChange={(image) => updateItem(index, { ...item, image })} />
                        <RichTextField label="Contenu" value={asRichSingleContent(item.content)} onChange={(content) => updateItem(index, { ...item, content })} />
                    </section>
                ))}
            </div>
            <RichTextField label="Conclusion" value={asRichSingleContent(block.conclusion)} onChange={(conclusion) => onChange({ ...block, conclusion })} />
        </BlockEditorFrame>
    );
};
