import type { ListCardBlock } from "../types/course";
import {
    courseCardTitleClassName,
    courseContentFrameClassName,
} from "./courseClassNames";
import { renderInlineContent, singleContentToRichContent, RichContent } from "./RichContent";

interface ListCardProps {
    block: ListCardBlock;
}

export const ListCard = ({ block }: ListCardProps) => {
    const ListTag = block.ordered ? "ol" : "ul";

    return (
        <article className={`course-card course-card--list ${courseContentFrameClassName}`} id={block.id}>
            <h3 className={courseCardTitleClassName}>{block.title}</h3>
            {block.intro ? <RichContent content={singleContentToRichContent(block.intro)} /> : null}
            <ListTag className="course-list-card__items mt-3.5 grid gap-[0.45rem] pl-[1.45rem] marker:font-black marker:text-[var(--course-accent)]">
                {block.items.map((item, index) => (
                    <li key={`${block.id ?? block.title}-item-${index}`}>
                        {renderInlineContent(item, `${block.id ?? block.title}-item-${index}`)}
                    </li>
                ))}
            </ListTag>
            {block.keywords && block.keywords.length > 0 ? (
                <ul className="course-keywords mt-[18px] flex flex-wrap gap-2" aria-label="Mots-clés">
                    {block.keywords.map((keyword) => (
                        <li
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--course-border)] bg-[var(--course-primary-soft)] px-3 py-2 font-extrabold text-[var(--course-primary)]"
                            key={keyword}
                        >
                            {keyword}
                        </li>
                    ))}
                </ul>
            ) : null}
        </article>
    );
};
