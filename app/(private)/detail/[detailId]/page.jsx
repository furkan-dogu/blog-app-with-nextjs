"use client";

import useBlogCalls from "@/hooks/useBlogCalls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CommentBox from "./components/CommentBox";
import Loading from "@/components/Loading";
import CommentCards from "./components/CommentCards";

const BlogDetail = ({ params }) => {
  const { detailId } = params;
  const { getSingleBlog, postLike } = useBlogCalls();
  const { singleBlog, loading } = useSelector((state) => state.blog);
  const { personalId } = useSelector((state) => state.auth);
  const [commentArea, setCommentArea] = useState(false)
  const [info, setInfo] = useState({
    userId: personalId,
    blogId: detailId,
    comment: ""
  })

  useEffect(() => {
    getSingleBlog(detailId);
  }, []);

  const {
    comments,
    content,
    countOfVisitors,
    createdAt,
    image,
    likes,
    title,
    userId,
  } = singleBlog;

  const LikeStyle = likes?.includes(personalId)
    ? { color: "red" }
    : { color: "inherit" };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Stack
        minHeight={"calc(90vh - 70px)"}
        justifyContent={"center"}
        alignItems={"center"}
        py={3}
      >
        <Box maxWidth={900} width={"90%"}>
          <CardMedia
            component="img"
            alt={title}
            sx={{ maxHeight: 400, objectFit: "contain", pt: 1 }}
            image={image}
          />
          <CardHeader
            avatar={
              <Avatar
                sx={!userId?.image && { bgcolor: red[500] }}
                src={userId?.image}
                alt={userId?.username}
              />
            }
            title={userId?.username}
            subheader={new Date(createdAt).toLocaleString()}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              whiteSpace={"pre-wrap"}
              textAlign={"justify"}
            >
              {content}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={() => postLike(singleBlog)}>
              <FavoriteIcon sx={LikeStyle} />
              <Typography>{likes?.length}</Typography>
            </IconButton>
            <IconButton onClick={() => setCommentArea(!commentArea)}>
              <CommentIcon />
              <Typography>{comments?.length}</Typography>
            </IconButton>
            <IconButton>
              <VisibilityIcon />
              <Typography>{countOfVisitors}</Typography>
            </IconButton>
          </CardActions>
          {commentArea && (
            <>
              <CommentBox info={info} setInfo={setInfo} />
              {comments.map((item, index) => (
                <Box key={index} mt={1}>
                  <CommentCards item={item} setInfo={setInfo} />
                </Box>
              ))}
            </>
            )}
        </Box>
      </Stack>
    );
  }
};

export default BlogDetail;
