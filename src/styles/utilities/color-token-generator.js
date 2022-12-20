import tinycolor from "tinycolor2";

export const convertRgbToHex = (r, g, b) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

const generateColorTokenObject = (color) => ({
  100: tinycolor(color).lighten(40).toString(),
  200: tinycolor(color).lighten(30).toString(),
  300: tinycolor(color).lighten(20).toString(),
  400: tinycolor(color).lighten(10).toString(),
  500: color,
  600: tinycolor(color).darken(10).toString(),
  700: tinycolor(color).darken(20).toString(),
  800: tinycolor(color).darken(30).toString(),
  900: tinycolor(color).darken(40).toString(),
});

const reverseValuesTokensObject = (tokens) => ({
  100: tokens[900],
  200: tokens[800],
  300: tokens[700],
  400: tokens[600],
  500: tokens[500],
  600: tokens[400],
  700: tokens[300],
  800: tokens[200],
  900: tokens[100],
});

const generateDarkColorsObject = (primary, secondary) => ({
  primary: generateColorTokenObject(primary),
  secondary: generateColorTokenObject(secondary),
  grey: generateColorTokenObject("#2a2b2e"),
  orangeAccent: generateColorTokenObject("#f4a259"),
  redAccent: generateColorTokenObject("#9a1d1f"),
  yellowAccent: generateColorTokenObject("#f4e285"),
  blueAccent: generateColorTokenObject("#345995"),
  greenAccent: generateColorTokenObject("#6f975e"),
});

const generateLightColorsObject = (colors) => ({
  primary: reverseValuesTokensObject(colors.primary),
  secondary: reverseValuesTokensObject(colors.secondary),
  grey: reverseValuesTokensObject(colors.grey),
  orangeAccent: reverseValuesTokensObject(colors.orangeAccent),
  redAccent: reverseValuesTokensObject(colors.redAccent),
  yellowAccent: reverseValuesTokensObject(colors.yellowAccent),
  blueAccent: reverseValuesTokensObject(colors.blueAccent),
  greenAccent: reverseValuesTokensObject(colors.greenAccent),
});

export const generateColorTokens = (primary, secondary) => {
  const dark = generateDarkColorsObject(primary, secondary);
  const light = generateLightColorsObject(dark);

  return {
    dark,
    light,
  };
};
