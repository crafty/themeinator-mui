import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import useTheme from "@mui/material/styles/useTheme";

const CustomExamples = () => {
  const { palette } = useTheme();

  console.log(palette);

  return (
    <Paper>
      <Typography variant="h4" sx={{ marginBottom: "16px" }}>
        Custom Elements
      </Typography>
      <Stack spacing={4}>
        <Box>
          <Divider sx={{ marginBottom: "10px" }}>
            <Typography variant="h6">Custom Cards</Typography>
          </Divider>

          <Card
            sx={{
              display: "flex",
              height: "84px",
              alignItems: "center",
              padding: "20px 0px 20px 20px",
              backgroundColor:
                palette.mode === "dark" ? palette.grey[200] : "#fff",
              color: "#000",
              border: `1px solid ${palette.grey[200]}`,
            }}
            elevation={0}
          >
            <AutoGraphIcon color="primary" fontSize="large" />

            <CardContent>
              <Typography sx={{ fontWeight: 700 }} variant="h6">
                USE TOP FACTORS
              </Typography>
              <Typography variant="body1">
                Select the top factors with the most data to get probabilities
                for each horse.
              </Typography>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "84px",
                width: "30px",
                color: "primary",
                marginLeft: "auto",
                backgroundColor: palette.grey[200],
              }}
            >
              <ChevronRightIcon color="primary" fontSize="large" />
            </CardActions>
          </Card>
        </Box>
      </Stack>
    </Paper>
  );
};

export { CustomExamples };
