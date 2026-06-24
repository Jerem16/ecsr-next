import type { Course } from "../../types/course";
import { droitReglementationAssurancesMeta } from "./metadata";
import { droitReglementationAssurancesSections } from "./sections";

export const droitReglementationAssurancesCourse: Course = {
    ...droitReglementationAssurancesMeta,
    sections: droitReglementationAssurancesSections,
};

export * from "./metadata";
export * from "./sections";
