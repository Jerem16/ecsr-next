import { promises as fs } from "fs";
import path from "path";
import type { Course } from "../../types/course";
import { parseCourse } from "./validateCourse";

const editableCoursesDirectory = path.join(process.cwd(), "src", "features", "courses", "data", "editable");

const sanitizeFileName = (value: string): string => {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-_]+/g, "-")
        .replace(/^-+|-+$/g, "") || "section";
};

const isNodeError = (error: unknown): error is NodeJS.ErrnoException => {
    return error instanceof Error && "code" in error;
};

const readJsonFile = async (filePath: string): Promise<unknown | null> => {
    try {
        const content = await fs.readFile(filePath, "utf8");
        return JSON.parse(content) as unknown;
    } catch (error) {
        if (isNodeError(error) && error.code === "ENOENT") {
            return null;
        }

        throw error;
    }
};

export const getEditableCourse = async (slug: string): Promise<Course | null> => {
    const coursePath = path.join(editableCoursesDirectory, slug, "course.json");
    const content = await readJsonFile(coursePath);

    if (!content) {
        return null;
    }

    return parseCourse(content);
};

export const getCourseWithEditableFallback = async (slug: string, fallbackCourse: Course): Promise<Course> => {
    const editableCourse = await getEditableCourse(slug);
    return editableCourse ?? fallbackCourse;
};

export const saveEditableCourse = async (course: Course): Promise<Course> => {
    const courseDirectory = path.join(editableCoursesDirectory, sanitizeFileName(course.slug));
    const sectionsDirectory = path.join(courseDirectory, "sections");
    const sectionOrder = course.sections.map((section) => section.id);

    await fs.mkdir(courseDirectory, { recursive: true });
    await fs.rm(sectionsDirectory, { recursive: true, force: true });
    await fs.mkdir(sectionsDirectory, { recursive: true });

    await fs.writeFile(path.join(courseDirectory, "course.json"), `${JSON.stringify(course, null, 4)}\n`, "utf8");
    await fs.writeFile(
        path.join(courseDirectory, "metadata.json"),
        `${JSON.stringify(
            {
                slug: course.slug,
                title: course.title,
                category: course.category,
                summary: course.summary,
                objectives: course.objectives,
            },
            null,
            4,
        )}\n`,
        "utf8",
    );
    await fs.writeFile(path.join(courseDirectory, "manifest.json"), `${JSON.stringify({ sectionOrder }, null, 4)}\n`, "utf8");

    await Promise.all(
        course.sections.map((section, index) => {
            const fileName = `${String(index + 1).padStart(2, "0")}-${sanitizeFileName(section.id)}.json`;
            return fs.writeFile(path.join(sectionsDirectory, fileName), `${JSON.stringify(section, null, 4)}\n`, "utf8");
        }),
    );

    return course;
};
