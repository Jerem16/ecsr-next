export type CourseBlock =
    | TextCardBlock
    | ListCardBlock
    | ImageCardBlock
    | ComparisonCardBlock
    | SequenceCardBlock
    | TableBlock
    | CalloutBlock
    | SourcePagesBlock;

export type CourseBlockType = CourseBlock["type"];

export interface CourseImage {
    src: string;
    alt: string;
    caption?: string;
    role?: "schema" | "illustration" | "comparaison" | "contexte" | "source";
}

export interface RichTextSegment {
    text: string;
    strong?: boolean;
    italic?: boolean;
    href?: string;
}

export type RichInlineContent = string | RichTextSegment | RichTextSegment[];

export interface RichParagraphNode {
    type: "paragraph";
    text: RichInlineContent;
    strong?: boolean;
    italic?: boolean;
}

export interface RichListNode {
    type: "list";
    ordered?: boolean;
    items: RichInlineContent[];
}

export interface RichKeyValueItem {
    label: string;
    value: RichInlineContent;
}

export interface RichKeyValuesNode {
    type: "key-values";
    items: RichKeyValueItem[];
}

export interface RichNoteNode {
    type: "note";
    label?: string;
    text: RichInlineContent;
}

export interface RichSourceItem {
    label: string;
    href: string;
}

export interface RichSourcesNode {
    type: "sources";
    label?: string;
    items: RichSourceItem[];
}

export type RichContentNode =
    | RichParagraphNode
    | RichListNode
    | RichKeyValuesNode
    | RichNoteNode
    | RichSourcesNode;

export type RichBlockContent = string[] | RichContentNode[];
export type RichSingleContent = string | RichContentNode[];

export interface TextCardBlock {
    type: "text-card";
    id?: string;
    title: string;
    content: RichBlockContent;
    keywords?: string[];
}

export interface ListCardBlock {
    type: "list-card";
    id?: string;
    title: string;
    intro?: RichSingleContent;
    items: RichInlineContent[];
    ordered?: boolean;
    keywords?: string[];
}

export interface ImageCardBlock {
    type: "image-card";
    id?: string;
    title: string;
    content: RichBlockContent;
    image: CourseImage;
    imagePosition?: "left" | "right";
}

export interface ComparisonItem {
    title: string;
    content: RichSingleContent;
    image: CourseImage;
}

export interface ComparisonCardBlock {
    type: "comparison-card";
    id?: string;
    title: string;
    intro?: RichSingleContent;
    items: ComparisonItem[];
    conclusion?: RichSingleContent;
}

export interface SequenceFigurePart {
    type: "figure";
    title: string;
    image: CourseImage;
    content: RichContentNode[];
}

export interface SequenceAlertPart {
    type: "alert";
    tone?: "info" | "warning" | "success";
    content: RichContentNode[];
}

export interface SequenceTextPart {
    type: "text";
    title?: string;
    content: RichContentNode[];
}

export type SequenceCardPart = SequenceFigurePart | SequenceAlertPart | SequenceTextPart;

export interface TableCell {
    label: string;
    strong?: boolean;
}

export interface TableBlock {
    type: "table";
    id?: string;
    title: string;
    caption: string;
    columns: string[];
    rows: TableCell[][];
}

export interface CalloutBlock {
    type: "callout";
    id?: string;
    title: string;
    content: RichSingleContent;
    tone?: "info" | "warning" | "success";
}

export interface CourseSourcePage {
    page: number;
    title: string;
    image: string;
    alt: string;
    transcript: string[];
}

export interface SourcePagesBlock {
    type: "source-pages";
    id?: string;
    title: string;
    intro?: RichSingleContent;
    pages: CourseSourcePage[];
}

export interface CourseSection {
    id: string;
    title: string;
    intro?: RichSingleContent;
    blocks: CourseBlock[];
}

export interface Course {
    slug: string;
    title: string;
    category: string;
    summary: RichSingleContent;
    objectives: string[];
    objectivesOrdered?: boolean;
    sections: CourseSection[];
}
