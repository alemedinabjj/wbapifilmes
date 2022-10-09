import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { CardMovie } from "../components/Card";

const APIkey = import.meta.env.VITE_API_KEY;

export const Genres = () => {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  const getMovies = useCallback(async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?${APIkey}&language
        =pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`;
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  }, [id]);

  console.log(movies);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="flex flex-col justify-center items-center dark:bg-slate-800 min-h-screen">
      <section className="grid justify-center sm:grid-cols-2 md:grid-cols-4 ">
        {movies.map((movie) => {
          return <CardMovie movie={movie} />;
        })}
      </section>
    </div>
  );
};
