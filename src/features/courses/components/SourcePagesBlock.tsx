import type { SourcePagesBlock as SourcePagesBlockType } from "../types/course";
import { RichContent, singleContentToRichContent } from "./RichContent";

interface SourcePagesBlockProps {
    block: SourcePagesBlockType;
}

export const SourcePagesBlock = ({ block }: SourcePagesBlockProps) => {
    return (
        <section className="course-source-pages" id={block.id}>
            <h3>{block.title}</h3>
            {block.intro ? <RichContent content={singleContentToRichContent(block.intro)} /> : null}
            <div className="course-source-pages__grid">
                {block.pages.map((page) => (
                    <details className="course-source-page" key={`${block.id ?? block.title}-${page.page}-${page.title}`}>
                        <summary>
                            <span>Page {page.page}</span>
                            <strong>{page.title}</strong>
                        </summary>
                        <figure>
                            <img src={page.image} alt={page.alt} loading="lazy" />
                        </figure>
                        <div className="course-source-page__transcript">
                            <h4>Transcription</h4>
                            {page.transcript.map((paragraph, index) => (
                                <p key={`${page.page}-${page.title}-${index}`}>{paragraph}</p>
                            ))}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
};
