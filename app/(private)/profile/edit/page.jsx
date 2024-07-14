"use client";

import useAuthCalls from "@/hooks/useAuthCalls";
import {
  Stack,
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";

const Edit = () => {
  const { user, firstName, lastName, email, image, bio, personalId } =
    useSelector((state) => state.auth);
  const { updateUser } = useAuthCalls();
  const router = useRouter();
  const [info, setInfo] = useState({
    _id: personalId,
    username: user,
    firstName: firstName,
    lastName: lastName,
    email: email,
    image: image,
    password: "",
    bio: bio,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(info);
    router.push("/profile");
  };

  return (
    <Stack
      minHeight={"calc(90vh - 70px)"}
      maxWidth={1000}
      width={"90%"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={"auto"}
      py={2}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <Typography variant="body1" color="error" pb={4} pt={2} textAlign={"center"}>
        If you are changing any information other than your password, please
        write down the password you are currently using. If you are also
        changing your password, you need to type your new password
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="username"
            label="Username"
            name="username"
            type="text"
            value={info.username}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={info.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="firstName"
            label="First Name"
            name="firstName"
            type="text"
            value={info.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="lastName"
            label="Last Name"
            name="lastName"
            type="text"
            value={info.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="image"
            label="Image URL"
            name="image"
            type="url"
            value={info.image}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="password"
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={info.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            multiline
            rows={4}
            id="bio"
            label="Bio"
            name="bio"
            type="text"
            value={info.bio}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Box pt={2}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            color: "turquoise",
            backgroundColor: "#0C0C0C",
            "&:hover": { backgroundColor: "#0C0C0C", opacity: 0.95 },
          }}
        >
          Update Information
        </Button>
      </Box>
    </Stack>
  );
};

export default Edit;
