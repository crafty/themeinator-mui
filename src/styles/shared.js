import { styled } from "@mui/material/styles";

export const Flox = styled("div")(({ theme, ...props }) => ({
  display: props.display || props.d || "flex",
  flex: props.flex || props.f || "0 1 auto",
  flexWrap: props.flexWrap || props.fw || "default",
  flexDirection: props.flexDirection || props.fd || "default",
  justifyContent: props.justifyContent || props.jc || "default",
  alignItems: props.alignItems || props.ai || "default",
  gap: props.gap || props.g || "default",
  width: props.width || props.w || "100%",
  height: props.height || props.h || "default",
  border: props.debug && `2px dotted ${theme.palette.error.main} !important`,
  margin: props.margin || props.m || "default",
  marginTop: props.marginTop || props.mt || "default",
}));

export const Grox = styled("div")(({ theme, ...props }) => ({
  display: props.display || props.d || "grid",
  gridTemplateColumns:
    props.gridTemplateColumns || props.gtc || "auto auto auto",
  rowGap: props.rowGap || props.rg || "default",
  column: props.columnGap || props.cg || "default",
  gap: props.gap || props.g || "0px",
  width: props.width || props.w || "default",
  height: props.height || props.h || "fit-content",
  border: props.debug && `2px dotted ${theme.palette.error.main} !important`,
}));

export const Groxling = styled("div")(({ theme, ...props }) => ({
  gridRowStart: props.gridRowStart || props.grs || "default",
  gridRowEnd: props.gridRowEnd || props.grs || "default",
}));
