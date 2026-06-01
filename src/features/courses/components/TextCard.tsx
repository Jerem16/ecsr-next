import type { TextCardBlock } from "../types/course";
import { blockContentToRichContent, RichContent } from "./RichContent";

interface TextCardProps {
    block: TextCardBlock;
}

export const TextCard = ({ block }: TextCardProps) => {
    return (
        <article className="course-card course-card--text" id={block.id}>
            <h3>{block.title}</h3>
            <RichContent content={blockContentToRichContent(block.content)} />
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
