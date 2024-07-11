"use client";

import useBlogCalls from "@/hooks/useBlogCalls";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MyBlogsCards from "./components/MyBlogsCards";

const MyBlogs = () => {
  const { getMyBlogs } = useBlogCalls();
  const { myBlogs } = useSelector((state) => state.blog);
  const { personalId } = useSelector((state) => state.auth);

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
      {myBlogs.map((item) => (
        <MyBlogsCards key={item._id} item={item} />
      ))}
    </Stack>
  );
};

export default MyBlogs;
