import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Flox } from "@/styles/shared";

const ButtonExamples = () => (
  <Paper>
    <Typography variant="h4" sx={{ marginBottom: "16px" }}>
      Buttons
    </Typography>

    <Stack spacing={4}>
      <Box>
        <Divider sx={{ marginBottom: "10px" }}>
          <Typography variant="h6">Basic Buttons</Typography>
        </Divider>
        <Flox jc="center" fw="wrap" g="20px">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Flox>
      </Box>

      <Box>
        <Divider sx={{ marginBottom: "10px" }}>
          <Typography variant="h6">Contained Buttons</Typography>
        </Divider>
        <Flox jc="center" fw="wrap" g="20px">
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </Flox>
      </Box>

      <Box>
        <Divider sx={{ marginBottom: "10px" }}>
          <Typography variant="h6">Outlined Buttons</Typography>
        </Divider>
        <Flox jc="center" fw="wrap" g="20px">
          <Button variant="outlined">Primary</Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button variant="outlined" href="#outlined-buttons">
            Link
          </Button>
        </Flox>
      </Box>

      <Box>
        <Divider>
          <Typography variant="h6">Colored Buttons</Typography>
        </Divider>
        <Flox jc="center" fw="wrap" g="20px" m="10px 0px 10px 0px">
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Flox>
      </Box>
    </Stack>
  </Paper>
);

export { ButtonExamples };
