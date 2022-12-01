import { useCallback, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DiamondSharpIcon from "@mui/icons-material/DiamondSharp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ExtensionIcon from "@mui/icons-material/Extension";
import AddBoxIcon from "@mui/icons-material/AddBox";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { Flox } from "@/styles/shared.js";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { SideBarContainer, ExpandIcon } from "./styles";
import { ColorModeContext } from "../../styles/theme";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { toggleColorMode } = useContext(ColorModeContext);
  const { palette } = useTheme();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onToggleColorMode = (e) => {
    e.stopPropagation();
    toggleColorMode();
  };

  const handleNavigate = useCallback((e, page) => {
    e.stopPropagation();
    navigate(page, { replace: true }), [navigate];
  });

  const isLightMode = palette.mode === "light";
  const iconSize = "medium";

  return (
    <SideBarContainer
      fd="column"
      jc="flex-start"
      g="40px"
      collapsed={+isCollapsed}
    >
      <ExpandIcon
        fontSize={iconSize}
        onClick={() => setIsCollapsed(!isCollapsed)}
        collapsed={+isCollapsed}
      />

      <Flox
        jc={"center"}
        style={{ marginBottom: "20px" }}
        onClick={(e) => handleNavigate(e, "/")}
      >
        <DiamondSharpIcon
          fontSize="large"
          sx={{
            color: pathname === "/" ? palette.primary.main : "inherit",
          }}
        />
      </Flox>

      <Flox
        gap="10px"
        jc={isCollapsed && "center"}
        onClick={(e) => handleNavigate(e, "dashboard")}
      >
        <DashboardIcon
          fontSize={iconSize}
          sx={{
            color: pathname === "/dashboard" ? palette.primary.main : "inherit",
          }}
        />
        {!isCollapsed && <Typography variant="h6">Dashboard</Typography>}
      </Flox>

      <Flox
        gap="10px"
        jc={isCollapsed && "center"}
        onClick={(e) => handleNavigate(e, "mui-elements")}
      >
        <CategoryIcon
          fontSize={iconSize}
          sx={{
            color:
              pathname === "/mui-elements" ? palette.primary.main : "inherit",
          }}
        />
        {!isCollapsed && <Typography variant="h6">MUI Elements</Typography>}
      </Flox>

      <Flox
        gap="10px"
        jc={isCollapsed && "center"}
        onClick={(e) => handleNavigate(e, "prime-elements")}
      >
        <ViewQuiltIcon
          fontSize={iconSize}
          sx={{
            color:
              pathname === "/prime-elements" ? palette.primary.main : "inherit",
          }}
        />
        {!isCollapsed && <Typography variant="h6">Prime Elements</Typography>}
      </Flox>

      <Flox
        gap="10px"
        jc={isCollapsed && "center"}
        onClick={(e) => handleNavigate(e, "custom-elements")}
      >
        <ExtensionIcon
          fontSize={iconSize}
          sx={{
            color:
              pathname === "/custom-elements"
                ? palette.primary.main
                : "inherit",
          }}
        />
        {!isCollapsed && <Typography variant="h6">Equipment</Typography>}
      </Flox>

      <Flox
        gap="10px"
        jc={isCollapsed && "center"}
        onClick={(e) => handleNavigate(e, "generate-theme")}
      >
        <AddBoxIcon
          fontSize={iconSize}
          sx={{
            color:
              pathname === "/generate-theme" ? palette.primary.main : "inherit",
          }}
        />
        {!isCollapsed && <Typography variant="h6">Troubleshoot</Typography>}
      </Flox>

      <Flox fd="column" mt="auto" g="20px">
        <Flox
          jc={isCollapsed && "center"}
          gap="10px"
          onClick={onToggleColorMode}
        >
          {isLightMode ? (
            <LightModeOutlinedIcon fontSize={iconSize} />
          ) : (
            <NightsStayOutlinedIcon fontSize={iconSize} />
          )}
          {!isCollapsed && (
            <Typography variant="h6">
              {isLightMode ? "Light Mode" : "Dark Mode"}
            </Typography>
          )}
        </Flox>

        <Flox
          gap="10px"
          fx="no-wrap"
          jc={isCollapsed && "center"}
          onClick={(e) => handleNavigate(e, "settings")}
        >
          <SettingsOutlinedIcon
            fontSize={iconSize}
            sx={{
              color:
                pathname === "/settings" ? palette.primary.main : "inherit",
            }}
          />
          {!isCollapsed && <Typography variant="h6">Settings</Typography>}
        </Flox>
      </Flox>
    </SideBarContainer>
  );
};

export default Sidebar;
