import { Button } from '@mui/material';
import { useEffect, useState } from 'react'
import { APIkey } from "../config/key.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


export function ChooseMovie() {
  const [movie, setMovie] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIkey}&language=pt-BR&page=1`;
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

    <main className="dark:bg-slate-800">
      <section className="flex items-center justify-center flex-col pt-10 h-[100vh]">
      <Button onClick={() => {
            setRandomMovie(randomizerMovie());
          }} >Escolha para mim</Button>
        {randomMovie.length === 0 ? (
          <h1>Clique no botao</h1>
        ) : (
          <Card sx={{ maxWidth: 345 }} className="m-5 dark:bg-slate-700" key={randomMovie.id}>
              
          <CardMedia
            component="img"
            alt={randomMovie.title}
            height="140"
            image={image_path + randomMovie.poster_path}
          />
          <CardContent className="dark:bg-slate-900 dark:text-white">
            <Typography gutterBottom variant="h5" component="div" >
              {randomMovie.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              <div className="flex items-center gap-2 justify-start">
                <FaStar color="yellow" /> {randomMovie.vote_average}
              </div>
            </Typography>
          </CardContent>
          <CardActions className="dark:bg-slate-700 flex self-end">
            <Link to={`/details/${randomMovie.id}`}>
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
        )}

      
  
      </section>  
    </main>
  )
}