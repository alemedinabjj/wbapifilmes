import { Button } from '@mui/material';
import { useEffect, useState } from 'react'
import { APIkey } from "../config/key.js";



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

    <main>
      <section>
          <Button onClick={() => {
            setRandomMovie(randomizerMovie());
            console.log(randomMovie)
          }}>Clique</Button>
          
      </section>
    </main>
  )
}