"use client";

import { useEffect, useMemo, useState } from "react";
import type { CourseSection } from "../types/course";

interface CourseSidebarProps {
    sections: CourseSection[];
}

export const CourseSidebar = ({ sections }: CourseSidebarProps) => {
    const [activeSection, setActiveSection] = useState("course-top");
    const links = useMemo(
        () => [
                { id: "course-top", title: "Introduction" },
                { id: "objectifs", title: "Objectifs pédagogiques" },
                ...sections.map(({ id, title }) => ({ id, title }))
            ],
        [sections]
    );

    useEffect(() => {
        const nodes = links
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
                threshold: [0.15, 0.35, 0.6]
            }
        );

        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, [links]);

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
                        </li>
                    ))}
                </ol>
            </nav>
        </aside>
    );
};
