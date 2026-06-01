import type { RichContentNode, RichInlineContent, RichTextSegment } from "../../types/course";

const escapeHtml = (value: string): string => {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

const segmentToHtml = (segment: RichTextSegment): string => {
    let output = escapeHtml(segment.text);

    if (segment.italic) {
        output = `<em>${output}</em>`;
    }

    if (segment.strong) {
        output = `<strong>${output}</strong>`;
    }

    if (segment.href) {
        output = `<a href="${escapeHtml(segment.href)}">${output}</a>`;
    }

    return output;
};

const inlineToHtml = (content: RichInlineContent): string => {
    if (typeof content === "string") {
        return escapeHtml(content);
    }

    if (Array.isArray(content)) {
        return content.map(segmentToHtml).join("");
    }

    return segmentToHtml(content);
};

export const richContentNodesToHtml = (nodes: RichContentNode[]): string => {
    return nodes
        .map((node) => {
            switch (node.type) {
                case "paragraph": {
                    let innerHtml = inlineToHtml(node.text);

                    if (node.italic) {
                        innerHtml = `<em>${innerHtml}</em>`;
                    }

                    if (node.strong) {
                        innerHtml = `<strong>${innerHtml}</strong>`;
                    }

                    return `<p>${innerHtml}</p>`;
                }
                case "list": {
                    const tagName = node.ordered ? "ol" : "ul";
                    const items = node.items.map((item) => `<li>${inlineToHtml(item)}</li>`).join("");
                    return `<${tagName}>${items}</${tagName}>`;
                }
                case "key-values":
                    return node.items
                        .map((item) => `<p><strong>${escapeHtml(item.label)} :</strong> ${inlineToHtml(item.value)}</p>`)
                        .join("");
                case "note":
                    return `<p><strong>${escapeHtml(node.label ?? "Note")} :</strong> ${inlineToHtml(node.text)}</p>`;
                case "sources":
                    return `<p><strong>${escapeHtml(node.label ?? "Sources")} :</strong> ${node.items
                        .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
                        .join(" / ")}</p>`;
                default: {
                    const exhaustiveCheck: never = node;
                    return exhaustiveCheck;
                }
            }
        })
        .join("");
};

interface InlineMarkState {
    strong: boolean;
    italic: boolean;
    href?: string;
}

const isHTMLElement = (node: Node): node is HTMLElement => {
    return node.nodeType === Node.ELEMENT_NODE;
};

const mergeSegment = (segments: RichTextSegment[], segment: RichTextSegment): RichTextSegment[] => {
    const previous = segments.at(-1);

    if (
        previous &&
        previous.strong === segment.strong &&
        previous.italic === segment.italic &&
        previous.href === segment.href
    ) {
        previous.text += segment.text;
        return segments;
    }

    return [...segments, segment];
};

const readInlineSegments = (node: Node, marks: InlineMarkState): RichTextSegment[] => {
    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent ?? "";

        if (!text) {
            return [];
        }

        return [
            {
                text,
                strong: marks.strong || undefined,
                italic: marks.italic || undefined,
                href: marks.href,
            },
        ];
    }

    if (!isHTMLElement(node)) {
        return [];
    }

    const tagName = node.tagName.toLowerCase();
    const nextMarks: InlineMarkState = {
        strong: marks.strong || tagName === "strong" || tagName === "b",
        italic: marks.italic || tagName === "em" || tagName === "i",
        href: tagName === "a" ? node.getAttribute("href") ?? undefined : marks.href,
    };

    return Array.from(node.childNodes).reduce<RichTextSegment[]>((segments, childNode) => {
        const childSegments = readInlineSegments(childNode, nextMarks);
        return childSegments.reduce<RichTextSegment[]>(mergeSegment, segments);
    }, []);
};

const segmentsToInlineContent = (segments: RichTextSegment[]): RichInlineContent => {
    if (segments.length === 0) {
        return "";
    }

    const isPlainText = segments.every((segment) => !segment.strong && !segment.italic && !segment.href);

    if (isPlainText) {
        return segments.map((segment) => segment.text).join("");
    }

    return segments;
};

const readElementAsInlineContent = (element: Element): RichInlineContent => {
    const segments = Array.from(element.childNodes).reduce<RichTextSegment[]>((segments, childNode) => {
        const childSegments = readInlineSegments(childNode, { strong: false, italic: false });
        return childSegments.reduce<RichTextSegment[]>(mergeSegment, segments);
    }, []);

    return segmentsToInlineContent(segments);
};

export const htmlToRichContentNodes = (html: string): RichContentNode[] => {
    if (typeof window === "undefined") {
        return [];
    }

    const parser = new DOMParser();
    const document = parser.parseFromString(html, "text/html");
    const nodes: RichContentNode[] = [];

    document.body.childNodes.forEach((childNode) => {
        if (childNode.nodeType === Node.TEXT_NODE) {
            const text = childNode.textContent?.trim();

            if (text) {
                nodes.push({ type: "paragraph", text });
            }

            return;
        }

        if (!isHTMLElement(childNode)) {
            return;
        }

        const tagName = childNode.tagName.toLowerCase();

        if (tagName === "ul" || tagName === "ol") {
            nodes.push({
                type: "list",
                ordered: tagName === "ol" || undefined,
                items: Array.from(childNode.querySelectorAll(":scope > li")).map(readElementAsInlineContent),
            });
            return;
        }

        if (tagName === "p" || tagName === "div" || tagName.match(/^h[1-6]$/)) {
            nodes.push({
                type: "paragraph",
                text: readElementAsInlineContent(childNode),
            });
        }
    });

    if (nodes.length === 0) {
        return [{ type: "paragraph", text: "" }];
    }

    return nodes;
};
