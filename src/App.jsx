import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";

import ColorLensIcon from "@mui/icons-material/ColorLens";
import OpacityIcon from "@mui/icons-material/Opacity";
import PaidIcon from "@mui/icons-material/Paid";
import CasinoIcon from "@mui/icons-material/Casino";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import Home from "./components/home";
import Sidebar from "./components/sidebar";

import { useMode, PALETTE_NAMES, ColorModeContext } from "./styles/theme";
import { SpeedDialAction } from "@mui/material";

const themeOptions = [
  { icon: <OpacityIcon />, name: PALETTE_NAMES[0] },
  { icon: <PaidIcon />, name: PALETTE_NAMES[1] },
  { icon: <CasinoIcon />, name: PALETTE_NAMES[2] },
  { icon: <AcUnitIcon />, name: PALETTE_NAMES[3] },
];

const App = () => {
  const [theme, mode, setPaletteName] = useMode();
  const { pathname } = useLocation();

  return (
    <ColorModeContext.Provider value={mode}>
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
  );
};

export default App;
