import { CssBaseline, Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import AppNavBar from "../Components/AppNavBar";
import { Link } from "react-router-dom";
import { LandingPageStyle as L } from "../Components/Styling/LandingPage.style";
const theme = createTheme();
const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppNavBar />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        {" "}
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            style={{
              fontFamily: "Luxurious Roman",
            }}
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
            Inspired by Den Vau top hit “Bring Money To Mom" - Developed by MAI
            DUC MINH
          </Typography>

          <L.RoleWrapper>
            <center>
              <Row style={{ width: "40%" }}>
                <Col>
                  <Typography
                    variant="h4"
                    style={{
                      fontFamily: "Luxurious Roman",
                      color: "Blue",
                    }}
                  >
                    Employer Registration
                  </Typography>{" "}
                  <br />
                  <Link to="/signup/employee">
                    <L.RoleImage src="/employer.png" alt="Logo" />
                  </Link>
                </Col>
                <Col>
                  <Typography
                    variant="h4"
                    style={{
                      fontFamily: "Luxurious Roman",
                      color: "Orange",
                    }}
                  >
                    Employee Registration
                  </Typography>{" "}
                  <Link to="/signup/employee">
                    <L.RoleImage src="/employee.png" alt="Logo" />
                  </Link>
                </Col>
              </Row>
            </center>
          </L.RoleWrapper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
