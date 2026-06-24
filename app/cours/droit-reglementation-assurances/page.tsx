import type { Metadata } from "next";
import { CourseLayout } from "@/features/courses/components";
import { droitReglementationAssurancesCourse } from "@/features/courses/data/droit-reglementation-assurances";
import { getCourseWithEditableFallback } from "@/features/courses/editor/server/courseFileRepository";

export const metadata: Metadata = {
    title: "Droit, réglementation et assurances | Cours ECSR",
    description: "Cours ECSR sur les sources du droit, les infractions, le permis à points et les assurances automobiles.",
};

export default async function DroitReglementationAssurancesPage() {
    const course = await getCourseWithEditableFallback("droit-reglementation-assurances", droitReglementationAssurancesCourse);
    return <CourseLayout course={course} />;
}
