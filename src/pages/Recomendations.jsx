import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { APIkey } from "../config/key.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function Recomendations() {
  function backToTop() {
    window.scrollTo(0, 0);
  }

  const { id } = useParams();
  const image_path = "https://image.tmdb.org/t/p/w500";

  const [recomendations, setRecomendations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        await `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${APIkey}&language=pt-BR&page=1&max_results=5`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setRecomendations(data.results));
    };

    fetchData();
  }, []);

  return (
    <main className="dark:bg-slate-800 min-h-screen">
      <h1 className="text-3xl text-white text-center">Recomendados</h1>
      <section className="grid justify-center sm:grid-cols-2 md:grid-cols-4 ">
        {recomendations.map((movie) => {
          {
            movie.length === 0 && (
              <div className="w-full flex items-center justify-center h-[40vh]">
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              </div>
            );
          }
          return (
            <Card
              sx={{ maxWidth: 245 }}
              className="m-5 dark:bg-slate-700"
              key={movie.id}
            >
              <CardMedia
                component="img"
                alt={movie.title}
                height="140"
                image={image_path + movie.poster_path}
              />
              <CardContent className="dark:bg-slate-900 dark:text-white">
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  <div className="flex items-center gap-2 justify-start">
                    <FaStar color="yellow" /> {movie.vote_average.toFixed(1)}
                  </div>
                </Typography>
              </CardContent>
              <CardActions className="dark:bg-slate-700 flex self-end">
                <Link to={`/details/${movie.id}`}>
                  <Button size="small" onClick={backToTop}>
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
