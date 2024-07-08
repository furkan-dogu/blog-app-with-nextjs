import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, IconButton } from "@mui/material";

export default function Cards({ blog }) {
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
      <CardActions disableSpacing sx={{justifyContent: "space-between"}}>
        <Box>
          <IconButton>
            <FavoriteIcon />
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
        <Button variant="contained" sx={{color: "turquoise", backgroundColor: "#0C0C0C", fontSize: 12, "&:hover": {opacity: 0.9}}}>Read More</Button>
      </CardActions>
    </Card>
  );
}
