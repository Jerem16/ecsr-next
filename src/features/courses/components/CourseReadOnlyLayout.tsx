import type { Course } from "../types/course";
import { CourseHero } from "./CourseHero";
import { CourseSection } from "./CourseSection";
import { CourseSidebar } from "./CourseSidebar";

interface CourseReadOnlyLayoutProps {
    course: Course;
}

export const CourseReadOnlyLayout = ({ course }: CourseReadOnlyLayoutProps) => {
    const ObjectivesListTag = course.objectivesOrdered ? "ol" : "ul";

    return (
        <>
            <CourseHero course={course} />
            <div className="course-layout">
                <CourseSidebar sections={course.sections} />
                <div className="course-content" role="region" aria-label={`Cours : ${course.title}`}>
                    <section className="course-objectives" id="objectifs" data-scroll-offset="24px">
                        <h2>Objectifs pédagogiques</h2>
                        <ObjectivesListTag>
                            {course.objectives.map((objective, index) => (
                                <li key={`${objective}-${index}`}>{objective}</li>
                            ))}
                        </ObjectivesListTag>
                    </section>
                    {course.sections.map((section) => (
                        <CourseSection section={section} key={section.id} />
                    ))}
                </div>
            </div>
        </>
    );
};
