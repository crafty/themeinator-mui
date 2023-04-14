import Paper from "@mui/material/Paper";

import Title from "../page-title";

import { Flox } from "@/styles/shared";

const Dashboard = () => {
  return (
    <>
      <Title title="Pseudo Dashboard" />

      <Flox fd="column" ai="flex-start" gap="60px">
        <Flox gap="60px" jc="flex-start" fw="wrap">
          <Paper elevation={1} sx={{ height: 320, minWidth: "120px", flex: 1 }}>
            Placeholder
          </Paper>
          <Paper elevation={1} sx={{ height: 230, minWidth: "180px", flex: 2 }}>
            Placeholder
          </Paper>
          <Paper elevation={1} sx={{ height: 260, minWidth: "120px", flex: 1 }}>
            Placeholder
          </Paper>
          <Paper elevation={1} sx={{ height: 290, minWidth: "120px", flex: 1 }}>
            Placeholder
          </Paper>
        </Flox>

        <Flox gap="60px" jc="flex-start" fw="wrap">
          <Paper elevation={1} sx={{ height: 320, minWidth: "200px", flex: 2 }}>
            Placeholder
          </Paper>
          <Paper elevation={1} sx={{ height: 220, minWidth: "200px", flex: 1 }}>
            Placeholder
          </Paper>
          <Paper elevation={1} sx={{ height: 320, minWidth: "200px", flex: 1 }}>
            Placeholder
          </Paper>
        </Flox>

        <Flox gap="60px" jc="flex-start" fw="wrap">
          <Paper elevation={1} sx={{ height: 240, minWidth: "200px", flex: 1 }}>
            Placeholder
          </Paper>
          <Paper elevation={1} sx={{ height: 380, minWidth: "340px", flex: 2 }}>
            Placeholder
          </Paper>
        </Flox>
      </Flox>
    </>
  );
};

export default Dashboard;
