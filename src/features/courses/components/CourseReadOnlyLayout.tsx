import type { Course } from "../types/course";
import { CourseHero } from "./CourseHero";
import { CourseSection } from "./CourseSection";
import { CourseSidebar } from "./CourseSidebar";
import {
    courseFrameClassName,
    courseSectionTitleClassName,
} from "./courseClassNames";

interface CourseReadOnlyLayoutProps {
    course: Course;
}

export const CourseReadOnlyLayout = ({ course }: CourseReadOnlyLayoutProps) => {
    const ObjectivesListTag = course.objectivesOrdered ? "ol" : "ul";

    return (
        <>
            <CourseHero course={course} />
            <div className="course-layout mt-7 grid min-w-0 grid-cols-[minmax(220px,280px)_minmax(0,1fr)] items-start gap-6 max-[1100px]:grid-cols-1">
                <CourseSidebar sections={course.sections} />
                <div className="course-content grid min-w-0 gap-[clamp(16px,2.5vw,28px)]" role="region" aria-label={`Cours : ${course.title}`}>
                    <section
                        className={`course-objectives ${courseFrameClassName} rounded-[28px] p-[clamp(22px,3vw,34px)]`}
                        id="objectifs"
                        data-scroll-offset="24px"
                    >
                        <h2 className={courseSectionTitleClassName}>Objectifs pédagogiques</h2>
                        <ObjectivesListTag className="mt-3.5 grid gap-[0.45rem] pl-[1.45rem] marker:font-black marker:text-[var(--course-accent)]">
                            {course.objectives.map((objective, index) => (
                                <li className="text-[var(--course-muted)] leading-[1.68]" key={`${objective}-${index}`}>{objective}</li>
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
