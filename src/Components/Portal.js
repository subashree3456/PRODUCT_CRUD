import { createTheme, Paper, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Topbar from "./Topbar";

import { Outlet } from "react-router-dom";

function Portal() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Paper elevation={3} style={{ minHeight: "100vh" }}>
          <div className="container-fluid p-0 m-0">
            <Topbar mode={mode} setMode={setMode} />
            <div className="container">
              <Outlet />
            </div>
          </div>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default Portal;
