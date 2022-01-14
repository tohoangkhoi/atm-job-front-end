import { AppBar, Toolbar, Typography } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import React from "react";

const AppNavBar = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <PhotoCameraIcon sx={{ mr: 2 }} />
            ATM JOB
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppNavBar;
