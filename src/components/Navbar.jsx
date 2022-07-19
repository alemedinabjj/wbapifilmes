import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { DarkModeButton } from "./DarkModeButton";
import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";

export function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-10 flex flex-col sm:flex-row items-center justify-between p-5 bg-gray-100 dark:bg-slate-900">
      <div className="sm:flex sm:justify-between items-center">
        <ul className="flex gap-5 justify-center items-center">
          <Link to={`/`}>
            <Stack direction="row" spacing={2}>
              <Button size="small">
                <h1 className="text-sm">Homepage</h1>
              </Button>
            </Stack>
          </Link>
          <Link to={`/contact`}>
            <Stack direction="row" spacing={2}>
              <Button>
                <h1 className="text-sm">Contact</h1>
              </Button>
            </Stack>
          </Link>
          <Link to={`/choose`}>
            <Stack direction="row" spacing={2}>
              <Button>
                <h1 className="text-sm">Choose</h1>
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
