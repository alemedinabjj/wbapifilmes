import { createContext } from "react";

const FavoriteContext = createContext({
  favoriteMovies: [],
  updateFavoriteMovies: (id) => null,
});

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;