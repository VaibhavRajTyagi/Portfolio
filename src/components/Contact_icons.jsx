import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";


const Contact_icons = () => {
    const iconStyles = "text-gray-400 text-4xl hover:text-white";
    return (
        <div className="socials flex justify-center items-center gap-4 md:gap-8 mt-8 md:mt-16 mb-12 md:mb-20">
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
                    window.open("https://twitter.com/your-profile", "_blank")
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