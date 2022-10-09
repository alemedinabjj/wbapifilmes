import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { CardMovie } from "../components/Card.jsx";

const APIkey = import.meta.env.VITE_API_KEY;

export function Recomendations() {
  const { id, type } = useParams();

  const [recomendations, setRecomendations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/${type ? type : "Erro"}/${id}/recommendations?${APIkey}&language=pt-BR&page=1&max_results=5`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setRecomendations(data.results));
    };

    fetchData();
  }, []);

  return (
    <main className="dark:bg-slate-800 min-h-screen">
      <h1 className="text-3xl text-white text-center">Recomendados</h1>
      <section className="grid justify-center sm:grid-cols-2 md:grid-cols-4 ">
        {recomendations?.map((movie) => {
          {
            movie.length === 0 && (
              <div className="w-full flex items-center justify-center h-[40vh]">
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              </div>
            );
          }
          return <CardMovie movie={movie} />;
        })}
      </section>
    </main>
  );
}
