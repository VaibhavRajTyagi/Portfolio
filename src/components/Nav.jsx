import { NavLink } from "react-router";

const Nav = () => {
  const navLinkStyles = ({ isActive }) => {
    return `
          ${isActive ? "text-white" : "text-slate-500"}
          font-[Inter]
        `;
  };

  return (
    <div className="flex justify-center items-center gap-24 opacity-95 bg-black text-white py-6 fixed top-0 left-0 right-0 z-10">
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
