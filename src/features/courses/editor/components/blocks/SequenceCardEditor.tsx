"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import type {
    SequenceAlertPart,
    SequenceCardBlock,
    SequenceCardPart,
    SequenceFigurePart,
    SequenceTextPart,
} from "../../../types/course";
import {
    editorDangerIconButtonClassName,
    editorGhostButtonClassName,
    editorGridTwoClassName,
    editorGroupCardClassName,
    editorGroupHeaderClassName,
    editorInlineActionsClassName,
    editorSubcardClassName,
    editorTitleClassName,
} from "../editorClassNames";
import { ImageFields } from "../fields/ImageFields";
import { RichTextField } from "../fields/RichTextField";
import { SelectField, type SelectOption } from "../fields/SelectField";
import { TextInputField } from "../fields/TextInputField";
import { BlockEditorFrame } from "./BlockEditorFrame";

interface SequenceCardEditorProps {
    block: SequenceCardBlock;
    courseSlug: string;
    onChange: (block: SequenceCardBlock) => void;
    onDelete: () => void;
}

const partTypeOptions: SelectOption<SequenceCardPart["type"]>[] = [
    { value: "figure", label: "Figure" },
    { value: "alert", label: "Alerte" },
    { value: "text", label: "Texte" },
];

const alertToneOptions: SelectOption<NonNullable<SequenceAlertPart["tone"]>>[] = [
    { value: "info", label: "Information" },
    { value: "warning", label: "Alerte" },
    { value: "success", label: "Réussite" },
];

const createFigurePart = (): SequenceFigurePart => ({
    type: "figure",
    title: "Nouvelle figure",
    image: {
        src: "",
        alt: "",
        caption: "",
        role: "illustration",
    },
    content: [{ type: "paragraph", text: "" }],
});

const createAlertPart = (): SequenceAlertPart => ({
    type: "alert",
    tone: "info",
    content: [{ type: "paragraph", text: "" }],
});

const createTextPart = (): SequenceTextPart => ({
    type: "text",
    title: "Nouveau texte",
    content: [{ type: "paragraph", text: "" }],
});

const createPart = (type: SequenceCardPart["type"]): SequenceCardPart => {
    if (type === "alert") {
        return createAlertPart();
    }

    if (type === "text") {
        return createTextPart();
    }

    return createFigurePart();
};

export const SequenceCardEditor = ({ block, courseSlug, onChange, onDelete }: SequenceCardEditorProps) => {
    const updatePart = (index: number, part: SequenceCardPart) => {
        onChange({ ...block, parts: block.parts.map((currentPart, partIndex) => (partIndex === index ? part : currentPart)) });
    };

    const removePart = (index: number) => {
        onChange({ ...block, parts: block.parts.filter((_, partIndex) => partIndex !== index) });
    };

    return (
        <BlockEditorFrame title={block.title} blockType="Séquence" onDelete={onDelete}>
            <div className={editorGridTwoClassName}>
                <TextInputField label="ID du bloc" value={block.id ?? ""} onChange={(id) => onChange({ ...block, id })} />
                <TextInputField label="Titre" value={block.title} onChange={(title) => onChange({ ...block, title })} />
                <TextInputField label="Introduction" value={block.intro ?? ""} onChange={(intro) => onChange({ ...block, intro })} />
            </div>
            <div className={editorGroupCardClassName}>
                <div className={`course-editor-group__header ${editorGroupHeaderClassName}`}>
                    <h4 className={editorTitleClassName}>Parties de la séquence</h4>
                    <div className={editorInlineActionsClassName}>
                        {partTypeOptions.map((option) => (
                            <button type="button" className={editorGhostButtonClassName} onClick={() => onChange({ ...block, parts: [...block.parts, createPart(option.value)] })} key={option.value}>
                                <AddIcon fontSize="small" /> {option.label}
                            </button>
                        ))}
                    </div>
                </div>
                {block.parts.map((part, index) => (
                    <section className={`course-editor-subcard ${editorSubcardClassName}`} key={`${block.id ?? block.title}-part-${index}`}>
                        <div className="course-editor-subcard__header mb-3 flex items-start justify-between gap-3">
                            <h5 className={editorTitleClassName}>Partie {index + 1}</h5>
                            <button type="button" className={editorDangerIconButtonClassName} onClick={() => removePart(index)} aria-label="Supprimer la partie">
                                <DeleteIcon fontSize="small" />
                            </button>
                        </div>
                        <SelectField
                            label="Type"
                            value={part.type}
                            options={partTypeOptions}
                            onChange={(type) => updatePart(index, createPart(type))}
                        />
                        {part.type === "figure" ? (
                            <>
                                <TextInputField label="Titre" value={part.title} onChange={(title) => updatePart(index, { ...part, title })} />
                                <ImageFields image={part.image} courseSlug={courseSlug} onChange={(image) => updatePart(index, { ...part, image })} />
                                <RichTextField label="Contenu" value={part.content} onChange={(content) => updatePart(index, { ...part, content })} />
                            </>
                        ) : null}
                        {part.type === "alert" ? (
                            <>
                                <SelectField label="Ton" value={part.tone ?? "info"} options={alertToneOptions} onChange={(tone) => updatePart(index, { ...part, tone })} />
                                <RichTextField label="Contenu" value={part.content} onChange={(content) => updatePart(index, { ...part, content })} />
                            </>
                        ) : null}
                        {part.type === "text" ? (
                            <>
                                <TextInputField label="Titre" value={part.title ?? ""} onChange={(title) => updatePart(index, { ...part, title })} />
                                <RichTextField label="Contenu" value={part.content} onChange={(content) => updatePart(index, { ...part, content })} />
                            </>
                        ) : null}
                    </section>
                ))}
            </div>
        </BlockEditorFrame>
    );
};
