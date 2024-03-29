import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import "./styles/global.css";
import { Navbar } from "./components/Navbar";
import { Search } from "./pages/Search";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

import ThemeContextProvider from "./hooks/UseTheme.jsx";
import { ChooseMovie } from "./pages/ChooseMovie";
import { BtnTop } from "./components/BtnTop";
import FavoriteProvider from "./hooks/FavoriteContext";
import { Favorites } from "./pages/Favorites";
import { Category } from "./pages/Category";
import { Genres } from "./pages/Genres";

function App() {
  return (
    <BrowserRouter>
      <FavoriteProvider>
        <ThemeContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/details/:type/:id`} element={<Details />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/choose" element={<ChooseMovie />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/category/movie/:category" element={<Category />} />
            <Route path="/genres/movie/:id" element={<Genres />} />
          </Routes>
          <BtnTop />
          <Footer />
        </ThemeContextProvider>
      </FavoriteProvider>
    </BrowserRouter>
  );
}

export default App;
