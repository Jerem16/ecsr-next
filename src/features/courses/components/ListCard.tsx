import type { ListCardBlock } from "../types/course";
import { renderInlineContent, singleContentToRichContent, RichContent } from "./RichContent";

interface ListCardProps {
    block: ListCardBlock;
}

export const ListCard = ({ block }: ListCardProps) => {
    const ListTag = block.ordered ? "ol" : "ul";

    return (
        <article className="course-card course-card--list" id={block.id}>
            <h3>{block.title}</h3>
            {block.intro ? <RichContent content={singleContentToRichContent(block.intro)} /> : null}
            <ListTag className="course-list-card__items">
                {block.items.map((item, index) => (
                    <li key={`${block.id ?? block.title}-item-${index}`}>
                        {renderInlineContent(item, `${block.id ?? block.title}-item-${index}`)}
                    </li>
                ))}
            </ListTag>
            {block.keywords && block.keywords.length > 0 ? (
                <ul className="course-keywords" aria-label="Mots-clés">
                    {block.keywords.map((keyword) => (
                        <li key={keyword}>{keyword}</li>
                    ))}
                </ul>
            ) : null}
        </article>
    );
};
