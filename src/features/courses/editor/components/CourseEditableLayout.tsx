"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Course, CourseBlock, CourseBlockType, CourseSection, RichInlineContent } from "../../types/course";
import { CourseSidebar } from "../../components/CourseSidebar";
import { asRichSingleContent } from "../utils/contentAdapters";
import {
    createBlockId,
    createSectionFromInlineItem,
    createUniqueId,
    getSectionIds,
    linkInlineContentToSection,
    moveItem,
    slugifyEditorLabel,
} from "../utils/courseEditorIds";
import { createDefaultBlock } from "../utils/createDefaultBlock";
import { AddBlockControl } from "./AddBlockControl";
import { EditableBlockRenderer } from "./EditableBlockRenderer";
import {
    editorButtonClassName,
    editorCompactSelectClassName,
    editorDangerIconButtonClassName,
    editorGridTwoClassName,
    editorGroupHeaderClassName,
    editorKickerClassName,
    editorPanelClassName,
    editorPanelHeroClassName,
    editorPanelKickerClassName,
    editorPanelTitleClassName,
    editorSectionClassName,
    editorTitleClassName,
} from "./editorClassNames";
import { EditorFieldShell } from "./fields/EditorFieldShell";
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

const createSection = (sectionNumber: number, sections: CourseSection[]): CourseSection => {
    const title = `Nouvelle section ${sectionNumber}`;
    const id = createUniqueId(slugifyEditorLabel(title, "nouvelle-section"), getSectionIds(sections));

    return {
        id,
        title,
        intro: [{ type: "paragraph", text: "" }],
        blocks: [],
    };
};

const blockTitle = (block: CourseBlock): string => {
    return block.title;
};

const withBlockId = (block: CourseBlock, sections: CourseSection[]): CourseBlock => {
    return { ...block, id: createBlockId(block, sections) };
};

