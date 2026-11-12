import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `rounded-lg px-3.5 py-2 font-medium transition ${
    isActive ? "bg-blue-200 text-primary-dark" : "text-blue-100 hover:bg-white/10"
  }`;

function Navbar(){
    return(
        <header className= "flex flex-wrap items-center justify-between gap-3 bg-primary-dark px-5 py-3.5">
            <span className="text-xl font-bold text-white">
                Factory<span className="text-blue-300">Pulse</span>
            </span>
            <nav className="flex flex-wrap gap-2">
                <NavLink to="/" end className={linkClass} > Tableau de bord</NavLink>
                <NavLink to="/machines" end className={linkClass} > Machines</NavLink>
                <NavLink to="/machines/new" className={linkClass} >Ajouter</NavLink>
            </nav>
        </header>
        
    );
}

export default Navbar;