import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import useBlogCalls from "@/hooks/useBlogCalls";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal({ open, handleClose, id }) {
  const { deleteBlog } = useBlogCalls();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
    >
      <Box sx={style} textAlign={"center"} p={5}>
        <Typography id="modal-modal-title" variant="h5">
          Do you really want to delete your blog? This process cannot be undone!
        </Typography>
        <Stack mt={4} direction={"row"} justifyContent={"center"} gap={3}>
          <Button variant="contained" color="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteBlog(id)}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
