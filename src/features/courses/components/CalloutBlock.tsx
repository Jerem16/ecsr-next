import type { CalloutBlock as CalloutBlockType } from "../types/course";
import { AppIcon } from "./AppIcon";
import { RichContent, singleContentToRichContent } from "./RichContent";

interface CalloutBlockProps {
    block: CalloutBlockType;
}

export const CalloutBlock = ({ block }: CalloutBlockProps) => {
    return (
        <aside className={`course-callout course-callout--${block.tone ?? "info"}`} id={block.id}>
            <AppIcon name="warning" />
            <div>
                <h3>{block.title}</h3>
                <RichContent content={singleContentToRichContent(block.content)} />
            </div>
        </aside>
    );
};
