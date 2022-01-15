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
import AppNavBar from "../Components/AppNavBar";
import JobCard from "../Components/JobCard";
import axios from "axios";
import { API_URL } from "../app.properties";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
const Home = () => {
  const [job, setJob] = useState([]);
  const [state, setState] = useState({
    category: "",
    experience: "",
    location: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => console.log(job), [...job]);
  const getJobs = async () => {
    await axios
      .get(API_URL + "jobs")
      .then((result) => setJob(result.data.content))
      .catch((err) => console.log(err.response.data));
  };

  const filterJob = () => {
    // console.log(state.location);
    // console.log(state.category);
    // console.log(temp);
    // setJob(temp);
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
              {params.role === "employer" ? (
                <Button
                  onClick={() => navigate("/createJob")}
                  variant="contained"
                >
                  Create Post
                </Button>
              ) : (
                ""
              )}

              <Button variant="outlined">Recommendation</Button>
            </Stack>
          </Container>
        </Box>

        <div>
          <center>
            {" "}
            <Row className="mb-3" style={{ display: "flex", width: "40%" }}>
              <Col>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Category
                  </Form.Label>
                  <Form.Control
                    required
                    onChange={handleChange}
                    name="category"
                    as="select"
                    defaultValue="Choose..."
                  >
                    <option disabled value="Choose...">
                      Choose...
                    </option>
                    <option value="Software/IT">Software/IT</option>
                    <option value="Electrical and Electronics">
                      Electrical and Electronics
                    </option>
                    <option value="Accounting">Accounting</option>
                    <option value="Education">Education</option>
                    <option value="Textile and Garment">
                      Textile and Garment
                    </option>
                    <option value="Logistics">Logistics</option>
                    <option value="Shipping">Shipping</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Location
                  </Form.Label>
                  <Form.Control
                    required
                    onChange={handleChange}
                    name="location"
                    as="select"
                    defaultValue="Choose..."
                  >
                    <option disabled value="Choose...">
                      Choose ...
                    </option>
                    <option value=" Ha Noi">Ha Noi</option>
                    <option value="Ho Chi Minh">Ho Chi Minh</option>
                    <option value="Da Nang">Da Nang</option>
                    <option value=" Hue">Hue</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <br />
                <Button onClick={() => filterJob()}> Submit</Button>
              </Col>
            </Row>
          </center>
        </div>
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
