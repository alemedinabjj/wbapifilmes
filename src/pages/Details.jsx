import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { APIkey } from "../config/key.js"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


export function Details() {

  const [movie, setMovie] = useState()

  const { id } = useParams()

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=pt-BR`
    fetch(url).then(res => res.json().then(data => {

      const movie = {
        id,
        title: data.title,
        sinopse: data.overview,
        image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        release: data.release_date,
      }
      setMovie(movie)
      console.log(movie)
    }))
  },[id])

  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  return (
    <section className="p-5 flex flex-col">
      <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item sx={{
            backgroundColor: 'primary.dark',
          }}>
            <div className="flex items-center justify-center">
              <img src={movie?.image}  alt={movie?.title} className="w-80" />
            </div>
            
          </Item>
        </Grid>
        <Grid item xs={8}>
          <h1 className="text-3xl text-center pb-10">Sinopse</h1>
          <Item>{movie?.sinopse}</Item>
        </Grid>
        <Grid item xs={4}>
          <div className="flex flex-col gap-5">
          <Item>
            <h2>Release {movie?.release}</h2>
          </Item>
          <Item>
            <h1 className="text-3xl">{movie?.title}</h1>  
          </Item>
          </div>
        </Grid>
        </Grid>
    </Box>
      <div className="flex flex-row justify-between items-end ">
        <Stack  >
           <Rating name="size-large" defaultValue={2} size="large" />
        </Stack>
        <div className="flex justify-end">
        <Link to="/"> 
        <Button variant="contained" size="large">
          BACK
        </Button>
        </Link>
        </div>
      
        </div>
    </section>
  )
}