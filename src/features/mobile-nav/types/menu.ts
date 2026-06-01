import type { SvgIconName } from "../components/svgComponents";

export interface SubItem {
    id: string;
    title: string;
    AnchorId: string;
    path?: string;
    class: string;
    children?: SubItem[];
}

export interface MenuItem {
    id: string;
    title: string;
    class?: string;
    path: string;
    svg: SvgIconName;
    subItems?: SubItem[];
    AnchorId?: string;
}

export interface MenuLinks {
    mainLink: MenuItem[];
    reservation?: MenuItem[];
    search?: MenuItem[];
    connection?: MenuItem[];
}
