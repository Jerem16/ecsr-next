import type { SourcePagesBlock as SourcePagesBlockType } from "../types/course";
import {
    courseCardTitleClassName,
    courseContentFrameClassName,
    courseImageClassName,
} from "./courseClassNames";
import { RichContent, singleContentToRichContent } from "./RichContent";

interface SourcePagesBlockProps {
    block: SourcePagesBlockType;
}

export const SourcePagesBlock = ({ block }: SourcePagesBlockProps) => {
    return (
        <section className={`course-source-pages ${courseContentFrameClassName}`} id={block.id}>
            <h3 className={courseCardTitleClassName}>{block.title}</h3>
            {block.intro ? <RichContent content={singleContentToRichContent(block.intro)} /> : null}
            <div className="course-source-pages__grid mt-[18px] grid gap-3">
                {block.pages.map((page) => (
                    <details
                        className="course-source-page overflow-clip rounded-[18px] border border-[var(--course-border)] bg-[#fbfdff]"
                        key={`${block.id ?? block.title}-${page.page}-${page.title}`}
                    >
                        <summary className="grid cursor-pointer grid-cols-[auto_minmax(0,1fr)] items-start gap-2.5 px-4 py-3.5 text-[var(--course-primary)]">
                            <span className="rounded-full bg-[var(--course-primary-soft)] px-2 py-1 text-[0.86rem] font-black whitespace-nowrap">Page {page.page}</span>
                            <strong className="min-w-0 [overflow-wrap:anywhere]">{page.title}</strong>
                        </summary>
                        <figure className="m-0 px-4 pb-4">
                            <img className={courseImageClassName} src={page.image} alt={page.alt} loading="lazy" />
                        </figure>
                        <div className="course-source-page__transcript m-0 px-4 pb-4">
                            <h4 className="mb-2.5 mt-0 text-[var(--course-primary)]">Transcription</h4>
                            {page.transcript.map((paragraph, index) => (
                                <p className="text-[var(--course-muted)] leading-[1.68]" key={`${page.page}-${page.title}-${index}`}>{paragraph}</p>
                            ))}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
};
