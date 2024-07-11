import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

export default function MyBlogsCards({ item }) {
  const router = useRouter()
  
  return (
    <Card sx={{ maxWidth: 345, width: "90%" }}>
      <CardMedia
        component="img"
        alt={item?.title}
        height="140"
        image={item?.image}
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
          {item?.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
            height: 82
          }}
        >
          {item?.content}
        </Typography>
        <hr />
        <Typography variant="body2" color="text.secondary">
          Published Date: {new Date(item?.createdAt).toLocaleString()}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            color: "turquoise",
            backgroundColor: "#0C0C0C",
            fontSize: 12,
            "&:hover": { backgroundColor: "#0C0C0C", opacity: 0.95 },
          }}
          onClick={() => router.push(`/detail/${item?._id}`)}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
