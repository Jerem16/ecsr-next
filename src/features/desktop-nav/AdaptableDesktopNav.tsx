"use client";

import { memo, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
    NavigationProvider,
    useNavigation
} from "@/features/desktop-nav/core/context/NavigationContext";
import {
    ScrollProvider,
    useScrollContext
} from "@/features/desktop-nav/core/context/ScrollContext";
import {
    handleNavClick,
    handleScrollClick
} from "@/features/desktop-nav/core/utils/fnScrollUtils";
import {
    updateMenuClasses,
    useMenuBehavior
} from "@/features/desktop-nav/core/utils/updateMenuUtils";
import useResize from "@/features/desktop-nav/hooks/useResize";
import { adaptableMenuData } from "@/features/desktop-nav/adapters/adaptableMenuData";
import { useInitialScrollDesktop } from "@/features/desktop-nav/adapters/useInitialScrollDesktop";
import AdaptableDesktopNavItem from "./AdaptableDesktopNavItem";
import Logo from "@/components/00-Header/Logo";
import DesktopScrollSectionsWrapper from "./DesktopScrollSectionsWrapper";

const DesktopNavContent = () => {
    const {
        currentRoute,
        updateRoute,
        openSubMenu,
        setOpenSubMenu
    } = useNavigation();
    const { activeSection } = useScrollContext();
    const { navRef } = useMenuBehavior();
    const pathname = usePathname();
    const [tabletMain, setTabletMain] = useState(true);
    const [openMainButton, setOpenMainButton] = useState(true);
    const [openButton, setOpenButton] = useState(true);
    const [bigMenu, setBigMenu] = useState(true);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [lastClickedMenu, setLastClickedMenu] = useState<string | null>(null);

    useResize(setTabletMain, setOpenMainButton, setOpenButton, setBigMenu);
    useInitialScrollDesktop(pathname);

    const updatedMenuItems = useMemo(
        () =>
            updateMenuClasses(
                adaptableMenuData.mainLink,
                [],
                [],
                [],
                activeSection,
                currentRoute
            ),
        [activeSection, currentRoute]
    );

    const showLink = (menuId: string) => {
        setOpenMenu(menuId);
        if (lastClickedMenu === menuId && openMenu !== "main") {
            return;
        }
        setLastClickedMenu(menuId);
        setOpenMenu(openMenu === menuId ? null : menuId);
    };

    const handleMouseOrFocus = (menuId: string) => {
        showLink(menuId);
        if (!bigMenu) {
            setOpenMainButton(false);
        }
    };

    const handleMainMouseOrFocus = (menuId: string) => {
        handleMouseOrFocus(menuId);
        setOpenMainButton(true);
    };

    const handleNavigationClick = (path: string) => {
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
    };

    return (
        <header className="nav-bar" role="banner">
            <Logo />
            <div className="desktop-adaptable-nav desktop-adaptable-nav--ecsr">
                <div className="header">
                    <div className="head-flex head-flex--ecsr">
                        <nav
                            ref={navRef}
                            className="main-nav main-nav--ecsr"
                            aria-label="Navigation principale des supports ECSR"
                            onMouseEnter={() =>
                                !tabletMain
                                    ? undefined
                                    : handleMainMouseOrFocus("")
                            }
                            onFocus={() =>
                                !tabletMain
                                    ? undefined
                                    : handleMainMouseOrFocus("")
                            }
                        >
                            {updatedMenuItems.mainLink.map(menuItem => (
                                <AdaptableDesktopNavItem
                                    openMainButton={openMainButton}
                                    openButton={openButton}
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    onNavigationClick={handleNavigationClick}
                                    isOpen={openSubMenu === menuItem.id}
                                    handleMenuClick={menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
                                    }
                                    showNavLinks={
                                        openMainButton ||
                                        openButton ||
                                        openMenu === menuItem.id
                                    }
                                    onMouseEnter={() =>
                                        handleMouseOrFocus(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleMouseOrFocus(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

const AdaptableDesktopNav = () => {
    return (
        <NavigationProvider>
            <ScrollProvider>
                <DesktopScrollSectionsWrapper />
                <DesktopNavContent />
            </ScrollProvider>
        </NavigationProvider>
    );
};

export default memo(AdaptableDesktopNav);
