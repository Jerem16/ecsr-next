import type { MenuItem, SubItem } from "@/features/mobile-nav/types/menu";

const isMainItemActive = (itemPath: string, currentRoute: string): boolean => {
    if (itemPath === "/") {
        return currentRoute === "/" || currentRoute.startsWith("/#");
    }
    return currentRoute.startsWith(itemPath);
};

const getRoutePath = (route: string): string => route.split("#")[0] ?? "";

const mapSubItems = (
    subItems: SubItem[],
    activeSection: string,
    currentRoute: string
): SubItem[] =>
    subItems.map((sub) => {
        const targetPath = sub.path ? getRoutePath(sub.path) : "";
        const routePath = getRoutePath(currentRoute);
        const routeMatches = targetPath.length > 0 && routePath === targetPath;
        const anchorMatches =
            (targetPath.length === 0 || routeMatches) &&
            sub.AnchorId === `#${activeSection}`;
        const children = sub.children
            ? mapSubItems(sub.children, activeSection, currentRoute)
            : undefined;
        const hasActiveChild = Boolean(
            children?.some((child) =>
                child.class === "active" ||
                child.children?.some((grandChild) => grandChild.class === "active")
            )
        );

        return {
            ...sub,
            class: routeMatches || anchorMatches || hasActiveChild ? "active" : "",
            children,
        };
    });

export const updateMenuClasses = (
    mainLink: MenuItem[] = [],
    activeSection = "",
    currentRoute = ""
) => ({
    mainLink: mainLink.map((item) => ({
        ...item,
        class: isMainItemActive(item.path, currentRoute) ? "active" : "",
        subItems: item.subItems ? mapSubItems(item.subItems, activeSection, currentRoute) : undefined,
    })),
});
