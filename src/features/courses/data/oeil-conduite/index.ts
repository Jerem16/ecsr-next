import type { Course } from "../../types/course";
import { oeilConduiteMeta } from "./metadata";
import { oeilConduiteSections } from "./sections";

export const oeilConduiteCourse: Course = {
    ...oeilConduiteMeta,
    sections: oeilConduiteSections,
};

export * from "./metadata";
export * from "./sections";
