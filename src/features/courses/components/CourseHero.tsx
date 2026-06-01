import type { Course } from "../types/course";
import { AppIcon } from "./AppIcon";
import { RichContent, singleContentToRichContent } from "./RichContent";

interface CourseHeroProps {
    course: Course;
}

export const CourseHero = ({ course }: CourseHeroProps) => {
    return (
        <section className="course-hero" id="course-top" data-scroll-offset="24px">
            <p className="course-kicker">{course.category}</p>
            <h1>{course.title}</h1>
            <div className="course-hero__summary">
                <RichContent content={singleContentToRichContent(course.summary)} />
            </div>
            <div className="course-hero__meta" aria-label="Repères du cours">
                <span><AppIcon name="book" /> Cours complet</span>
                <span><AppIcon name="eye" /> Images contextualisées</span>
                <span><AppIcon name="table" /> Tableaux HTML</span>
            </div>
        </section>
    );
};
