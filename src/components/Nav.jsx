import { Link } from "react-scroll";

const Nav = () => {
  const linkStyles = "cursor-pointer text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-300";
  const activeLinkStyles = "text-white";

  return (
    <div className="flex justify-center items-center gap-8 md:gap-24 opacity-95 bg-black text-white py-4 md:py-6 fixed top-0 left-0 right-0 z-10 px-4">
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
    </div>
  );
};

export default Nav;
