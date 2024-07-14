"use client";

import useBlogCalls from "@/hooks/useBlogCalls";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const status = [
  {
    id: 1,
    name: "Draft",
    publish: false,
  },
  {
    id: 2,
    name: "Published",
    publish: true,
  },
];

const NewBlog = () => {
  const { postBlog, getCategories } = useBlogCalls();
  const { categories, current } = useSelector((state) => state.blog);
  const { personalId } = useSelector((state) => state.auth);
  const router = useRouter();
  const [info, setInfo] = useState({
    userId: personalId,
    categoryId: "",
    title: "",
    content: "",
    image: "",
    isPublish: "",
  });

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(info);
    postBlog(info, current);
    router.push("/");
  };

  return (
    <Stack
      minHeight={"calc(90vh - 70px)"}
      justifyContent={"center"}
      alignItems={"center"}
      p={2}
    >
      <Stack
        maxWidth={500}
        width={"90%"}
        alignItems={"center"}
        spacing={2}
        boxShadow={5}
        borderRadius={3}
        p={3}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4">New Blog</Typography>
        <TextField
          id="title"
          name="title"
          label="Title"
          type="text"
          required
          fullWidth
          value={info.title}
          onChange={handleChange}
        />
        <TextField
          id="image"
          name="image"
          label="Image URL"
          type="url"
          required
          fullWidth
          value={info.image}
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <InputLabel id="category-label">Category *</InputLabel>
          <Select
            labelId="category-label"
            required
            id="categoryId"
            name="categoryId"
            label="Category *"
            value={info.categoryId}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <MenuItem key={category._id} value={category._id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="status-label">Status *</InputLabel>
          <Select
            labelId="status-label"
            required
            id="isPublish"
            name="isPublish"
            label="Status *"
            value={info.isPublish}
            onChange={handleChange}
          >
            {status.map((item) => (
              <MenuItem key={item.id} value={item.publish}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="content"
          name="content"
          label="Content"
          type="text"
          required
          multiline
          fullWidth
          inputProps={{ minLength: 200 }}
          rows={4}
          value={info.content}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          New Blog
        </Button>
      </Stack>
    </Stack>
  );
};

export default NewBlog;
