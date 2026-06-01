import type { MenuLinks } from "./interfaces/menu";
import { ecsrMenuItems } from "@/features/navigation/data/ecsrMenu";

export const menuItems: MenuLinks = ecsrMenuItems as unknown as MenuLinks;

export type { MenuItem } from "./interfaces/menu";
