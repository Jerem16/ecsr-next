"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { Course } from "../../types/course";

interface CourseDesktopEditorMountProps {
    course: Course;
}

const CourseModeSwitcher = dynamic(
    () => import("./CourseModeSwitcher").then((module) => module.CourseModeSwitcher),
    { ssr: false },
);

export const CourseDesktopEditorMount = ({ course }: CourseDesktopEditorMountProps) => {
    const [canMountEditor, setCanMountEditor] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 821px)");
        const updateMountState = () => setCanMountEditor(mediaQuery.matches);

        updateMountState();
        mediaQuery.addEventListener("change", updateMountState);
        return () => mediaQuery.removeEventListener("change", updateMountState);
    }, []);

    if (!canMountEditor) {
        return null;
    }

    return <CourseModeSwitcher course={course} />;
};
