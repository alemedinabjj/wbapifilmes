import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY



export function Search() {
  const image_path = 'https://image.tmdb.org/t/p/w500'
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get('q')

  useEffect(() => {
    const url = `${searchURL}?${apiKey}&query=${query}`
    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  },[query])

  return (
    <main>
      <div className='flex flex-col justify-center items-center'>
       <h1 className='p-10 text-3xl'>Resultados para: <span className='text-sky-600'>{query}</span></h1>
      <section className='grid justify-center sm:grid-cols-2 md:grid-cols-4 '>
      {movies.length === 0 && (
          <div className="flex items-center justify-center h-[40vh] w-full">
            <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
          </div>
          
        )}
        {movies.map(movie => {
          return (
            <Card sx={{ maxWidth: 345 }} className="m-5" key={movie.id}>
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
    </main>
    
  )
}