"use client";

import type { CourseBlock, RichInlineContent } from "../../types/course";
import { CalloutBlockEditor } from "./blocks/CalloutBlockEditor";
import { ComparisonCardEditor } from "./blocks/ComparisonCardEditor";
import { ImageCardEditor } from "./blocks/ImageCardEditor";
import { ListCardEditor } from "./blocks/ListCardEditor";
import { SequenceCardEditor } from "./blocks/SequenceCardEditor";
import { SourcePagesBlockEditor } from "./blocks/SourcePagesBlockEditor";
import { TableBlockEditor } from "./blocks/TableBlockEditor";
import { TextCardEditor } from "./blocks/TextCardEditor";

interface EditableBlockRendererProps {
    block: CourseBlock;
    courseSlug: string;
    onChange: (block: CourseBlock) => void;
    onDelete: () => void;
    onCreateSectionFromItem?: (item: RichInlineContent, itemIndex: number) => void;
}

export const EditableBlockRenderer = ({ block, courseSlug, onChange, onDelete, onCreateSectionFromItem }: EditableBlockRendererProps) => {
    switch (block.type) {
        case "text-card":
            return <TextCardEditor block={block} onChange={onChange} onDelete={onDelete} />;
        case "list-card":
            return <ListCardEditor block={block} onChange={onChange} onDelete={onDelete} onCreateSectionFromItem={onCreateSectionFromItem} />;
        case "image-card":
            return <ImageCardEditor block={block} courseSlug={courseSlug} onChange={onChange} onDelete={onDelete} />;
        case "comparison-card":
            return <ComparisonCardEditor block={block} courseSlug={courseSlug} onChange={onChange} onDelete={onDelete} />;
        case "sequence-card":
            return <SequenceCardEditor block={block} courseSlug={courseSlug} onChange={onChange} onDelete={onDelete} />;
        case "table":
            return <TableBlockEditor block={block} onChange={onChange} onDelete={onDelete} />;
        case "callout":
            return <CalloutBlockEditor block={block} onChange={onChange} onDelete={onDelete} />;
        case "source-pages":
            return <SourcePagesBlockEditor block={block} courseSlug={courseSlug} onChange={onChange} onDelete={onDelete} />;
        default: {
            const exhaustiveCheck: never = block;
            return exhaustiveCheck;
        }
    }
};
