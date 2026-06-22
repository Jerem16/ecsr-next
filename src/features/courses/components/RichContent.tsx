import type { ReactNode } from "react";
import type {
    RichBlockContent,
    RichContentNode,
    RichInlineContent,
    RichSingleContent,
    RichTextSegment,
} from "../types/course";

interface RichContentProps {
    content: RichContentNode[];
}

const richContentClassName = "course-rich-content grid min-w-0 gap-2.5";
const paragraphClassName = "m-0 text-[var(--course-muted)] leading-[1.68]";
const strongParagraphClassName = "course-rich-content__strong m-0 font-black text-[var(--course-primary)] leading-[1.68]";
const strongClassName = "font-black text-[var(--course-primary)]";
const richLinkClassName = "font-extrabold text-[var(--course-primary)] underline underline-offset-[3px] [overflow-wrap:anywhere] hover:text-[var(--course-accent)] focus-visible:text-[var(--course-accent)] focus-visible:outline-none";
const listClassName = "course-rich-content__list mt-3.5 grid gap-[0.45rem] pl-[1.45rem] marker:font-black marker:text-[var(--course-accent)]";

const isRecord = (value: unknown): value is Record<string, unknown> => {
    return typeof value === "object" && value !== null;
};

const isTextSegment = (content: RichInlineContent): content is RichTextSegment => {
    return isRecord(content) && typeof content.text === "string";
};

export const isRichContentNodes = (content: RichBlockContent | RichSingleContent): content is RichContentNode[] => {
    return Array.isArray(content) && content.some((item) => isRecord(item) && typeof item.type === "string");
};

export const blockContentToRichContent = (content: RichBlockContent): RichContentNode[] => {
    if (isRichContentNodes(content)) {
        return content;
    }

    return content.map((paragraph) => ({
        type: "paragraph",
        text: paragraph,
    }));
};

export const singleContentToRichContent = (content: RichSingleContent | undefined): RichContentNode[] => {
    if (!content) {
        return [];
    }

    if (isRichContentNodes(content)) {
        return content;
    }

    return [
        {
            type: "paragraph",
            text: content,
        },
    ];
};

const renderSegment = (segment: RichTextSegment, key: string): ReactNode => {
    let output: ReactNode = segment.text;

    if (segment.italic) {
        output = <em>{output}</em>;
    }

    if (segment.strong) {
        output = <strong className={strongClassName}>{output}</strong>;
    }

    if (segment.href) {
        const isInternalAnchor = segment.href.startsWith("#");

        output = isInternalAnchor ? (
            <a className={richLinkClassName} href={segment.href}>{output}</a>
        ) : (
            <a className={richLinkClassName} href={segment.href} target="_blank" rel="noopener noreferrer">
                {output}
            </a>
        );
    }

    return <span key={key}>{output}</span>;
};

export const renderInlineContent = (content: RichInlineContent, keyPrefix: string): ReactNode => {
    if (typeof content === "string") {
        return content;
    }

    if (Array.isArray(content)) {
        return content.map((segment, index) => renderSegment(segment, `${keyPrefix}-${index}`));
    }

    if (isTextSegment(content)) {
        return renderSegment(content, keyPrefix);
    }

    return null;
};

export const RichContent = ({ content }: RichContentProps) => {
    return (
        <div className={richContentClassName}>
            {content.map((node, index) => {
                const key = `rich-content-${index}`;

                switch (node.type) {
                    case "paragraph": {
                        let paragraphContent: ReactNode = renderInlineContent(node.text, key);

                        if (node.italic) {
                            paragraphContent = <em>{paragraphContent}</em>;
                        }

                        if (node.strong) {
                            paragraphContent = <strong className={strongClassName}>{paragraphContent}</strong>;
                        }

                        return (
                            <p key={key} className={node.strong ? strongParagraphClassName : paragraphClassName}>
                                {paragraphContent}
                            </p>
                        );
                    }
                    case "list": {
                        const ListTag = node.ordered ? "ol" : "ul";
                        const className = node.ordered
                            ? `${listClassName} course-rich-content__list--ordered list-decimal`
                            : `${listClassName} list-disc`;

                        return (
                            <ListTag key={key} className={className}>
                                {node.items.map((item, itemIndex) => (
                                    <li key={`${key}-item-${itemIndex}`}>
                                        {renderInlineContent(item, `${key}-item-${itemIndex}`)}
                                    </li>
                                ))}
                            </ListTag>
                        );
                    }
                    case "key-values":
                        return (
                            <dl key={key} className="course-rich-content__key-values m-0 grid gap-2">
                                {node.items.map((item) => (
                                    <div
                                        className="grid grid-cols-[minmax(110px,0.28fr)_minmax(0,1fr)] items-baseline gap-2 max-[520px]:grid-cols-1"
                                        key={`${item.label}-${typeof item.value === "string" ? item.value : item.label}`}
                                    >
                                        <dt className="font-black text-[var(--course-primary)]">{item.label}</dt>
                                        <dd className={paragraphClassName}>{renderInlineContent(item.value, `${key}-${item.label}`)}</dd>
                                    </div>
                                ))}
                            </dl>
                        );
                    case "note":
                        return (
                            <p key={key} className={`course-rich-content__note rounded-[14px] bg-[var(--course-primary-soft)] px-3.5 py-3 ${paragraphClassName}`}>
                                <strong className={strongClassName}>{node.label ?? "Note"} :</strong> {renderInlineContent(node.text, key)}
                            </p>
                        );
                    case "sources":
                        return (
                            <p key={key} className={`course-rich-content__sources text-[0.92rem] ${paragraphClassName}`}>
                                <strong className={strongClassName}>{node.label ?? "Sources"} :</strong>{" "}
                                {node.items.map((item, itemIndex) => (
                                    <span key={item.href}>
                                        <a className={richLinkClassName} href={item.href} target="_blank" rel="noopener noreferrer">
                                            {item.label}
                                        </a>
                                        {itemIndex < node.items.length - 1 ? " / " : "."}
                                    </span>
                                ))}
                            </p>
                        );
                    default: {
                        const exhaustiveCheck: never = node;
                        return exhaustiveCheck;
                    }
                }
            })}
        </div>
    );
};
