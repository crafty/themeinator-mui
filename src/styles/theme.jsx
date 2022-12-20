import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";

import overrides from "./overrides";

//import { useColorTokens } from "../hooks/use-color-tokens";
import { ThemeDataContext } from "../context/theme-options-context";

export const MODES = ["dark", "light"];

export const PALETTE_NAMES = [
  "randomColorTokens",
  "firstBetColorTokens",
  "pointsBetColorTokens",
  "nordColorTokens",
];

const getComponentOverrides = (palette, colors) => {
  if (palette === "pointsBetColorTokens")
    return overrides.generatePointsBetOverrides(colors);

  if (palette === "randomColorTokens")
    return overrides.generateRandomColorsOverrides(colors);

  return {};
};

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

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [modeName, setModeName] = useState(MODES[0]);
  const [paletteName, setPaletteName] = useState(PALETTE_NAMES[3]);

  const {
    themeData: { colorTokens },
  } = useContext(ThemeDataContext);

  console.log("========-----------------=======");
  console.log("availableTokens: ", colorTokens);
  console.log("paletteName: ", paletteName);
  console.log("modeName: ", modeName);
  // console.log(availableTokens[paletteName]);
  // console.log(availableTokens[paletteName][modeName]);
  console.log("========-----------------=======");

  const colors = colorTokens[paletteName][modeName];

  const [theme, setTheme] = useState(() =>
    createTheme(themeSettings(modeName, paletteName, colors))
  );

  useEffect(() => {
    setTheme(() => createTheme(themeSettings(modeName, paletteName, colors)));
  }, [modeName, paletteName]);

  const mode = useMemo(
    () => ({
      toggleColorMode: () => {
        setModeName((prev) => (prev === MODES[0] ? MODES[1] : MODES[0]));
      },
    }),
    []
  );

  return [theme, mode, setPaletteName];
};
