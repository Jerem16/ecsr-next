import type { CourseBlock, CourseBlockType } from "../../types/course";

export const createDefaultBlock = (type: CourseBlockType): CourseBlock => {
    switch (type) {
        case "text-card":
            return {
                type: "text-card",
                id: "nouvelle-carte-texte",
                title: "Nouvelle carte texte",
                content: [{ type: "paragraph", text: "" }],
                keywords: [],
            };
        case "list-card":
            return {
                type: "list-card",
                id: "nouvelle-liste",
                title: "Nouvelle liste",
                intro: [{ type: "paragraph", text: "" }],
                items: [""],
                ordered: false,
                keywords: [],
            };
        case "image-card":
            return {
                type: "image-card",
                id: "nouvelle-image",
                title: "Nouvelle image",
                content: [{ type: "paragraph", text: "" }],
                image: {
                    src: "",
                    alt: "",
                    caption: "",
                    role: "illustration",
                },
                imagePosition: "right",
            };
        case "comparison-card":
            return {
                type: "comparison-card",
                id: "nouvelle-comparaison",
                title: "Nouvelle comparaison",
                intro: [{ type: "paragraph", text: "" }],
                items: [
                    {
                        title: "Élément 1",
                        content: [{ type: "paragraph", text: "" }],
                        image: {
                            src: "",
                            alt: "",
                            caption: "",
                            role: "comparaison",
                        },
                    },
                ],
                conclusion: [{ type: "paragraph", text: "" }],
            };
        case "sequence-card":
            return {
                type: "sequence-card",
                id: "nouvelle-sequence",
                title: "Nouvelle séquence",
                intro: "",
                parts: [
                    {
                        type: "text",
                        title: "Point pédagogique",
                        content: [{ type: "paragraph", text: "" }],
                    },
                ],
            };
        case "table":
            return {
                type: "table",
                id: "nouveau-tableau",
                title: "Nouveau tableau",
                caption: "",
                columns: ["Élément", "Contenu"],
                rows: [[{ label: "" }, { label: "" }]],
            };
        case "callout":
            return {
                type: "callout",
                id: "nouvel-encadre",
                title: "À retenir",
                content: [{ type: "paragraph", text: "" }],
                tone: "info",
            };
        case "source-pages":
            return {
                type: "source-pages",
                id: "pages-sources",
                title: "Pages sources",
                intro: [{ type: "paragraph", text: "" }],
                pages: [],
            };
        default: {
            const exhaustiveCheck: never = type;
            return exhaustiveCheck;
        }
    }
};
