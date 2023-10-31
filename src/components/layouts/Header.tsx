
//ICONS
import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="flex items-center text-secondary mb-2 md:mb-0">
          <RiStarFill />
          <span className="text-xl font-semibold ml-2">Manosos SPA</span>
        </Link>
        <nav className="flex space-x-4 md:space-x-4">
          <Link to="/" className="text-secondary">Inicio</Link>
          <Link to="/servicios" className="text-secondary">Servicios</Link>
          <Link to="/contacto" className="text-secondary">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header