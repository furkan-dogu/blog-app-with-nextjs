import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, IconButton, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import useBlogCalls from "@/hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { toastErrorNotify } from "@/helpers/ToastNotify";

export default function Cards({ blog }) {
  const router = useRouter();
  const { postLike } = useBlogCalls();
  const { personalId } = useSelector((state) => state.auth);
  const { current } = useSelector((state) => state.blog);

  const LikeStyle = blog?.likes?.includes(personalId)
    ? { color: "red", fontSize: {xs: 16, sm: 20} }
    : { color: "inherit", fontSize: {xs: 16, sm: 20} };

  const handleLike = () => {
    if (!personalId) {
      toastErrorNotify("You must login to perform this operation.");
      return;
    }
    postLike(blog, current);
  };

  return (
    <Card sx={{ width: "90%", backgroundColor:"#FFFEF9", boxShadow: 5 }}>
      <CardMedia
        component="img"
        alt={blog?.title}
        image={blog?.image}
        sx={{
          height: {xs: 120, sm: 200, md: 280}
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            fontSize: {xs: 13, sm: 16, lg:24}
          }}
        >
          {blog?.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            fontSize: {xs: 10, sm: 12, lg:14}
          }}
        >
          {blog?.content}
        </Typography>
        <hr />
        <Typography
          variant="body2"
          fontSize={{xs: 10, sm: 12, lg:14}}
        >
          Published Date: {new Date(blog?.createdAt).toLocaleString()}
        </Typography>
      </CardContent>
      <Stack sx={{ justifyContent: "space-between", flexDirection: {xs:"column", sm:"row"}, gap: 1, p: 1 }}>
        <Box mt={{xs: -2, sm: 0}}>
          <IconButton onClick={handleLike}>
            <FavoriteIcon sx={LikeStyle} />
            <Typography sx={{fontSize: {xs: 16, sm: 20}}}>{blog?.likes.length}</Typography>
          </IconButton>
          <IconButton>
            <CommentIcon sx={{fontSize: {xs: 16, sm: 20}}} />
            <Typography sx={{fontSize: {xs: 16, sm: 20}}}>{blog?.comments.length}</Typography>
          </IconButton>
          <IconButton>
            <VisibilityIcon sx={{fontSize: {xs: 16, sm: 20}}} />
            <Typography sx={{fontSize: {xs: 16, sm: 20}}}>{blog?.countOfVisitors}</Typography>
          </IconButton>
        </Box>
        <Button
          variant="contained"
          sx={{
            color: "turquoise",
            backgroundColor: "#0C0C0C",
            fontSize: {xs: 10, sm: 12},
            width: {xs:"100%", sm: 120},
            "&:hover": { backgroundColor: "#0C0C0C", opacity: 0.95 },
          }}
          onClick={() => router.push(`/detail/${blog?._id}`)}
        >
          Read More
        </Button>
      </Stack>
    </Card>
  );
}
