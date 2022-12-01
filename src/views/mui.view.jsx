import Stack from "@mui/material/Stack";

import Title from "../components/page-title";
import {
  ButtonExamples,
  CheckboxExamples,
  OtherExamples,
  CustomExamples,
} from "../components/mui-elements";

const MuiView = () => {
  return (
    <>
      <Title title="MUI Elements" />

      <Stack spacing={4} sx={{ paddingBottom: "30px" }}>
        <CustomExamples />

        <ButtonExamples />

        <CheckboxExamples />

        <OtherExamples />
      </Stack>
    </>
  );
};

export { MuiView };
