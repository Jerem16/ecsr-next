import type { SequenceCardBlock } from "../types/course";
import { AppIcon } from "./AppIcon";
import {
    courseBlockTypeClassName,
    courseCardTitleClassName,
    courseContentFrameClassName,
    courseFigcaptionClassName,
    courseImageClassName,
    courseInnerFrameClassName,
} from "./courseClassNames";
import { RichContent } from "./RichContent";

interface SequenceCardProps {
    block: SequenceCardBlock;
}

const getAlertClassName = (tone: "info" | "warning" | "success" = "info") => {
    const toneClassName = {
        info: "[border-left-color:var(--course-primary)] bg-[var(--course-primary-soft)]",
        warning: "[border-left-color:var(--course-accent)] bg-[#fff7ed]",
        success: "[border-left-color:#15803d] bg-[#f0fdf4]",
    }[tone];

    return `course-sequence__alert course-sequence__alert--${tone} rounded-[14px] border-l-[5px] px-4 py-3.5 ${toneClassName}`;
};

export const SequenceCard = ({ block }: SequenceCardProps) => {
    return (
        <article className={`course-sequence ${courseContentFrameClassName}`} id={block.id}>
            <div className="course-sequence__header">
                <p className={courseBlockTypeClassName}><AppIcon name="compare" /> Séquence pédagogique</p>
                <h3 className={courseCardTitleClassName}>{block.title}</h3>
                {block.intro ? <p className="text-[var(--course-muted)] leading-[1.68]">{block.intro}</p> : null}
            </div>
            <div className="course-sequence__parts mt-[18px] grid gap-[18px]">
                {block.parts.map((part, index) => {
                    const key = `${block.id ?? block.title}-part-${index}`;

                    switch (part.type) {
                        case "figure":
                            return (
                                <section className={`course-sequence__figure ${courseInnerFrameClassName}`} key={key}>
                                    <figure className="m-0">
                                        <img className={courseImageClassName} src={part.image.src} alt={part.image.alt} loading="lazy" />
                                        {part.image.caption ? <figcaption className={courseFigcaptionClassName}>{part.image.caption}</figcaption> : null}
                                    </figure>
                                    <div className="course-sequence__figure-content mt-3.5 min-w-0">
                                        <h4 className="mb-3 mt-0 text-[var(--course-primary)]">{part.title}</h4>
                                        <RichContent content={part.content} />
                                    </div>
                                </section>
                            );
                        case "alert":
                            return (
                                <aside className={getAlertClassName(part.tone)} key={key}>
                                    <RichContent content={part.content} />
                                </aside>
                            );
                        case "text":
                            return (
                                <section className={`course-sequence__text ${courseInnerFrameClassName}`} key={key}>
                                    {part.title ? <h4 className="mb-3 mt-0 text-[var(--course-primary)]">{part.title}</h4> : null}
                                    <RichContent content={part.content} />
                                </section>
                            );
                        default: {
                            const exhaustiveCheck: never = part;
                            return exhaustiveCheck;
                        }
                    }
                })}
            </div>
        </article>
    );
};
