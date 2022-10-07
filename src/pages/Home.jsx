import { APIkey } from "../config/key.js";
import { useState, useEffect, useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { CardMovie } from "../components/Card.jsx";
import { useCallback } from "react";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const moreMovies = useRef();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = await `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIkey}&language=pt-BR&page=${page}`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setMovies(data.results));
  //   };
  //   fetchData();
  // }, []);

  //scroll metade da pagina

  useEffect(() => {
    moreMoviesHandler();
  }, []);

  const moreMoviesHandler = useCallback(async () => {
    const url = await `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIkey}&language=pt-BR&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies([...movies, ...data.results]));
    setPage(page + 1);
  }, [page, movies]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log(movies);
          moreMoviesHandler();
        }
      },
      { threshold: 0.5 }
    );
    if (moreMovies.current) {
      observer.observe(moreMovies.current);
    }
  }, [moreMoviesHandler]);

  return (
    <>
      {" "}
      <main className="dark:bg-slate-800 min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <section className="grid justify-center sm:grid-cols-2 md:grid-cols-4 ">
            {movies.map((movie) => {
              return <CardMovie movie={movie} />;
            })}
          </section>
        </div>
      </main>
      <div className="" ref={moreMovies}></div>
    </>
  );
}
