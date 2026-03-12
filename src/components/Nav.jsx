import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { PiMoon, PiSun } from "react-icons/pi";

const Nav = ({ toggleDarkMode, isDarkMode }) => {
  const linkStyles =
    "cursor-pointer text-base md:text-lg hover:text-blue-500 dark:hover:text-white transition-colors duration-300 border-b-4 border-transparent font-oswald";
  const activeLinkStyles =
    "!text-blue-500 !border-b-4 !border-blue-500 dark:!text-white dark:!border-white";

  const buttonStyle = "rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 p-1 md:p-3";
  const iconStyle = "min-w-5 min-h-5 text-black dark:text-white";

  return (
    <div className="flex justify-center items-center gap-10 md:gap-24 dark:opacity-95 text-gray-400 bg-white/80 dark:bg-black/90 py-3 md:py-3 px-6 md:px-8 fixed top-0 left-1/2 transform -translate-x-1/2 z-10 backdrop-blur border border-gray-200 dark:border-gray-800 rounded-full mt-4 ">
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
        offset={-105}
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

      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className={buttonStyle}
      >
        {isDarkMode ? (
          <PiSun className={iconStyle} />
        ) : (
          <PiMoon className={iconStyle} />
        )}
      </button>
    </div>
  );
};

Nav.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Nav;
