import { createContext, useContext, useState, useEffect } from "react";

export const FavoriteContext = createContext({});

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []);

  const addFavorite = (movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFavorite = (favorite) => {
    const newFavorites = favorites.filter((movie) => movie.id !== favorite.id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const isFavorite = (favorite) => {
    return favorites.some((movie) => movie.id === favorite.id);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>{children}</FavoriteContext.Provider>;
};

export default FavoriteProvider;
