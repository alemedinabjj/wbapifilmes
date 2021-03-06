import { APIkey } from "../config/key.js";
import { useState, useEffect } from "react";
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

export function Home() {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  function backToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const fetchData = async () => {
      const url =
        await `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIkey}&language=pt-BR&page=1`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
    };
    fetchData();
  }, []);

  return (
    <main className="dark:bg-slate-800 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <section className="grid justify-center sm:grid-cols-2 md:grid-cols-4 ">
          {movies.map((movie) => {
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
                sx={{ maxWidth: 345 }}
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
                      <FaStar color="yellow" /> {movie.vote_average}
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
      </div>
    </main>
  );
}
