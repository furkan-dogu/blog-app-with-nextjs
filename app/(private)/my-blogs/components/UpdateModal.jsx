import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCalls from "@/hooks/useBlogCalls";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 450,
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  borderRadius: 4,
};

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

export default function UpdateModal({ open, handleClose, info, setInfo }) {
  const { categories } = useSelector((state) => state.blog);
  const { updateBlog } = useBlogCalls();
  const router = useRouter()

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

//   console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(info);
    updateBlog(info);
    router.push("/my-blogs");
  };
  return (
    <Box>
      <Modal open={open} onClose={handleClose}>
        <Stack
          sx={style}
          component={"form"}
          noValidate
          alignItems={"center"}
          gap={2}
          onSubmit={handleSubmit}
        >
          <Typography variant="h4">Update Blog</Typography>
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
              {categories?.map((category) => (
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
            rows={4}
            value={info.content}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Update Blog
          </Button>
        </Stack>
      </Modal>
    </Box>
  );
}
