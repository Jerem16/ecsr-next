"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { Course } from "../../types/course";
import { CourseEditToolbar } from "./CourseEditToolbar";
import { CourseReadOnlyLayout } from "../../components/CourseReadOnlyLayout";

interface CourseModeSwitcherProps {
    course: Course;
}

interface SaveCourseResponse {
    course?: Course;
    message?: string;
}

const CourseEditableLayout = dynamic(
    () => import("./CourseEditableLayout").then((module) => module.CourseEditableLayout),
    { ssr: false },
);

export const CourseModeSwitcher = ({ course }: CourseModeSwitcherProps) => {
    const [displayedCourse, setDisplayedCourse] = useState<Course>(course);
    const [draftCourse, setDraftCourse] = useState<Course>(course);
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [status, setStatus] = useState<string>();

    useEffect(() => {
        setDisplayedCourse(course);
        setDraftCourse(course);
        setIsEditing(false);
        setIsSaving(false);
        setStatus(undefined);
    }, [course]);

    const startEditing = () => {
        setDraftCourse(displayedCourse);
        setStatus(undefined);
        setIsEditing(true);
    };

    const cancelEditing = () => {
        setDraftCourse(displayedCourse);
        setStatus("Modifications non sauvegardées annulées.");
        setIsEditing(false);
    };

    const saveCourse = async () => {
        setIsSaving(true);
        setStatus("Sauvegarde locale en cours...");

        try {
            const response = await fetch(`/api/courses/${encodeURIComponent(draftCourse.slug)}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(draftCourse),
            });

            const payload = (await response.json()) as SaveCourseResponse;

            if (!response.ok) {
                throw new Error(payload.message ?? "La sauvegarde locale a échoué.");
            }

            const savedCourse = payload.course ?? draftCourse;
            setDisplayedCourse(savedCourse);
            setDraftCourse(savedCourse);
            setIsEditing(false);
            setStatus("Sauvegarde locale effectuée.");
        } catch (error) {
            setStatus(error instanceof Error ? error.message : "La sauvegarde locale a échoué.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="course-page">
            <CourseEditToolbar
                isEditing={isEditing}
                isSaving={isSaving}
                status={status}
                onEdit={startEditing}
                onCancel={cancelEditing}
                onSave={saveCourse}
            />
            {isEditing ? <CourseEditableLayout course={draftCourse} onChange={setDraftCourse} /> : <CourseReadOnlyLayout course={displayedCourse} />}
        </div>
    );
};
