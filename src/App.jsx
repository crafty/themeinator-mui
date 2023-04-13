import { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";

import ColorLensIcon from "@mui/icons-material/ColorLens";

import Home from "./components/home";
import Sidebar from "./components/sidebar";

import { useMode, ColorModeContext } from "./styles/theme";
import { SpeedDialAction } from "@mui/material";

import {
  ThemeDataContext,
  DEFAULT_THEME_DATA,
} from "./context/theme-options-context";
import { useEffect } from "react";

import { themeSettings } from "./context/theme-options-context";

const App = () => {
  const [themeData, setThemeData] = useState(DEFAULT_THEME_DATA);
  const { theme, themeOptions, paletteName, tokenOptions, mode } = themeData;

  const { pathname } = useLocation();

  const setPaletteName = (name) => {
    setThemeData({
      ...themeData,
      paletteName: name,
    });
  };

  const setPaletteMode = (mode) => {
    setThemeData({
      ...themeData,
      mode,
    });
  };

  const setTheme = () => {
    console.log(tokenOptions, paletteName, tokenOptions[paletteName]);
    setThemeData({
      ...themeData,
      tokens: tokenOptions[paletteName][mode],
      theme: createTheme(
        themeSettings(mode, paletteName, tokenOptions[paletteName][mode])
      ),
    });
  };

  useEffect(() => {
    setTheme();
  }, [tokenOptions, mode, paletteName]);

  return (
    <ThemeDataContext.Provider value={{ themeData, setThemeData }}>
      <ColorModeContext.Provider value={setPaletteMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            <Sidebar />

            <SpeedDial
              ariaLabel="SpeedDial themes"
              icon={<ColorLensIcon />}
              sx={{ position: "absolute", bottom: 16, right: 16 }}
            >
              {themeOptions.map((option) => (
                <SpeedDialAction
                  key={option.name}
                  icon={option.icon}
                  onClick={() => setPaletteName(option.name)}
                  tooltipTitle={option.name}
                />
              ))}
            </SpeedDial>

            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[800],
                flexGrow: 1,
                height: "100vh",
                overflowX: "hidden",
                overflowY: "auto",
                padding: "30px 30px 0px 30px",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              {pathname === "/" && <Home />}
              <Outlet />
            </Box>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ThemeDataContext.Provider>
  );
};

export default App;
