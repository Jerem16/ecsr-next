import type { Course } from "../../types/course";
import { produitsPsychoactifsMeta } from "./metadata";
import { produitsPsychoactifsSections } from "./sections";

export const produitsPsychoactifsCourse: Course = {
    ...produitsPsychoactifsMeta,
    sections: produitsPsychoactifsSections,
};

export * from "./metadata";
export * from "./sections";
