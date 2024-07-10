"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <Stack
      minHeight={"calc(90vh - 70px)"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      bgcolor={"#0C0C0C"}
      color={"white"}
      gap={2}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h5">Page not found</Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for doesn't exist
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Button variant="contained" onClick={() => router.back()}>
          Go Back
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => router.push("/")}
        >
          Go Home
        </Button>
      </Stack>
    </Stack>
  );
};

export default NotFound;
