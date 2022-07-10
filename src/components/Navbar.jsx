import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export function Navbar() {
  return (
    <nav className="w-full p-5 bg-gray-100">
      <div className="flex justify-between items-center">
        <ul className="flex gap-5" >
        <Link to={`/`}>
          <Stack direction="row" spacing={2}>
            <Button size="small" ><h1 className="text-xl">Homepage</h1></Button>
          </Stack>
        </Link>
        <Link to={`/contact`}>
         <Stack direction="row" spacing={2}>
          <Button><h1 className="text-xl">Contact</h1></Button>
         </Stack>  
        </Link>
        </ul>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/"><FaFacebook size={30} className="hover:scale-[1.2] transition"/></a>
          <a href="https://www.linkedin.com/"><FaLinkedin size={30} className="hover:scale-[1.2] transition"/></a>
          <a href="https://twitter.com/"><FaTwitter size={30} className="hover:scale-[1.2] transition"/></a>
          <a href="https://www.instagram.com/"><FaInstagram size={30} className="hover:scale-[1.2] transition" /></a>
          <a href="https://github.com.br"><FaGithub size={30} className="hover:scale-[1.2] transition"/></a>
        </div>
      </div>
    
      <h1 className='text-3xl text-gray-700 text-center p-10'>Welcome to webpage movies!</h1>
      <SearchBar />
    </nav>
  )
}