import { useTheme } from "@mui/material/styles";

import { Card } from "primereact/card";

import "primereact/resources/themes/lara-dark-teal/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Title from "../components/page-title";

const PrimeElements = () => {
  const { palette } = useTheme();
  const { mode } = palette;

  return (
    <>
      <Title title="Prime React Elements" />

      <Card>PRIME EXAMPLES</Card>
    </>
  );
};

export { PrimeElements };
