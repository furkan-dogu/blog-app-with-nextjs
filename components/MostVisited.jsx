import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/system/Stack";
import { useRouter } from "next/navigation";

const MostVisited = () => {
  const { allBlogs } = useSelector((state) => state.blog);
  const router = useRouter()

  const sortedBlogs = allBlogs
    .slice()
    .sort((a, b) => b.countOfVisitors - a.countOfVisitors)
    .slice(0, 10);

  return (
    <Stack alignItems={"center"}>
      <Typography
        variant="h5"
        sx={{ textDecoration: "underline", textAlign: "center", fontSize: {xs: 12, lg:20} }}
      >
        Most Visited
      </Typography>
      {sortedBlogs.map(({ _id, countOfVisitors, createdAt, image, title }) => (
        <Stack
          key={_id}
          justifyContent={"center"}
          alignItems={"center"}
          pt={1}
          spacing={1}
          sx={{ cursor: "pointer" }}
          onClick={() => router.push(`/detail/${_id}`)}
        >
          <CardMedia
            component="img"
            alt={title}
            image={image}
            sx={{
              height: "50%",
              borderRadius: 2,
            }}
          />
          <Box width={"100%"}>
            <Typography
              variant="body1"
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                fontSize: {xs: 10, sm: 12, lg:18}
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize: {xs: 8, sm: 10, lg:14}}}>
              Visitors: {countOfVisitors}
            </Typography>
            <Typography variant="body2" color="text.secondary"  sx={{fontSize: {xs: 8, sm: 10, lg:14}}}>
              {new Date(createdAt).toLocaleDateString()}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default MostVisited;
