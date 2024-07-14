"use client";

import Loading from "@/app/loading";
import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Profile = () => {
  const { image, user, email, bio, loading } = useSelector(
    (state) => state.auth
  );
  const router = useRouter();

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Stack
        minHeight={"calc(90vh - 70px)"}
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
      >
        <Stack alignItems={"center"} gap={1} maxWidth={900} width={"90%"}>
          <CardMedia
            component="img"
            alt={user}
            image={image}
            sx={{ height: 300, width: 300, borderRadius: 3 }}
          />
          <Typography variant="h4">{user}</Typography>
          <Typography variant="h6">{email}</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"justify"}
          >
            {bio}
          </Typography>
          <Box pt={2}>
            <Button
              variant="contained"
              sx={{
                color: "turquoise",
                backgroundColor: "#0C0C0C",
                "&:hover": { backgroundColor: "#0C0C0C", opacity: 0.95 },
              }}
              onClick={() => router.push("/profile/edit")}
            >
              Update user information
            </Button>
          </Box>
        </Stack>
      </Stack>
    );
  }
};

export default Profile;
