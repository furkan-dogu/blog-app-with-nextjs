import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function PaginationControlled({ page, setPage }) {
  const { totalPages } = useSelector((state) => state.blog);
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack alignItems={"center"} pb={2}>
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Stack>
  );
}
