import { useEffect, useContext, useState } from "react";
import { FavoriteContext } from "../hooks/FavoriteContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export const CardMovie = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoriteContext);
  const [favorite, setFavorite] = useState(false);

  const image_path = "https://image.tmdb.org/t/p/w500";

  function backToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    setFavorite(isFavorite(movie));
  }, [movie]);

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
    setFavorite(!favorite);
  };

  return (
    <Card sx={{ maxWidth: 405 }} className="m-5 dark:bg-slate-700 relative" key={movie.id}>
      <div
        className={`absolute top-0 -right-10 bg-slate-900 w-28 h-24 transform translate-x-12 -translate-y-5 rounded-full opacity-0 ${
          favorite && "opacity-100 right-0"
        } transition-all duration-500`}
      >
        <span className="absolute bottom-6 left-5 ">
          <FaStar className="text-yellow-400" size="2rem" />
        </span>
      </div>
      <CardMedia component="img" alt={movie.title} height="140" image={image_path + movie.poster_path} />
      <CardContent className="dark:bg-slate-900 dark:text-white h-full">
        <Typography gutterBottom variant="h5" component="div" className="flex h-20 items-start justify-between">
          {movie.title.length > 15 ? movie.title.substring(0, 15) + "..." : movie.title}
          <div className="flex items-center gap-2 justify-start">
            <FaStar color="yellow" /> {movie.vote_average}
          </div>
        </Typography>
      </CardContent>
      <CardActions className="dark:bg-slate-700 flex self-end justify-between items-center w-full absolute bottom-0 ">
        <Link to={`/details/${movie.id}`}>
          <Button size="small" onClick={backToTop} className="dark:text-white dark:border dark:border-white">
            Detalhes do filme
          </Button>
        </Link>
        <Button variant="contained" size="small" onClick={handleFavorite} className="transition flex items-center gap-1">
          {favorite ? "Remove from favorites" : "Add to favorites"}
          {favorite ? <FaStar color="#FFD700" size="1rem" /> : <FaStar color="white" size="1rem" />}
        </Button>
      </CardActions>
    </Card>
  );
};
