import { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";

const APIkey = import.meta.env.VITE_API_KEY;

export const CastMovie = ({ id, type }) => {
  const [cast, setCast] = useState([]);
  const getCast = async () => {
    const url = `https://api.themoviedb.org/3/${type === "movie" ? "movie" : "tv"}/${id}/credits?${APIkey}&language=pt-BR`;

    const response = await fetch(url);
    const data = await response.json();
    setCast(data.cast);
  };

  useEffect(() => {
    getCast();
  }, [id]);

  return (
    <div className="flex flex-wrap items-center justify-between p-5">
      {cast.map((cast) => {
        return (
          <div>
            <CardMedia
              component="img"
              src={`
                ${cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : "https://via.placeholder.com/500x750"}
            `}
              alt={cast.name}
              className="w-[300px]"
            />
            <p>{cast.name}</p>
            <p>{cast.character}</p>
          </div>
        );
      })}
    </div>
  );
};
