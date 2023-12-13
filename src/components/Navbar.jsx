import { NavLink } from "react-router-dom";

import allan from "../../public/favicon.ico";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10">
        <img className="rounded-lg" src={allan} />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Portfolio
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
