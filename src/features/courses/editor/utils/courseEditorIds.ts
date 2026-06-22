import type { CourseBlock, CourseSection, RichInlineContent, RichTextSegment } from "../../types/course";
import { richInlineContentToText } from "./contentAdapters";

export const slugifyEditorLabel = (value: string, fallback: string): string => {
    const normalized = value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 72);

    return normalized || fallback;
};

export const createUniqueId = (preferredId: string, existingIds: string[]): string => {
    const existing = new Set(existingIds.filter((id) => id.trim().length > 0));
    let candidate = preferredId;
    let index = 2;

    while (existing.has(candidate)) {
        candidate = `${preferredId}-${index}`;
        index += 1;
    }

    return candidate;
};

export const getSectionIds = (sections: CourseSection[]): string[] => {
    return sections.map((section) => section.id);
};

export const getBlockIds = (sections: CourseSection[]): string[] => {
    return sections.flatMap((section) => section.blocks.map((block) => block.id).filter((id): id is string => Boolean(id)));
};

export const moveItem = <T,>(items: T[], fromIndex: number, toIndex: number): T[] => {
    if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= items.length || toIndex >= items.length) {
        return items;
    }

    const nextItems = [...items];
    const [item] = nextItems.splice(fromIndex, 1);

    if (item === undefined) {
        return items;
    }

    nextItems.splice(toIndex, 0, item);
    return nextItems;
};

export const createSectionFromInlineItem = (
    content: RichInlineContent,
    existingSections: CourseSection[],
): CourseSection => {
    const title = richInlineContentToText(content).trim() || "Nouvelle section";
    const id = createUniqueId(slugifyEditorLabel(title, "nouvelle-section"), getSectionIds(existingSections));

    return {
        id,
        title,
        intro: [{ type: "paragraph", text: "" }],
        blocks: [
            {
                type: "text-card",
                id: createUniqueId(`${id}-carte`, getBlockIds(existingSections)),
                title,
                content: [{ type: "paragraph", text: "" }],
                keywords: [],
            },
        ],
    };
};

const addHrefToSegment = (segment: RichTextSegment, href: string): RichTextSegment => ({
    ...segment,
    href,
});

export const linkInlineContentToSection = (content: RichInlineContent, sectionId: string): RichInlineContent => {
    const href = `#${sectionId}`;

    if (typeof content === "string") {
        return { text: content || "Nouvelle section", href };
    }

    if (Array.isArray(content)) {
        return content.map((segment) => addHrefToSegment(segment, href));
    }

    return addHrefToSegment(content, href);
};

export const createBlockId = (block: CourseBlock, sections: CourseSection[]): string => {
    const title = "title" in block ? block.title : block.type;
    const baseId = slugifyEditorLabel(title, block.type);

    return createUniqueId(baseId, getBlockIds(sections));
};
