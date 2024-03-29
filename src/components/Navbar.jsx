import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { DarkModeButton } from "./DarkModeButton";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { FavoriteContext } from "../hooks/FavoriteContext";
import Dashboard from "./Dashboard";
import { GenresDash } from "./GenresDash";

export function Navbar() {
  const { favorites } = useContext(FavoriteContext);

  const clickTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="w-full sticky top-0 left-0 z-10 flex flex-col sm:flex-row items-center justify-between p-5 bg-gray-100 dark:bg-slate-900">
      <div className="sm:flex sm:justify-between items-center">
        <ul className="flex flex-wrap gap-5 justify-center items-center">
          <Link to={`/`}>
            <Stack direction="row" spacing={2}>
              <Button size="small">
                <h1 className="text-sm" onClick={clickTop}>
                  Homepage
                </h1>
              </Button>
            </Stack>
          </Link>
          <Link to={`/contact`}>
            <Stack direction="row" spacing={2}>
              <Button>
                <h1 className="text-sm" onClick={clickTop}>
                  Contact
                </h1>
              </Button>
            </Stack>
          </Link>
          <Link to={`/choose`}>
            <Stack direction="row" spacing={2}>
              <Button>
                <h1 className="text-sm" onClick={clickTop}>
                  Choose
                </h1>
              </Button>
            </Stack>
          </Link>

          <Stack direction="row" spacing={2}>
            <Dashboard />
          </Stack>

          <Stack direction="row" spacing={2}>
            <GenresDash />
          </Stack>
          <Link to={`/favorites`}>
            <Stack direction="row" spacing={2}>
              <Button>
                <h1 className="text-sm" onClick={clickTop}>
                  <div className="flex items-center gap-2">
                    <p>Favorites</p>
                    <div className="flex items-center">
                      <p className="text-base text-white">{favorites.length}</p>
                    </div>
                  </div>
                </h1>
              </Button>
            </Stack>
          </Link>
        </ul>
      </div>
      <div className="flex items-center pt-5 sm:pt-0 gap-2">
        <SearchBar />
        <DarkModeButton />
      </div>
    </nav>
  );
}
