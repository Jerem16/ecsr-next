import type { CalloutBlock as CalloutBlockType } from "../types/course";
import { AppIcon } from "./AppIcon";
import {
    courseCardTitleClassName,
    courseFrameClassName,
} from "./courseClassNames";
import { RichContent, singleContentToRichContent } from "./RichContent";

interface CalloutBlockProps {
    block: CalloutBlockType;
}

export const CalloutBlock = ({ block }: CalloutBlockProps) => {
    return (
        <aside
            className={`course-callout course-callout--${block.tone ?? "info"} ${courseFrameClassName} grid grid-cols-[auto_1fr] gap-3.5 rounded-[24px] border-[rgba(249,115,22,0.32)] bg-[#fff7ed] p-[18px]`}
            id={block.id}
        >
            <AppIcon name="warning" />
            <div>
                <h3 className={`${courseCardTitleClassName} mb-0`}>{block.title}</h3>
                <RichContent content={singleContentToRichContent(block.content)} />
            </div>
        </aside>
    );
};
