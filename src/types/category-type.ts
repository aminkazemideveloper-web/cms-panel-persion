import type { ReactNode } from "react";
import type { CardColor } from "./car-color";

export type Category = {
  id: number;
  label: string;
  link: string;
  icon: ReactNode;
  color: CardColor;
};
