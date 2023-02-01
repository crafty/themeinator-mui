import { createContext } from "react";
import { createTheme } from "@mui/material/styles";

import colorTokens from "../styles/color-tokens";
import overrides from "../styles/overrides";

import OpacityIcon from "@mui/icons-material/Opacity";
import PaidIcon from "@mui/icons-material/Paid";
import CasinoIcon from "@mui/icons-material/Casino";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const getComponentOverrides = (palette, colors) => {
  if (palette === "pointsBetColorTokens")
    return overrides.generatePointsBetOverrides(colors);

  if (palette === "randomColorTokens")
    return overrides.generateRandomColorsOverrides(colors);

  return {};
};

const DARK_MODE = "dark";
const LIGHT_MODE = "light";

const THEME_NAMES = [
  "randomColorTokens",
  "firstBetColorTokens",
  "pointsBetColorTokens",
  "nordColorTokens",
];

export const DEFAULT_THEME_OPTIONS = [
  { name: THEME_NAMES[0], icon: <OpacityIcon /> },
  { name: THEME_NAMES[1], icon: <PaidIcon /> },
  { name: THEME_NAMES[2], icon: <CasinoIcon /> },
  { name: THEME_NAMES[3], icon: <AcUnitIcon /> },
];

export const themeSettings = (mode, palette, colors) => {
  const componentOverrides = getComponentOverrides(palette, colors);

  //console.log("colors: ", colors);
  return {
    palette: {
      mode,
      name: palette,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            error: {
              main: colors.redAccent[300],
            },
            warning: {
              main: colors.yellowAccent[500],
            },
            info: {
              main: colors.blueAccent[500],
            },
            success: {
              main: colors.greenAccent[500],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            error: {
              main: colors.redAccent[500],
            },
            warning: {
              main: colors.yellowAccent[500],
            },
            info: {
              main: colors.blueAccent[500],
            },
            success: {
              main: colors.greenAccent[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: { padding: "16px" },
        },
      },
      ...componentOverrides,
    },
  };
};

const INITIAL_THEME = THEME_NAMES[0];

export const DEFAULT_THEME_DATA = {
  themeOptions: DEFAULT_THEME_OPTIONS,
  tokenOptions: colorTokens,
  tokens: colorTokens[INITIAL_THEME][DARK_MODE],
  paletteName: INITIAL_THEME,
  mode: DARK_MODE,
  theme: createTheme(
    themeSettings(
      DARK_MODE,
      INITIAL_THEME,
      colorTokens[INITIAL_THEME][DARK_MODE]
    )
  ),
};

export const ThemeDataContext = createContext({
  themeData: DEFAULT_THEME_DATA,
  setThemeData: () => {},
});
