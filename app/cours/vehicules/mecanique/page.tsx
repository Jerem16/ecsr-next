import type { Metadata } from "next";
import { CourseLayout } from "@/features/courses/components";
import { mecaniqueVehiculeCourse } from "@/features/courses/data/mecanique-vehicule";
import { getCourseWithEditableFallback } from "@/features/courses/editor/server/courseFileRepository";

export const metadata: Metadata = {
    title: "Mécanique du véhicule | Cours ECSR",
    description: "Cours ECSR sur les motorisations, la chaîne cinématique, le moteur thermique, l’embrayage, la boîte de vitesses et le pont différentiel.",
};

export default async function MecaniqueVehiculePage() {
    const course = await getCourseWithEditableFallback("mecanique", mecaniqueVehiculeCourse);
    return <CourseLayout course={course} />;
}
