import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Form } from "formik";
import { object, string } from "yup";
import { useRouter } from "next/navigation";

export const loginSchema = object({
  email: string()
    .email("Please enter a valid e-mail.")
    .required("E-mail entry is mandatory."),
  password: string()
    .required("Password is mandatory.")
    .min(8, "The password must contain at least 8 characters.")
    .max(16, "The password must contain a maximum of 16 characters.")
    .matches(/\d+/, "The password must contain at least one number.")
    .matches(
      /[a-z]/,
      "The password must contain at least one lower case letter."
    )
    .matches(/[A-Z]/, "The password must contain at least one capital letter.")
    .matches(
      /[@$!%*?&]+/,
      "The password must contain at least one special character (@$!%*?&)."
    ),
});

const LoginForm = ({ handleChange, values, touched, errors, handleBlur }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form>
      <Box noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={errors.email}
          onBlur={handleBlur}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={errors.password}
          onBlur={handleBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: "#0C0C0C",
            "&:hover": { backgroundColor: "#2F2F2F" },
          }}
        >
          Sign In
        </Button>
        <Stack direction={"row"} gap={"5px"} justifyContent={"center"}>
          <Typography variant="body2">Don't have an account?</Typography>
          <Typography
            variant="body2"
            sx={{ color: "red", cursor: "pointer" }}
            onClick={() => router.push("/register")}
          >
            Sign Up
          </Typography>
        </Stack>
      </Box>
    </Form>
  );
};

export default LoginForm;
