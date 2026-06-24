import type { Course } from "../types/course";
import { CourseDesktopEditorMount } from "../editor/components/CourseDesktopEditorMount";
import { CourseReadOnlyLayout } from "./CourseReadOnlyLayout";

interface CourseLayoutProps {
    course: Course;
}

export const CourseLayout = ({ course }: CourseLayoutProps) => {
    return (
        <div className="course-responsive-shell">
            <div className="course-desktop-editor">
                <CourseDesktopEditorMount course={course} />
            </div>
            <div className="course-mobile-readonly course-page">
                <CourseReadOnlyLayout course={course} showSidebar={false} />
            </div>
        </div>
    );
};
