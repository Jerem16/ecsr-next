"use client";

import { useEffect, useRef } from "react";
import { useScrollContext } from "../context/ScrollContext";
import {
    addNewUrl,
    updateSectionClasses,
    scrollInView,
    currentSectionId
} from "../utils/sections";

interface SectionRef {
    id: string;
}

const collectDomSections = (fallbackSections: SectionRef[]): SectionRef[] => {
    const domSections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]")
    ).map((section) => ({ id: section.id }));

    return domSections.length > 0 ? domSections : fallbackSections;
};

export const useDesktopScrollAnchors = (sections: SectionRef[]) => {
    const { setActiveSection } = useScrollContext();
    const sectionsRef = useRef<SectionRef[]>(sections);

    useEffect(() => {
        const handleScroll = () => {
            const currentSections = collectDomSections(sections);
            sectionsRef.current = currentSections;
            scrollInView(currentSections);
            addNewUrl(currentSectionId);
            updateSectionClasses(currentSections, setActiveSection);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [sections, setActiveSection]);
};
