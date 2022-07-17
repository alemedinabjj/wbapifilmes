import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIkey } from "../config/key.js";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import ReactPlayer from "react-player";
import { BsArrowDownCircle } from "react-icons/bs";

export function Details() {
  const [movie, setMovie] = useState();

  const { id } = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=pt-BR&append_to_response=videos`;
    fetch(url).then((res) =>
      res.json().then((data) => {
        const movie = {
          id,
          video: data.videos.results[0].key,
          production_countries: data.production_countries,
          original_title: data.original_title,
          production_companies: data.production_companies,
          status: data.status,
          runtime: data.runtime,
          tagline: data.tagline,
          title: data.title,
          sinopse: data.overview,
          image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          release: data.release_date,
        };
        setMovie(movie);
        console.log(movie);
      })
    );
  }, [id]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <main className="dark:bg-slate-800 ">
      <section className="p-5 flex flex-col">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, sm: 1, md: 4 }}
            columns={{ xs: 1, md: 12 }}
          >
            <Grid item xs={4}>
              <Item
                sx={{
                  backgroundColor: "primary.dark",
                }}
              >
                <div className="flex items-center justify-center">
                  <img src={movie?.image} alt={movie?.title} className="w-80" />
                </div>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <h1 className="text-3xl text-center pb-10 dark:text-white">
                Sinopse
              </h1>
              <Item className="dark:bg-slate-900 dark:text-white">
                {movie?.sinopse}
              </Item>
              <Item className="dark:bg-slate-900 lg:hidden">
                <BsArrowDownCircle size={50} className="text-white m-auto p-3 animate-bounce" />
                <Button>
                  <a href={`https://www.youtube.com/watch?v=${movie?.video}`} target="_blank">
                    Trailer
                  </a>
                </Button>
              </Item>
              <Grid className="h-full hidden lg:block">
                <Item className="h-full dark:bg-slate-900 p-5">
                  <h2 className="text-3xl dark:text-white">Trailer</h2>
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${movie?.video}`}
                    width="100%"
                    height="90%"
                    pip={true}
                    constrols={true}
                    config={{ file: { forceHLS: true } }}
                  />
                </Item>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="flex flex-col gap-5">
                <Item className="dark:bg-slate-900 dark:text-white">
                  <div className="flex gap-5 items-center justify-center">
                    {movie?.status === "Released" ? (
                      <Chip label="Postado" color="success" />
                    ) : (
                      <Chip label="Em produçao" color="primary" />
                    )}

                    <h2>Release {movie?.release}</h2>
                  </div>
                </Item>
                <Item className="dark:bg-slate-900">
                  <h1 className="text-3xl dark:text-white">{movie?.title}</h1>
                  <h3 className="dark:text-white">{movie?.tagline}</h3>
                </Item>
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <Grid>
                  <Item className="dark:bg-slate-900 dark:text-white">
                    <h3 className="text-start">
                      Duraçao: {movie?.runtime} Minutos.
                    </h3>
                  </Item>
                </Grid>
                <Grid>
                  <Item className="dark:bg-slate-900 dark:text-white">
                    <h3 className="text-start">
                      Produzido por: {movie?.production_companies[0].name}
                    </h3>
                  </Item>
                </Grid>
                <Grid>
                  <Item className="dark:bg-slate-900 dark:text-white">
                    <h3 className="text-start">
                      Pais: {movie?.production_countries[0].name}
                    </h3>
                  </Item>
                </Grid>
                <Grid>
                  <Item className="dark:bg-slate-900 dark:text-white">
                    <h3 className="text-start">
                      Titulo original: {movie?.original_title}
                    </h3>
                  </Item>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Box>
        <div className="flex flex-row justify-between items-end ">
          <Stack>
            <Rating name="size-large" defaultValue={2} value={5} size="large" />
          </Stack>
          <div className="flex justify-end pt-5">
            <Link to="/">
              <Button variant="contained" size="large">
                BACK
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
