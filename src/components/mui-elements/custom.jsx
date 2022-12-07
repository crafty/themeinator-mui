import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import InsightsIcon from "@mui/icons-material/Insights";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { CustomButton } from "./custom-button";
import { CustomCard } from "./custom-card";

const CustomExamples = () => {
  return (
    <Paper>
      <Typography variant="h4" sx={{ marginBottom: "16px" }}>
        Custom Elements
      </Typography>
      <Stack spacing={4}>
        <Box>
          <Divider sx={{ marginBottom: "10px" }}>
            <Typography variant="h6">Custom Cards With Overrides</Typography>
          </Divider>

          <Stack spacing={2}>
            <CustomCard
              title={"USE TOP FACTORS"}
              description={
                "Select the top factors with the most data to get probabilities for each horse."
              }
              icon={<AutoGraphIcon color="primary" fontSize="large" />}
            />

            <CustomCard
              title={"BUILD YOUR OWN"}
              description={
                "Get probabilities for each horse. Choose stats that you think would predict a winner."
              }
              icon={<InsightsIcon color="primary" fontSize="large" />}
            />
          </Stack>
        </Box>

        <Box>
          <Divider sx={{ marginBottom: "10px" }}>
            <Typography variant="h6">Custom Buttons WIth Overrides</Typography>
          </Divider>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 10 }}>
            <CustomButton>Reusable Button</CustomButton>
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
};

export { CustomExamples };
