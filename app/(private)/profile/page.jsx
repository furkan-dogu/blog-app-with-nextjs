"use client";

import Loading from "@/components/Loading";
import { CardMedia, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const { image, user, email, bio, loading } = useSelector(
    (state) => state.auth
  );

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
        </Stack>
      </Stack>
    );
  }
};

export default Profile;
