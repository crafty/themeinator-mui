import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import useTheme from "@mui/material/styles/useTheme";
import styled from "@mui/material/styles/styled";

const ThemedCard = styled(Card, {
  name: "ThemedCard",
  slot: "Root",
  overridesResolver: (props, styles) => [styles.root],
})`
  display: flex;
  height: 84px;
  align-items: center;
  padding: 20px 0px 20px 20px;
  color: #000;

  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? theme.palette.grey[200] : "#fff"};
`;

const CustomCard = ({ title, description, icon }) => {
  const { palette } = useTheme();

  return (
    <ThemedCard elevation={0}>
      {icon}

      <CardContent>
        <Typography sx={{ fontWeight: 700 }} variant="h6">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "84px",
          width: "30px",
          marginLeft: "auto",
          backgroundColor: palette.grey[200],
        }}
      >
        <ChevronRightIcon color="primary" fontSize="large" />
      </CardActions>
    </ThemedCard>
  );
};

export { CustomCard };
