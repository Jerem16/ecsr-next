import type { ImageCardBlock } from "../types/course";
import { AppIcon } from "./AppIcon";
import {
    courseBlockTypeClassName,
    courseCardTitleClassName,
    courseFigcaptionClassName,
    courseFrameClassName,
    courseImageClassName,
} from "./courseClassNames";
import { blockContentToRichContent, RichContent } from "./RichContent";

interface ImageCardProps {
    block: ImageCardBlock;
}

export const ImageCard = ({ block }: ImageCardProps) => {
    const positionClass = block.imagePosition === "left" ? "course-media-card--image-left" : "course-media-card--image-right";

    return (
        <article
            className={`course-media-card ${positionClass} ${courseFrameClassName} grid grid-cols-[minmax(220px,0.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(18px,3vw,30px)] rounded-[24px] p-[clamp(16px,3vw,24px)] max-[820px]:grid-cols-1`}
            id={block.id}
        >
            <figure className="course-media-card__figure m-0">
                <img className={courseImageClassName} src={block.image.src} alt={block.image.alt} loading="lazy" />
                {block.image.caption ? <figcaption className={courseFigcaptionClassName}>{block.image.caption}</figcaption> : null}
            </figure>
            <div className="course-media-card__content flex h-full min-w-0 flex-col">
                <p className={courseBlockTypeClassName}><AppIcon name="image" /> {block.image.role ?? "image"}</p>
                <h3 className={courseCardTitleClassName}>{block.title}</h3>
                <RichContent content={blockContentToRichContent(block.content)} />
            </div>
        </article>
    );
};
