import type { Course, CourseBlockType } from "../../types/course";

const validBlockTypes: CourseBlockType[] = [
    "text-card",
    "list-card",
    "image-card",
    "comparison-card",
    "sequence-card",
    "table",
    "callout",
    "source-pages",
];

const isRecord = (value: unknown): value is Record<string, unknown> => {
    return typeof value === "object" && value !== null && !Array.isArray(value);
};

const requireString = (record: Record<string, unknown>, key: string): string => {
    const value = record[key];

    if (typeof value !== "string" || value.trim() === "") {
        throw new Error(`Le champ ${key} est obligatoire.`);
    }

    return value;
};

const requireStringArray = (record: Record<string, unknown>, key: string): string[] => {
    const value = record[key];

    if (!Array.isArray(value) || !value.every((item) => typeof item === "string")) {
        throw new Error(`Le champ ${key} doit être une liste de textes.`);
    }

    return value;
};

const validateCourseBlocks = (blocks: unknown): void => {
    if (!Array.isArray(blocks)) {
        throw new Error("Chaque section doit contenir une liste de blocs.");
    }

    blocks.forEach((block, index) => {
        if (!isRecord(block)) {
            throw new Error(`Le bloc ${index + 1} n’est pas valide.`);
        }

        const type = block.type;

        if (typeof type !== "string" || !validBlockTypes.includes(type as CourseBlockType)) {
            throw new Error(`Le type du bloc ${index + 1} n’est pas reconnu.`);
        }
    });
};

const validateCourseSections = (sections: unknown): void => {
    if (!Array.isArray(sections)) {
        throw new Error("Le cours doit contenir une liste de sections.");
    }

    sections.forEach((section, index) => {
        if (!isRecord(section)) {
            throw new Error(`La section ${index + 1} n’est pas valide.`);
        }

        requireString(section, "id");
        requireString(section, "title");
        validateCourseBlocks(section.blocks);
    });
};

function assertCourse(value: unknown): asserts value is Course {
    if (!isRecord(value)) {
        throw new Error("Le contenu reçu n’est pas un cours valide.");
    }

    requireString(value, "slug");
    requireString(value, "title");
    requireString(value, "category");
    requireStringArray(value, "objectives");
    validateCourseSections(value.sections);

}

export const parseCourse = (value: unknown): Course => {
    assertCourse(value);
    return value;
};
