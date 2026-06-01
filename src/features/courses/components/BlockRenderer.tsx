import type { CourseBlock } from "../types/course";
import { TextCard } from "./TextCard";
import { ListCard } from "./ListCard";
import { ImageCard } from "./ImageCard";
import { ComparisonCard } from "./ComparisonCard";
import { SequenceCard } from "./SequenceCard";
import { TableBlock } from "./TableBlock";
import { CalloutBlock } from "./CalloutBlock";
import { SourcePagesBlock } from "./SourcePagesBlock";

interface BlockRendererProps {
    block: CourseBlock;
}

export const BlockRenderer = ({ block }: BlockRendererProps) => {
    switch (block.type) {
        case "text-card":
            return <TextCard block={block} />;
        case "list-card":
            return <ListCard block={block} />;
        case "image-card":
            return <ImageCard block={block} />;
        case "comparison-card":
            return <ComparisonCard block={block} />;
        case "sequence-card":
            return <SequenceCard block={block} />;
        case "table":
            return <TableBlock block={block} />;
        case "callout":
            return <CalloutBlock block={block} />;
        case "source-pages":
            return <SourcePagesBlock block={block} />;
        default: {
            const exhaustiveCheck: never = block;
            return exhaustiveCheck;
        }
    }
};
