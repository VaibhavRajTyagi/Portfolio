import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ toggleDarkMode, isDarkMode }) => {
  const linkStyles = "cursor-pointer text-sm md:text-base hover:text-black dark:hover:text-white transition-colors duration-300";
  const activeLinkStyles = "text-blue-500 dark:text-white";

  const buttonStyle = "rounded-full border border-black dark:border-gray-400 px-3 py-1 leading-none"
  const iconStyle = "text-sm text-black dark:text-white"

  return (
    <div className="flex justify-center items-center gap-4 md:gap-24 dark:opacity-95 text-gray-400 bg-white dark:bg-black py-6 md:py-6 fixed top-0 left-0 right-0 z-10 w-full">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-200}
        duration={800}
        className={linkStyles}
        activeClass={activeLinkStyles}
      >
        Home
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={800}
        className={linkStyles}
        activeClass={activeLinkStyles}
      >
        Projects
      </Link>

      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={800}
        className={linkStyles}
        activeClass={activeLinkStyles}
      >
        About
      </Link>

      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={800}
        className={linkStyles}
        activeClass={activeLinkStyles}
      >
        Contact
      </Link>

      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className={buttonStyle}
      >
        {isDarkMode ? (<FontAwesomeIcon className={iconStyle} icon={faMoon} />):(<FontAwesomeIcon className={iconStyle} icon={faSun} />)}
      </button>
    </div>
  );
};

export default Nav;
