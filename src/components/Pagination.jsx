import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ setPage, page }) {
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <div className="p-5">
      <Stack spacing={2}>
        <Pagination count={100} onChange={(event) => handleChange(event, event.target.textContent)} color="primary" />
      </Stack>
    </div>
  );
}
