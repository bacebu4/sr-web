export const PURPLE = "#CCA9F9";
export const DARK = "#343434";
export const PINK = "#FE9CA4";
export const GRAY = "#B0AFAF";
export const WHITE = "#000000";

const colors = {
  purple: PURPLE,
  dark: DARK,
  pink: PINK,
  gray: GRAY,
  white: WHITE,
};

export type Color = "purple" | "dark" | "pink" | "gray" | "white";

export function colorSwitcher(color: Color): string {
  return colors[color];
}
