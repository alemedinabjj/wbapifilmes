import { useState, useEffect, useCallback } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const APIkey = import.meta.env.VITE_API_KEY;

export const GenresDash = () => {
  const [genres, setGenres] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getGenres = useCallback(async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?${APIkey}&language
        =pt-BR`;
    const res = await fetch(url);
    const data = await res.json();

    setGenres(data.genres);
  }, []);

  useEffect(() => {
    getGenres();
  }, []);

  console.log(genres);

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Generos
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {genres.map((genre) => (
          <MenuItem onClick={handleClose}>
            <Link to={`/genres/movie/${genre.id}`}>{genre.name}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
