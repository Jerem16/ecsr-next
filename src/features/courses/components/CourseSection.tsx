import type { CourseSection as CourseSectionType } from "../types/course";
import { BlockRenderer } from "./BlockRenderer";
import { RichContent, singleContentToRichContent } from "./RichContent";

interface CourseSectionProps {
    section: CourseSectionType;
}

export const CourseSection = ({ section }: CourseSectionProps) => {
    return (
        <section className="course-section" id={section.id} data-scroll-offset="24px">
            <div className="course-section__header">
                <h2>{section.title}</h2>
                {section.intro ? <RichContent content={singleContentToRichContent(section.intro)} /> : null}
            </div>
            <div className="course-section__blocks">
                {section.blocks.map((block, index) => (
                    <BlockRenderer block={block} key={block.id ?? `${section.id}-${index}`} />
                ))}
            </div>
        </section>
    );
};
