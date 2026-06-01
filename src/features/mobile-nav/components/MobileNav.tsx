"use client";
import { memo } from "react";
import MobileHeader from "./MobileHeader";
import { NavigationProvider } from "@/features/mobile-nav/core/context/NavigationContext";
import ScrollProvider from "@/features/mobile-nav/core/context/ScrollContext";
import { useScrollAnchors } from "@/features/mobile-nav/core/hooks/useScrollAnchors";
import { useMobileBreakpoint } from "@hooks/useMobileBreakpoint";

const MobileNavContent = () => {
    useScrollAnchors([
        { id: "top" },
        { id: "cours" },
        { id: "fiches-pedagogiques" },
        { id: "procedures-conduite" },
        { id: "droit-reglementation" },
        { id: "circulation-routiere" },
        { id: "conducteur-conduite" },
        { id: "vehicules" },
        { id: "pedagogie-ecsr" }
    ]);
    return (
        <div className="mnav">
            <MobileHeader />
        </div>
    );
};

const MobileNav = () => {
    const isMobile = useMobileBreakpoint(1024);

    if (!isMobile) return null;

    return (
        <NavigationProvider>
            <ScrollProvider>
                <MobileNavContent />
            </ScrollProvider>
        </NavigationProvider>
    );
};

export default memo(MobileNav);
//mnav__bar
