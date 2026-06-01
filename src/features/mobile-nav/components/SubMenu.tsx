"use client";

import { useMemo, memo } from "react";
import type { MouseEvent, ReactNode } from "react";
import type { MenuItem } from "../data/menuItems";
import type { SubItem } from "../types/menu";
import { useNavigation } from "@/features/mobile-nav/core/context/NavigationContext";
import { makePayloadClickHandler } from "@/features/mobile-nav/core/utils/handlers";

interface SubMenuProps {
    menuItem: MenuItem;
    isOpen: boolean;
    onSubItemClick: (path: string) => void;
}

const getFullPath = (fallbackPath: string, item: SubItem): string =>
    item.path ?? `${fallbackPath}${item.AnchorId}`;

const SubMenu = ({ menuItem, isOpen, onSubItemClick }: SubMenuProps) => {
    const { closeHamburgerMenu } = useNavigation();

    const handleSubItemClick = useMemo(
        () =>
            makePayloadClickHandler<string>(onSubItemClick, {
                close: closeHamburgerMenu,
                delay: 650,
            }),
        [onSubItemClick, closeHamburgerMenu]
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
                    <details
                        className="mnav__submenu-branch"
                        key={subItem.id}
                    >
                        <summary className="mnav__submenu-summary">
                            {subItem.title}
                        </summary>
                        <a
                            aria-label={`Page ${subItem.title}`}
                            href={fullPath}
                            className={`mnav__sublink mnav__sublink--overview ${subItem.class}`}
                            tabIndex={0}
                            onClick={(event: MouseEvent<HTMLAnchorElement>) => handleSubItemClick(fullPath, event)}
                        >
                            Vue d’ensemble
                        </a>
                        <div className="mnav__submenu-nested">
                            {renderSubItems(subItem.children ?? [], level + 1)}
                        </div>
                    </details>
                );
            }

            return (
                <a
                    key={subItem.id}
                    aria-label={`Section ${subItem.title}`}
                    href={fullPath}
                    className={`mnav__sublink mnav__sublink--level-${level} ${subItem.class}`}
                    tabIndex={0}
                    onClick={(event: MouseEvent<HTMLAnchorElement>) => handleSubItemClick(fullPath, event)}
                >
                    {subItem.title}
                </a>
            );
        });

    if (!menuItem.subItems || menuItem.subItems.length === 0) return null;

    return (
        <div
            className={`mnav__submenu ${isOpen ? "open" : ""}`}
            id={`submenu-${menuItem.id}`}
        >
            <div className="mnav__submenu-group">
                {isOpen && renderSubItems(menuItem.subItems)}
            </div>
        </div>
    );
};

export default memo(SubMenu);
