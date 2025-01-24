import { NavLink } from "react-router";

const Nav = () => {
  const navLinkStyles = ({ isActive }) => {
    return `
          ${isActive ? "text-black bg-white font-bold" : ""}
          hover:text-gray-300 hover:bg-gray-900
          transition duration-300 
          leading-none
          text-base
          px-2 py-1
        `;
  };

  return (
    <div className="flex justify-center items-center gap-24 opacity-95 bg-black text-white p-2 fixed top-0 left-0 right-0 z-10">
      <NavLink to="/" className={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/Projects" className={navLinkStyles}>
        Projects
      </NavLink>
      <NavLink to="/Contact" className={navLinkStyles}>
        Contact
      </NavLink>
      
    </div>
  );
};

export default Nav;
