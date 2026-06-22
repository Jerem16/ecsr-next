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
        output = <strong>{output}</strong>;
    }

    if (segment.href) {
        const isInternalAnchor = segment.href.startsWith("#");

        output = isInternalAnchor ? (
            <a href={segment.href}>{output}</a>
        ) : (
            <a href={segment.href} target="_blank" rel="noopener noreferrer">
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
        <div className="course-rich-content">
            {content.map((node, index) => {
                const key = `rich-content-${index}`;

                switch (node.type) {
                    case "paragraph": {
                        let paragraphContent: ReactNode = renderInlineContent(node.text, key);

                        if (node.italic) {
                            paragraphContent = <em>{paragraphContent}</em>;
                        }

                        if (node.strong) {
                            paragraphContent = <strong>{paragraphContent}</strong>;
                        }

                        return (
                            <p key={key} className={node.strong ? "course-rich-content__strong" : undefined}>
                                {paragraphContent}
                            </p>
                        );
                    }
                    case "list": {
                        const ListTag = node.ordered ? "ol" : "ul";
                        const className = node.ordered
                            ? "course-rich-content__list course-rich-content__list--ordered"
                            : "course-rich-content__list";

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
                            <dl key={key} className="course-rich-content__key-values">
                                {node.items.map((item) => (
                                    <div key={`${item.label}-${typeof item.value === "string" ? item.value : item.label}`}>
                                        <dt>{item.label}</dt>
                                        <dd>{renderInlineContent(item.value, `${key}-${item.label}`)}</dd>
                                    </div>
                                ))}
                            </dl>
                        );
                    case "note":
                        return (
                            <p key={key} className="course-rich-content__note">
                                <strong>{node.label ?? "Note"} :</strong> {renderInlineContent(node.text, key)}
                            </p>
                        );
                    case "sources":
                        return (
                            <p key={key} className="course-rich-content__sources">
                                <strong>{node.label ?? "Sources"} :</strong>{" "}
                                {node.items.map((item, itemIndex) => (
                                    <span key={item.href}>
                                        <a href={item.href} target="_blank" rel="noopener noreferrer">
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
