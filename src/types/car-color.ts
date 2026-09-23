const CARD_COLOR = Object.freeze(["blue", "red", "green", "yellow", "gray"]);

export type CardColor = (typeof CARD_COLOR)[number];
