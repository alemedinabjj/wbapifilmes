import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { Details } from "./pages/Details"


import './styles/global.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