export const CourseEditableLayout = ({ course, onChange }: CourseEditableLayoutProps) => {
    const updateSection = (sectionIndex: number, section: CourseSection) => {
        onChange({ ...course, sections: course.sections.map((currentSection, index) => (index === sectionIndex ? section : currentSection)) });
    };

    const removeSection = (sectionIndex: number) => {
        onChange({ ...course, sections: course.sections.filter((_, index) => index !== sectionIndex) });
    };

    const moveSection = (sectionIndex: number, targetIndex: number) => {
        onChange({ ...course, sections: moveItem(course.sections, sectionIndex, targetIndex) });
    };

    const addSection = () => {
        onChange({ ...course, sections: [...course.sections, createSection(course.sections.length + 1, course.sections)] });
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

    const moveBlock = (sectionIndex: number, blockIndex: number, targetIndex: number) => {
        const section = course.sections[sectionIndex];

        if (!section) {
            return;
        }

        updateSection(sectionIndex, {
            ...section,
            blocks: moveItem(section.blocks, blockIndex, targetIndex),
        });
    };

    const addBlock = (sectionIndex: number, type: CourseBlockType, position: number) => {
        const section = course.sections[sectionIndex];

        if (!section) {
            return;
        }

        const block = withBlockId(createDefaultBlock(type), course.sections);
        const safePosition = Math.min(Math.max(position, 0), section.blocks.length);
        const nextBlocks = [...section.blocks];
        nextBlocks.splice(safePosition, 0, block);

        updateSection(sectionIndex, {
            ...section,
            blocks: nextBlocks,
        });
    };

    const createLinkedSectionFromListItem = (
        sourceSectionIndex: number,
        blockIndex: number,
        item: RichInlineContent,
        itemIndex: number,
    ) => {
        const sourceSection = course.sections[sourceSectionIndex];
        const sourceBlock = sourceSection?.blocks[blockIndex];

        if (!sourceSection || !sourceBlock || sourceBlock.type !== "list-card") {
            return;
        }

        const newSection = createSectionFromInlineItem(item, course.sections);
        const nextSections = [...course.sections];
        const updatedItems = sourceBlock.items.map((currentItem, currentIndex) =>
            currentIndex === itemIndex ? linkInlineContentToSection(currentItem, newSection.id) : currentItem,
        );
        const updatedSourceSection: CourseSection = {
            ...sourceSection,
            blocks: sourceSection.blocks.map((currentBlock, currentBlockIndex) =>
                currentBlockIndex === blockIndex && currentBlock.type === "list-card"
                    ? { ...currentBlock, items: updatedItems }
                    : currentBlock,
            ),
        };

        nextSections[sourceSectionIndex] = updatedSourceSection;
        nextSections.splice(sourceSectionIndex + 1, 0, newSection);
        onChange({ ...course, sections: nextSections });
    };

    return (
        <div className="course-editor-shell">
            <div className="course-layout course-layout--editor items-start">
                <CourseSidebar sections={course.sections} />
                <div className="course-content course-editor grid min-w-0 gap-[22px]" role="region" aria-label={`Édition du cours : ${course.title}`}>
                    <section className={`course-editor-panel course-editor-panel--hero ${editorPanelHeroClassName}`} id="course-top" data-scroll-offset="24px">
                        <div className="course-editor-panel__header mb-[18px]">
                            <p className={editorPanelKickerClassName}>Informations du cours</p>
                            <h2 className={editorPanelTitleClassName}>{course.title}</h2>
                        </div>
                        <div className={editorGridTwoClassName}>
                            <TextInputField label="Slug" value={course.slug} onChange={(slug) => onChange({ ...course, slug })} />
                            <TextInputField label="Catégorie" value={course.category} onChange={(category) => onChange({ ...course, category })} />
                            <TextInputField label="Titre" value={course.title} onChange={(title) => onChange({ ...course, title })} />
                        </div>
                        <RichTextField label="Résumé" value={asRichSingleContent(course.summary)} onChange={(summary) => onChange({ ...course, summary })} />
                    </section>

                    <section className={`course-editor-panel ${editorPanelClassName}`} id="objectifs" data-scroll-offset="24px">
                        <div className="course-editor-panel__header mb-[18px]">
                            <p className={editorPanelKickerClassName}>Objectifs pédagogiques</p>
                            <h2 className={editorPanelTitleClassName}>Objectifs du cours</h2>
                        </div>
                        <StringListField
                            label="Objectif"
                            values={course.objectives}
                            ordered={Boolean(course.objectivesOrdered)}
                            addLabel="Ajouter un objectif"
                            onOrderedChange={(objectivesOrdered) => onChange({ ...course, objectivesOrdered })}
                            onChange={(objectives) => onChange({ ...course, objectives })}
                        />
                    </section>

                    <section className={`course-editor-panel ${editorPanelClassName}`}>
                        <div className={`course-editor-panel__header course-editor-panel__header--row mb-[18px] ${editorGroupHeaderClassName}`}>
                            <div>
                                <p className={editorPanelKickerClassName}>Sections du cours</p>
                                <h2 className={editorPanelTitleClassName}>Structure pédagogique</h2>
                            </div>
                            <button type="button" className={editorButtonClassName} onClick={addSection}>
                                <AddIcon fontSize="small" /> Ajouter une section
                            </button>
                        </div>

                        <div className="course-editor-sections grid gap-[18px]">
                            {course.sections.map((section, sectionIndex) => (
                                <article className={`course-editor-section ${editorSectionClassName}`} id={section.id} data-scroll-offset="24px" key={section.id}>
                                    <div className={`course-editor-section__header mb-4 ${editorGroupHeaderClassName}`}>
                                        <div>
                                            <p className={editorKickerClassName}>Section {sectionIndex + 1}</p>
                                            <h3 className={editorTitleClassName}>{section.title}</h3>
                                        </div>
                                        <div className="course-editor-order-actions flex flex-wrap items-end justify-end gap-2.5 max-[820px]:flex-col max-[820px]:items-stretch">
                                            <EditorFieldShell label="Position" compact className="course-editor-field--compact min-w-[min(260px,100%)]">
                                                <select className={editorCompactSelectClassName} value={sectionIndex} onChange={(event) => moveSection(sectionIndex, Number(event.target.value))}>
                                                    {course.sections.map((optionSection, optionIndex) => (
                                                        <option value={optionIndex} key={`${optionSection.id}-position`}>
                                                            {optionIndex + 1} — {optionSection.title}
                                                        </option>
                                                    ))}
                                                </select>
                                            </EditorFieldShell>
                                            <button type="button" className={editorDangerIconButtonClassName} onClick={() => removeSection(sectionIndex)} aria-label="Supprimer la section">
                                                <DeleteIcon fontSize="small" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className={editorGridTwoClassName}>
                                        <TextInputField label="ID" value={section.id} onChange={(id) => updateSection(sectionIndex, { ...section, id })} />
                                        <TextInputField label="Titre" value={section.title} onChange={(title) => updateSection(sectionIndex, { ...section, title })} />
                                    </div>
                                    <RichTextField label="Introduction de section" value={asRichSingleContent(section.intro)} onChange={(intro) => updateSection(sectionIndex, { ...section, intro })} />
                                    <div className="course-editor-section__blocks grid gap-[18px]">
                                        {section.blocks.map((block, blockIndex) => (
                                            <div className="course-editor-block-shell grid gap-2.5 scroll-mt-[var(--course-anchor-offset)]" id={block.id} data-scroll-offset="24px" key={block.id ?? `${section.id}-${blockIndex}`}>
                                                <div className="course-editor-block-position flex flex-wrap items-end justify-between gap-2.5 rounded-2xl border border-dashed border-[var(--course-border)] bg-[#fbfdff] px-3 py-2.5 max-[820px]:flex-col max-[820px]:items-stretch">
                                                    <span className="self-center text-[0.9rem] font-black text-[var(--course-primary)]">{blockTitle(block)}</span>
                                                    <EditorFieldShell label="Position du bloc" compact className="course-editor-field--compact min-w-[min(260px,100%)]">
                                                        <select className={editorCompactSelectClassName} value={blockIndex} onChange={(event) => moveBlock(sectionIndex, blockIndex, Number(event.target.value))}>
                                                            {section.blocks.map((optionBlock, optionIndex) => (
                                                                <option value={optionIndex} key={`${optionBlock.id ?? optionBlock.type}-${optionIndex}-position`}>
                                                                    {optionIndex + 1} — {blockTitle(optionBlock)}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </EditorFieldShell>
                                                </div>
                                                <EditableBlockRenderer
                                                    block={block}
                                                    courseSlug={course.slug}
                                                    onChange={(nextBlock) => updateBlock(sectionIndex, blockIndex, nextBlock)}
                                                    onDelete={() => removeBlock(sectionIndex, blockIndex)}
                                                    onCreateSectionFromItem={(item, itemIndex) => createLinkedSectionFromListItem(sectionIndex, blockIndex, item, itemIndex)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="course-editor-add-block mt-[18px] max-w-none">
                                        <AddBlockControl blockCount={section.blocks.length} options={blockTypeOptions} onAdd={(type, position) => addBlock(sectionIndex, type, position)} />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
