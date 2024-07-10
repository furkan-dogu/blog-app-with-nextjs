import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <Stack
      minHeight={"calc(90vh - 70px)"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      py={2}
    >
      <Stack
        alignItems={"center"}
        gap={2}
        boxShadow={5}
        px={2}
        py={4}
        maxWidth={400}
        width={"90%"}
      >
        <Box
          sx={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src={"https://avatars.githubusercontent.com/u/140394399?v=4"}
            width={150}
            height={150}
            alt="Furkan Doğu"
          />
        </Box>
        <Typography variant="h3">Furkan DOĞU</Typography>
        <Typography variant="h5" color="text.secondary">
          Mern Stack Developer
        </Typography>
        <Box>
          <IconButton href="https://furkandogu.vercel.app/" target="_blank">
            <HomeIcon
              sx={{
                fontSize: "2rem",
                color: "black",
                "&:hover": { color: "turquoise" },
              }}
            />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/furkan.dogu_/"
            target="_blank"
          >
            <InstagramIcon
              sx={{
                fontSize: "2rem",
                color: "black",
                "&:hover": { color: "#F70D41" },
              }}
            />
          </IconButton>
          <IconButton href="https://github.com/furkan-dogu" target="_blank">
            <GitHubIcon
              sx={{
                fontSize: "2rem",
                color: "black",
                "&:hover": { color: "darkgray" },
              }}
            />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/furkan-dogu/"
            target="_blank"
          >
            <LinkedInIcon
              sx={{
                fontSize: "2rem",
                color: "black",
                "&:hover": { color: "#0274B3" },
              }}
            />
          </IconButton>
        </Box>
      </Stack>
    </Stack>
  );
};

export default About;
