import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Flox } from "@/styles/shared";

const OtherExamples = () => (
  <Paper>
    <Typography variant="h4" sx={{ marginBottom: "16px" }}>
      Other Elements
    </Typography>
    <Stack spacing={4}>
      <Box>
        <Divider sx={{ marginBottom: "10px" }}>
          <Typography variant="h6">Snackbars</Typography>
        </Divider>
        <Flox jc="center" fw="wrap" g="20px">
          <Alert severity="error" sx={{ width: "300px" }}>
            This is an error message!
          </Alert>
          <Alert severity="warning" sx={{ width: "300px" }}>
            This is a warning message!
          </Alert>
          <Alert severity="info" sx={{ width: "300px" }}>
            This is an information message!
          </Alert>
          <Alert severity="success" sx={{ width: "300px" }}>
            This is a success message!
          </Alert>
        </Flox>
      </Box>

      <Box>
        <Divider sx={{ marginBottom: "10px" }}>
          <Typography variant="h6">Slider</Typography>
        </Divider>
        <Flox jc="center" fw="wrap" g="20px">
          <Slider
            aria-label="Temperature"
            defaultValue={35}
            color="primary"
            valueLabelDisplay="auto"
          />
          <Slider
            aria-label="Temperature"
            defaultValue={90}
            color="secondary"
            valueLabelDisplay="auto"
          />
          <Slider
            aria-label="Temperature"
            defaultValue={60}
            color="success"
            valueLabelDisplay="auto"
          />
          <Slider
            aria-label="Temperature"
            defaultValue={20}
            color="warning"
            valueLabelDisplay="auto"
          />
          <Slider
            aria-label="Temperature"
            defaultValue={70}
            color="error"
            valueLabelDisplay="auto"
          />
        </Flox>
      </Box>
    </Stack>
  </Paper>
);

export { OtherExamples };
