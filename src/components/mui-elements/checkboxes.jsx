import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import CheckBoxOutlineBlankTwoToneIcon from "@mui/icons-material/CheckBoxOutlineBlankTwoTone";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import Battery0BarIcon from "@mui/icons-material/Battery0Bar";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

import { Flox } from "@/styles/shared";

import { tokens } from "@/styles/theme";

const CheckboxExamples = () => {
  const { palette } = useTheme();
  const { orangeAccent } = tokens(palette.mode, palette.name);

  return (
    <Paper>
      <Typography variant="h4" sx={{ marginBottom: "16px" }}>
        Checkboxes
      </Typography>

      <Stack spacing={4}>
        <Box>
          <Divider sx={{ marginBottom: "10px" }}>
            <Typography variant="h6">Basic Checkboxes</Typography>
          </Divider>
          <Flox jc="center" fw="wrap" g="20px">
            <Checkbox size="large" defaultChecked />
            <Checkbox size="large" />
            <Checkbox size="large" disabled />
            <Checkbox size="large" disabled checked />
          </Flox>
        </Box>
        <Box>
          <Divider sx={{ marginBottom: "10px" }}>
            <Typography variant="h6">Colored Checkboxes</Typography>
          </Divider>
          <Flox jc="center" fw="wrap" g="20px">
            <Checkbox size="large" defaultChecked />
            <Checkbox size="large" defaultChecked color="secondary" />
            <Checkbox size="large" defaultChecked color="success" />
            <Checkbox size="large" defaultChecked color="default" />
            <Checkbox
              size="large"
              defaultChecked
              sx={{
                color: orangeAccent[800],
                "&.Mui-checked": {
                  color: orangeAccent[600],
                },
              }}
            />
          </Flox>
        </Box>

        <Box>
          <Divider sx={{ marginBottom: "10px" }}>
            <Typography variant="h6">Icon Checkboxes</Typography>
          </Divider>
          <Flox jc="center" fw="wrap" g="20px">
            <Checkbox
              size="large"
              defaultChecked
              icon={<CheckBoxOutlineBlankTwoToneIcon />}
              checkedIcon={<CheckBoxTwoToneIcon />}
            />
            <Checkbox
              size="large"
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
            <Checkbox
              size="large"
              defaultChecked
              icon={<CloudQueueIcon />}
              checkedIcon={<CloudIcon />}
            />
            <Checkbox
              size="large"
              icon={<Battery0BarIcon />}
              checkedIcon={<BatteryFullIcon />}
            />
          </Flox>
        </Box>
      </Stack>
    </Paper>
  );
};

export { CheckboxExamples };
