import type {
    RichBlockContent,
    RichContentNode,
    RichInlineContent,
    RichSingleContent,
} from "../../types/course";
import { blockContentToRichContent, singleContentToRichContent } from "../../components/RichContent";

export const asRichBlockContent = (content: RichBlockContent): RichContentNode[] => {
    return blockContentToRichContent(content);
};

export const asRichSingleContent = (content: RichSingleContent | undefined): RichContentNode[] => {
    return singleContentToRichContent(content);
};

export const richInlineContentToText = (content: RichInlineContent): string => {
    if (typeof content === "string") {
        return content;
    }

    if (Array.isArray(content)) {
        return content.map((segment) => segment.text).join("");
    }

    return content.text;
};

export const textToRichInlineContent = (text: string): RichInlineContent => {
    return text;
};
