import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppNavBar from "../../Components/AppNavBar";
import JobCard from "../../Components/JobCard";
import axios from "axios";
import { API_URL } from "../../app.properties";
import { useEffect } from "react";
import { useState } from "react";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
const Home = () => {
  const [job, setJob] = useState([]);
  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => console.log(job), [job]);
  const getJobs = async () => {
    await axios
      .get(API_URL + "jobs")
      .then((result) => setJob(result.data.content))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppNavBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              ATM JOB
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              style={{
                fontFamily: "Helvetica",
                fontSize: "small",
                fontStyle: "italic",
              }}
            >
              Inspired by Den Vau top hit “Bring Money To Mom" - Developed by
              MAI DUC MINH
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Recommendation</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {job?.map((card, id) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <JobCard info={card} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Developer: Mai Duc Minh <br />
          Mentor: Thanh Sensei
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Home;
