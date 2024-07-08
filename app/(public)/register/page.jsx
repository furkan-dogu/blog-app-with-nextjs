"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useAuthCalls from "@/hooks/useAuthCalls";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "./components/RegisterForm";

const defaultTheme = createTheme();

export default function Register() {
  const { register } = useAuthCalls();

  return (
    <Box minHeight={"calc(90vh - 70px)"}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              paddingTop: 4,
              paddingBottom: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#0C0C0C" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Formik
              initialValues={{
                username: "",
                password: "",
                email: "",
                firstName: "",
                lastName: "",
                image: "",
                bio: ""
              }}
              validationSchema={registerSchema}
              onSubmit={(values, actions) => {
                register(values);
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <RegisterForm {...props} />}
            ></Formik>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}
