export const PURPLE = "#CCA9F9";
export const DARK = "#343434";
export const PINK = "#FE9CA4";
export const GRAY = "#B0AFAF";
export const WHITE = "#ffffff";
export const OFF_WHITE = "#F9F9F9";

export const OPACITY10 = "1A";
export const OPACITY1 = "03";
export const OPACITY50 = "80";
export const OPACITY90 = "E5";

const colors = {
  purple: PURPLE,
  dark: DARK,
  pink: PINK,
  gray: GRAY,
  white: WHITE,
  "off white": OFF_WHITE,
};

export type Color = "purple" | "dark" | "pink" | "gray" | "white" | "off white";

export function colorSwitcher(color: Color): string {
  return colors[color];
}
