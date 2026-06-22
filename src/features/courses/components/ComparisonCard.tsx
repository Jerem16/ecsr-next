import type { ComparisonCardBlock } from "../types/course";
import { AppIcon } from "./AppIcon";
import {
    courseBlockTypeClassName,
    courseCardTitleClassName,
    courseContentFrameClassName,
    courseFigcaptionClassName,
    courseImageClassName,
    courseInnerFrameClassName,
} from "./courseClassNames";
import { RichContent, singleContentToRichContent } from "./RichContent";

interface ComparisonCardProps {
    block: ComparisonCardBlock;
}

export const ComparisonCard = ({ block }: ComparisonCardProps) => {
    const gridClass = block.items.length === 1
        ? "course-comparison__grid course-comparison__grid--single grid grid-cols-1 gap-[18px] mt-[18px]"
        : "course-comparison__grid mt-[18px] grid grid-cols-2 gap-[18px] max-[820px]:grid-cols-1";

    return (
        <article className={`course-comparison ${courseContentFrameClassName}`} id={block.id}>
            <p className={courseBlockTypeClassName}><AppIcon name="compare" /> Comparaison</p>
            <h3 className={courseCardTitleClassName}>{block.title}</h3>
            {block.intro ? <RichContent content={singleContentToRichContent(block.intro)} /> : null}
            <div className={gridClass}>
                {block.items.map((item) => (
                    <section className={`course-comparison__item ${courseInnerFrameClassName}`} key={`${block.id ?? block.title}-${item.title}`}>
                        <figure className="m-0">
                            <img className={courseImageClassName} src={item.image.src} alt={item.image.alt} loading="lazy" />
                            {item.image.caption ? <figcaption className={courseFigcaptionClassName}>{item.image.caption}</figcaption> : null}
                        </figure>
                        <h4 className="mb-2 mt-3.5 text-[1.08rem] font-semibold text-[var(--course-primary)]">{item.title}</h4>
                        <RichContent content={singleContentToRichContent(item.content)} />
                    </section>
                ))}
            </div>
            {block.conclusion ? (
                <div className="course-comparison__conclusion mt-[18px] rounded-[14px] border-l-[5px] border-[var(--course-accent)] bg-[#fff7ed] px-4 py-3.5 font-extrabold text-[var(--course-primary)]">
                    <RichContent content={singleContentToRichContent(block.conclusion)} />
                </div>
            ) : null}
        </article>
    );
};
