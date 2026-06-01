import { courseGroups, procedureGroups, type NavigationNode } from "./ecsrStructure";

interface SharedSubItem {
    id: string;
    title: string;
    AnchorId: string;
    path?: string;
    class: string;
    children?: SharedSubItem[];
}

interface SharedMenuItem {
    id: string;
    title: string;
    class: string;
    path: string;
    svg: string;
    AnchorId?: string;
    subItems?: SharedSubItem[];
}

interface SharedMenuLinks {
    mainLink: SharedMenuItem[];
    reservation: SharedMenuItem[];
    search: SharedMenuItem[];
    connection: SharedMenuItem[];
}

const toSubItem = (node: NavigationNode): SharedSubItem => ({
    id: node.id,
    title: node.shortTitle ?? node.title,
    AnchorId: "#top",
    path: `${node.href}#top`,
    class: "",
    children: node.children?.map(toSubItem)
});

export const ecsrMenuItems: SharedMenuLinks = {
    mainLink: [
        {
            id: "menu-home",
            title: "Accueil",
            class: "",
            path: "/",
            AnchorId: "#top",
            svg: "Home",
            subItems: [
                {
                    id: "home-cours",
                    title: "Cours",
                    AnchorId: "#cours",
                    path: "/#cours",
                    class: ""
                },
                {
                    id: "home-fiches-pedagogiques",
                    title: "Fiches pédagogiques",
                    AnchorId: "#fiches-pedagogiques",
                    path: "/#fiches-pedagogiques",
                    class: ""
                },
                {
                    id: "home-procedures-conduite",
                    title: "Procédures de conduite",
                    AnchorId: "#procedures-conduite",
                    path: "/#procedures-conduite",
                    class: ""
                }
            ]
        },
        {
            id: "menu-cours",
            title: "Cours",
            class: "",
            path: "/cours",
            AnchorId: "#top",
            svg: "Services",
            subItems: courseGroups.map(toSubItem)
        },
        {
            id: "menu-fiches-pedagogiques",
            title: "Fiches pédagogiques",
            class: "",
            path: "/fiches-pedagogiques",
            AnchorId: "#top",
            svg: "Blog",
            subItems: [
                {
                    id: "fiches-index",
                    title: "Index des 62 fiches",
                    AnchorId: "#top",
                    path: "/fiches-pedagogiques#top",
                    class: ""
                }
            ]
        },
        {
            id: "menu-procedures-conduite",
            title: "Procédures de conduite",
            class: "",
            path: "/procedures-conduite",
            AnchorId: "#top",
            svg: "Tarifs",
            subItems: procedureGroups.map(toSubItem)
        }
    ],
    reservation: [],
    search: [],
    connection: []
};
