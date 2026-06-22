"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Course, CourseBlock, CourseBlockType, CourseSection } from "../../types/course";
import { asRichSingleContent } from "../utils/contentAdapters";
import { createDefaultBlock } from "../utils/createDefaultBlock";
import { AddBlockControl } from "./AddBlockControl";
import { EditableBlockRenderer } from "./EditableBlockRenderer";
import { RichTextField } from "./fields/RichTextField";
import type { SelectOption } from "./fields/SelectField";
import { StringListField } from "./fields/StringListField";
import { TextInputField } from "./fields/TextInputField";

interface CourseEditableLayoutProps {
    course: Course;
    onChange: (course: Course) => void;
}

const blockTypeOptions: SelectOption<CourseBlockType>[] = [
    { value: "text-card", label: "Carte texte" },
    { value: "list-card", label: "Liste" },
    { value: "image-card", label: "Image" },
    { value: "comparison-card", label: "Comparaison" },
    { value: "sequence-card", label: "Séquence" },
    { value: "table", label: "Tableau" },
    { value: "callout", label: "Encadré" },
    { value: "source-pages", label: "Pages sources" },
];

const createSection = (sectionNumber: number): CourseSection => ({
    id: `nouvelle-section-${sectionNumber}`,
    title: `Nouvelle section ${sectionNumber}`,
    intro: [{ type: "paragraph", text: "" }],
    blocks: [],
});

export const CourseEditableLayout = ({ course, onChange }: CourseEditableLayoutProps) => {
    const updateSection = (sectionIndex: number, section: CourseSection) => {
        onChange({ ...course, sections: course.sections.map((currentSection, index) => (index === sectionIndex ? section : currentSection)) });
    };

    const removeSection = (sectionIndex: number) => {
        onChange({ ...course, sections: course.sections.filter((_, index) => index !== sectionIndex) });
    };

    const updateBlock = (sectionIndex: number, blockIndex: number, block: CourseBlock) => {
        const section = course.sections[sectionIndex];

        if (!section) {
            return;
        }

        updateSection(sectionIndex, {
            ...section,
            blocks: section.blocks.map((currentBlock, index) => (index === blockIndex ? block : currentBlock)),
        });
    };

    const removeBlock = (sectionIndex: number, blockIndex: number) => {
        const section = course.sections[sectionIndex];

        if (!section) {
            return;
        }

        updateSection(sectionIndex, {
            ...section,
            blocks: section.blocks.filter((_, index) => index !== blockIndex),
        });
    };

    const addBlock = (sectionIndex: number, type: CourseBlockType) => {
        const section = course.sections[sectionIndex];

        if (!section) {
            return;
        }

        updateSection(sectionIndex, {
            ...section,
            blocks: [...section.blocks, createDefaultBlock(type)],
        });
    };

    return (
        <div className="course-editor">
            <section className="course-editor-panel course-editor-panel--hero">
                <div className="course-editor-panel__header">
                    <p>Informations du cours</p>
                    <h2>{course.title}</h2>
                </div>
                <div className="course-editor-grid course-editor-grid--2">
                    <TextInputField label="Slug" value={course.slug} onChange={(slug) => onChange({ ...course, slug })} />
                    <TextInputField label="Catégorie" value={course.category} onChange={(category) => onChange({ ...course, category })} />
                    <TextInputField label="Titre" value={course.title} onChange={(title) => onChange({ ...course, title })} />
                </div>
                <RichTextField label="Résumé" value={asRichSingleContent(course.summary)} onChange={(summary) => onChange({ ...course, summary })} />
                <StringListField
                    label="Objectif"
                    values={course.objectives}
                    ordered={Boolean(course.objectivesOrdered)}
                    addLabel="Ajouter un objectif"
                    onOrderedChange={(objectivesOrdered) => onChange({ ...course, objectivesOrdered })}
                    onChange={(objectives) => onChange({ ...course, objectives })}
                />
            </section>

            <section className="course-editor-panel">
                <div className="course-editor-panel__header course-editor-panel__header--row">
                    <div>
                        <p>Sections du cours</p>
                        <h2>Structure pédagogique</h2>
                    </div>
                    <button type="button" className="course-editor-button" onClick={() => onChange({ ...course, sections: [...course.sections, createSection(course.sections.length + 1)] })}>
                        <AddIcon fontSize="small" /> Ajouter une section
                    </button>
                </div>

                <div className="course-editor-sections">
                    {course.sections.map((section, sectionIndex) => (
                        <article className="course-editor-section" key={section.id}>
                            <div className="course-editor-section__header">
                                <div>
                                    <p>Section {sectionIndex + 1}</p>
                                    <h3>{section.title}</h3>
                                </div>
                                <button type="button" className="course-editor-icon-button course-editor-icon-button--danger" onClick={() => removeSection(sectionIndex)} aria-label="Supprimer la section">
                                    <DeleteIcon fontSize="small" />
                                </button>
                            </div>
                            <div className="course-editor-grid course-editor-grid--2">
                                <TextInputField label="ID" value={section.id} onChange={(id) => updateSection(sectionIndex, { ...section, id })} />
                                <TextInputField label="Titre" value={section.title} onChange={(title) => updateSection(sectionIndex, { ...section, title })} />
                            </div>
                            <RichTextField label="Introduction de section" value={asRichSingleContent(section.intro)} onChange={(intro) => updateSection(sectionIndex, { ...section, intro })} />
                            <div className="course-editor-section__blocks">
                                {section.blocks.map((block, blockIndex) => (
                                    <EditableBlockRenderer
                                        block={block}
                                        courseSlug={course.slug}
                                        key={block.id ?? `${section.id}-${blockIndex}`}
                                        onChange={(nextBlock) => updateBlock(sectionIndex, blockIndex, nextBlock)}
                                        onDelete={() => removeBlock(sectionIndex, blockIndex)}
                                    />
                                ))}
                            </div>
                            <div className="course-editor-add-block">
                                <AddBlockControl options={blockTypeOptions} onAdd={(type) => addBlock(sectionIndex, type)} />
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};
