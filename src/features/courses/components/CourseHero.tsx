import type { Course } from "../types/course";
import { AppIcon } from "./AppIcon";
import {
    courseBlockTypeClassName,
    courseFrameClassName,
    courseSectionTitleClassName,
} from "./courseClassNames";
import { RichContent, singleContentToRichContent } from "./RichContent";

interface CourseHeroProps {
    course: Course;
}

export const CourseHero = ({ course }: CourseHeroProps) => {
    return (
        <section
            className={`course-hero ${courseFrameClassName} rounded-[30px] bg-[linear-gradient(135deg,#fff_0%,#eef5ff_62%,#fff4ec_100%)] p-[clamp(32px,5vw,64px)]`}
            id="course-top"
            data-scroll-offset="24px"
        >
            <p className={`course-kicker ${courseBlockTypeClassName}`}>{course.category}</p>
            <h1 className={`${courseSectionTitleClassName} text-[clamp(2rem,5vw,4.1rem)] leading-[1.05]`}>
                {course.title}
            </h1>
            <div className="course-hero__summary mt-5 max-w-[860px]">
                <RichContent content={singleContentToRichContent(course.summary)} />
            </div>
            <div className="course-hero__meta mt-[22px] flex flex-wrap gap-2.5" aria-label="Repères du cours">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--course-border)] bg-white/75 px-3 py-2 font-extrabold text-[var(--course-primary)]">
                    <AppIcon name="book" /> Cours complet
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--course-border)] bg-white/75 px-3 py-2 font-extrabold text-[var(--course-primary)]">
                    <AppIcon name="eye" /> Images contextualisées
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--course-border)] bg-white/75 px-3 py-2 font-extrabold text-[var(--course-primary)]">
                    <AppIcon name="table" /> Tableaux HTML
                </span>
            </div>
        </section>
    );
};
