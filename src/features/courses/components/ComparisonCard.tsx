import type { ComparisonCardBlock } from "../types/course";
import { AppIcon } from "./AppIcon";
import { RichContent, singleContentToRichContent } from "./RichContent";

interface ComparisonCardProps {
    block: ComparisonCardBlock;
}

export const ComparisonCard = ({ block }: ComparisonCardProps) => {
    const gridClass = block.items.length === 1 ? "course-comparison__grid course-comparison__grid--single" : "course-comparison__grid";

    return (
        <article className="course-comparison" id={block.id}>
            <p className="course-block-type"><AppIcon name="compare" /> Comparaison</p>
            <h3>{block.title}</h3>
            {block.intro ? <RichContent content={singleContentToRichContent(block.intro)} /> : null}
            <div className={gridClass}>
                {block.items.map((item) => (
                    <section className="course-comparison__item" key={`${block.id ?? block.title}-${item.title}`}>
                        <figure>
                            <img src={item.image.src} alt={item.image.alt} loading="lazy" />
                            {item.image.caption ? <figcaption>{item.image.caption}</figcaption> : null}
                        </figure>
                        <h4>{item.title}</h4>
                        <RichContent content={singleContentToRichContent(item.content)} />
                    </section>
                ))}
            </div>
            {block.conclusion ? (
                <div className="course-comparison__conclusion">
                    <RichContent content={singleContentToRichContent(block.conclusion)} />
                </div>
            ) : null}
        </article>
    );
};
