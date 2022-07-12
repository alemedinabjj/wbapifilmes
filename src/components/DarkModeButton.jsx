import { MdDarkMode } from 'react-icons/md';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { UseTheme } from '../hooks/UseTheme';


export function DarkModeButton() {

  const { theme, setTheme } = UseTheme()

  return (
    <span>
      {theme === 'ligth' ? <MdDarkMode size={25} className=" cursor-pointer hover:scale-[1.2] transition" onClick={() => setTheme('dark')} /> : <BsFillLightbulbFill size={25} className="hover:scale-[1.2] transition text-white cursor-pointer" onClick={() => setTheme('ligth')} />}

    </span>
  )
}