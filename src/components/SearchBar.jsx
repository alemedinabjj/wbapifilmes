import { Button } from '@mui/material'
import { useState } from 'react'
import {APIkey} from '../config/key'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';

export function SearchBar() {
  const navigate = useNavigate()

  const [movie, setMovie] = useState()

  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const onButtonClickHandler = () => {
    onSearchHandler(search)
  }

    const onSearchHandler = async (movie) => {
    // const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${movie}`)
    console.log(movie)

    if(!movie) return;
    
    navigate(`/search?q=${search}`)

    setSearch('')
  }


  return(
    <div className='flex items-center justify-center gap-2 sm:gap-5'>
      <TextField size="small" className='dark:bg-slate-600' id="filled-basic" variant='filled' label="movie" type="search"  value={search} onChange={handleChange}  />
      <Button variant="outlined" size="small" onClick={onButtonClickHandler}>Search</Button>
    </div>
  )
}