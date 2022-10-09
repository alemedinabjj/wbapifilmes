import React, { useContext, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

import { FavoriteContext } from "../hooks/FavoriteContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/global.css";
import { FaStar } from "react-icons/fa";

// import required modules

export const Banner = () => {
  const [movies, setMovies] = useState([]);
  const APIkey = import.meta.env.VITE_API_KEY;

  const { favorites } = useContext(FavoriteContext);

  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/trending/all/week?${APIkey}&language=pt-BR`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const image_path = "https://image.tmdb.org/t/p/original";

  return (
    <div className="md:w-full md:h-[500px] md:relative md:pt-5 md:block hidden">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        effect={"fade"}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        objctFit="cover"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {movies.map((movie) => {
          return (
            <>
              <SwiperSlide>
                <div>
                  <span>
                    {favorites.find((fav) => fav.id === movie.id) ? (
                      <p className="absolute top-2 right-2 text-2xl text-white">
                        <FaStar size="2rem" color="yellow" />
                      </p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <img src={`${image_path}${movie.backdrop_path}`} alt={movie.title || movie.name} className="w-full h-fit object-cover" />

                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                  <div className="flex items-center gap-3 mb-5">
                    <h1 className="text-4xl text-white font-bold">{movie.title || movie.name || movie.original_name}</h1>
                    <div className="flex items-center text-white gap-2 bg-slate-900 px-4 py-2 rounded shadow-3xl">
                      <Rating name="read-only" value={movie?.vote_average / 2} precision={0.5} readOnly /> {movie.vote_average.toFixed(1)}
                    </div>
                  </div>
                  <p className="text-white max-w-6xl">{movie.overview}</p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black"></div>
                <div className="absolute bottom-0 left-0 w-full h-full flex justify-end items-end mb-10">
                  <Link to={`/details/${movie.media_type}/${movie.id}`}>
                    <button className="bg-red-500 hover:brightness-75 text-white px-5 py-2 rounded-md mr-10">Saiba mais</button>
                  </Link>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};
