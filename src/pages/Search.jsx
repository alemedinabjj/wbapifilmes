import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CardMovie } from "../components/Card";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  function backToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/multi?${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [query]);

  return (
    <main className="dark:bg-slate-800 min-h-screen">
      <div className="flex flex-col justify-center items-center dark:text-white">
        <h1 className="p-10 text-3xl">
          Resultados para: <span className="text-sky-600">{query}</span>
        </h1>
        <section className="grid justify-center sm:grid-cols-2 md:grid-cols-4 ">
          {movies.map((movie) => {
            return <CardMovie movie={movie} />;
          })}
        </section>
      </div>
    </main>
  );
}
