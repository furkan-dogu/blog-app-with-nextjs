import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import useBlogCalls from "@/hooks/useBlogCalls";

export default function CommentCards({ item }) {
  const { personalId } = useSelector((state) => state.auth);
  const { comment, createdAt, userId } = item;
  const { deleteComment } = useBlogCalls();

  return (
    <Card variant="outlined">
      <CardContent>
        <CardHeader
          avatar={<Avatar src={userId?.image} alt={userId?.username} />}
          title={userId?.username}
          subheader={new Date(createdAt).toLocaleString()}
        />

        <Typography
          variant="body2"
          whiteSpace={"pre-wrap"}
          px={2}
          textAlign={"justify"}
        >
          {comment}
        </Typography>
      </CardContent>
      {userId?._id === personalId && (
        <CardActions>
          <Button size="small" variant="contained" color="success">
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => deleteComment(item)}
          >
            Delete
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
