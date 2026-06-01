import { adaptableMenuData } from "@/features/desktop-nav/adapters/adaptableMenuData";

const baseAnchors = [
    "top",
    "cours",
    "fiches-pedagogiques",
    "procedures-conduite"
];

const collectAnchors = () => {
    const anchors = new Set<string>(baseAnchors);

    const collectFromItem = (anchorId?: string) => {
        if (!anchorId) return;
        const trimmed = anchorId.replace(/^#/, "");
        if (trimmed) {
            anchors.add(trimmed);
        }
    };

    adaptableMenuData.mainLink.forEach((item) => {
        collectFromItem(item.AnchorId);
        item.subItems?.forEach((subItem) => {
            collectFromItem(subItem.AnchorId);
        });
    });

    return Array.from(anchors).map((id) => ({ id }));
};

export const desktopSections = collectAnchors();
