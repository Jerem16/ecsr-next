"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import type { CourseImage, CourseSourcePage, SourcePagesBlock } from "../../../types/course";
import { asRichSingleContent } from "../../utils/contentAdapters";
import {
    editorDangerIconButtonClassName,
    editorGhostButtonClassName,
    editorGridTwoClassName,
    editorGroupCardClassName,
    editorGroupHeaderClassName,
    editorSubcardClassName,
    editorTitleClassName,
} from "../editorClassNames";
import { ImageFields } from "../fields/ImageFields";
import { RichTextField } from "../fields/RichTextField";
import { StringListField } from "../fields/StringListField";
import { TextInputField } from "../fields/TextInputField";
import { BlockEditorFrame } from "./BlockEditorFrame";

interface SourcePagesBlockEditorProps {
    block: SourcePagesBlock;
    courseSlug: string;
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

const sourcePageToImage = (page: CourseSourcePage): CourseImage => ({
    src: page.image,
    alt: page.alt,
    role: "source",
});

export const SourcePagesBlockEditor = ({ block, courseSlug, onChange, onDelete }: SourcePagesBlockEditorProps) => {
    const updatePage = (index: number, page: CourseSourcePage) => {
        onChange({ ...block, pages: block.pages.map((currentPage, pageIndex) => (pageIndex === index ? page : currentPage)) });
    };

    const removePage = (index: number) => {
        onChange({ ...block, pages: block.pages.filter((_, pageIndex) => pageIndex !== index) });
    };

    return (
        <BlockEditorFrame title={block.title} blockType="Pages sources" onDelete={onDelete}>
            <div className={editorGridTwoClassName}>
                <TextInputField label="ID du bloc" value={block.id ?? ""} onChange={(id) => onChange({ ...block, id })} />
                <TextInputField label="Titre" value={block.title} onChange={(title) => onChange({ ...block, title })} />
            </div>
            <RichTextField label="Introduction" value={asRichSingleContent(block.intro)} onChange={(intro) => onChange({ ...block, intro })} />
            <div className={editorGroupCardClassName}>
                <div className={`course-editor-group__header ${editorGroupHeaderClassName}`}>
                    <h4 className={editorTitleClassName}>Pages sources</h4>
                    <button type="button" className={editorGhostButtonClassName} onClick={() => onChange({ ...block, pages: [...block.pages, createSourcePage()] })}>
                        <AddIcon fontSize="small" /> Ajouter une page
                    </button>
                </div>
                {block.pages.map((page, index) => (
                    <section className={`course-editor-subcard ${editorSubcardClassName}`} key={`${block.id ?? block.title}-source-${index}`}>
                        <div className="course-editor-subcard__header mb-3 flex items-start justify-between gap-3">
                            <h5 className={editorTitleClassName}>Page {index + 1}</h5>
                            <button type="button" className={editorDangerIconButtonClassName} onClick={() => removePage(index)} aria-label="Supprimer la page source">
                                <DeleteIcon fontSize="small" />
                            </button>
                        </div>
                        <div className={editorGridTwoClassName}>
                            <TextInputField label="Numéro" value={String(page.page)} onChange={(value) => updatePage(index, { ...page, page: Number(value) })} />
                            <TextInputField label="Titre" value={page.title} onChange={(title) => updatePage(index, { ...page, title })} />
                        </div>
                        <ImageFields
                            image={sourcePageToImage(page)}
                            courseSlug={courseSlug}
                            showCaption={false}
                            showRole={false}
                            onChange={(image) => updatePage(index, { ...page, image: image.src, alt: image.alt })}
                        />
                        <StringListField label="Transcription" values={page.transcript} addLabel="Ajouter une ligne" onChange={(transcript) => updatePage(index, { ...page, transcript })} />
                    </section>
                ))}
            </div>
        </BlockEditorFrame>
    );
};
