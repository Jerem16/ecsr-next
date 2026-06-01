import type { ImageCardBlock } from "../types/course";
import { AppIcon } from "./AppIcon";
import { blockContentToRichContent, RichContent } from "./RichContent";

interface ImageCardProps {
    block: ImageCardBlock;
}

export const ImageCard = ({ block }: ImageCardProps) => {
    const positionClass = block.imagePosition === "left" ? "course-media-card--image-left" : "course-media-card--image-right";

    return (
        <article className={`course-media-card ${positionClass}`} id={block.id}>
            <figure className="course-media-card__figure">
                <img src={block.image.src} alt={block.image.alt} loading="lazy" />
                {block.image.caption ? <figcaption>{block.image.caption}</figcaption> : null}
            </figure>
            <div className="course-media-card__content">
                <p className="course-block-type"><AppIcon name="image" /> {block.image.role ?? "image"}</p>
                <h3>{block.title}</h3>
                <RichContent content={blockContentToRichContent(block.content)} />
            </div>
        </article>
    );
};
