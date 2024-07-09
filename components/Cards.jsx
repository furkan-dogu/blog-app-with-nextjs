import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import useBlogCalls from "@/hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { toastErrorNotify } from "@/helpers/ToastNotify";

export default function Cards({ blog }) {
  const router = useRouter();
  const { postLike } = useBlogCalls();
  const { personalId } = useSelector((state) => state.auth);

  const LikeStyle = blog?.likes?.includes(personalId)
    ? { color: "red" }
    : { color: "inherit" };

  const handleLike = () => {
    if (!personalId) {
      toastErrorNotify("You must login to perform this operation.");
      return;
    }
    postLike(blog);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={blog?.title}
        height="140"
        image={blog?.image}
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
          }}
        >
          {blog?.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {blog?.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Box>
          <IconButton onClick={handleLike}>
            <FavoriteIcon sx={LikeStyle} />
            <Typography>{blog?.likes.length}</Typography>
          </IconButton>
          <IconButton>
            <CommentIcon />
            <Typography>{blog?.comments.length}</Typography>
          </IconButton>
          <IconButton>
            <VisibilityIcon />
            <Typography>{blog?.countOfVisitors}</Typography>
          </IconButton>
        </Box>
        <Button
          variant="contained"
          sx={{
            color: "turquoise",
            backgroundColor: "#0C0C0C",
            fontSize: 12,
            "&:hover": { backgroundColor: "#0C0C0C", opacity: 0.95 },
          }}
          onClick={() => router.push(`/detail/${blog?._id}`)}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
