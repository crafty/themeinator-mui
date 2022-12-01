import React from "react";

import Paper from "@mui/material/Paper";

import Title from "../components/page-title";

const CustomElements = () => {
  return (
    <>
      <Title title="Custom Elements" />
      <Paper elevation={1} sx={{ width: "100%", height: "80%" }}>
        Placeholder
      </Paper>
    </>
  );
};

export { CustomElements };
