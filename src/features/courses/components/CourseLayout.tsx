import type { Course } from "../types/course";
import { CourseModeSwitcher } from "../editor/components/CourseModeSwitcher";

interface CourseLayoutProps {
    course: Course;
}

export const CourseLayout = ({ course }: CourseLayoutProps) => {
    return <CourseModeSwitcher course={course} />;
};
