import { APIkey } from '../config/key.js'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


export function Home () {

  const [movies, setMovies] = useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIkey}&language=en-US&page=1`
    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  },[])

  return (
    <div>
      <h1 className='text-3xl text-gray-700 text-center p-10'>Welcome to webpage Films!</h1>
      <section className='grid justify-center sm:grid-cols-2 md:grid-cols-4'>
        {movies.map(movie => {
          return (
            <Card sx={{ maxWidth: 245 }} className="m-5" key={movie.id}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image_path + movie.poster_path}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
              
            </CardContent>
            <CardActions>
              <Link to={`/details/${movie.id}`}>
              <Button size="small">Learn More</Button>
              </Link>
              
            </CardActions>
          </Card>

          )
        }
          )
        }
      </section>
    </div>
  )
}