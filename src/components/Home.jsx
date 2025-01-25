import profileImage from "../assets/images/pfp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const iconStyles = "text-gray-400 text-4xl hover:text-white";

  return (
    <>
      <div className="landingDiv flex-grow h-full bg-black text-white flex justify-center items-center gap-24 mt-20">
        <div className="TextDiv flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">
            Hello, I&apos;m{" "}
            <span className="text-blue-500">Vaibhav Raj Tyagi</span>.
          </h1>
          <p className="text-lg">I&apos;m a Full Stack Developer.</p>
        </div>
        <div className="ImageDiv border-4 border-dotted border-white overflow-hidden object-cover w-80 h-80 rounded-full">
          <img className="bg-[#141313]" src={profileImage} alt="PFP" />
        </div>
      </div>

      <div className="socials flex justify-center items-center gap-8 my-16">
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
    </>
  );
};

export default Home;
