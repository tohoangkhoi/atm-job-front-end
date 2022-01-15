import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import MessageModal from "../Components/Modals/MessageModal";
import { ClipLoader } from "react-spinners";

const theme = createTheme();

const Login = () => {
  const [user, setUser] = useState({ phone: "", pin: "" });
  const [error, setError] = useState({ phone: "", pin: "" });
  const [loading, setLoading] = useState(false);

  // useEffect(() => setShowPinAlert(true), []);
  const navigate = useNavigate();
  const params = useParams();
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      setLoading(true);
      setInterval(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1000);
    }
  };

  const handleChange = (event) => {
    const re = /^[0-9\b]+$/;
    //Only allow user to input numbers
    if (event.target.value === "" || re.test(event.target.value)) {
      setUser((user) => ({
        ...user,
        [event.target.name]: event.target.value,
      }));
      //validatePin
      validatePin(event);

      //validate Phone
      validatePhone(event);
    }
  };

  const validate = () => {
    if (user.phone === "") {
      setError((error) => ({ ...error, phone: "This is a required field." }));
      return false;
    }
    if (user.pin === "") {
      setError((error) => ({ ...error, email: "This is a required field." }));
      return false;
    }
    if (error.phone !== "" || error.pin !== "") {
      return false;
    } else {
      return true;
    }
  };

  const validatePin = (event) => {
    if (event.target.name === "pin") {
      if (event.target.value.length !== 4) {
        setError((error) => ({
          ...error,
          pin: "Please enter 4 digits.",
        }));
        return;
      } else {
        setError((error) => ({
          ...error,
          pin: "",
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

      if (event.target.value.length !== 7) {
        setError((error) => ({
          ...error,
          phone: "Phone number must have 7 digits.",
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
  const PinError = () => (
    <div style={{ fontSize: "small", color: "red" }}>{error.pin}</div>
  );

  return (
    <ThemeProvider theme={theme}>
      {/* Modal Section */}

      {/* Main Context */}
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
            Login
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
              autoComplete="off"
              autoFocus
            />
            {error.phone !== "" ? <PhoneError /> : ""}
            <TextField
              required
              margin="normal"
              fullWidth
              name="pin"
              value={user.pin}
              onChange={handleChange}
              autoComplete="off"
              label="PIN"
              id="pin"
            />
            {error.email !== "" ? <PinError /> : ""}
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
              {loading ? (
                <ClipLoader color={"white"} loading={loading} size={35} />
              ) : (
                "Login"
              )}
            </Button>
            <center>
              <Link
                href={`/signup/${params.role}`}
                variant="body2"
                style={{ float: "right" }}
              >
                {"Haven't had an account?"}
              </Link>
            </center>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
