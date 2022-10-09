import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-white p-10 dark:bg-slate-900">
      <div className="sm:flex gap-3 p-5 sm:p-0 flex justify-center dark:text-white">
        <a href="https://www.linkedin.com/">
          <FaLinkedin size={25} className="hover:scale-[1.2] transition" />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter size={25} className="hover:scale-[1.2] transition" />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram size={25} className="hover:scale-[1.2] transition" />
        </a>
        <a href="https://github.com.br">
          <FaGithub size={25} className="hover:scale-[1.2] transition" />
        </a>
      </div>
    </footer>
  );
}
