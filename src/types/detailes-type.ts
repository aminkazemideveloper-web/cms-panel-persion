import type { CardColor } from "./car-color";

export type DetailesType = {
  id: number;
  color: CardColor;
  label: string;
  value: string | number;
  icon: React.ReactNode;
};
