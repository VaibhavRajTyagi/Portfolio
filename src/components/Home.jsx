import profileImage from "../assets/images/anime-pfp.jpeg";
import Resume from "../assets/Files/Vaibhav_CV.pdf";
import Contact_icons from "./Contact_icons";

const Home = () => {
  return (
    <>
      <div className="landingDiv flex-grow dark:bg-black dark:text-white flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 lg:gap-32 mt-20 md:mt-20 px-4">
        <div className="TextDiv flex flex-col items-center md:items-start justify-center md:justify-start lg:text-left font-geist max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r dark:from-white dark:to-gray-500 from-blue-600 to-blue-300 tracking-tight leading-tight">
            Hello, I&apos;m Vaibhav Raj Tyagi
          </h1>
          <p className="text-base md:text-xl font-geist mt-8 text-gray-400">
            A Full Stack Developer passionate about building modern web
            applications.
          </p>
          <div className="mt-10 py-2 px-4 hover:bg-gray-700 bg-naturalblack text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 font-semibold rounded-full tracking-wider font-oswald hover:scale-105 duration-200">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <button>Resume</button>
            </a>
          </div>
        </div>
        <div className="ImageDiv w-60 h-60 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
          <img
            className="dark:bg-[#141313] w-full h-full object-cover"
            src={profileImage}
            alt="PFP"
          />
        </div>
      </div>
      <Contact_icons />
    </>
  );
};

export default Home;
