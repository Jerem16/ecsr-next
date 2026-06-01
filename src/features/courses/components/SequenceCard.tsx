import type { SequenceCardBlock } from "../types/course";
import { AppIcon } from "./AppIcon";
import { RichContent } from "./RichContent";

interface SequenceCardProps {
    block: SequenceCardBlock;
}

const getAlertClassName = (tone: "info" | "warning" | "success" = "info") => {
    return `course-sequence__alert course-sequence__alert--${tone}`;
};

export const SequenceCard = ({ block }: SequenceCardProps) => {
    return (
        <article className="course-sequence" id={block.id}>
            <div className="course-sequence__header">
                <p className="course-block-type"><AppIcon name="compare" /> Séquence pédagogique</p>
                <h3>{block.title}</h3>
                {block.intro ? <p>{block.intro}</p> : null}
            </div>
            <div className="course-sequence__parts">
                {block.parts.map((part, index) => {
                    const key = `${block.id ?? block.title}-part-${index}`;

                    switch (part.type) {
                        case "figure":
                            return (
                                <section className="course-sequence__figure" key={key}>
                                    <figure>
                                        <img src={part.image.src} alt={part.image.alt} loading="lazy" />
                                        {part.image.caption ? <figcaption>{part.image.caption}</figcaption> : null}
                                    </figure>
                                    <div className="course-sequence__figure-content">
                                        <h4>{part.title}</h4>
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
                                <section className="course-sequence__text" key={key}>
                                    {part.title ? <h4>{part.title}</h4> : null}
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
