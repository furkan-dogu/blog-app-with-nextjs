"use client";

import Cards from "@/components/Cards";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import useBlogCalls from "@/hooks/useBlogCalls";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { blogs, loading, current } = useSelector((state) => state.blog);
  const { getBlogs } = useBlogCalls();
  const [page, setPage] = useState(current);

  useEffect(() => {
    getBlogs(page);
  }, [page]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"column"}
        py={3}
        gap={2}
        minHeight={"calc(90vh - 70px)"}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          gap={2}
        >
          {blogs.map((blog) => (
            <Cards key={blog._id} blog={blog} />
          ))}
        </Stack>
        <Pagination page={page} setPage={setPage} />
      </Stack>
    );
  }
}
