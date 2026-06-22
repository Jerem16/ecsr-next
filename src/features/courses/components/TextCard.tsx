import type { TextCardBlock } from "../types/course";
import {
    courseCardTitleClassName,
    courseContentFrameClassName,
} from "./courseClassNames";
import { blockContentToRichContent, RichContent } from "./RichContent";

interface TextCardProps {
    block: TextCardBlock;
}

export const TextCard = ({ block }: TextCardProps) => {
    return (
        <article className={`course-card course-card--text ${courseContentFrameClassName}`} id={block.id}>
            <h3 className={courseCardTitleClassName}>{block.title}</h3>
            <RichContent content={blockContentToRichContent(block.content)} />
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
