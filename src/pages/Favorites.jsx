import { FavoriteContext } from "../hooks/FavoriteContext";
import { useContext } from "react";
import { CardMovie } from "../components/Card";

export const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoriteContext);

  return (
    <main className="dark:bg-slate-800 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <section className="grid justify-center sm:grid-cols-2 md:grid-cols-4 ">
          {favorites.map((movie) => {
            {
              movie.length === 0 && (
                <div className="w-full flex items-center justify-center h-[40vh]">
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                </div>
              );
            }
            return <CardMovie movie={movie} removeFavorite={removeFavorite} />;
          })}
        </section>
      </div>
    </main>
  );
};
