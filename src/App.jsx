import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { Details } from "./pages/Details"
import './styles/global.css'
import { Navbar } from "./components/Navbar"
import { Search } from "./pages/Search"

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path='/search' element={<Search />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
