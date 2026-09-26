import type { ReactNode } from "react";
import type { CardColor } from "./car-color";

export type DashboardItemType = {
  id: number;
  title: string;
  icon: ReactNode;
  link: string;
  count: number;
  color: CardColor;
};
