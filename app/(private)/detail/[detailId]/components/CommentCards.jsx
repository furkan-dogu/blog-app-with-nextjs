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

export default function CommentCards({ item, info, setInfo }) {
  const { personalId } = useSelector((state) => state.auth);
  const { deleteComment } = useBlogCalls();

  const handleEdit = () => {
    setInfo({
      ...info,
      _id: item._id,
      comment: item.comment
    });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <CardHeader
          avatar={
            <Avatar src={item?.userId?.image} alt={item?.userId?.username} />
          }
          title={item?.userId?.username}
          subheader={new Date(item?.createdAt).toLocaleString()}
        />
        <Typography
          variant="body2"
          whiteSpace={"pre-wrap"}
          px={2}
          textAlign={"justify"}
        >
          {item?.comment}
        </Typography>
      </CardContent>
      {item?.userId?._id === personalId && (
        <Box pl={2}>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={handleEdit}
            >
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
        </Box>
      )}
    </Card>
  );
}
