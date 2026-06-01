import type { MenuLinks, MenuItem } from "../types/menu";
import { ecsrMenuItems } from "@/features/navigation/data/ecsrMenu";

export const menuItems: MenuLinks = ecsrMenuItems as unknown as MenuLinks;

export type { MenuItem };
