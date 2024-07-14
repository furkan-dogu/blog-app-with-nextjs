"use client";

import useBlogCalls from "@/hooks/useBlogCalls";
import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MyBlogsCards from "./components/MyBlogsCards";
import { useRouter } from "next/navigation";

const MyBlogs = () => {
  const { getMyBlogs } = useBlogCalls();
  const { myBlogs } = useSelector((state) => state.blog);
  const { personalId } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    getMyBlogs(personalId);
  }, []);

  return (
    <Stack
      minHeight={"calc(90vh - 70px)"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      py={2}
      gap={2}
    >
      {!myBlogs.length ? (
        <Stack gap={2}>
          <Typography variant="h6" color={"error"}>
            No Blog Data
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "turquoise",
              backgroundColor: "#0C0C0C",
              "&:hover": { backgroundColor: "#0C0C0C", opacity: 0.95 },
            }}
            onClick={() => router.push("/new-blog")}
          >
            New Blog
          </Button>
        </Stack>
      ) : (
        myBlogs.map((item) => <MyBlogsCards key={item._id} item={item} />)
      )}
    </Stack>
  );
};

export default MyBlogs;
