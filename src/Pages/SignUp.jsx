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
import { send } from "emailjs-com";
import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_USER_ID,
} from "../app.properties";
const theme = createTheme();

const SignUp = () => {
  const [user, setUser] = useState({ phone: "", email: "" });
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });
  const [error, setError] = useState({ phone: "", email: "" });
  const [showPinAlert, setShowPinAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setShowPinAlert(true);
    console.log(params.role);
  }, []);

  const navigate = useNavigate();
  const params = useParams();

  const closePinAlert = () => setShowPinAlert(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      setLoading(true);
      setInterval(() => {
        setLoading(false);
        navigate(`/login/${params.role}`);
      }, 1000);
    }
  };

  const handleChange = (event) => {
    const re = /^[0-9\b]+$/;
    //Only allow user to input numbers
    if (event.target.name == "email") {
      setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
      validateEmail(event);
    }

    if (event.target.value === "" || re.test(event.target.value)) {
      setUser((user) => ({ ...user, [event.target.name]: event.target.value }));

      //validate Phone
      validatePhone(event);
    }
  };

  const validate = () => {
    if (user.phone === "") {
      setError((error) => ({ ...error, phone: "This is a required field." }));
      return false;
    }
    if (user.email === "") {
      setError((error) => ({ ...error, email: "This is a required field." }));
      return false;
    }

    if (error.email !== "" || error.phone !== "") {
      return false;
    } else {
      return true;
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
  const EmailError = () => (
    <div style={{ fontSize: "small", color: "red" }}>{error.email}</div>
  );

  return (
    <ThemeProvider theme={theme}>
      {/* Modal Section */}
      <MessageModal
        show={showPinAlert}
        handleClose={closePinAlert}
        message={
          "Please provide a valid email so you can receive the PIN to login to Job-ATM."
        }
      />

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
              autoComplete="off"
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
              autoComplete="off"
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
              {loading ? (
                <ClipLoader color={"white"} loading={loading} size={35} />
              ) : (
                "Sign Up"
              )}
            </Button>

            <Link
              href={`/login/${params.role}`}
              variant="body2"
              style={{ float: "right" }}
            >
              {"Already have an account? Go to Login"}
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
