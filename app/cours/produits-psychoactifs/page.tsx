import type { Metadata } from "next";
import { CourseLayout } from "@/features/courses/components";
import { produitsPsychoactifsCourse } from "@/features/courses/data/produits-psychoactifs";
import { getCourseWithEditableFallback } from "@/features/courses/editor/server/courseFileRepository";

export const metadata: Metadata = {
    title: "Les produits psychoactifs | Cours ECSR",
    description: "Cours ECSR sur alcool, drogues, médicaments, conduite, effets, dépistage, sanctions et risques."
};

export default async function ProduitsPsychoactifsPage() {
    const course = await getCourseWithEditableFallback("produits-psychoactifs", produitsPsychoactifsCourse);
    return <CourseLayout course={course} />;
}
