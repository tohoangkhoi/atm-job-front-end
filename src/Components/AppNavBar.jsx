import { AppBar, Toolbar, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";

const AppNavBar = () => {
  return (
    <>
      <AppBar
        style={{ position: "sticky", zIndex: "1", top: "0" }}
        position="relative"
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <WorkIcon sx={{ mr: 2 }} />
            ATM JOB
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppNavBar;
