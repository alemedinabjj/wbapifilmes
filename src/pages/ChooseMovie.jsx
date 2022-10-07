import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { CardMovie } from "../components/Card.jsx";

const APIkey = import.meta.env.VITE_API_KEY;

export function ChooseMovie() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?${APIkey}&language=pt-BR&page=1`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, []);

  function randomizerMovie() {
    const random = Math.floor(Math.random() * movie.length);

    const item = movie[random];

    return item;
  }
  const [randomMovie, setRandomMovie] = useState([]);

  return (
    <main className="dark:bg-slate-800 min-h-screen">
      <section className="flex items-center justify-center flex-col pt-10 h-full min-h-[100vh]">
        <Button
          onClick={() => {
            setRandomMovie(randomizerMovie());
          }}
        >
          Escolha para mim
        </Button>
        {randomMovie.length === 0 ? <h1>Clique no botao</h1> : <CardMovie movie={randomMovie} />}
      </section>
    </main>
  );
}
