"use client";

import { useEffect, useMemo, useState } from "react";
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
    return block.title;
};

export const CourseSidebar = ({ sections }: CourseSidebarProps) => {
    const [activeSection, setActiveSection] = useState("course-top");
    const links = useMemo<CourseSidebarLink[]>(
        () => [
            { id: "course-top", title: "Introduction", children: [] },
            { id: "objectifs", title: "Objectifs pédagogiques", children: [] },
            ...sections.map((section) => ({
                id: section.id,
                title: section.title,
                children: section.blocks
                    .filter((block) => Boolean(block.id))
                    .map((block) => ({ id: block.id ?? "", title: getBlockTitle(block) })),
            })),
        ],
        [sections],
    );
    const flatLinks = useMemo(
        () => links.flatMap((link) => [link, ...link.children]),
        [links],
    );

    useEffect(() => {
        const nodes = flatLinks
            .map((link) => document.getElementById(link.id))
            .filter((node): node is HTMLElement => node !== null);

        if (nodes.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                const firstVisible = visibleEntries[0]?.target;
                if (firstVisible?.id) {
                    setActiveSection(firstVisible.id);
                }
            },
            {
                root: null,
                rootMargin: "-120px 0px -55% 0px",
                threshold: [0.15, 0.35, 0.6],
            },
        );

        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, [flatLinks]);

    return (
        <aside className="course-sidebar" aria-label="Sommaire du cours">
            <nav className="course-sidebar__card">
                <p className="course-sidebar__label">Sommaire</p>
                <ol>
                    {links.map((link) => (
                        <li key={link.id}>
                            <a
                                className={activeSection === link.id ? "active" : ""}
                                href={`#${link.id}`}
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
                                            >
                                                {childLink.title}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            ) : null}
                        </li>
                    ))}
                </ol>
            </nav>
        </aside>
    );
};
