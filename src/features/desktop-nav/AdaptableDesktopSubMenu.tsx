"use client";

import { memo, useMemo } from "react";
import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import type {
    MenuItem,
    SubItem,
} from "@/features/desktop-nav/data/interfaces/menu";
import { useNavigation } from "@/features/desktop-nav/core/context/NavigationContext";
import { makeInteractionHandlers } from "@/features/desktop-nav/core/utils/handlers";

interface DesktopSubMenuProps {
    menuItem: MenuItem;
    isOpen: boolean;
    onSubItemClick: (path: string) => void;
}

const getFullPath = (fallbackPath: string, item: SubItem): string =>
    item.path ?? `${fallbackPath}${item.AnchorId}`;

const AdaptableDesktopSubMenu = ({
    menuItem,
    isOpen,
    onSubItemClick,
}: DesktopSubMenuProps) => {
    const { setOpenSubMenu } = useNavigation();

    const interactionHandlers = useMemo(
        () =>
            makeInteractionHandlers<string>((path) => {
                onSubItemClick(path);
                setOpenSubMenu(null);
            }),
        [onSubItemClick, setOpenSubMenu]
    );

    const renderLink = (subItem: SubItem, fullPath: string, level: number) => (
        <a
            key={subItem.id}
            aria-label={`Section ${subItem.title}`}
            href={fullPath}
            className={`nav-link nav-link--level-${level} ${subItem.class}`}
            tabIndex={0}
            onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                interactionHandlers.onClick(fullPath, event)
            }
            onKeyDown={(event: KeyboardEvent<HTMLAnchorElement>) =>
                interactionHandlers.onKeyDown(fullPath, event)
            }
        >
            {subItem.title}
        </a>
    );

    const renderSubItems = (
        items: SubItem[],
        level = 0
    ): ReactNode =>
        items.map((subItem) => {
            const fullPath = getFullPath(menuItem.path, subItem);
            const hasChildren = Boolean(subItem.children?.length);

            if (hasChildren) {
                return (
                    <details className="submenu_branch" key={subItem.id}>
                        <summary className="submenu_summary">
                            {subItem.title}
                        </summary>
                        <a
                            aria-label={`Page ${subItem.title}`}
                            href={fullPath}
                            className={`nav-link nav-link--overview ${subItem.class}`}
                            tabIndex={0}
                            onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                                interactionHandlers.onClick(fullPath, event)
                            }
                            onKeyDown={(event: KeyboardEvent<HTMLAnchorElement>) =>
                                interactionHandlers.onKeyDown(fullPath, event)
                            }
                        >
                            Vue d’ensemble
                        </a>
                        <div className="submenu_nested">
                            {renderSubItems(subItem.children ?? [], level + 1)}
                        </div>
                    </details>
                );
            }

            return renderLink(subItem, fullPath, level);
        });

    if (!menuItem.subItems || menuItem.subItems.length === 0) return null;

    return (
        <div className={`submenu ${isOpen ? "open" : ""}`}>
            <div className="submenu_group">
                {renderSubItems(menuItem.subItems)}
            </div>
        </div>
    );
};

export default memo(AdaptableDesktopSubMenu);
