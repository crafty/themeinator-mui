import React from "react";

import Paper from "@mui/material/Paper";

import Title from "../components/page-title";
import { FileUploader } from "../components/file-uploader";

const GenerateTheme = (props) => {
  return (
    <>
      <Title title="Generate Theme" />
      <Paper elevation={1} sx={{ width: "100%" }}>
        <FileUploader />
      </Paper>
    </>
  );
};

export { GenerateTheme };
