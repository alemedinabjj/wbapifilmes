import { CardMovie } from "../components/Card";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { useEffect, useState } from "react";

export const Category = () => {
  const { category, type } = useParams();

  console.log(type);

  const [movies, setMovies] = useState([]);

  const getMovies = useCallback(async () => {
    const url = `https://api.themoviedb.org/3/movie/${category}?${import.meta.env.VITE_API_KEY}&language=pt-BR&page=1`;
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  }, [category]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="flex flex-col justify-center items-center dark:bg-slate-800 min-h-screen">
      <h1 className="title">Category | {category.slice(0, 1).toUpperCase() + category.slice(1)}</h1>
      <section className="grid justify-center sm:grid-cols-2 md:grid-cols-4 ">
        {movies.map((movie) => (
          <CardMovie movie={movie} />
        ))}
      </section>
    </div>
  );
};
