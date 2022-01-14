import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const SignUp = () => {
  const [user, setUser] = useState({ phone: "", email: "" });
  const [error, setError] = useState({ phone: "", email: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
  };

  useEffect(
    () =>
      alert(
        "Please provide a valid email, so you can receive your PIN after sucessfully sign-up."
      ),
    []
  );

  const handleChange = (event) => {
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));

    //validate Phone
    validatePhone(event);

    //validateEmail
    validateEmail(event);
  };

  const validate = () => {
    if (user.phone == "" || user.pin == "" || user.email == "") {
      alert("Please fill in all the fields.");
    }
  };

  const validateEmail = (event) => {
    if (event.target.name === "email") {
      if (
        event.target.value.indexOf("@") == -1 ||
        event.target.value.indexOf("@") == 0 ||
        event.target.value.indexOf(".com") == -1
      ) {
        setError((error) => ({
          ...error,
          email: "Please enter a valid email.",
        }));
      } else {
        setError((error) => ({
          ...error,
          email: "",
        }));
      }
    }
  };

  const validatePhone = (event) => {
    if (event.target.name === "phone") {
      if (event.target.value === "") {
        setError((error) => ({
          ...error,
          phone: "Please provide a valid phone number.",
        }));
      }

      if (event.target.value.length < 6) {
        setError((error) => ({
          ...error,
          phone: "Phone number must have at least 6 numbers.",
        }));
      } else {
        setError((error) => ({
          ...error,
          phone: "",
        }));
      }
    }
  };

  const PhoneError = () => (
    <div style={{ fontSize: "small", color: "red" }}>{error.phone}</div>
  );
  const EmailError = () => (
    <div style={{ fontSize: "small", color: "red" }}>{error.email}</div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              autoComplete="phone"
              autoFocus
            />
            {error.phone !== "" ? <PhoneError /> : ""}
            <TextField
              required
              margin="normal"
              fullWidth
              name="email"
              value={user.email}
              onChange={handleChange}
              label="Email"
              type="email"
              id="email"
            />
            {error.email !== "" ? <EmailError /> : ""}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Go to Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
