import { styled } from "@mui/material/styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Flox } from "@/styles/shared.js";

export const SideBarContainer = styled(Flox)`
  height: 100vh;
  padding: 30px;
  width: ${({ collapsed }) => (collapsed ? "100px" : "250px")};
  position: relative;
  transition: all 0.4s ease-in-out;
  background-color: ${({ theme }) => theme?.palette?.blueAccent};

  &:hover > svg {
    opacity: 1;
    transition: all 0.4s ease-in-out;
  }

  svg {
    cursor: pointer;
  }

  div :last-child {
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ExpandIcon = styled(ExpandMoreIcon)`
  position: absolute;
  top: 35px;
  right: 0px;
  cursor: pointer;
  opacity: 0.3;
  transform: ${(props) => `rotate(${props.collapsed ? "-90" : "90"}deg)}`};
  transition: all 0.2s ease-in-out;
`;
