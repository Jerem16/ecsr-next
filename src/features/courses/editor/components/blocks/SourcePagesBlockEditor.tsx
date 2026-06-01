"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import type { CourseSourcePage, SourcePagesBlock } from "../../../types/course";
import { asRichSingleContent } from "../../utils/contentAdapters";
import { RichTextField } from "../fields/RichTextField";
import { StringListField } from "../fields/StringListField";
import { TextInputField } from "../fields/TextInputField";
import { BlockEditorFrame } from "./BlockEditorFrame";

interface SourcePagesBlockEditorProps {
    block: SourcePagesBlock;
    onChange: (block: SourcePagesBlock) => void;
    onDelete: () => void;
}

const createSourcePage = (): CourseSourcePage => ({
    page: 1,
    title: "Nouvelle page source",
    image: "",
    alt: "",
    transcript: [],
});

export const SourcePagesBlockEditor = ({ block, onChange, onDelete }: SourcePagesBlockEditorProps) => {
    const updatePage = (index: number, page: CourseSourcePage) => {
        onChange({ ...block, pages: block.pages.map((currentPage, pageIndex) => (pageIndex === index ? page : currentPage)) });
    };

    const removePage = (index: number) => {
        onChange({ ...block, pages: block.pages.filter((_, pageIndex) => pageIndex !== index) });
    };

    return (
        <BlockEditorFrame title={block.title} blockType="Pages sources" onDelete={onDelete}>
            <div className="course-editor-grid course-editor-grid--2">
                <TextInputField label="ID du bloc" value={block.id ?? ""} onChange={(id) => onChange({ ...block, id })} />
                <TextInputField label="Titre" value={block.title} onChange={(title) => onChange({ ...block, title })} />
            </div>
            <RichTextField label="Introduction" value={asRichSingleContent(block.intro)} onChange={(intro) => onChange({ ...block, intro })} />
            <div className="course-editor-group">
                <div className="course-editor-group__header">
                    <h4>Pages sources</h4>
                    <button type="button" className="course-editor-button course-editor-button--ghost" onClick={() => onChange({ ...block, pages: [...block.pages, createSourcePage()] })}>
                        <AddIcon fontSize="small" /> Ajouter une page
                    </button>
                </div>
                {block.pages.map((page, index) => (
                    <section className="course-editor-subcard" key={`${block.id ?? block.title}-source-${index}`}>
                        <div className="course-editor-subcard__header">
                            <h5>Page {index + 1}</h5>
                            <button type="button" className="course-editor-icon-button" onClick={() => removePage(index)} aria-label="Supprimer la page source">
                                <DeleteIcon fontSize="small" />
                            </button>
                        </div>
                        <div className="course-editor-grid course-editor-grid--2">
                            <TextInputField label="Numéro" value={String(page.page)} onChange={(value) => updatePage(index, { ...page, page: Number(value) })} />
                            <TextInputField label="Titre" value={page.title} onChange={(title) => updatePage(index, { ...page, title })} />
                            <TextInputField label="Image" value={page.image} onChange={(image) => updatePage(index, { ...page, image })} />
                            <TextInputField label="Texte alternatif" value={page.alt} onChange={(alt) => updatePage(index, { ...page, alt })} />
                        </div>
                        <StringListField label="Transcription" values={page.transcript} addLabel="Ajouter une ligne" onChange={(transcript) => updatePage(index, { ...page, transcript })} />
                    </section>
                ))}
            </div>
        </BlockEditorFrame>
    );
};
