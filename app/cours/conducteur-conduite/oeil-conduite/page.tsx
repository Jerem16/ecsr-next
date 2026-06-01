import type { Metadata } from "next";
import { CourseLayout } from "@/features/courses/components";
import { oeilConduiteCourse } from "@/features/courses/data/oeil-conduite";
import { getCourseWithEditableFallback } from "@/features/courses/editor/server/courseFileRepository";

export const metadata: Metadata = {
    title: "L’œil et la conduite | Cours ECSR",
    description: "Cours ECSR sur la vue, le champ visuel, la perception et les limites du conducteur."
};

export default async function OeilConduiteNestedPage() {
    const course = await getCourseWithEditableFallback("oeil-conduite", oeilConduiteCourse);
    return <CourseLayout course={course} />;
}
