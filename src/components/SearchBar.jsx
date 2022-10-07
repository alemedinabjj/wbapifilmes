import { Button } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (movie) => {
    console.log(movie);
    if (!movie) return;

    navigate(`/search?q=${search}`);

    setSearch("");
  };

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-5">
      <TextField
        size="small"
        className="dark:bg-slate-600"
        id="filled-basic"
        variant="filled"
        label="movie"
        type="search"
        value={search}
        onChange={handleChange}
      />
      <Button variant="outlined" size="small" onClick={onButtonClickHandler}>
        Search
      </Button>
    </div>
  );
}
