import React from "react";
import MobileNav from "../../features/mobile-nav/components/MobileNav";
import AdaptableDesktopNav from "../../features/desktop-nav/AdaptableDesktopNav";

const NavInterface = () => {
    return (
        <>
            <AdaptableDesktopNav />
            <MobileNav />
        </>
    );
};

export default NavInterface;
