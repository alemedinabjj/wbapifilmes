import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { Details } from "./pages/Details"
import './styles/global.css'
import { Navbar } from "./components/Navbar"
import { Search } from "./pages/Search"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

import ThemeContextProvider from "./hooks/UseTheme.jsx";

function App() {

  return (
    <BrowserRouter>
    <ThemeContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path='/search' element={<Search />} />
        <Route path='/contact' element={<Contact /> } />
      </Routes>
      <Footer />
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
