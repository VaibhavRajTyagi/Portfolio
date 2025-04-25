import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";


const Contact_icons = () => {
    const iconStyles = "text-gray-400 text-4xl dark:hover:text-white hover:text-black hover:scale-110 duration-300";
    return (
        <div className="socials flex justify-center items-center gap-6 md:gap-8 mt-20 md:mt-20 lg:mt-16 mb-12 md:mb-20">
            <button
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/vaibhav-raj-tyagi-10b222270/",
                        "_blank"
                    )
                }
            >
                <FontAwesomeIcon icon={faLinkedin} className={iconStyles} />
            </button>
            <button
                onClick={() =>
                    window.open("mailto:vaibtyagi1610@gmail.com?subject=write letter", "_blank")
                }
            >
                <FontAwesomeIcon icon={faGoogle} className={iconStyles} />
            </button>
            <button
                onClick={() =>
                    window.open(
                        "https://github.com/VaibhavRajTyagi?tab=repositories",
                        "_blank"
                    )
                }
            >
                <FontAwesomeIcon icon={faSquareGithub} className={iconStyles} />
            </button>
        </div>
    )
}

export default Contact_icons;