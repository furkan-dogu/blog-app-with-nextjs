"use client";

import Cards from "@/components/Cards";
import Loading from "@/components/Loading";
import useBlogCalls from "@/hooks/useBlogCalls";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { blogs, loading } = useSelector((state) => state.blog);
  const { getBlogs } = useBlogCalls();

  useEffect(() => {
    getBlogs();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        flexWrap={"wrap"}
        py={3}
        gap={2}
        minHeight={"calc(90vh - 70px)"}
      >
        {blogs.map((blog) => (
          <Cards key={blog._id} blog={blog} />
        ))}
      </Stack>
    );
  }
}