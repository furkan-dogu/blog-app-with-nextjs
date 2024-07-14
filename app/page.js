"use client";

import Cards from "@/components/Cards";
import Loading from "@/app/loading";
import Pagination from "@/components/Pagination";
import useBlogCalls from "@/hooks/useBlogCalls";
import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MostVisited from "@/components/MostVisited";

export default function Home() {
  const { blogs, loading, current } = useSelector((state) => state.blog);
  const { getBlogs, getAllBlog } = useBlogCalls();
  const [page, setPage] = useState(current);

  useEffect(() => {
    getBlogs(page);
    getAllBlog();
  }, [page]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          py={3}
          gap={2}
          minHeight={"calc(90vh - 70px)"}
          maxWidth={1200}
          width={"90%"}
          margin={"auto"}
        >
          <Box width={"20%"}>
            <MostVisited />
          </Box>
          <Stack alignItems={"center"} gap={2} width={"80%"}>
            {blogs.map((blog) => (
              <Cards key={blog._id} blog={blog} />
            ))}
          </Stack>
        </Stack>
        <Pagination page={page} setPage={setPage} />
      </>
    );
  }
}
