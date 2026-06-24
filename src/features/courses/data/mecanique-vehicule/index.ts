import type { Course } from "../../types/course";
import { mecaniqueVehiculeMeta } from "./metadata";
import { mecaniqueVehiculeSections } from "./sections";

export const mecaniqueVehiculeCourse: Course = {
    ...mecaniqueVehiculeMeta,
    sections: mecaniqueVehiculeSections,
};

export * from "./metadata";
export * from "./sections";
