"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import type { CourseBlock, CourseSection } from "../types/course";

interface CourseSidebarProps {
    sections: CourseSection[];
}

interface CourseSidebarChildLink {
    id: string;
    title: string;
}

interface CourseSidebarLink {
    id: string;
    title: string;
    children: CourseSidebarChildLink[];
}

const getBlockTitle = (block: CourseBlock): string => {
    return block.title || "Carte sans titre";
};

const getCssPixelValue = (value: string): number => {
    const parsedValue = Number.parseFloat(value);
    return Number.isFinite(parsedValue) ? parsedValue : 0;
};

const getAnchorOffset = (): number => {
    const rootStyle = window.getComputedStyle(document.documentElement);
    const fallbackOffset = getCssPixelValue(rootStyle.getPropertyValue("--scroll-offset")) || 132;
    const declaredOffset = getCssPixelValue(rootStyle.getPropertyValue("--course-anchor-offset"));
    const toolbar = document.querySelector<HTMLElement>(".course-edit-toolbar");
    const toolbarHeight = toolbar ? toolbar.getBoundingClientRect().height : 0;

    return Math.max(declaredOffset, fallbackOffset + toolbarHeight + 18);
};

export const CourseSidebar = ({ sections }: CourseSidebarProps) => {
    const [activeSection, setActiveSection] = useState("course-top");
    const manualScrollTimeoutRef = useRef<number | null>(null);
    const isManualScrollRef = useRef(false);

    const links = useMemo<CourseSidebarLink[]>(
        () => [
            { id: "course-top", title: "Introduction", children: [] },
            { id: "objectifs", title: "Objectifs pédagogiques", children: [] },
            ...sections.map((section) => ({
                id: section.id,
                title: section.title || "Section sans titre",
                children: section.blocks
                    .filter((block) => Boolean(block.id))
                    .map((block) => ({ id: block.id ?? "", title: getBlockTitle(block) })),
            })),
        ],
        [sections],
    );

    const flatLinks = useMemo<CourseSidebarChildLink[]>(
        () => links.flatMap((link) => [{ id: link.id, title: link.title }, ...link.children]),
        [links],
    );

    const releaseManualScrollLock = useCallback(() => {
        if (manualScrollTimeoutRef.current) {
            window.clearTimeout(manualScrollTimeoutRef.current);
        }

        manualScrollTimeoutRef.current = window.setTimeout(() => {
            isManualScrollRef.current = false;
        }, 850);
    }, []);

    const scrollToLink = useCallback(
        (event: MouseEvent<HTMLAnchorElement>, id: string) => {
            const target = document.getElementById(id);

            if (!target) {
                return;
            }

            event.preventDefault();
            isManualScrollRef.current = true;
            setActiveSection(id);
            releaseManualScrollLock();

            const targetTop = target.getBoundingClientRect().top + window.scrollY - getAnchorOffset();
            window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
            window.history.replaceState(null, "", `#${id}`);
        },
        [releaseManualScrollLock],
    );

    useEffect(() => {
        const updateActiveLink = () => {
            if (isManualScrollRef.current) {
                return;
            }

            const anchorOffset = getAnchorOffset();
            const candidates = flatLinks
                .map((link) => {
                    const node = document.getElementById(link.id);

                    if (!node) {
                        return null;
                    }

                    return {
                        id: link.id,
                        top: node.getBoundingClientRect().top - anchorOffset,
                    };
                })
                .filter((candidate): candidate is { id: string; top: number } => candidate !== null);

            if (candidates.length === 0) {
                return;
            }

            const visibleOrPassedCandidates = candidates.filter((candidate) => candidate.top <= 16);
            const nextActive = visibleOrPassedCandidates.length > 0
                ? visibleOrPassedCandidates[visibleOrPassedCandidates.length - 1]
                : candidates.reduce((closest, candidate) => (Math.abs(candidate.top) < Math.abs(closest.top) ? candidate : closest));

            setActiveSection(nextActive.id);
        };

        let animationFrameId = 0;
        const scheduleUpdate = () => {
            window.cancelAnimationFrame(animationFrameId);
            animationFrameId = window.requestAnimationFrame(updateActiveLink);
        };

        scheduleUpdate();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            if (manualScrollTimeoutRef.current) {
                window.clearTimeout(manualScrollTimeoutRef.current);
            }
        };
    }, [flatLinks]);

    return (
        <aside className="course-sidebar" aria-label="Sommaire du cours">
            <nav className="course-sidebar__card">
                <p className="course-sidebar__label">Sommaire</p>
                <ol>
                    {links.map((link) => {
                        const isParentActive = activeSection === link.id || link.children.some((childLink) => childLink.id === activeSection);

                        return (
                            <li key={link.id}>
                                <a
                                    className={isParentActive ? "active" : ""}
                                    href={`#${link.id}`}
                                    onClick={(event) => scrollToLink(event, link.id)}
                                >
                                    {link.title}
                                </a>
                                {link.children.length > 0 ? (
                                    <ol className="course-sidebar__children" aria-label={`Cartes de la section ${link.title}`}>
                                        {link.children.map((childLink) => (
                                            <li key={childLink.id}>
                                                <a
                                                    className={activeSection === childLink.id ? "active" : ""}
                                                    href={`#${childLink.id}`}
                                                    onClick={(event) => scrollToLink(event, childLink.id)}
                                                >
                                                    {childLink.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ol>
                                ) : null}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </aside>
    );
};
